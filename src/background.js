import GenerateData from "./backend";
import ChromeLocalStorage from "./Utils/Classes/ChromeStorage";
import { CONSTANTS, SETTINGS_CONSTANTS } from "./Utils/Constants";

console.log("Hello Background");
// console.log("Hello I am background");
// // let windowIsInFocus = true; // global boolean to keep track of state

// // chrome.windows.onFocusChanged.addListener(function (window) {
// //   if (window == chrome.windows.WINDOW_ID_NONE) {
// //     windowIsInFocus = false;
// //   } else {
// //     windowIsInFocus = true;
// //   }
// // });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(request);
//   // console.log(sender.tab.favIconUrl);
//   console.log(sender.tab.title);
//   let isWindowFocused = false;
//   chrome.windows.getLastFocused({ populate: true }, function (currentWindow) {
//     if (currentWindow.focused) isWindowFocused = true;
//   });

//   sendResponse({ activeTab: sender.tab.url, isWindowFocused: isWindowFocused });
//   // console.log(sendResponse);
// });

// chrome.tabs.onCreated.addListener(function(tab){
//   chrome.storage.local.set({tab.id : performance.now()});
// });

// // chrome.storage.local.set({ variable: "this is the JSON data key-value" });
// // chrome.storage.local.get(['variable'], function(result) {
// //   let awesomeVariable = result.variable;
// //   // Do something with awesomeVariable
// // });

// // Background scripts unload on their own after a few seconds of inactivity. If any last minute cleanup is required, listen to the runtime.onSuspend event.
// // However, persisting data should be preferred over relying on runtime.onSuspend. It doesn't allow for as much cleanup as may be needed and will not help in case of a crash.
// chrome.runtime.onSuspend.addListener(function () {
//   console.log("Unloading.");
//   chrome.browserAction.setBadgeText({ text: "6" });
// });

//////

// var currentTab;

// loadTabs(name, callback, callbackIsUndefined) {
//     chrome.storage.local.get(name, function(item) {
//         if (item[name] !== undefined) {
//             var result = item[name];
//             if (result !== undefined)
//                 callback(result);
//         } else {
//             if (callbackIsUndefined !== undefined)
//                 callbackIsUndefined();
//         }
//     });
// }

// saveTabs(value, callback) {
//     chrome.storage.local.set({ tabs: value });
//     if (callback !== undefined)
//         callback();
// }

function backgroundCheck() {
  chrome.windows.getLastFocused({ populate: true }, function (currentWindow) {
    if (currentWindow.focused) {
      var activeTab = currentWindow.tabs.find((t) => t.active === true);
      if (activeTab !== undefined) {
        // var activeUrl = new Url(activeTab.url);
        // var tab = activity.getTab(activeUrl);
        // if (tab === undefined) {
        //   console.log("add a tab");
        // }

        // if (activity.isInBlackList(activeUrl)) {
        //   chrome.browserAction.setBadgeBackgroundColor({ color: "#FF0000" });
        //   chrome.browserAction.setBadgeText({
        //     tabId: activeTab.id,
        //     text: "n/a",
        //   });
        // } else {
        // if (tab !== undefined) {
        // if (!tab.url.isMatch(currentTab)) {
        //   activity.setCurrentActiveTab(tab.url);
        // }
        // LS.getMemoryUse("hello", (value) => console.log(value));
        // LS.getMemoryUse("hi", (value) => console.log(value));

        // let activeURLData;
        // ChromeLS.getValue(activeTab.url, (v) => {
        console.log(activeTab, "activeTab");
        const urlData = new URL(activeTab.url);

        // let activeURLData = ChromeLS.dayStats[activeTab.url]; /// edit the ChromeLS.dayStats[todaysdate].[domain].[subDomain]
        // activeURLData = v === undefined ? v : JSON.parse(v);
        // console.log(v, activeURLData);
        chrome.idle.queryState(
          SETTINGS_CONSTANTS.IDLE_TIMEOUT,
          function (state) {
            // console.log(activeTab, "tab is active", activeURLData);
            const newDate = new Date();
            if (state === "active") {
              // separate host and pathname
              GenerateData({
                type: CONSTANTS.BACKEND.DAY_UPDATE.ACTIVE,
                url: activeTab.url,
                domain: urlData.host,
                subDomain: urlData.pathname,
                title: activeTab.title,
                favicon: activeTab.favIconUrl,
                newLink: false,
                totalIdleTime: 0,
                totalActiveTime: 1,
                breaks: [],
                activity: [
                  {
                    at: newDate, // moment()
                    for: 1,
                  },
                ],
                tabOpenedOn: newDate,
                activityStartedOn: newDate,
                lastActiveOn: newDate,
              });
            } else {
              GenerateData({
                type: CONSTANTS.BACKEND.DAY_UPDATE.IDLE,
                url: activeTab.url,
                domain: urlData.host,
                subDomain: urlData.pathname,
              });
              console.log(state, activeTab, "not active");
              // const tempObj = activeURLData;
              // tempObj.totalIdleTime = tempObj.totalIdleTime + SETTINGS_CONSTANTS.UPDATE_INTERVAL;
              // ChromeLS.dayStats[activeTab.url] = tempObj;
            }
          }
        );
        // });
      }
    } else console.log("user navigated away from browser");
  });
}

// add logic for breaks when the user is away from browser = TYPE: BROWSER
// else if IDLE then TYPE: IDLE

//

function updateSummaryTime() {
  setInterval(backgroundCheck, SETTINGS_CONSTANTS.UPDATE_INTERVAL * 1000);
}

export const ChromeLS = new ChromeLocalStorage({
  startFunction: updateSummaryTime,
});

// uncomment when on development
const resetLocalStorage = () => {
  console.log("Clearing all storage data");
  localStorage.clear();
  ChromeLS.ClearAllLocalChromeStorageData();
};
// uncomment when on development
resetLocalStorage();

console.log("Loading all storage data");
ChromeLS.LoadDataFromChromeStorage();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command === "GET_ALL_DATA") {
    sendResponse({ result: ChromeLS.LogAllStorageData(), status: "done" });
  }
});

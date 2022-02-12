/*global chrome*/
import { CONSTANTS } from "../Constants";

class ChromeLocalStorage {
  constructor({
    dayStats = {},
    tabStats = {},
    weekStats = {},
    monthStats = {},
    categories = {},
    startFunction = () => {
      console.log("No Start function provided");
    },
  }) {
    this.dayStats = dayStats;
    this.tabStats = tabStats;
    this.weekStats = weekStats;
    this.monthStats = monthStats;
    this.categories = categories;
    this.startFunction = startFunction;
  }

  saveValue(name, value) {
    chrome.storage.local.set({
      [name]: value,
    });
  }

  getValue(name, callback) {
    chrome.storage.local.get(name, function (item) {
      if (item !== undefined) {
        callback(item[name]);
      }
    });
  }

  getMemoryUse(name, callback) {
    chrome.storage.local.getBytesInUse(name, callback);
  }

  loadCategories = () => {
    this.getValue(CONSTANTS.STORAGE.CATEGORIES, (cats) => {
      this.categories = cats !== undefined ? cats : {};
      console.log("Loaded categories Data", this.categories);
      // TODO the chrome main trackering logic idle call
      this.startFunction(); // updateSummaryTime();
    });
  };

  loadTabStats = () => {
    this.getValue(CONSTANTS.STORAGE.TAB_STATS, (tabs) => {
      this.tabStats = tabs !== undefined ? tabs : {};
      console.log("Loaded tabs Data", this.tabStats);
      this.loadCategories();
    });
  };

  loadMonthStats = () => {
    this.getValue(CONSTANTS.STORAGE.MONTH_STATS, (months) => {
      this.monthStats = months !== undefined ? months : {};
      console.log("Loaded months Data", this.monthStats);
      this.loadTabStats();
    });
  };

  loadWeekStats = () => {
    this.getValue(CONSTANTS.STORAGE.WEEK_STATS, (weeks) => {
      this.weekStats = weeks !== undefined ? weeks : {};
      console.log("Loaded weeks Data", this.weekStats);
      this.loadMonthStats();
    });
  };

  loadDayStats = () => {
    this.getValue(CONSTANTS.STORAGE.DAY_STATS, (days) => {
      this.dayStats = days !== undefined ? days : {};
      console.log("Loaded days Data", this.dayStats);
      this.loadWeekStats();
    });
  };

  saveDayStats = (data) => {
    this.saveValue(CONSTANTS.STORAGE.DAY_STATS, data);
  };
  saveTabStats = (data) => {
    this.saveValue(CONSTANTS.STORAGE.TAB_STATS, data);
  };
  saveWeekStats = (data) => {
    this.saveValue(CONSTANTS.STORAGE.WEEK_STATS, data);
  };
  saveMonthStats = (data) => {
    this.saveValue(CONSTANTS.STORAGE.MONTH_STATS, data);
  };
  saveCategories = (data) => {
    this.saveValue(CONSTANTS.STORAGE.CATEGORIES, data);
  };

  LoadDataFromChromeStorage = () => {
    this.loadDayStats();
  };

  SaveDataToChromeStorage = ({
    dayStats = this.dayStats,
    tabStats = this.tabStats,
    weekStats = this.weekStats,
    monthStats = this.monthStats,
    categories = this.categories,
  }) => {
    this.dayStats = dayStats;
    this.tabStats = tabStats;
    this.weekStats = weekStats;
    this.monthStats = monthStats;
    this.categories = categories;
    this.saveDayStats(dayStats);
    this.saveTabStats(tabStats);
    this.saveWeekStats(weekStats);
    this.saveMonthStats(monthStats);
    this.saveCategories(categories);
  };

  ClearAllLocalChromeStorageData = () => {
    this.saveDayStats({});
    this.saveTabStats({});
    this.saveWeekStats({});
    this.saveMonthStats({});
    this.saveCategories({}); // TOOD: store a default JSON downloaded from firebase
  };

  LogAllStorageData = () => {
    console.log("+======================+");
    console.log("dayStats ", this.dayStats);
    console.log("weekStats ", this.weekStats);
    console.log("monthStats ", this.monthStats);
    console.log("tabStats ", this.tabStats);
    console.log("categories ", this.categories);
    console.log("+======================+");
  };
}

export default ChromeLocalStorage;

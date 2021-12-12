# APIs to check or study

Getting started

- `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/tutorials/get_started`
- `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/tutorials/get_started_complete`
- tabs, windows full - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/tabs/inspector`

- chrome.windows

  - chrome.windows.getLastFocused
  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/windows/merge_windows`

- chrome.browserAction - for icon, tooltip, bade, popup

  - chrome.browserAction.setBadgeBackgroundColor
  - chrome.browserAction.setBadgeText

- chrome.idle

  - chrome.idle.queryState

- chrome.notifications

  - chrome.notifications.clear
  - chrome.notifications.create
  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/water_alarm_notification`

- chrome.runtime

  - chrome.runtime.getURL
  - chrome.runtime.onInstalled.addListener
  - chrome.runtime.setUninstallURL
  - chrome.runtime.getBackgroundPage
  - chrome.runtime.openOptionsPage
  - window.open(chrome.runtime.getURL('options.html'))

- chrome.tabs

  - chrome.tabs.query
  - chrome.tabs.update
  - chrome.tabs.executeScript
    - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/browserAction/set_page_color`
  - chrome.tabs.onActivated.addListener
  - chrome.tabs.get
  - chrome.tabs.create

- chrome.storage

  - chrome.storage.local.getBytesInUse
  - chrome.storage.local.get
  - chrome.storage.local.set
  - chrome.storage.onChanged.addListener

- chrome.webNavigation

  - chrome.webNavigation.onCompleted.addListener
  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/webNavigation/basic`

- chrome.permissions
  - chrome.permissions.contains
  - chrome.permissions.request
  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/permissions/extension-questions`
- chrome.extension - for message passing

  - chrome.extension.getBackgroundPage().tabs
  - chrome.extension.getBackgroundPage().currentTab
  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/messaging/timer`

- chrome.topSites
  - `"permissions": ["topSites"],` - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/topsites/basic/popup.js`
  - `https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/mv2-archive/api/topsites/magic8ball`

## What else I can use?

- chrome.contextMenus

  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/contextMenus/basic`

- chrome.bookmarks

  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/extensions/managed_bookmarks`
  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/bookmarks/basic`

- chrome.alarms
  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/water_alarm_notification`
- chrome.action - similar to browserAction

- chrome.commands

  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/tabs/pin`

- chrome.desktopCapture

- chrome.downloads
  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/downloads/download_manager`
- chrome.events - chrome.gcm

- chrome.history
  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/history/showHistory`
  - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/history/historyOverride`
- chrome.identity - chrome.i18n - chrome.omnibox - chrome.pageAction - chrome.search - system.cpu - chrome.tabCapture - chrome.webviewTag

Chrome sound UX - `https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/extensions/fx`

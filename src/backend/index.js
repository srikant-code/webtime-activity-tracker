import { ChromeLS } from "../background";
import Categories from "../Utils/Classes/Categories";
import Day from "../Utils/Classes/Day";
import Tab from "../Utils/Classes/Tab";
import Week from "../Utils/Classes/Week";
import Month from "../Utils/Classes/Month";
import { CONSTANTS } from "../Utils/Constants";

const GenerateData = (tabData) => {
  // const Util = new Utilities();
  const generateCategories = () => {
    const cat =
      CONSTANTS.BACKEND.TEST_DATA.categoryData[
        Math.floor(
          Math.random() * CONSTANTS.BACKEND.TEST_DATA.categoryData.length
        )
      ];
    if (ChromeLS.categories[cat] === undefined)
      ChromeLS.categories[cat] = new Categories({ name: cat });
  };

  const generateWeek = () => {
    // const date = moment();
    // const weekName = `${date.week()}|${date.month()}|${date.year()}`;
    const weekName = "week12021";
    let WeekStat;
    if (ChromeLS.weekStats[weekName] === undefined) {
      WeekStat = new Week({ weekName: weekName });
      ChromeLS.weekStats[weekName] = WeekStat;
      WeekStat.setDays(CONSTANTS.BACKEND.TEST_DATA.todayData);
    } else {
      WeekStat = ChromeLS.weekStats[weekName];
    }
    WeekStat.updateParentObjectTree(ChromeLS.dayStats);
  };

  const generateMonth = () => {
    // const date = moment();
    // const weekName = `${date.week()}|${date.month()}|${date.year()}`;
    const monthName = "January2021";
    let MonthStat;
    if (ChromeLS.monthStats[monthName] === undefined) {
      MonthStat = new Month({ monthName: monthName });
      ChromeLS.monthStats[monthName] = MonthStat;
      MonthStat.setWeeks(["week12021"]);
    } else {
      MonthStat = ChromeLS.monthStats[monthName];
    }
    MonthStat.updateParentObjectTree(ChromeLS.weekStats);
  };

  ///////////
  // generateCategories();
  const today =
    CONSTANTS.BACKEND.TEST_DATA.todayData[Math.floor(Math.random() * 3)];
  // if todaysdate is not there in DayStats then create a day key
  if (ChromeLS.dayStats[today] === undefined) {
    const DayStat = new Day({ date: today, totalTimeSpent: 1 });
    ChromeLS.dayStats[today] = generateTabAndDay(DayStat, tabData);
  } else {
    ChromeLS.dayStats[today] = generateTabAndDay(
      ChromeLS.dayStats[today],
      tabData
    );
  }

  generateWeek();
  generateMonth();

  // save data in storage
  ChromeLS.SaveDataToChromeStorage({
    dayStats: ChromeLS.dayStats,
    tabStats: ChromeLS.tabStats,
    weekStats: ChromeLS.weekStats,
    monthStats: ChromeLS.monthStats,
    categories: ChromeLS.categories,
  });

  ChromeLS.LogAllStorageData();
  // setSpillData(JSON.stringify(dayStats, undefined, 2));
  // setSpillTabData(JSON.stringify(tabStats, undefined, 2));
  // // setSpillTabData(JSON.stringify(tabStats, undefined, 2));
  // setSpillWeekData(JSON.stringify(weekStats, undefined, 2));
};

const generateTabAndDay = (DayStat, tabData) => {
  // domainName/domainSubPath ==> figma.com/login
  const newDomain = tabData.domain; //WebsiteList[Math.floor(Math.random() * WebsiteList.length)];
  const subDomain = tabData.subDomain;
  // const subDomain =
  //   openedData[Math.floor(Math.random() * openedData.length)];

  let TabStat;
  if (ChromeLS.tabStats[newDomain] === undefined) {
    TabStat = new Tab({
      domainName: newDomain,
      categories: [
        CONSTANTS.BACKEND.TEST_DATA.categoryData[
          Math.floor(
            Math.random() * CONSTANTS.BACKEND.TEST_DATA.categoryData.length
          )
        ],
      ],
    });
    TabStat.createSubDomain(tabData);
    ChromeLS.tabStats[newDomain] = TabStat;
    tabData.newLink = true;
  } else {
    TabStat = ChromeLS.tabStats[newDomain];
    if (TabStat.subDomains[subDomain] === undefined) {
      TabStat.createSubDomain(tabData);
      tabData.newLink = true;
    }
  }
  // Setting favicon
  TabStat.favIcon = tabData.favicon;

  // console.log(ChromeLS.dayStats, "gfkrhg");

  // if domain is not there then create a domain
  if (DayStat.domains[newDomain] === undefined)
    DayStat.createNewDomain(tabData);
  else {
    const subDomainInTimeline = DayStat.domains[newDomain].timeLine[subDomain];

    // if domain is there then check subDomain is there or not
    // if subdomain in timeline exists then add to existing
    if (subDomainInTimeline !== undefined) {
      if (tabData.type === CONSTANTS.BACKEND.DAY_UPDATE.ACTIVE)
        DayStat.addStatToTimeLine(tabData);
      else DayStat.updateIdleTime(tabData); // CONSTANTS.BACKEND.DAY_UPDATE.IDLE
    } else DayStat.addSubDomainToTimeline(tabData); // create new subDomain to TimeLine
  }
  // then update parent object and recalculate values
  DayStat.updateParentObjectTree(tabData);
  TabStat.updateDayStatToTabStats(tabData, DayStat);

  return DayStat;
};

export default GenerateData;

/// jab favicon dal raha hai tabhi hi pagetitle ko split karke word map m dal dena.
// usse categories k suggestions show ho sakte hain.

/// Other classess to use
// Notes
// Feedback responses
// Device ID and data
// categories
// topSites
// bookmarks
// windowcaputure images https://developer.chrome.com/docs/extensions/reference/tabs/#method-captureVisibleTab

// Uninstall karne se pehle sab data lp firebase m store kar lena user ka.
// store a key in locastorage to identify device, and firestore json m bas device ka reference de dena.

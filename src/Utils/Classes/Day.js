import { SETTINGS_CONSTANTS } from "../Constants";

class Day {
  totalIdleTime: number;
  date: string;
  totalTimeSpent: number;
  totalVisitCount: number;
  totaldomainsVisited: number;
  totalNewLinks: number;
  topFiveDomains: any[];
  topCategory: string;
  productivityScore: number;
  domains: {};
  constructor({
    date = "",
    totalTimeSpent = 0,
    totalIdleTime = 0,
    totalVisitCount = 0,
    totaldomainsVisited = 0,
    totalNewLinks = 0,
    topFiveDomains = [],
    topCategory = "",
    productivityScore = 0,
    domains = {},
  }) {
    this.date = date;
    this.totalTimeSpent = totalTimeSpent;
    this.totalIdleTime = totalIdleTime;
    this.totalVisitCount = totalVisitCount;
    this.totaldomainsVisited = totaldomainsVisited;
    this.totalNewLinks = totalNewLinks;
    this.topFiveDomains = topFiveDomains;
    this.topCategory = topCategory;
    this.productivityScore = productivityScore;
    this.domains = domains;
  }

  updateTimeLineVisitCountForce = (tabData) => {
    const o = this.domains[tabData.domain].timeLine[tabData.subDomain];
    o.totalVisitCount = o.stats.length;
  };

  updateTimeLineTimeSpentForce = (tabData) => {
    const o = this.domains[tabData.domain].timeLine[tabData.subDomain];
    o.totalTimeSpent = o.stats.reduce((acc, cur) => acc + cur.for, 0);
  };

  updateTotalSubLinkCountForce = (tabData) => {
    const o = this.domains[tabData.domain];
    o.totalSubLinks = Object.keys(o.timeLine).length;
  };

  updateDomainSummaryForce = (tabData) => {
    let totalTimeSpent,
      productivityScore,
      totalVisitCount,
      totalNewLinks,
      totalIdleTime;
    totalTimeSpent =
      productivityScore =
      totalVisitCount =
      totalNewLinks =
      totalIdleTime =
      0;

    const domain = this.domains[tabData.domain];

    for (let subPath in domain.timeLine) {
      totalTimeSpent += domain.timeLine[subPath].totalTimeSpent;
      totalIdleTime += domain.timeLine[subPath].totalIdleTime;
      totalVisitCount += domain.timeLine[subPath].totalVisitCount;
      productivityScore += domain.timeLine[subPath].productivityScore;
      totalNewLinks += domain.timeLine[subPath].newLink ? 1 : 0;
    }
    domain.totalTimeSpent = totalTimeSpent;
    domain.totalIdleTime = totalIdleTime;
    domain.totalVisitCount = totalVisitCount;
    domain.productivityScore = productivityScore;
    domain.totalNewLinks = totalNewLinks;
  };

  updateIdleTime = (tabData) => {
    const o = this.domains[tabData.domain].timeLine[tabData.subDomain];
    o.totalIdleTime = o.totalIdleTime + SETTINGS_CONSTANTS.UPDATE_INTERVAL;
  };

  addStatToTimeLine = (tabData) => {
    const subdomain = this.domains[tabData.domain].timeLine[tabData.subDomain];
    subdomain.totalTimeSpent =
      subdomain.totalTimeSpent + SETTINGS_CONSTANTS.UPDATE_INTERVAL;

    const newDate = tabData.lastActiveOn;
    const currentTime = newDate;
    const timeSinceLastActive =
      (currentTime - new Date(subdomain.lastActiveOn)) / 1000;
    // console.log(timeSinceLastActive, "time since last active");
    if (timeSinceLastActive >= SETTINGS_CONSTANTS.IDLE_TIMEOUT) {
      console.log("user was on break for ", timeSinceLastActive, " seconds");
      // subdomain.breaks.unshift({
      //   at: subdomain.lastActiveOn,
      //   for: timeSinceLastActive,
      // });
      subdomain.stats.unshift({
        for: 1,
        at: newDate,
      });
    } else
      subdomain.stats[0].for =
        subdomain.stats[0].for + SETTINGS_CONSTANTS.UPDATE_INTERVAL;

    subdomain.lastActiveOn = currentTime;

    // this.domains[tabData.domain].timeLine[tabData.subDomain].stats.unshift({
    //   for: Math.floor(Math.random() * 500),
    //   at: new Date(), //moment(),
    //   // TODO: add idle time and to parent tree accordingly
    // });
  };

  createNewDomain = (tabData) => {
    this.domains[tabData.domain] = {
      totalTimeSpent: tabData.totalActiveTime,
      totalVisitCount: tabData.activity.length,
      productivityScore: 0,
      totalSubLinks: 1,
      totalNewLinks: 0,
      totalIdleTime: tabData.totalIdleTime,
      timeLine: {},
    };
    this.domains[tabData.domain].timeLine[tabData.subDomain] =
      this.createNewSubdomain(tabData);
  };

  createNewSubdomain = (tabData) => {
    // const time = Math.floor(Math.random() * 500);
    // const newDate = new Date();
    return {
      pageTitle: tabData.title,
      newLink: tabData.newLink,
      totalVisitCount: tabData.activity.length,
      productivityScore: 0,
      totalTimeSpent: tabData.totalActiveTime,
      tabOpenedOn: tabData.tabOpenedOn, //moment(),
      activityStartedOn: tabData.activityStartedOn, //moment(),
      lastActiveOn: tabData.lastActiveOn, //moment(),
      totalIdleTime: tabData.totalIdleTime,
      stats: tabData.activity,
    };
  };

  addSubDomainToTimeline = (tabData) => {
    this.domains[tabData.domain].timeLine[tabData.subDomain] =
      this.createNewSubdomain(tabData);
  };

  updateDayObject = () => {
    let totalTimeSpent,
      productivityScore,
      totalVisitCount,
      totalNewLinks,
      totalIdleTime;
    totalTimeSpent =
      productivityScore =
      totalVisitCount =
      totalNewLinks =
      totalIdleTime =
      0;

    // caluculate new Productivity Score
    const domains = this.domains;
    for (let domain in domains) {
      totalTimeSpent += domains[domain].totalTimeSpent;
      totalIdleTime += domains[domain].totalIdleTime;
      totalNewLinks += domains[domain].totalNewLinks;
      // productivityScore += domains[domain].productivityScore;
      totalVisitCount += domains[domain].totalVisitCount;
    }
    this.totalTimeSpent = totalTimeSpent;
    this.totalIdleTime = totalIdleTime;
    this.totalNewLinks = totalNewLinks;
    // this.productivityScore = productivityScore;
    this.totalVisitCount = totalVisitCount;
    this.totaldomainsVisited = Object.keys(domains).length;
  };

  updateParentObjectTree = (tabData) => {
    this.updateTimeLineVisitCountForce(tabData);
    this.updateTimeLineTimeSpentForce(tabData);
    this.updateTotalSubLinkCountForce(tabData);
    this.updateDomainSummaryForce(tabData);
    this.updateDayObject();
  };
}

export default Day;


// convert = () => {
//   const DomainsMapToObject = () => {
//     const convertedToObject = Object.fromEntries(this.domains);
//     // JSON.parse(JSON.stringify(Object.fromEntries(this.domains)));
//     // console.log(this.domains, convertedToObject, "gughk");
//     for (const domain in convertedToObject) {
//       convertedToObject[domain].timeLine = Object.fromEntries(
//         convertedToObject[domain].timeLine
//       );
//     }
//     this.domains = convertedToObject;
//     return convertedToObject;
//   };

//   const DomainsObjectToMap = () => {
//     for (const domain in this.domains) {
//       this.domains[domain].timeLine = new Map(
//         Object.entries(this.domains[domain].timeLine)
//       );
//     }
//     this.domains = new Map(Object.entries(this.domains));
//     return this.domains;
//   };

//   // const DomainsMapToObject1 = (obj) => {
//   //   const isObject = (val) =>
//   //     val && typeof val === "object" && !Array.isArray(val);

//   //   const Util = new Utilities();

//   //   const paths = (obj = {}) => {
//   //     for (const key in obj) {
//   //       obj[key] = isObject(obj[key]) ? paths(obj[key]) : obj[key];

//   //       obj[key] = Util.isMap(obj[key])
//   //         ? Object.fromEntries(obj[key])
//   //         : obj[key];
//   //     }
//   //     return obj;
//   //   };
//   //   return paths(obj);
//   // };

//   return {
//     DomainsMapToObject,
//     DomainsObjectToMap,
//     // DomainsMapToObject1
//   };
// };
import { FormatAndParseFloat } from "../utilities";

class Tab {
  constructor({
    domainName = "",
    categories = "Design",
    isBlocked = false,
    totalTimeSpent = 0,
    totalIdleTime = 0,
    totalVisitCount = 0,
    productivityScore = 0,
    favIcon = "",
    subDomains = {},
  }) {
    this.domainName = domainName;
    this.categories = categories;
    this.isBlocked = isBlocked;

    this.totalTimeSpent = totalTimeSpent;
    this.maxTimeSpent = 1;
    this.maxTimeSpentAt = new Date(); // moment()
    this.avgTimeSpent = 0;

    this.totalIdleTime = totalIdleTime;
    this.totalVisitCount = totalVisitCount;
    this.productivityScore = productivityScore;
    this.favIcon = favIcon;
    // later have analytics for mostActiveDay(Saturdays), mostActiveDate(1Jan2021)
    // later have analytics for mostProductiveTime(1pm-2pm), mostProductiveOn(1Jan2021) from Time distribution
    this.subDomains = subDomains;
  }

  createSubDomain = (tabData) => {
    this.subDomains[tabData.subDomain] = {
      pageTitle: tabData.title,
      favIcon: tabData.favicon,
      totalTimeSpent: tabData.totalActiveTime,
      totalIdleTime: 0, // tabData.totalIdleTime,
      productivityScore: 0,
      totalVisitCount: 0,
      avgTimeSpent: 0,
      daysOpened: {},
    };
  };

  updateDomainObject = (date) => {
    let totalTimeSpent = 0;
    let productivityScore = 0;
    let totalVisitCount = 0;
    let totalIdleTime = 0;
    let avgTimeSpent = 0;

    let totalSubDomains = 0;
    const subdomains = this.subDomains;
    for (let subdom in subdomains) {
      totalTimeSpent += subdomains[subdom].totalTimeSpent;
      totalIdleTime += subdomains[subdom].totalIdleTime;
      productivityScore += subdomains[subdom].productivityScore;
      totalVisitCount += subdomains[subdom].totalVisitCount;
      avgTimeSpent += subdomains[subdom].avgTimeSpent;
      totalSubDomains += 1;
    }
    this.totalTimeSpent = totalTimeSpent;
    this.totalIdleTime = totalIdleTime;
    this.productivityScore = productivityScore;
    this.totalVisitCount = totalVisitCount;
    this.avgTimeSpent = FormatAndParseFloat(avgTimeSpent / totalSubDomains);
    if (totalTimeSpent >= this.maxTimeSpent) {
      this.maxTimeSpent = totalTimeSpent;
      this.maxTimeSpentAt = date; // moment()
    }
  };

  updateSubDomainObject = (subDomain, date) => {
    let totalTimeSpent, productivityScore, totalVisitCount, totalIdleTime;
    totalTimeSpent = productivityScore = totalVisitCount = totalIdleTime = 0;

    let totalDays = 0;
    const subdomain = this.subDomains[subDomain];
    for (let day in subdomain.daysOpened) {
      const dateOpenedObj = subdomain.daysOpened[day];
      totalTimeSpent += dateOpenedObj.totalTimeSpent;
      totalIdleTime += dateOpenedObj.totalIdleTime;
      productivityScore += dateOpenedObj.productivityScore;
      totalVisitCount += dateOpenedObj.totalVisitCount;
      totalDays += 1;
    }
    subdomain.totalTimeSpent = totalTimeSpent;
    subdomain.totalIdleTime = totalIdleTime;
    subdomain.productivityScore = productivityScore;
    subdomain.totalVisitCount = totalVisitCount;
    subdomain.avgTimeSpent = FormatAndParseFloat(totalTimeSpent / totalDays, 2);
  };

  createSubDomainDate = (tabData, dateData) => {
    const subdom = dateData.domains[tabData.domain].timeLine[tabData.subDomain];
    return {
      totalTimeSpent: subdom.totalTimeSpent,
      totalIdleTime: subdom.totalIdleTime,
      productivityScore: subdom.productivityScore,
      totalVisitCount: subdom.totalVisitCount,
    };
  };

  updateDayStatToTabStats = (tabData, dateData) => {
    // if (this.subDomains[domainSubPath].daysOpened[dateData.date] !== undefined)
    //   this.subDomains[domainSubPath].daysOpened[dateData.date] = {};
    // else
    const date = dateData.date;
    const obj = this.subDomains[tabData.subDomain].daysOpened;
    obj[date] = this.createSubDomainDate(tabData, dateData);

    this.updateSubDomainObject(tabData.subDomain, date);
    this.updateDomainObject(date);
  };

  convert = () => {
    const subDomainMapToObject = () => {
      this.subDomains = Object.fromEntries(this.subDomains);
      return this.subDomains;
    };
    const subDomainObjectToMap = () => {
      this.subDomains = new Map(Object.entries(this.subDomains));
      return this.subDomains;
    };
    return {
      subDomainMapToObject,
      subDomainObjectToMap,
    };
  };
}

export default Tab;

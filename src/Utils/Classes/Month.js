import { FormatAndParseFloat } from "../utilities";

class Month {
  constructor({
    monthName = "",
    totalTimeSpent = 0,
    totalVisitCount = 0,
    totaldomainsVisited = 0,
    totalNewLinks = 0,
    topFiveDomains = [],
    topCategory = "",
    totalIdleTime = 0,
    avgTimeSpent = 0,
    productivityScore = 0,
    totalActiveDays = 0,
    weeks = [],
  }) {
    this.monthName = monthName;
    this.totalTimeSpent = totalTimeSpent;
    this.totalVisitCount = totalVisitCount;
    this.totaldomainsVisited = totaldomainsVisited;
    this.totalNewLinks = totalNewLinks;
    this.topFiveDomains = topFiveDomains;
    this.topCategory = topCategory;
    this.productivityScore = productivityScore; // can get day(Saturday) as well, can show a heatmap of all days in PS sorting order
    this.most = {
      productive: {
        weekName: "",
        weekScore: 0,
        dateName: "",
        dateScore: 0,
      },
      timeSpent: {
        weekName: "",
        weekTime: 0,
        dateName: "",
        dateTime: 0,
      },
    };
    this.totalIdleTime = totalIdleTime;
    this.totalActiveDays = 0;
    this.avgTimeSpent = avgTimeSpent; // can get day(Saturday) as well, can show a heatmap of all days in PS sorting order
    this.weeks = weeks;
  }

  setWeeks = (weeks) => (this.weeks = weeks);
  updateParentObjectTree = (weekStats) => {
    let totalTimeSpent = 0;
    let totalVisitCount = 0;
    let productivityScore = 0;
    let totalNewLinks = 0;
    let totaldomainsVisited = 0;
    let totalIdleTime = 0;
    let totalActiveDays = 0;

    for (let weekData in this.weeks) {
      let thisWeeksIndex = this.weeks[weekData];

      if (weekStats[thisWeeksIndex] !== undefined) {
        let weekObj = weekStats[thisWeeksIndex];

        totalActiveDays += weekObj.totalActiveDays;
        totalTimeSpent += weekObj.totalTimeSpent;
        totalVisitCount += weekObj.totalVisitCount;
        productivityScore += weekObj.productivityScore;
        totaldomainsVisited += weekObj.totaldomainsVisited;
        totalNewLinks += weekObj.totalNewLinks;
        totalIdleTime += weekObj.totalIdleTime;

        this.most.timeSpent.dateTime =
          weekObj.most.timeSpent.time > this.most.timeSpent.dateTime
            ? weekObj.most.timeSpent.time
            : this.most.timeSpent.dateTime;

        this.most.timeSpent.dateName =
          weekObj.most.timeSpent.time === this.most.timeSpent.dateTime
            ? weekObj.most.timeSpent.date
            : this.most.timeSpent.dateName;

        this.most.timeSpent.weekTime =
          weekObj.totalTimeSpent > this.most.timeSpent.weekTime
            ? weekObj.totalTimeSpent
            : this.most.timeSpent.weekTime;

        this.most.timeSpent.weekName =
          weekObj.totalTimeSpent === this.most.timeSpent.weekTime
            ? weekObj.weekName
            : this.most.timeSpent.weekName;
      }
    }
    this.totalTimeSpent = totalTimeSpent;
    this.totalVisitCount = totalVisitCount;
    this.productivityScore = FormatAndParseFloat(
      productivityScore / totalActiveDays
    );
    this.totaldomainsVisited = totaldomainsVisited;
    this.totalNewLinks = totalNewLinks;
    this.totalIdleTime = totalIdleTime;
    this.totalActiveDays = totalActiveDays;
    this.avgTimeSpent = FormatAndParseFloat(totalTimeSpent / totalActiveDays);
  };
}

export default Month;

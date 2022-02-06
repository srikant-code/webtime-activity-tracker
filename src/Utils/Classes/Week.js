import { FormatAndParseFloat } from "../utilities";

class Week {
  constructor({
    weekName = "",
    totalTimeSpent = 0,
    totalVisitCount = 0,
    totaldomainsVisited = 0,
    totalNewLinks = 0,
    topFiveDomains = [],
    topCategory = "",
    totalIdleTime = 0,
    avgTimeSpent = 0,
    productivityScore = 0,
    days = [],
  }) {
    this.weekName = weekName;
    this.totalTimeSpent = totalTimeSpent;
    this.totalVisitCount = totalVisitCount;
    this.totaldomainsVisited = totaldomainsVisited;
    this.totalNewLinks = totalNewLinks;
    this.topFiveDomains = topFiveDomains;
    this.topCategory = topCategory;
    this.productivityScore = productivityScore;
    this.most = {
      productive: {
        date: "",
        score: 0,
      },
      timeSpent: {
        date: "",
        time: 0,
      },
    };
    // this.mostProductiveDate = mostProductiveDate; // can get day(Saturday) as well, can show a heatmap of all days in PS sorting order
    // this.mostProductive = mostProductive; // can get day(Saturday) as well, can show a heatmap of all days in PS sorting order
    // this.mostTimeSpentDate = mostTimeSpentDate; // can get day(Saturday) as well, can show a heatmap of all days in PS sorting order
    // this.mostTimeSpent = mostTimeSpent; // can get day(Saturday) as well, can show a heatmap of all days in PS sorting order
    this.avgTimeSpent = avgTimeSpent;
    this.totalIdleTime = totalIdleTime;
    this.totalActiveDays = 0;
    this.days = days;
  }

  setDays = (days) => (this.days = days);
  updateParentObjectTree = (dayStats) => {
    let totalTimeSpent = 0;
    let totalVisitCount = 0;
    let productivityScore = 0;
    let totalNewLinks = 0;
    let totaldomainsVisited = 0;
    let totalIdleTime = 0;

    let totalActiveDays = 0;

    for (let dayData in this.days) {
      let thisDaysIndex = this.days[dayData];

      if (dayStats[thisDaysIndex] !== undefined) {
        let dayObj = dayStats[thisDaysIndex];
        totalActiveDays += dayObj.totalTimeSpent > 0 ? 1 : 0;
        totalTimeSpent += dayObj.totalTimeSpent;
        totalVisitCount += dayObj.totalVisitCount;
        productivityScore += dayObj.productivityScore;
        totaldomainsVisited += dayObj.totaldomainsVisited;
        totalNewLinks += dayObj.totalNewLinks;
        totalIdleTime += dayObj.totalIdleTime;

        // finding mostTimeSpent & On which Date
        this.most.timeSpent.time =
          dayObj.totalTimeSpent > this.most.timeSpent.time
            ? dayObj.totalTimeSpent
            : this.most.timeSpent.time;
        this.most.timeSpent.date =
          this.most.timeSpent.time === dayObj.totalTimeSpent
            ? thisDaysIndex
            : this.most.timeSpent.date;

        // finding mostProductive & On which Date
        this.most.productive.score =
          dayObj.productivityScore > this.most.productive.score
            ? dayObj.productivityScore
            : this.most.productive.score;
        this.most.productive.date =
          this.most.productive.score === dayObj.productivityScore
            ? thisDaysIndex
            : this.most.productive.date;
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

export default Week;

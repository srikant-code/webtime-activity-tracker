import { CONSTANTS, USER_DATA } from "../Utils/Constants";

export const CalcTopWebsites = (
  dataSource,
  sortBy = "totalTimeSpent",
  date = "01/January/2021",
  top = 5
) => {
  //totalTimeSpent, totalIdleTime
  const websites = {};
  const obj = dataSource
    ? dataSource
    : USER_DATA?.dayStats
    ? USER_DATA?.dayStats[date]?.domains
    : {};
  const topValues = Object.values(obj).sort((a, b) => b[sortBy] - a[sortBy]);
  const top5Values = topValues.slice(0, top).map((item) => item[sortBy]);
  const otherValues = topValues.slice(top).map((item) => item[sortBy]);

  const top5Keys = Object.keys(obj)
    .sort((a, b) => obj[b][sortBy] - obj[a][sortBy])
    .slice(0, top);

  const otherValuesAgg = CalulateAggregate(otherValues);
  const topValuesAgg = CalulateAggregate(top5Values);
  const totalTime = topValuesAgg + otherValuesAgg;

  websites.top = [];
  websites.otherStats = {};
  websites.topStats = {};
  for (let i = 0; i < top5Keys.length; i++) {
    websites.top.push({
      website: top5Keys[i],
      value: top5Values[i],
      percentage: `${((top5Values[i] / totalTime) * 100).toFixed(1)}`,
    });
  }
  websites.topStats = {
    value: topValuesAgg,
    totalSites: top,
    percentage: `${((topValuesAgg / totalTime) * 100).toFixed(1)}`,
  };
  websites.otherStats = {
    value: otherValuesAgg,
    totalSites: otherValues.length,
    percentage: `${((otherValuesAgg / totalTime) * 100).toFixed(1)}`,
  };
  console.log(websites); //top5Keys, top5Values,
  return websites;
};

const CalulateAggregate = (array) =>
  array.reduce((partialSum, a) => partialSum + a, 0);

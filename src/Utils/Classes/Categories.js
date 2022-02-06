const COLORS = ["#000", "#321", "#324"];
const CategoryType = {
  USERDEFINED: "userdefined",
  PREDEFINED: "predefined",
};

class Categories {
  constructor({
    name,
    colorID = 2,
    type = CategoryType.PREDEFINED,
    totalTimeSpent = 0,
    productivityScore = 0,
    totalActiveDays = 0,
    top5Domains = [],
  }) {
    this.name = name;
    this.color = COLORS[colorID];
    this.type = CategoryType[type];
    this.keywords = [name];
    this.totalTimeSpent = totalTimeSpent;
    this.productivityScore = productivityScore;
    this.totalActiveDays = totalActiveDays;
    this.top5Domains = top5Domains;
  }
}

export default Categories;

class Tab {
  domainName; // pkey
  isBlocked;
  categories;
  totalTimeSpent;
  totalVisitCount;
  stats;
  constructor({
    domainName,
    isBlocked = false,
    categories = [],
    totalTimeSpent = 0,
    totalVisitCount = 0,
    stats = [],
  }) {
    this.domainName = domainName;
    this.isBlocked = isBlocked;
    this.categories = categories;
    this.totalTimeSpent = totalTimeSpent;
    this.totalVisitCount = totalVisitCount;
    this.stats = [TabDayStatistics];
  }
}

class TabDayStatistics {
  tabPath; // pkey
  tabTitle;
  totalTimeSpent;
  openingDate;
  totalVisitCount;
  timeLine;
  constructor({
    tabPath = "",
    tabTitle = "",
    totalTimeSpent = 0,
    totalVisitCount = 0,
    openingDate = "",
    timeLine = [],
  }) {
    this.tabPath = tabPath;
    this.tabTitle = tabTitle;
    this.totalTimeSpent = totalTimeSpent;
    this.totalVisitCount = totalVisitCount;
    this.openingDate = openingDate;
    this.timeLine = [TabTimeLine];
  }
}

class TabTimeLine {
  openedFor;
  openingTime;
}

class Category {
  categoryName;
  categoryColor;
  subCategories;
  totalTimeSpent;
  tabList;
}

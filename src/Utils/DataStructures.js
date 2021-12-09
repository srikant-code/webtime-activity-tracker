const CATEGORIES = {
  GAMES: {
    name: "GAMES",
    color: "#000",
  },
  SOCIAL: {
    name: "SOCIAL",
    color: "#000",
  },
  PRODUCTIVITY: {
    name: "PRODUCTIVITY",
    color: "#000",
  },
  DESIGN: {
    name: "DESIGN",
    color: "#000",
  },
  DEVELOPMENT: {
    name: "DEVELOPMENT",
    color: "#000",
  },
  TASK_MANAGEMENT: {
    name: "TASK_MANAGEMENT",
    color: "#000",
  },
  OTHERS: {
    name: "OTHERS",
    color: "#000",
  },
  NEWS: {
    name: "NEWS",
    color: "#000",
  },
  BLOGS: {
    name: "BLOGS",
    color: "#000",
  },
  MARKETING: {
    name: "MARKETING",
    color: "#000",
  },
  RESEARCH: {
    name: "RESEARCH",
    color: "#000",
  },
  COMPANY_WORK_RELATED: {
    name: "COMPANY_WORK_RELATED",
    color: "#000",
  },
  VIDEO_STREAMING: {
    name: "VIDEO_STREAMING",
    color: "#000",
  },
  LANDING_PAGES: {
    name: "LANDING_PAGES",
    color: "#000",
  },
  CHATTING: {
    name: "CHATTING",
    color: "#000",
  },
  STARTUPS: {
    name: "STARTUPS",
    color: "#000",
  },
  LEARNING: {
    name: "LEARNING",
    color: "#000",
  },
};

const TABS = {
  favicon: "https://img.com/93",
  isBlocked: true,
  category: CATEGORIES.DESIGN,
  totalTimeSpent: 7990,
  titalVisitCount: 3728,
  domainName: "google.com",
  stats: [
    // from here we can get last opened time
    {
      // this is todays value
      pathName: "/search?q=ahe",
      pageTitle: "ahe Search Results - Google",
      totalTime: 7199,
      dayOpened: new Date(),
      visitCount: 3,
      timeLine: [
        {
          openedFor: 450, // secs
          openedOn: new Date(), // time
        },
        {
          openedFor: 250, // secs
          openedOn: new Date(), // time
        },
      ], // donot stor in firebase for free users
    },
    {
      // this is yesterdays value
      pathName: "/search?q=aascdhe",
      totalTime: 99,
      dayOpened: new Date(),
      visitCount: 1,
      timeLine: [], // donot stor in firebase for free users
    },
  ],
};

const TODAY = {
  totalTimeSpent: 8390, // summation sites.totalTime
  totalSitesVisited: 10, // sites.length
  mostAccessedCategory: CATEGORIES.DESIGN, // sites.length
  topWebsite: "figma.com", // sites.length
  productivityScore: 67, // sites.length
  date: new Date(),
  sites: [
    {
      domain: "google.com",
      pathName: "/search?q=ahe",
      pageTitle: "ahe Search Results - Google",
      totalTime: 7199, // sumation of timeline
      dayOpened: new Date(),
      timeLine: [
        {
          openedFor: 450, // secs
          openedOn: new Date(), // time
        },
        {
          openedFor: 250, // secs
          openedOn: new Date(), // time
        },
      ],
      visitCount: 3, // timeline.length
    },
  ],
}; // there will be an exact copy of this object structure for yesterday

const WEEK = {
  totalTimeSpent: 18390, // summation sites.totalTime
  totalSitesVisited: 910, // sites.length
  mostActiveDay: 3,
  weekNumber: 30,
  days: [
    {
      date: "7th April 2021",
      data: "",
    },
  ],
};

// How to detect Safari, Chrome, IE, Firefox and Opera browser?
// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
const BrowserLoggedIn = [
  {
    browserName: "Chrome",
    browserID: "igvsliv",
    lastLoggedIn: new Date(),
  },
  {
    browserName: "Chrome",
    browserID: "wcwegiyvpiwe",
    lastLoggedIn: new Date(),
  },
];

const USER = {
  lastLoggedIn: new Date(),
  lastLoggedOut: new Date(),
  isProMember: true,
  profilePic: "http://img.com/213",
  name: "John Smith",
  joinedOn: new Date(),
  refferalID: "ucbsuivro",
};

const REFFERAL_REWARDS = {
  1: 50,
  2: 70,
  3: 140,
};

const BACKUP_INTERVAL = {
  LOCAL: ["onOpening", "onClose", "realTime", 1, 3, 5, 30, 60, 120],
  CLOUD: ["onOpening", "onClose", "realTime", 1, 3, 5, 30, 60, 120],
};

const DEFAULT_WEBSITE_CATEGORIES = {
  // Research
  google: CATEGORIES.RESEARCH,
  bing: CATEGORIES.RESEARCH,
  duckduckgo: CATEGORIES.RESEARCH,

  // Design
  figma: CATEGORIES.DESIGN,
  sketch: CATEGORIES.DESIGN,
  dribbble: CATEGORIES.DESIGN,
  behance: CATEGORIES.DESIGN,
  design: CATEGORIES.DESIGN,
  adplist: CATEGORIES.DESIGN,

  // Development
  react: CATEGORIES.DEVELOPMENT,
  stackoverflow: CATEGORIES.DEVELOPMENT,
  github: CATEGORIES.DEVELOPMENT,
  gitlab: CATEGORIES.DEVELOPMENT,
  bigbucket: CATEGORIES.DEVELOPMENT,
  dev: CATEGORIES.DEVELOPMENT,
  hashnode: CATEGORIES.DEVELOPMENT,
  docker: CATEGORIES.DEVELOPMENT,
  digitalocean: CATEGORIES.DEVELOPMENT,
  freecodecamp: CATEGORIES.DEVELOPMENT,
  localhost: CATEGORIES.DEVELOPMENT,

  // Productivity
  mail: CATEGORIES.PRODUCTIVITY,

  // Startups
  producthunt: CATEGORIES.STARTUPS,
  angel: CATEGORIES.STARTUPS,

  // Social Media
  instagram: CATEGORIES.SOCIAL,
  twitter: CATEGORIES.SOCIAL,
  facebook: CATEGORIES.SOCIAL,
  clubhouse: CATEGORIES.SOCIAL,
  linkedin: CATEGORIES.SOCIAL,

  // Chatting
  telegram: CATEGORIES.SOCIAL,
  whatsapp: CATEGORIES.SOCIAL,
  "teams.microsoft": CATEGORIES.SOCIAL,

  // GAMES
  steam: CATEGORIES.GAMES,
  epicgames: CATEGORIES.GAMES,
  // TASK_MANAGEMENT
  monday: CATEGORIES.TASK_MANAGEMENT,
  airtable: CATEGORIES.TASK_MANAGEMENT,
  todoist: CATEGORIES.TASK_MANAGEMENT,
  // OTHERS
  // NEWS
  news: CATEGORIES.NEWS,
  // BLOGS
  medium: CATEGORIES.BLOGS,
  // MARKETING
  // COMPANY_WORK_RELATED

  // VIDEO_STREAMING
  zoom: CATEGORIES.VIDEO_STREAMING,
  meet: CATEGORIES.VIDEO_STREAMING,
  youtube: CATEGORIES.VIDEO_STREAMING,
  twitch: CATEGORIES.VIDEO_STREAMING,
  netflix: CATEGORIES.VIDEO_STREAMING,
  // LANDING_PAGES
  // LEARNING
  udemy: CATEGORIES.LEARNING,
  coursera: CATEGORIES.LEARNING,
  pluralsight: CATEGORIES.LEARNING,
};

const SETTINGS_DEFAULT = {
  THEME: "LIGHT",
  BLOCKLIST: [],
  BACKUP_REFRESH_INTERVAL_LOCAL: BACKUP_INTERVAL.LOCAL[2], // in hours or secs
  BACKUP_REFRESH_INTERVAL_CLOUD: BACKUP_INTERVAL.CLOUD[4], // in hours or secs
  DEVICES_LIMIT: 3, // based on pro
  WEBSITE_CATEGORIES: DEFAULT_WEBSITE_CATEGORIES,
};

const LINKS = {
  feedbackForm: "",
  donateMe: "",
  productSocial: {
    domain: "",
    blog: "",
    githubURL: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
  },
  mySocial: {
    githubURL: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    indieHackers: "",
    blog: "",
  },
};

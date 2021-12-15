const CATEGORIES = {
  GAMES: {
    name: "GAMES",
    color: "#000",
    websites: ["steam", "epicgames"],
  },
  SOCIAL: {
    name: "SOCIAL",
    color: "#000",
    websites: [
      "instagram",
      "twitter",
      "facebook",
      "clubhouse",
      "linkedin",
      "reddit",
      "whatsapp",
      "youtube",
    ],
  },
  PRODUCTIVITY: {
    name: "PRODUCTIVITY",
    color: "#000",
    websites: ["mail"],
  },
  DESIGN: {
    name: "DESIGN",
    color: "#000",
    websites: ["figma", "sketch", "dribbble", "behance", "design", "adplist"],
  },
  DEVELOPMENT: {
    name: "DEVELOPMENT",
    color: "#000",
    websites: [
      "react",
      "stackoverflow",
      "github",
      "gitlab",
      "bigbucket",
      "dev",
      "hashnode",
      "docker",
      "digitalocean",
      "freecodecamp",
      "localhost",
    ],
  },
  TASK_MANAGEMENT: {
    name: "TASK_MANAGEMENT",
    color: "#000",
    websites: ["monday", "airtable", "todoist"],
  },
  OTHERS: {
    name: "OTHERS",
    color: "#000",
    websites: [""],
  },
  NEWS: {
    name: "NEWS",
    color: "#000",
    websites: ["news"],
  },
  BLOGS: {
    name: "BLOGS",
    color: "#000",
    websites: ["medium", "tumblr"],
  },
  MARKETING: {
    name: "MARKETING",
    color: "#000",
    websites: ["hubspot", "marketing"],
  },
  RESEARCH: {
    name: "RESEARCH",
    color: "#000",
    websites: ["google", "bing", "duckduckgo"],
  },
  COMPANY_WORK_RELATED: {
    name: "COMPANY_WORK_RELATED",
    color: "#000",
    websites: [""],
  },
  VIDEO_STREAMING: {
    name: "VIDEO_STREAMING",
    color: "#000",
    websites: ["zoom", "meet", "youtube", "twitch", "netflix"],
  },
  LANDING_PAGES: {
    name: "LANDING_PAGES",
    color: "#000",
    websites: [""],
  },
  CHATTING: {
    name: "CHATTING",
    color: "#000",
    websites: ["telegram", "whatsapp", "teams.microsoft"],
  },
  STARTUPS: {
    name: "STARTUPS",
    color: "#000",
    websites: ["producthunt", "angel"],
  },
  LEARNING: {
    name: "LEARNING",
    color: "#000",
    websites: ["udemy", "coursera", "pluralsight"],
  },
};

// lifetime
const TABS = {
  favicon: "https://img.com/93",
  isBlocked: false,
  category: CATEGORIES.DESIGN,
  totalTimeSpent: 7990,
  totalVisitCount: 3728,
  domainName: "google.com",
  timeDistribution: {
    // calculate from function
    AM: {
      totalTimeSpent: 700,
      timeDistribution: [27, 27, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46],
      prodDistribution: [20, 27, 46, 98, 46, 46, 100, 46, 0, 0, 46, 46],
    },
    PM: {
      totalTimeSpent: 700,
      timeDistribution: [27, 27, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46],
      prodDistribution: [20, 27, 46, 98, 46, 46, 100, 46, 0, 0, 46, 46],
    },
  },
  stats: [
    // from here we can get last opened subdomains
    {
      pathName: "/search?q=ahe",
      pageTitle: "ahe Search Results - Google",
      totalTimeSpent: 700,
      productivityScore: 89, //average of other values
      totalVisitCount: 3,
      timeLine: [
        {
          // this is last opening day value agregate value of full day
          productivityScore: 79,
          openedFor: 450, // secs
          openedOn: new Date(), // time
        },
        {
          productivityScore: 73,
          openedFor: 250, // secs
          openedOn: new Date(), // time
        },
      ], // donot stor in firebase for free users
    },
  ],
};

// how to find google.com ka productivurt trend
// har din ko traverse karke wo website ka score dhund sakte hain
const TODAY = {
  date: new Date(),
  totalTimeSpent: 2800, // summation domains.totalTime
  totalDomainsVisited: 2, // domains.length
  topAccessedCategory: CATEGORIES.DESIGN, // from function which will analyze domains
  topWebsite: "google.com", // domains[0] and top 5 websites
  totalNewLinks: 3, // summation of new links
  productivityScore: 67, // average PS of domains
  domains: [
    {
      name: "google.com",
      totalTimeSpent: 1400, // sumation of timeline.totalTime
      totalVisitCount: 4, // timeline.visitcount.length
      productivityScore: 56, // calculate and store
      totalNewLinks: 1,
      timeDistribution: {
        // calculate from function
        AM: {
          totalTimeSpent: 700,
          timeDistribution: [27, 27, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46],
          prodDistribution: [20, 27, 46, 98, 46, 46, 100, 46, 0, 0, 46, 46],
        },
        PM: {
          totalTimeSpent: 700,
          timeDistribution: [27, 27, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46],
          prodDistribution: [20, 27, 46, 98, 46, 46, 100, 46, 0, 0, 46, 46],
        },
      },
      timeLine: [
        {
          pathName: "/search?q=ahe",
          pageTitle: "ahe Search Results - Google",
          newLink: true,
          visitCount: 2, // stats.length
          totalTime: 900, // stats.opened.length
          stats: [
            {
              openedFor: 450, // secs
              openedOn: new Date(), // time
            },
            {
              openedFor: 450, // secs
              openedOn: new Date(), // time
            },
          ],
        },
        {
          pathName: "/search?q=ahesklfhdlaf",
          pageTitle: "ahesklfhdlaf Search Results - Google",
          newLink: false,
          visitCount: 2, // stats.length
          totalTime: 500, // stats.opened.length
          stats: [
            {
              openedFor: 250, // secs
              openedOn: new Date(), // time
            },
            {
              openedFor: 250, // secs
              openedOn: new Date(), // time
            },
          ],
        },
      ],
    },
    {
      name: "figma.com",
      totalTimeSpent: 1400, // sumation of timeline.totalTime
      totalVisitCount: 4, // timeline.visitcount.length
      productivityScore: 86, // calculate and store
      totalNewLinks: 2,
      timeDistribution: {
        // calculate and store from function
        AM: {
          totalTimeSpent: 700,
          timeDistribution: [27, 27, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46],
          prodDistribution: [20, 27, 46, 98, 46, 46, 100, 46, 0, 0, 46, 46],
        },
        PM: {
          totalTimeSpent: 700,
          timeDistribution: [27, 27, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46],
          prodDistribution: [20, 27, 46, 98, 46, 46, 100, 46, 0, 0, 46, 46],
        },
      },
      timeLine: [
        {
          pathName: "/search?q=ahe",
          pageTitle: "ahe Search Results - Google",
          newLink: true,
          visitCount: 2, // stats.length
          totalTime: 900, // stats.opened.length
          stats: [
            {
              openedFor: 450, // secs
              openedOn: new Date(), // time
            },
            {
              openedFor: 450, // secs
              openedOn: new Date(), // time
            },
          ],
        },
        {
          pathName: "/search?q=ahesklfhdlaf",
          pageTitle: "ahesklfhdlaf Search Results - Google",
          newLink: true,
          visitCount: 2, // stats.length
          totalTime: 500, // stats.opened.length
          stats: [
            {
              openedFor: 250, // secs
              openedOn: new Date(), // time
            },
            {
              openedFor: 250, // secs
              openedOn: new Date(), // time
            },
          ],
        },
      ],
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
      data: TODAY,
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

// const DEFAULT_WEBSITE_CATEGORIES = {
//   // Research
//   google: CATEGORIES.RESEARCH,
//   bing: CATEGORIES.RESEARCH,
//   duckduckgo: CATEGORIES.RESEARCH,

//   // Design
//   figma: CATEGORIES.DESIGN,
//   sketch: CATEGORIES.DESIGN,
//   dribbble: CATEGORIES.DESIGN,
//   behance: CATEGORIES.DESIGN,
//   design: CATEGORIES.DESIGN,
//   adplist: CATEGORIES.DESIGN,

//   // Development
//   react: CATEGORIES.DEVELOPMENT,
//   stackoverflow: CATEGORIES.DEVELOPMENT,
//   github: CATEGORIES.DEVELOPMENT,
//   gitlab: CATEGORIES.DEVELOPMENT,
//   bigbucket: CATEGORIES.DEVELOPMENT,
//   dev: CATEGORIES.DEVELOPMENT,
//   hashnode: CATEGORIES.DEVELOPMENT,
//   docker: CATEGORIES.DEVELOPMENT,
//   digitalocean: CATEGORIES.DEVELOPMENT,
//   freecodecamp: CATEGORIES.DEVELOPMENT,
//   localhost: CATEGORIES.DEVELOPMENT,

//   // Productivity
//   mail: CATEGORIES.PRODUCTIVITY,

//   // Startups
//   producthunt: CATEGORIES.STARTUPS,
//   angel: CATEGORIES.STARTUPS,

//   // Social Media
//   instagram: CATEGORIES.SOCIAL,
//   twitter: CATEGORIES.SOCIAL,
//   facebook: CATEGORIES.SOCIAL,
//   clubhouse: CATEGORIES.SOCIAL,
//   linkedin: CATEGORIES.SOCIAL,

//   // Chatting
//   telegram: CATEGORIES.SOCIAL,
//   whatsapp: CATEGORIES.SOCIAL,
//   "teams.microsoft": CATEGORIES.SOCIAL,

//   // GAMES
//   steam: CATEGORIES.GAMES,
//   epicgames: CATEGORIES.GAMES,
//   // TASK_MANAGEMENT
//   monday: CATEGORIES.TASK_MANAGEMENT,
//   airtable: CATEGORIES.TASK_MANAGEMENT,
//   todoist: CATEGORIES.TASK_MANAGEMENT,
//   // OTHERS
//   // NEWS
//   news: CATEGORIES.NEWS,
//   // BLOGS
//   medium: CATEGORIES.BLOGS,
//   // MARKETING
//   // COMPANY_WORK_RELATED

//   // VIDEO_STREAMING
//   zoom: CATEGORIES.VIDEO_STREAMING,
//   meet: CATEGORIES.VIDEO_STREAMING,
//   youtube: CATEGORIES.VIDEO_STREAMING,
//   twitch: CATEGORIES.VIDEO_STREAMING,
//   netflix: CATEGORIES.VIDEO_STREAMING,
//   // LANDING_PAGES
//   // LEARNING
//   udemy: CATEGORIES.LEARNING,
//   coursera: CATEGORIES.LEARNING,
//   pluralsight: CATEGORIES.LEARNING,
// };

const SETTINGS_DEFAULT = {
  THEME: "LIGHT",
  // BLOCKLIST: [],
  BACKUP_REFRESH_INTERVAL_LOCAL: BACKUP_INTERVAL.LOCAL[2], // in hours or secs
  BACKUP_REFRESH_INTERVAL_CLOUD: BACKUP_INTERVAL.CLOUD[4], // in hours or secs
  DEVICES_LIMIT: 3, // based on pro
  // WEBSITE_CATEGORIES: DEFAULT_WEBSITE_CATEGORIES,
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

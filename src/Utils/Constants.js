import useWindowDimensions from "./Hooks/useWindowDimensions";

export const Pxtorem = (num) => {
  return num / 16 + "rem";
};

export const RANDOM = (arr = []) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const SETTINGS_CONSTANTS = {
  IDLE_TIMEOUT: 15, // in seconds
  UPDATE_INTERVAL: 1, // in seconds
};

export const CONSTANTS = {
  DOWNLOAD_BLADERS_LINK:
    "https://play.google.com/store/apps/details?id=com.gamersngame.BladersAR&hl=en_IN&gl=US&ref=bladers_website",
  DISCORD_JOIN_LINK: "https://discord.gg/qkWvACPEPf",
  BUG_REPORT_LINK: "https://forms.gle/FVV7zRjCiz1b1qsD6",
  ROUTES: {
    PRIVACY_POLICY_ROUTE: "/privacy-policy",
    CHANGE_LOG_ROUTE: "/change-log",
    PRESS_KIT_ROUTE: "/press-kit",
    HOME_ROUTE: "/",
  },
  STORAGE: {
    DAY_STATS: "dayStats",
    TAB_STATS: "tabStats",
    WEEK_STATS: "weekStats",
    MONTH_STATS: "monthStats",
    CATEGORIES: "categories",
  },
  BACKEND: {
    TEST_DATA: {
      WebsiteList: ["localhost", "www.figma.com", "stackoverflow.com"],
      todayData: ["01/January/2021", "02/January/2021", "03/January/2021"],
      openedData: ["/login", "/signup", "/home"],
      categoryData: ["Design", "Coding", "Playing", "", "", "", ""],
    },
    DAY_UPDATE: {
      ACTIVE: "ACTIVE",
      IDLE: "IDLE",
    },
  },
  RANK: {
    INCREASE: "increase",
    DECREASE: "decrease",
    STABLE: "stable",
  },
  VARIANTS: {
    SUCCESS: "success",
    ERROR: "error",
    INFO: "info",
    WARNING: "warning",
  },
  CSSStyles: {
    FONTS: {
      HEADING: "heading",
      HEADING_2: "heading2",
      SUB_HEADING: "subHeading",
      SUB_TEXT: "subText",
      REGULAR: "regular",
      SMALL: "small",
      ULTRASMALL: "ultraSmall",
      BOLD: "bold",
      ELLIPSIS: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      },
      ITALIC: "italic",
    },
    FLEX: {
      COLUMN: "column",
      COLUMN_WRAP: "column wrap",
      FLEX_START: "flex-start",
      FLEX_END: "flex-end",
      SPACE_BETWEEN: "space-between",
      SPACE_AROUND: "space-around",
      CENTER: "center",
      ROW: "row",
      ROW_WRAP: "row wrap",
    },
    GENERIC: {
      FIT_CONTENT: "fit-content",
      ABSOLUTE: "absolute",
      RELATIVE: "relative",
      TRANSPARENT: "transparent",
    },
    ANIMATION: {
      POINT3: "0.3s all ease-in-out",
      POINT5: "0.5s all ease-in-out",
      AOS: {
        SLIDE: ["slide-up", "slide-down", "slide-left", "slide-right"],
        SLIDE_UP: "slide-up",
        SLIDE_DOWN: "slide-down",
        SLIDE_LEFT: "slide-left",
        SLIDE_RIGHT: "slide-right",
      },
    },
  },
};

export const CALENDER_CONSTANTS = {
  MONTHS: [
    {
      fullName: "January",
      index: 1,
      totalDays: 31,
    },
    {
      fullName: "February",
      index: 2,
      totalDays: 28,
    },
    {
      fullName: "March",
      index: 3,
      totalDays: 31,
    },
    {
      fullName: "April",
      index: 4,
      totalDays: 30,
    },
    {
      fullName: "May",
      index: 5,
      totalDays: 31,
    },
    {
      fullName: "June",
      index: 6,
      totalDays: 30,
    },
    {
      fullName: "July",
      index: 7,
      totalDays: 31,
    },
    {
      fullName: "August",
      index: 8,
      totalDays: 31,
    },
    {
      fullName: "September",
      index: 9,
      totalDays: 30,
    },
    {
      fullName: "October",
      index: 10,
      totalDays: 31,
    },
    {
      fullName: "November",
      index: 11,
      totalDays: 30,
    },
    {
      fullName: "December",
      index: 12,
      totalDays: 31,
    },
  ],
  WEEKS: [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ],
  DAYS: [
    { MONDAY: "Monday" },
    { TUESDAY: "Tuesday" },
    { WEDNESDAY: "Wednesday" },
    { THURSDAY: "Thursday" },
    { FRIDAY: "Friday" },
    { SATURDAY: "Saturday" },
    { SUNDAY: "Sunday" },
  ],
  MERIDIAN: {
    AM: "am",
    PM: "pm",
  },
  TIME: [{ 1: "One" }],
};

export const ResponsiveEffect = (breakpoints) => {
  const { breakpoint } = useWindowDimensions();
  return breakpoints[breakpoint.active];
};

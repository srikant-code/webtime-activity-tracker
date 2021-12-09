import useWindowDimensions from "./Hooks/useWindowDimensions";

export const Pxtorem = (num) => {
  return num / 16 + "rem";
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
  CSSStyles: {
    FONTS: {
      HEADING: "heading",
      HEADING_2: "heading2",
      SUB_HEADING: "subHeading",
      SUB_TEXT: "subText",
      REGULAR: "regular",
      SMALL: "small",
      BOLD: "bold",
      ITALIC: "italic",
    },
    FLEX: {
      COLUMN: "column",
      COLUMN_WRAP: "column wrap",
      FLEX_START: "flex-start",
      FLEX_END: "flex-end",
      CENTER: "center",
      ROW: "row",
      ROW_WRAP: "row wrap",
    },
    GENERIC: {
      FIT_CONTENT: "fit-content",
      ABSOLUTE: "absolute",
      RELATIVE: "relative",
    },
    ANIMATION: {
      POINT3: "0.3s all ease-in-out",
      POINT5: "0.5s all ease-in-out",
    },
  },
};

export const ResponsiveEffect = (breakpoints) => {
  const { breakpoint } = useWindowDimensions();
  return breakpoints[breakpoint.active];
};

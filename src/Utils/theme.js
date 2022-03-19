// import KeyShortcuts from "../components/atomic/keyShortcuts";
// import KEY_SHORTCUTS from "./keyShortcuts";
// import { ReactComponent as PlayStore } from "../assets/svgs/appstore.svg";
// import { ReactComponent as BrahmosLogo } from "../assets/svgs/brahmos_logo.svg";
// import { ReactComponent as Contact } from "../assets/svgs/contact.svg";
// import { ReactComponent as Developer } from "../assets/svgs/developer.svg";
// import { ReactComponent as Discord } from "../assets/svgs/discord.svg";
// import { ReactComponent as Download } from "../assets/svgs/download.svg";
// import { ReactComponent as Email } from "../assets/svgs/email.svg";
// import { ReactComponent as Facebook } from "../assets/svgs/facebook.svg";
// import { ReactComponent as Feedback } from "../assets/svgs/feedback.svg";
// import { ReactComponent as Instagram } from "../assets/svgs/instagram.svg";
// import { ReactComponent as Linkedin } from "../assets/svgs/linkedin.svg";
// import { ReactComponent as LinkedinOutline } from "../assets/svgs/linkedin_outline.svg";
// import { ReactComponent as Location } from "../assets/svgs/location.svg";
// import { ReactComponent as Park } from "../assets/svgs/park.svg";
// import { ReactComponent as Phone } from "../assets/svgs/phone.svg";
// import { ReactComponent as AppStore } from "../assets/svgs/playstore.svg";
// import { ReactComponent as Privacy } from "../assets/svgs/privacy.svg";
// import { ReactComponent as TwitterOutline } from "../assets/svgs/twitter_outline.svg";
// import { ReactComponent as Video } from "../assets/svgs/video.svg";
import { Pxtorem } from "./Constants";
// default theme

//TODO: Change it to Cabin
export const MODE = {
  DARK: {
    MODE: "Dark",
    THEME: {
      colors: {
        color_1: "#9399F5",
      },
      shades: {
        color_8: "#000000", // pure black
        color_7: "#141414", // black
        color_6: "#1F1F1F", // black-text
        color_5: "#292929", // grey
        color_4: "#858585", // lightgrey
        color_3: "#EEEDED", // faintgrey
        color_2: "#F8F9FA", // ghostwhite
        color_1: "#FFFFFF", // white
      },
    },
  },
  LIGHT: {
    MODE: "Light",
    THEME: {
      colors: {
        color_1: "#A259FF",
      },
      shades: {
        color_1: "#000000", // pure black
        color_2: "#342E2D", // black
        color_3: "#727272", // black-text
        color_4: "#9B9B9B", // grey
        color_5: "#E2E2E2", // lightgrey
        color_6: "#EEEDED", // faintgrey
        color_7: "#F8F9FA", // ghostwhite
        color_8: "#FFFFFF", // white
      },
    },
  },
  NEBULA: {
    MODE: "Nebula",
    THEME: {
      colors: {
        color_1: "#A259FF",
      },
      shades: {
        color_8: "#000000", // pure black
        color_7: "#17112c", // black
        color_6: "#3b374e", // black-text
        color_5: "#624ca6", // grey
        color_4: "#a396d5", // lightgrey
        color_3: "#EEEDED", // faintgrey
        color_2: "#F8F9FA", // ghostwhite
        color_1: "#FFFFFF", // white
      },
    },
  },
  RED_VELVET: {
    MODE: "Red Velvet",
    THEME: {
      colors: {
        color_1: "#ff6262",
      },
      shades: {
        color_8: "#000000", // pure black
        color_7: "#2c1111", // black
        color_6: "#4e3737", // black-text
        color_5: "#a64c4c", // grey
        color_4: "#d59696", // lightgrey
        color_3: "#EEEDED", // faintgrey
        color_2: "#F8F9FA", // ghostwhite
        color_1: "#FFFFFF", // white
      },
    },
  },
};
export let CURRENT_MODE = MODE.LIGHT;
export const CHANGE_CURRENT_MODE = (mode = MODE.LIGHT) => {
  CURRENT_MODE = {
    MODE: mode.MODE,
    THEME: mode.THEME,
  };
  return CURRENT_MODE;
};
const common = {
  text: "C4C4C4",
  fontProperties: {
    // color: "black",
    fontFamily: "Inter",
    fontStyle: "normal",
    lineHeight: "152.02%",
    /* or 24px */
    // fontFeatureSettings: 'salt' on;
  },
};

let COLORS = {
  shades: CURRENT_MODE.THEME.shades,
  white: "white",
  workspace: {
    color_1: "#222222", // black
    color_2: "#3778FF", // metab-bluw
    color_3: "#48B2FF", // sky-blue
    color_4: "#F6D00C", // green
    color_5: "#FBC400", // yellow
    color_6: "#FF602E", // red
  },
  metab: {
    color_1: "#3778FF", // primary
    color_2: "#48B2FF", // secondary
  },
  colors: {
    color_1: CURRENT_MODE.THEME.colors.color_1, // purple
    color_2: "#002f2d", // darkdarkgreen
    color_3: "#FF5C9C", // pink
    color_4: "#7B61FF", // violet
    color_5: "#00d900", // green
    color_6: "#ff5858", // red
  },
  gradient: {
    gradient_6: `linear-gradient(0deg, rgb(0 0 0 / 55%) 11.82%, rgb(0 0 0 / 0%) 100%)`, // black text to transparent for text
    gradient_2: `linear-gradient(340deg, #000000 11.82%, #005D6A 82.4%)`, // footer
    gradient_1: `linear-gradient(23deg, rgb(0, 0, 0) 11.82%, rgb(0, 93, 106) 82.4%)`, // download_component
    gradient_3: `linear-gradient(208deg, rgb(0, 0, 0) 11.82%, rgb(0, 93, 106) 82.4%)`, // acheivement_component
    gradient_4: `linear-gradient(29deg, rgb(0, 185, 185) 1.4%, rgb(36, 255, 255) 48.45%)`, // acheivement_component2 blue
    gradient_5: `linear-gradient(270deg, rgba(172, 50, 228, 0.28) 0%, rgba(121, 24, 242, 0.32) 49.48%, rgba(72, 1, 255, 0.33) 100%)`, // purplue -> blue progress indicator
  },
  effects: {
    buttonShadow: {
      boxShadow: `0px 14px 24px rgba(0, 0, 0, 0.1)`,
    },
    summaryCardShadow: {
      boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.06)`,
    },
    circleShadow: {
      boxShadow: `-2px 4px 9px rgba(50, 0, 115, 0.07), -6px 14px 17px rgba(162, 89, 255, 0.11)`,
    },
    big_blur: {
      background: common.text,
      boxShadow: `0px 11px 16px rgba(0, 0, 0, 0.32), 0px 11px 55px rgba(0, 0, 0, 0.3)`,
    },
    medium_blur: {
      background: common.text,
      boxShadow: `0px 11px 16px rgba(0, 0, 0, 0.12), 0px 1px 65px rgba(0, 0, 0, 0.21)`,
    },
  },
  icons: {
    color_1: "#56D00C", // black
  },
};
const FONTS = {
  cabin: {
    heading: {
      bold: {
        fontWeight: "bold",
        fontSize: "30px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "30px",
        ...common.fontProperties,
      },
    },
    heading2: {
      bold: {
        fontWeight: "bold",
        fontSize: "24px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "24px",
        ...common.fontProperties,
      },
    },
    subHeading: {
      bold: {
        fontWeight: "bold",
        fontSize: "16px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "16px",
        ...common.fontProperties,
      },
    },
    subText: {
      bold: {
        fontWeight: "bold",
        fontSize: "14px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "14px",
        ...common.fontProperties,
      },
    },
    small: {
      bold: {
        fontWeight: "bold",
        fontSize: "12px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "12px",
        ...common.fontProperties,
      },
      italic: {
        fontWeight: "normal",
        fontSize: "12px",
        ...common.fontProperties,
        fontStyle: "italic",
      },
    },
    ultraSmall: {
      bold: {
        fontWeight: "bold",
        fontSize: "9px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "9px",
        ...common.fontProperties,
      },
    },
  },
};
const SPACING = (spacing) => {
  return Pxtorem(spacing);
};

const Theme = {
  COLORS,
  FONTS,
  SPACING,
};
console.log("themes");

const changeColors = (color1, color2, color3, color4) => {
  return {
    "& > *": {
      fill: color1,
      stroke: color2,
    },
    "& path": {
      fill: color3,
      stroke: color4,
    },
  };
};

let changeColors_Variant1 = changeColors(
  Theme.COLORS.icons.color_1,
  null,
  Theme.COLORS.icons.color_1,
  null
);

let changeColors_Variant2 = changeColors(
  Theme.COLORS.icons.color_1,
  null,
  Theme.COLORS.icons.color_1,
  null
);

// export let ICONS_SVG = {
//   appStore: {
//     svg: <AppStore />,
//     name: "App Store",
//     css: changeColors_Variant1,
//   },
//   brahmosLogo: {
//     svg: <BrahmosLogo />,
//     name: "Brahmos Logo",
//     css: changeColors_Variant1,
//     // popOverContent: <KeyShortcuts>{KEY_SHORTCUTS.back}</KeyShortcuts>,
//   },
//   contact: {
//     svg: <Contact />,
//     name: "Contact",
//     css: changeColors_Variant2,
//     // popOverContent: <KeyShortcuts>{KEY_SHORTCUTS.back}</KeyShortcuts>,
//   },
//   developer: {
//     svg: <Developer />,
//     name: "Developer",
//     css: changeColors_Variant1,
//     // popOverContent: <KeyShortcuts>{KEY_SHORTCUTS.screenshot}</KeyShortcuts>,
//   },
//   discord: {
//     svg: <Discord />,
//     name: "Discord",
//     css: changeColors_Variant1,
//   },
//   downloads: {
//     svg: <Download />,
//     name: "Downloads",
//     css: changeColors_Variant1,
//   },
//   email: {
//     svg: <Email />,
//     name: "Email",
//     css: changeColors_Variant1,
//   },
//   facebook: {
//     svg: <Facebook />,
//     name: "Facebook",
//     css: changeColors_Variant1,
//   },
//   feedback: {
//     svg: <Feedback />,
//     name: "Feedback",
//     css: changeColors_Variant1,
//   },
//   instagram: {
//     svg: <Instagram />,
//     name: "Instagram",
//     css: changeColors_Variant1,
//   },
//   linkedin: {
//     svg: <Linkedin />,
//     name: "Linkedin",
//     css: changeColors_Variant1,
//   },
//   linkedinOutline: {
//     svg: <LinkedinOutline />,
//     name: "Linkedin",
//     css: changeColors_Variant1,
//   },
//   location: {
//     svg: <Location />,
//     name: "Location",
//     css: changeColors_Variant1,
//   },
//   park: {
//     svg: <Park />,
//     name: "Park",
//     css: changeColors_Variant1,
//   },
//   playStore: {
//     svg: <PlayStore />,
//     name: "Play Store",
//     css: changeColors_Variant1,
//   },
//   phone: {
//     svg: <Phone />,
//     name: "Phone",
//     css: changeColors_Variant1,
//   },
//   privacy: {
//     svg: <Privacy />,
//     name: "Privacy",
//     css: changeColors_Variant1,
//   },
//   twitter: {
//     svg: <TwitterOutline />,
//     name: "Twitter",
//     css: changeColors_Variant1,
//   },
//   video: {
//     svg: <Video />,
//     name: "Video",
//     css: changeColors_Variant1,
//   },
// };

export default Theme;

import { useState } from "react";
import { CONSTANTS } from "../../../Utils/Constants";
import Theme, {
  CHANGE_CURRENT_MODE,
  CURRENT_MODE,
  MODE,
} from "../../../Utils/theme";
import ColourPalette from "../../Components/ColourPalette";
import Flex from "../../Components/Container";
import { RenderBadgeButton } from "../../Components/SearchBar";
import Text from "../../Components/Text";
import WebsiteIcon from "../../Components/WebsiteIcon";
import SettingsLayout from "../../Containers/SettingsLayout";

const CSS = CONSTANTS.CSSStyles;
const FLEX = CSS.FLEX;
const FONTS = CSS.FONTS;
const COLORS = Theme.COLORS;
const SPACING = (v) => Theme.SPACING(v);
const PERCENTAGE = (v) => `${v}%`;

const ReflectSettings = ({ setReRender, reRender }) => {
  const styles = {
    themeContainer: {
      background: COLORS.shades.color_7,
      borderRadius: SPACING(10),
      padding: SPACING(20),
      margin: SPACING(10),
    },
    currentTheme: (color) => {
      return { color: color ? color : COLORS.colors.color_1 };
    },
    themeHeader: {
      width: PERCENTAGE(100),
    },
    palette: {
      marginTop: SPACING(5),
    },
    thmCont: {
      marginBottom: SPACING(10),
    },
  };
  const getColorFromMode = (theme) => {
    let colors = [];
    let selectedMode;
    for (let key in MODE) {
      if (MODE[key].MODE === theme) {
        colors.push(MODE[key].THEME.colors.color_1);
        // colors.push(MODE[key].THEME.shades.color_2);
        colors.push(MODE[key].THEME.shades.color_3);
        colors.push(MODE[key].THEME.shades.color_4);
        colors.push(MODE[key].THEME.shades.color_5);
        colors.push(MODE[key].THEME.shades.color_6);
        // colors.push(MODE[key].THEME.shades.color_7);
        selectedMode = MODE[key];
      }
    }
    return [colors, selectedMode];
  };
  const getAllThemes = (excludeCurrent = true) => {
    let themes = [];
    for (let key in MODE)
      if (MODE[key].MODE !== CURRENT_MODE.MODE && excludeCurrent)
        themes.push(MODE[key].MODE);
    return themes;
  };
  const RenderTheme = ({ from = CURRENT_MODE.MODE }) => {
    const [colors, selectedMode] = getColorFromMode(from);
    return (
      <Flex
        flexFlow={FLEX.COLUMN}
        justifyContent={FLEX.FLEX_START}
        alignItems={FLEX.FLEX_START}
        style={styles.thmCont}>
        <Flex style={styles.themeHeader} justifyContent={FLEX.SPACE_BETWEEN}>
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SUB_HEADING}
            style={styles.currentTheme(colors[3])}>
            {from}
          </Text>
          <RenderBadgeButton
            item={{ Name: "Apply" }}
            onclick={() => {
              console.log(selectedMode);
              setReRender(reRender + 1);
              CHANGE_CURRENT_MODE(selectedMode);
              console.log(CURRENT_MODE.MODE);
            }}
          />
        </Flex>
        <ColourPalette style={styles.palette} colors={colors} variant="f" />
      </Flex>
    );
  };
  return (
    <Flex alignItems={FLEX.FLEX_START}>
      <Flex
        style={styles.themeContainer}
        flexFlow={FLEX.COLUMN}
        justifyContent={FLEX.FLEX_START}
        alignItems={FLEX.FLEX_START}>
        <Flex style={styles.themeHeader} justifyContent={FLEX.SPACE_BETWEEN}>
          <Text type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}>Current Theme</Text>
          <WebsiteIcon icon="🔆" />
        </Flex>
        <RenderTheme from={CURRENT_MODE.MODE} />
      </Flex>
      <Flex
        style={styles.themeContainer}
        flexFlow={FLEX.COLUMN_WRAP}
        justifyContent={FLEX.FLEX_START}
        alignItems={FLEX.FLEX_START}>
        {getAllThemes().map((item, index) => {
          return <RenderTheme from={item} key={index} />;
        })}
      </Flex>
    </Flex>
  );
};
const Content = () => {
  return <Flex>Hel</Flex>;
};
const Settings = () => {
  const [reRender, setReRender] = useState(0);
  return (
    <SettingsLayout
      heading="Settings"
      contentList={[
        {
          heading: "All Settings",
          subItems: [
            { name: "Reflect", active: true },
            { name: "Theme" },
            { name: "Other" },
          ],
          component: (
            <ReflectSettings reRender={reRender} setReRender={setReRender} />
          ),
        },
        {
          heading: "Guides & How to...",
          subItems: [
            { name: "How Productivity Score is calculated?", active: false },
            { name: "What are your interests?" },
            { name: "How can I create categories?" },
            { name: "What is the goal/vision of Reflect?" },
          ],
          component: <Content />,
        },
        {
          heading: "Your wants from us 😀",
          subItems: [
            { name: "Refferal programs", active: false },
            { name: "Multiplayer" },
            { name: "Use it in my company" },
          ],
          component: <Content />,
        },
      ]}
    />
  );
};

export default Settings;

import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import CustomButton from "../../Components/Button";
import Flex from "../../Components/Container";
import { RenderBadgeButton } from "../../Components/SearchBar";
import Text from "../../Components/Text";

const CSS = CONSTANTS.CSSStyles;
const FLEX = CSS.FLEX;
const FONTS = CSS.FONTS;
const COLORS = Theme.COLORS;
const SPACING = (v) => Theme.SPACING(v);
const PERCENTAGE = (v) => `${v}%`;

const SettingsLayout = ({
  heading = "Settings",
  contentList = [
    {
      heading: "Contents",
      subItems: [
        { name: "Item 0" },
        { name: "Item 1", active: true },
        { name: "Item 2" },
      ],
    },
  ],
}) => {
  const styles = {
    contentBox: {
      margin: SPACING(10),
      background: COLORS.shades.color_8,
      borderRadius: SPACING(10),
      padding: SPACING(10),
      minWidth: SPACING(200),
      width: PERCENTAGE(15),
    },
    contentContainer: {
      borderRadius: SPACING(10),
      marginRight: SPACING(20),
      minWidth: SPACING(200),
      width: PERCENTAGE(15),
    },
    sidebarItem: {
      background: COLORS.shades.color_8,
      width: PERCENTAGE(100),
    },
    view: {
      paddingTop: SPACING(20),
    },
    contentHeader: {
      marginBottom: SPACING(10),
    },
    rightPanel: {
      width: PERCENTAGE(85),
    },
    rightPanelContentContainer: {
      background: COLORS.shades.color_8,
      borderRadius: SPACING(10),
      padding: SPACING(20),
      marginTop: SPACING(10),
      width: CSS.GENERIC.WEBKIT_FILL,
      height: PERCENTAGE(100),
    },
  };
  return (
    <Flex
      justifyContent={FLEX.FLEX_START}
      alignItems={FLEX.FLEX_START}
      flexFlow={FLEX.ROW}
      style={styles.view}>
      <Flex flexFlow={FLEX.COLUMN} style={styles.contentContainer}>
        {contentList.map((topic, index) => {
          return (
            <Flex
              key={index}
              style={styles.contentBox}
              flexFlow={FLEX.COLUMN}
              alignItems={FLEX.FLEX_START}>
              <Text type={FONTS.SUB_HEADING} style={styles.contentHeader}>
                {topic.heading}
              </Text>
              {topic.subItems.map((item, index) => {
                return (
                  <Flex style={styles.sidebarItem} key={index}>
                    <RenderBadgeButton
                      item={{ Name: item.name }}
                      active={item.active}>
                      {item.name}
                    </RenderBadgeButton>
                  </Flex>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
      <Flex
        flexFlow={FLEX.COLUMN}
        style={styles.rightPanel}
        justifyContent={FLEX.FLEX_START}
        alignItems={FLEX.FLEX_START}>
        <Text>{heading}</Text>
        {contentList.map((item, index) => {
          return (
            <Flex
              style={styles.rightPanelContentContainer}
              flexFlow={FLEX.COLUMN}
              justifyContent={FLEX.FLEX_START}
              alignItems={FLEX.FLEX_START}
              key={index}>
              <Text type={FONTS.SUB_HEADING}>{item.heading}</Text>
              {item.component}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
export default SettingsLayout;

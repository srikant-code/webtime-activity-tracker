import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import Flex from "../../Container";
import Text from "../../Text";
import Top5Websites from "../../TopFiveWebsites";
import VerticalBar from "../../VerticalBar";

const MainStatisticsCard = () => {
  const FlexSpaceBetween = ({ leftText, rightText, children }) => {
    return (
      <>
        <Flex
          justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_BETWEEN}
          style={styles.top5Websites}>
          <Text type={CONSTANTS.CSSStyles.FONTS.SMALL}>{leftText}</Text>
          <Text type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}>{rightText}</Text>
        </Flex>
        {children}
      </>
    );
  };

  const styles = {
    container: {
      borderRadius: Theme.SPACING(20),
      background: Theme.COLORS.shades.color_8,
      width: Theme.SPACING(650),
      height: Theme.SPACING(350),
    },
    bottomContainer: {
      borderRadius: Theme.SPACING(20),
      background: Theme.COLORS.shades.color_6,
      padding: Theme.SPACING(20),
      width: "100%",
      height: "20%",
    },
    top5Websites: {
      width: "95%",
      padding: Theme.SPACING(4),
    },
    topCategory: {
      background: Theme.COLORS.shades.color_8,
      padding: `${Theme.SPACING(4)} ${Theme.SPACING(8)}`,
      borderRadius: Theme.SPACING(8),
      cursor: "pointer",
    },
  };
  return (
    <Flex
      style={styles.container}
      alignContent={CONSTANTS.CSSStyles.FLEX.FLEX_END}>
      <Flex></Flex>
      <Flex style={styles.bottomContainer}>
        Hello
        <VerticalBar style={{ height: "100%" }} />
        <Flex
          flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
          justifyContent={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
          <FlexSpaceBetween leftText="Top 5 websites" rightText="58.3%">
            <Top5Websites
              websites={["figma", "figma", "figma", "figma", "figma"]}
            />
          </FlexSpaceBetween>
        </Flex>
        <VerticalBar style={{ height: "100%" }} />
        <Flex
          flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
          justifyContent={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
          <FlexSpaceBetween leftText="Top category" rightText="58.3%">
            <Text
              type={CONSTANTS.CSSStyles.FONTS.SUB_HEADING}
              style={styles.topCategory}>
              😂 Category Name
            </Text>
          </FlexSpaceBetween>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainStatisticsCard;

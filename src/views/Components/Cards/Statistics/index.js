import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import Flex from "../../Container";
import Text from "../../Text";

const StatsCard = ({
  heading = "Top Website",
  subHeading = "Fact -hello world you are spending a lot of time",
  tooltipText = "Shows your todays top 5 browsed websites",
  chart,
}) => {
  return (
    <Flex>
      <Flex
        flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
        alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
        <Text type={CONSTANTS.CSSStyles.FONTS.SUB_HEADING}>{heading}</Text>
        <Text
          type={CONSTANTS.CSSStyles.FONTS.SMALL}
          weight={CONSTANTS.CSSStyles.FONTS.REGULAR}>
          {subHeading}
        </Text>
        {/* Tooltip */}
      </Flex>
    </Flex>
  );
};

export default StatsCard;

import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import Flex from "../../Container";
import Text from "../../Text";

const SummaryCard = ({
  main = "Hello",
  sub = "Sub Text",
  sup = "Sup text",
}) => {
  return (
    <Flex
      flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
      alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}
      style={{
        ...Theme.COLORS.effects.summaryCardShadow,
        padding: Theme.SPACING(18),
        margin: Theme.SPACING(6),
        borderRadius: Theme.SPACING(12),
        width: CONSTANTS.CSSStyles.GENERIC.FIT_CONTENT,
        minWidth: Theme.SPACING(150),
        cursor: "pointer",
      }}>
      <Text
        type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
        weight={CONSTANTS.CSSStyles.FONTS.REGULAR}>
        {sup}
      </Text>
      <Text>{main}</Text>
      <Text
        type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
        weight={CONSTANTS.CSSStyles.FONTS.REGULAR}>
        {sub}
      </Text>
    </Flex>
  );
};

export default SummaryCard;

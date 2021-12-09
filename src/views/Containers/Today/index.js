import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import Flex from "../../Components/Container";
import SummaryCard from "../../Components/Cards/Summary";
import Text from "../../Components/Text";
import StatsCard from "../../Components/Cards/Statistics";

const Today = () => {
  return (
    <Flex
      flexFLow={CONSTANTS.CSSStyles.FLEX.COLUMN_WRAP}
      justifyContent={CONSTANTS.CSSStyles.FLEX.FLEX_START}
      style={{ maxWidth: Theme.SPACING(650) }}>
      <Text type={CONSTANTS.CSSStyles.FONTS.SUB_HEADING}>Summary</Text>
      <Flex>
        <SummaryCard sup="Total time" main="9h 58m" sub="" />
        <SummaryCard sup="Total sites visited" main="78" sub="" />
        <SummaryCard sup="Most active category" main="Design" sub="" />
        <SummaryCard sup="Max time spent on" main="9h 58m" sub="figma.com" />
        <SummaryCard sup="Addiction level" main="Dependent" sub="" />
        <SummaryCard sup="Productivity Score" main="79" sub="" />
      </Flex>
      <StatsCard />
    </Flex>
  );
};

export default Today;

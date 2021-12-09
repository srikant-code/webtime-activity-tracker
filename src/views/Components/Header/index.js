import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import Flex from "../Container";
import Text from "../Text";

const Header = ({ name = "Srikant" }) => {
  return (
    <>
      <Flex
        flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
        alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
        <Text
          type={CONSTANTS.CSSStyles.FONTS.HEADING}
          weight={CONSTANTS.CSSStyles.FONTS.BOLD}>
          Hi {name}
        </Text>
        <Text
          type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
          weight={CONSTANTS.CSSStyles.FONTS.REGULAR}>
          Productivity Tip: 💡
        </Text>
      </Flex>
    </>
  );
};

export default Header;

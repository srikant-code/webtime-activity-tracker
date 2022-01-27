import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import Flex from "../../Container";
import Text from "../../Text";

const CardLayout = ({
  heading = "This is a Heading",
  Component = <>Hello this is a component</>,
  data = [],
}) => {
  return (
    <Flex
      flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
      alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}
    >
      <Text
        type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
        style={{ margin: Theme.SPACING(8) }}
      >
        {heading}
      </Text>
      {data.map((item, index) => {
        return <Component data={item} key={index} index={index} />;
      })}
    </Flex>
  );
};

export default CardLayout;

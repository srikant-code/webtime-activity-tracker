import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import Flex from "../../Container";
import Text from "../../Text";

const DaysHoursLeftProgressBar = ({ time = 2, category = "hours" }) => {
  const styles = {
    container: {
      border: `${Theme.SPACING(1)} solid ${Theme.COLORS.colors.color_1}`,
      margin: Theme.SPACING(10),
      position: CONSTANTS.CSSStyles.GENERIC.RELATIVE,
      borderRadius: Theme.SPACING(10),
    },
    progress: {
      transform: "rotate(180deg)",
      position: CONSTANTS.CSSStyles.GENERIC.ABSOLUTE,
      width: `${Math.random() * 100}%`,
      borderRadius: Theme.SPACING(10),
      height: "100%",
      background: Theme.COLORS.gradient.gradient_5,
    },
    leftHeadingBar: {
      padding: `${Theme.SPACING(10)} ${Theme.SPACING(24)}`,
    },
    rightInfoBar: {
      padding: `${Theme.SPACING(10)} ${Theme.SPACING(24)}`,
    },
  };
  return (
    <Flex
      justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_BETWEEN}
      style={styles.container}>
      <Text style={styles.leftHeadingBar}>
        {time} {category} left
      </Text>
      <div style={styles.progress}></div>
      <Flex
        flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
        alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_END}
        style={styles.rightInfoBar}>
        <Text
          type={CONSTANTS.CSSStyles.FONTS.SMALL}
          weight={CONSTANTS.CSSStyles.FONTS.REGULAR}>
          <b>22/24</b> hours
        </Text>
        <Text
          type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
          weight={CONSTANTS.CSSStyles.FONTS.REGULAR}>
          <b>88%</b> day completed
        </Text>
      </Flex>
    </Flex>
  );
};

export default DaysHoursLeftProgressBar;

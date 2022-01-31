import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import CardLayout from "../../Cards/Layout";
import Flex from "../../Container";
import Text from "../../Text";

const DaysHoursLeftProgressBar = ({
  time = Math.random() * 24,
  category = "hours",
  style = {},
}) => {
  const percentage = ((24 - time) / 24) * 100;
  const styles = {
    container: {
      border: `${Theme.SPACING(1)} solid ${Theme.COLORS.colors.color_1}`,
      position: CONSTANTS.CSSStyles.GENERIC.RELATIVE,
      borderRadius: Theme.SPACING(10),
      boxSizing: "border-box",
      width: "100%",
    },
    progress: {
      transform: "rotate(180deg)",
      position: CONSTANTS.CSSStyles.GENERIC.ABSOLUTE,
      width: `${percentage}%`,
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
    <CardLayout style={style} heading="Day Progress">
      <Flex
        justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_BETWEEN}
        style={styles.container}
      >
        <Text style={styles.leftHeadingBar}>
          {time.toFixed(0)} {category} left
        </Text>
        <div style={styles.progress}></div>
        <Flex
          flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
          alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_END}
          style={styles.rightInfoBar}
        >
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SMALL}
            weight={CONSTANTS.CSSStyles.FONTS.REGULAR}
          >
            <b>{24 - time.toFixed(0)}/24</b> hours
          </Text>
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
            weight={CONSTANTS.CSSStyles.FONTS.REGULAR}
          >
            <b>{percentage.toFixed(0)}%</b> day completed
          </Text>
        </Flex>
      </Flex>
    </CardLayout>
  );
};

export default DaysHoursLeftProgressBar;

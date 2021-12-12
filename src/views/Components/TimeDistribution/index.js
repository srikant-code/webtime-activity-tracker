import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import DayNightImage from "../../Assets/Images/dayNightImage.png";
import Flex from "../Container";
import Text from "../Text";

const TimeDistribution = () => {
  const containerWidth = 650;
  const styles = {
    container: {
      position: CONSTANTS.CSSStyles.GENERIC.RELATIVE,
      borderRadius: Theme.SPACING(20),
      width: Theme.SPACING(containerWidth),
      height: Theme.SPACING(containerWidth * 0.21),
      margin: Theme.SPACING(20),
    },
    content: {
      height: "88%",
    },
    dayNightImage: {
      position: CONSTANTS.CSSStyles.GENERIC.ABSOLUTE,
      borderRadius: Theme.SPACING(20),
      width: Theme.SPACING(containerWidth),
      height: Theme.SPACING(containerWidth * 0.21),
      zIndex: -1,
    },
    meridianContainer: {
      width: "-webkit-fill-available",
      padding: `${Theme.SPACING(16)} ${Theme.SPACING(16)}`,
    },
    meridian: {
      background: Theme.COLORS.shades.color_1,
      opacity: 0.6,
      borderRadius: Theme.SPACING(6),
      padding: `${Theme.SPACING(3)} ${Theme.SPACING(6)}`,
      color: Theme.COLORS.shades.color_8,
      fontWeight: CONSTANTS.CSSStyles.FONTS.BOLD,
    },
    timeDist: {
      cursor: "pointer",
    },
    timeDistLabel: { color: Theme.COLORS.shades.color_8 },
    timeDistIndicator: {
      borderRadius: Theme.SPACING(6),
      background: Theme.COLORS.shades.color_1,
      width: Theme.SPACING(18),
      height: Theme.SPACING(18),
      margin: Theme.SPACING(4),
    },
  };
  return (
    <div style={styles.container}>
      <img src={DayNightImage} alt="Day Night" style={styles.dayNightImage} />
      <Flex
        style={styles.content}
        flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
        justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_BETWEEN}>
        <Flex
          style={styles.meridianContainer}
          justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_BETWEEN}>
          <kbd style={styles.meridian}>AM</kbd>
          <kbd style={styles.meridian}>PM</kbd>
        </Flex>
        <Flex>
          <Flex>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((time) => {
              return (
                <Flex
                  flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
                  style={styles.timeDist}>
                  <div
                    style={{
                      ...styles.timeDistIndicator,
                      opacity: `${Math.random() * 100}%`,
                    }}></div>
                  <Text
                    type={CONSTANTS.CSSStyles.FONTS.ULTRASMALL}
                    weight={CONSTANTS.CSSStyles.FONTS.BOLD}
                    style={styles.timeDistLabel}>
                    {time}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
          <Flex>
            {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((time) => {
              return (
                <Flex
                  flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
                  style={styles.timeDist}>
                  <div
                    style={{
                      ...styles.timeDistIndicator,
                      opacity: `${Math.random() * 100}%`,
                    }}></div>
                  <Text
                    type={CONSTANTS.CSSStyles.FONTS.ULTRASMALL}
                    weight={CONSTANTS.CSSStyles.FONTS.BOLD}
                    style={styles.timeDistLabel}>
                    {time}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default TimeDistribution;
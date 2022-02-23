import { CONSTANTS, RANDOM } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import Flex from "../Container";

const Text = ({
  type = "heading",
  jsx,
  weight = "bold",
  children,
  style,
  className,
  animation = null, // RANDOM(CONSTANTS.CSSStyles.ANIMATION.AOS.SLIDE),
  animationDelay = null,
}) => {
  const properties = Theme.FONTS.cabin[type][weight];
  return (
    <p
      style={{
        color: Theme.COLORS.shades.color_2,
        ...properties,
        ...style,
      }}
      className={className}
      data-aos={animation}
      data-aos-delay={animationDelay}>
      {children}
    </p>
  );
};

export default Text;

export const TextLayout1 = ({
  heading = "This is a heading",
  subText = "This is a subtext",
}) => {
  const styles = {
    text: {
      width: Theme.SPACING(200),
      color: Theme.COLORS.shades.color_2,
      ...CONSTANTS.CSSStyles.FONTS.ELLIPSIS,
    },
  };
  return (
    <Flex
      flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
      alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}
      style={{ marginRight: Theme.SPACING(10) }}>
      <Text
        type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
        weight={CONSTANTS.CSSStyles.FONTS.BOLD}
        style={styles.text}>
        {heading}
      </Text>
      <Text
        type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
        weight={CONSTANTS.CSSStyles.FONTS.REGULAR}
        style={styles.text}>
        {subText}
      </Text>
    </Flex>
  );
};

import Theme from "../../../Utils/theme";
import { BUTTON_CONSTANTS } from "../Button";
import ButtonRippleEffect from "../Button/ButtonRippleEffect";
import Flex from "../Container";

const WebsiteIcon = ({
  icon = "😊",
  name = "Website",
  variant = BUTTON_CONSTANTS.ICON.ULTRA_SMALL,
  style = {},
}) => {
  const borderRadius = style?.borderRadius ? style?.borderRadius : 6;
  const styles = {
    websiteContainer: {
      background: Theme.COLORS.shades.color_7,
      borderRadius: Theme.SPACING(borderRadius),
      padding: Theme.SPACING(2),
      margin: Theme.SPACING(2),
      width: Theme.SPACING(variant),
      height: Theme.SPACING(variant),
      cursor: "pointer",
      ...style,
    },
  };
  return (
    <Flex style={styles.websiteContainer}>
      <ButtonRippleEffect
        borderRadius={borderRadius}
        style={{ width: "100%", height: "100%" }}
      >
        {icon}
      </ButtonRippleEffect>
    </Flex>
  );
};

export default WebsiteIcon;

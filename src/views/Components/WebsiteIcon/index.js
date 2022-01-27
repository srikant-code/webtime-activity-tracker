import Theme from "../../../Utils/theme";
import { BUTTON_CONSTANTS } from "../Button";
import Flex from "../Container";

const WebsiteIcon = ({
  icon = "😊",
  name = "Website",
  variant = BUTTON_CONSTANTS.ICON.ULTRA_SMALL,
  style = {},
}) => {
  const styles = {
    websiteContainer: {
      background: Theme.COLORS.shades.color_7,
      borderRadius: Theme.SPACING(6),
      padding: Theme.SPACING(2),
      margin: Theme.SPACING(2),
      width: Theme.SPACING(variant),
      height: Theme.SPACING(variant),
      cursor: "pointer",
      ...style,
    },
  };
  return <Flex style={styles.websiteContainer}>{icon}</Flex>;
};

export default WebsiteIcon;

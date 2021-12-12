import Theme from "../../../Utils/theme";
import Flex from "../Container";

const WebsiteIcon = ({ icon = "😊", name = "Website" }) => {
  const styles = {
    websiteContainer: {
      background: Theme.COLORS.shades.color_7,
      borderRadius: Theme.SPACING(6),
      padding: Theme.SPACING(2),
      margin: Theme.SPACING(2),
      width: Theme.SPACING(24),
      height: Theme.SPACING(24),
      cursor: "pointer",
    },
  };
  return <Flex style={styles.websiteContainer}>{icon}</Flex>;
};

export default WebsiteIcon;

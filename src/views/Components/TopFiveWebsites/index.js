import Theme from "../../../Utils/theme";
import Flex from "../Container";

const Top5Websites = ({ websites }) => {
  const styles = {
    container: {
      padding: Theme.SPACING(2),
    },
    websiteContainer: {
      background: Theme.COLORS.shades.color_8,
      borderRadius: Theme.SPACING(6),
      padding: Theme.SPACING(2),
      margin: Theme.SPACING(2),
      width: Theme.SPACING(24),
      height: Theme.SPACING(24),
      cursor: "pointer",
    },
  };
  return (
    <Flex style={styles.container}>
      {websites.map((website) => (
        <Flex style={styles.websiteContainer}>😊</Flex>
      ))}
    </Flex>
  );
};

export default Top5Websites;

import Theme from "../../../Utils/theme";
import Flex from "../Container";
import WebsiteIcon from "../WebsiteIcon";

const Top5Websites = ({ websites }) => {
  const styles = {
    container: {
      padding: Theme.SPACING(2),
    },
  };
  return (
    <Flex style={styles.container}>
      {websites.map((website) => (
        <WebsiteIcon icon="😊" name={website} />
      ))}
    </Flex>
  );
};

export default Top5Websites;

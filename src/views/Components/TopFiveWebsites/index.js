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
      {websites.map((website, index) => (
        <WebsiteIcon icon="😊" name={website} key={index} />
      ))}
    </Flex>
  );
};

export default Top5Websites;

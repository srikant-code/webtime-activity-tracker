import { CONSTANTS } from "../../../../Utils/Constants";
import { BUTTON_CONSTANTS } from "../../Button";
import Flex from "../../Container";
import Text from "../../Text";
import WebsiteIcon from "../../WebsiteIcon";

const RenderItem = ({}) => {
  return (
    <Flex>
      <Flex flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}>
        <div>🕔</div>
        <Text
          type={CONSTANTS.CSSStyles.FONTS.SMALL}
          weight={CONSTANTS.CSSStyles.FONTS.BOLD}
        >
          1m
        </Text>
      </Flex>
      <Flex flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}>
        <Text
          type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
          weight={CONSTANTS.CSSStyles.FONTS.BOLD}
        >
          Bladers Ads - Figma
        </Text>
        <Text
          type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
          weight={CONSTANTS.CSSStyles.FONTS.REGULAR}
        >
          figma.com
        </Text>
      </Flex>
      <WebsiteIcon variant={BUTTON_CONSTANTS.ICON.SMALL} />
    </Flex>
  );
};
const RecentList = () => {
  return (
    <Flex flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}>
      <RenderItem />
    </Flex>
  );
};

export default RecentList;

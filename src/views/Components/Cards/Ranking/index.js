import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import { BUTTON_CONSTANTS } from "../../Button";
import Flex from "../../Container";
import Text, { TextLayout1 } from "../../Text";
import WebsiteIcon from "../../WebsiteIcon";
import CardLayout from "../Layout";

const RenderItem = ({ data, index }) => {
  return (
    <Flex
      style={{
        padding: Theme.SPACING(6),
        margin: Theme.SPACING(4),
        background: Theme.COLORS.shades.color_7,
        borderRadius: Theme.SPACING(8),
        cursor: "pointer",
      }}
      className={"cardHover"}
    >
      <Flex
        flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
        style={{
          padding: Theme.SPACING(4),
          marginRight: Theme.SPACING(4),
          width: Theme.SPACING(30),
        }}
      >
        <div>
          {data.currentRank === CONSTANTS.RANK.DECREASE
            ? "🔻"
            : data.currentRank === CONSTANTS.RANK.INCREASE
            ? "🟢"
            : ""}
        </div>
        <Text
          type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
          weight={CONSTANTS.CSSStyles.FONTS.BOLD}
        >
          #{index + 1}
        </Text>
      </Flex>
      <WebsiteIcon
        variant={BUTTON_CONSTANTS.ICON.SMALL}
        style={{ marginRight: Theme.SPACING(8) }}
        icon={data.icon}
      />
      <TextLayout1 heading={data.heading} subText={data.descp} />
    </Flex>
  );
};
const RankingList = ({
  data = [
    {
      heading: "figma.com",
      descp: "23 hours | 67 Productivity Score",
      currentRank: CONSTANTS.RANK.INCREASE,
      icon: "😀",
    },
    {
      heading: "google.com",
      descp: "23 hours | 67 Productivity Score",
      currentRank: CONSTANTS.RANK.INCREASE,
      icon: "😀",
    },
    {
      heading: "figma.com",
      descp: "23 hours | 67 Productivity Score",
      currentRank: CONSTANTS.RANK.DECREASE,
      icon: "😀",
    },
    {
      heading: "google.com",
      descp: "23 hours | 67 Productivity Score",
      currentRank: CONSTANTS.RANK.STABLE,
      icon: "😀",
    },
    {
      heading: "spotify.com",
      descp: "23 hours | 67 Productivity Score",
      currentRank: CONSTANTS.RANK.INCREASE,
      icon: "😀",
    },
  ],
  heading = "Most opened tabs",
}) => {
  return <CardLayout data={data} Component={RenderItem} heading={heading} />;
};

export default RankingList;

import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import { BUTTON_CONSTANTS } from "../../Button";
import Flex from "../../Container";
import Text, { TextLayout1 } from "../../Text";
import WebsiteIcon from "../../WebsiteIcon";
import CardLayout from "../Layout";

const RenderItem = ({ data }) => {
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
          marginRight: Theme.SPACING(8),
          width: Theme.SPACING(30),
        }}
      >
        <div>🕔</div>
        <Text
          type={CONSTANTS.CSSStyles.FONTS.SMALL}
          weight={CONSTANTS.CSSStyles.FONTS.BOLD}
        >
          {data.time}
        </Text>
      </Flex>
      <TextLayout1 heading={data.title} subText={data.domain} />
      <WebsiteIcon variant={BUTTON_CONSTANTS.ICON.SMALL} icon={data.icon} />
    </Flex>
  );
};
const RecentList = ({
  data = [
    {
      domain: "figma.com",
      title: "Bladers Ads - Figma",
      time: "1m",
      icon: "😀",
    },
    {
      domain: "google.com",
      title: "How to create a website with React - Figma",
      time: "2m",
      icon: "😀",
    },
    {
      domain: "figma.com",
      title: "Bladers Beyblade Game UI - Figma",
      time: "3m",
      icon: "😀",
    },
    {
      domain: "google.com",
      title: "Google Ads - Google",
      time: "8m",
      icon: "😀",
    },
    {
      domain: "spotify.com",
      title: "Music player - Spotify",
      time: "10m",
      icon: "😀",
    },
  ],
  heading = "Recently opened tabs",
}) => {
  return <CardLayout data={data} Component={RenderItem} heading={heading} />;
};

export default RecentList;

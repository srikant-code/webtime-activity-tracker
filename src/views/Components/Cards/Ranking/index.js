import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import { BUTTON_CONSTANTS } from "../../Button";
import ButtonRippleEffect from "../../Button/ButtonRippleEffect";
import Flex from "../../Container";
import Text, { TextLayout1 } from "../../Text";
import WebsiteIcon from "../../WebsiteIcon";
import CardLayout from "../Layout";

const RenderItem = ({ data, index }) => {
  return (
    <ButtonRippleEffect
      width={CONSTANTS.CSSStyles.GENERIC.FIT_CONTENT}
      height={CONSTANTS.CSSStyles.GENERIC.FIT_CONTENT}
      borderRadius={8}
      style={{
        margin: Theme.SPACING(2),
      }}
    >
      <Flex
        style={{
          padding: Theme.SPACING(6),
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
            {data.currentRank === CONSTANTS.RANK.DECREASE ? (
              <Traingle variant={CONSTANTS.VARIANTS.ERROR} />
            ) : data.currentRank === CONSTANTS.RANK.INCREASE ? (
              <Traingle variant={CONSTANTS.VARIANTS.SUCCESS} />
            ) : (
              ""
            )}
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
    </ButtonRippleEffect>
  );
};

export const Traingle = ({
  variant = CONSTANTS.VARIANTS.SUCCESS,
  size = 8,
}) => {
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: `${Theme.SPACING(size)} solid ${
          CONSTANTS.CSSStyles.GENERIC.TRANSPARENT
        }`,
        borderRight: `${Theme.SPACING(size)} solid ${
          CONSTANTS.CSSStyles.GENERIC.TRANSPARENT
        }`,
        borderBottom:
          variant === CONSTANTS.VARIANTS.SUCCESS
            ? `${Theme.SPACING(size)} solid ${Theme.COLORS.colors.color_5}`
            : null,
        borderTop:
          variant === CONSTANTS.VARIANTS.ERROR
            ? `${Theme.SPACING(size)} solid ${Theme.COLORS.colors.color_6}`
            : null,
      }}
    ></div>
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
  style = {},
}) => {
  return (
    <CardLayout
      data={data}
      Component={RenderItem}
      heading={heading}
      style={style}
    />
  );
};

export default RankingList;

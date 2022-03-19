import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import Flex from "../../Container";
import Text from "../../Text";
import Top5Websites from "../../TopFiveWebsites";
import VerticalBar from "../../VerticalBar";
import WebsiteIcon from "../../WebsiteIcon";
import CardLayout from "../Layout";

const CSS = CONSTANTS.CSSStyles;
const FLEX = CSS.FLEX;
const FONTS = CSS.FONTS;
const COLORS = Theme.COLORS;
const SPACING = (v) => Theme.SPACING(v);
const PERCENTAGE = (v) => `${v}%`;

const MainStatisticsCard = ({ style = {} }) => {
  const styles = {
    container: {
      borderRadius: SPACING(20),
      background: COLORS.shades.color_8,
      width: SPACING(650),
      height: SPACING(350),
    },
    bottomContainer: {
      borderRadius: SPACING(20),
      background: COLORS.shades.color_6,
      padding: SPACING(20),
      width: PERCENTAGE(100),
      height: PERCENTAGE(20),
    },
    top5Websites: {
      width: PERCENTAGE(95),
      padding: SPACING(4),
    },
    topCategory: {
      background: COLORS.shades.color_8,
      padding: `${SPACING(4)} ${SPACING(8)}`,
      borderRadius: SPACING(8),
      cursor: "pointer",
    },
    maxProdScore: {
      margin: `${SPACING(5)} 0 0 ${SPACING(4)}`,
      color: COLORS.shades.color_4,
    },
    leftText: {
      color: COLORS.shades.color_4,
    },
    verticalBar: {
      height: PERCENTAGE(100),
      margin: SPACING(20),
    },
    cardsContainer: {
      width: PERCENTAGE(100),
      padding: SPACING(24),
    },
  };

  const FlexSpaceBetween = ({ leftText, rightText, children }) => {
    return (
      <>
        <Flex justifyContent={FLEX.SPACE_BETWEEN} style={styles.top5Websites}>
          <Text type={FONTS.SMALL} style={styles.leftText}>
            {leftText}
          </Text>
          <Text type={FONTS.SUB_TEXT}>{rightText}</Text>
        </Flex>
        {children}
      </>
    );
  };

  const TopCategory = () => {
    return (
      <Flex flexFlow={FLEX.COLUMN} justifyContent={FLEX.FLEX_START}>
        <FlexSpaceBetween leftText="Top category" rightText="58.3%">
          <Text type={FONTS.SUB_HEADING} style={styles.topCategory}>
            😂 Category Name
          </Text>
        </FlexSpaceBetween>
      </Flex>
    );
  };

  const TopFiveWebsites = () => {
    return (
      <Flex flexFlow={FLEX.COLUMN} justifyContent={FLEX.FLEX_START}>
        <FlexSpaceBetween leftText="Top 5 websites" rightText="58.3%">
          <Top5Websites
            websites={["figma", "figma", "figma", "figma", "figma"]}
          />
        </FlexSpaceBetween>
      </Flex>
    );
  };

  const ProductivityScoreIndicator = () => {
    return (
      <Flex flexFlow={FLEX.COLUMN} alignItems={FLEX.FLEX_START}>
        <Text type={FONTS.SMALL}>Productivity Score</Text>
        <Flex alignItems={FLEX.FLEX_START}>
          <Text type={FONTS.HEADING_2}>77</Text>
          <Text type={FONTS.SMALL} style={styles.maxProdScore}>
            /100
          </Text>
        </Flex>
      </Flex>
    );
  };

  const TotalTimeAndGraph = () => {
    const TimeText = ({ time = 0, timeText = "hr" }) => {
      return (
        <>
          <Text type={FONTS.HEADING_2} style={stylesLocal.time}>
            {time}
          </Text>
          <Text type={FONTS.SMALL} style={stylesLocal.timeText}>
            {timeText}
          </Text>
        </>
      );
    };
    const stylesLocal = {
      timeText: {
        fontSize: SPACING(40),
        color: COLORS.shades.color_3,
        margin: `0 ${SPACING(12)} ${SPACING(7)} ${SPACING(4)}`,
      },
      time: {
        fontSize: SPACING(56),
        color: COLORS.colors.color_1,
      },
    };
    return (
      <Flex flexFlow={FLEX.COLUMN} alignItems={FLEX.FLEX_START}>
        <Flex>
          <Text type={FONTS.SUB_TEXT} weight={FONTS.REGULAR}>
            Total screen time
          </Text>
          <WebsiteIcon icon="❓" />
        </Flex>
        <Flex alignItems={FLEX.FLEX_END}>
          <TimeText time={12} />
          <TimeText time={3} timeText="min" />
        </Flex>
      </Flex>
    );
  };

  const InfoCards = () => {
    return (
      <Flex style={styles.cardsContainer} justifyContent={FLEX.SPACE_BETWEEN}>
        {cards.map((item, index) => {
          return (
            <Flex
              key={index}
              style={{ flex: 1 }}
              justifyContent={FLEX.SPACE_AROUND}>
              <Flex flexFlow={FLEX.COLUMN} alignItems={FLEX.FLEX_START}>
                <Text type={FONTS.SMALL} style={styles.leftText}>
                  {item.heading}
                </Text>
                <Flex>
                  <WebsiteIcon icon={item.icon} />
                  <Text type={FONTS.SUB_TEXT}>{item.value}</Text>
                </Flex>
              </Flex>
              {index !== cards.length - 1 ? (
                <VerticalBar style={{ height: SPACING(50) }} />
              ) : (
                <></>
              )}
            </Flex>
          );
        })}
      </Flex>
    );
  };

  const cards = [
    {
      heading: "Total visits",
      value: "58",
      icon: "👌",
    },
    {
      heading: "Total Idle Time",
      value: "30min",
      icon: "🤦‍♀️",
    },
    {
      heading: "Most active time",
      value: "4-5pm",
      icon: "🎉",
    },
    {
      heading: "Most active day",
      value: "Saturdays",
      icon: "💖",
    },
    {
      heading: "In Top 5",
      value: "5 times",
      icon: "👀",
    },
  ];

  return (
    <CardLayout heading="Today's Summary" style={style}>
      <Flex style={styles.container} alignContent={FLEX.FLEX_END}>
        <TotalTimeAndGraph />
        <InfoCards />
        <Flex style={styles.bottomContainer}>
          <ProductivityScoreIndicator />
          <VerticalBar style={styles.verticalBar} />
          <TopFiveWebsites />
          <VerticalBar style={styles.verticalBar} />
          <TopCategory />
        </Flex>
      </Flex>
    </CardLayout>
  );
};

export default MainStatisticsCard;

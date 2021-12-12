import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import Flex from "../../Container";
import Text from "../../Text";
import Top5Websites from "../../TopFiveWebsites";
import VerticalBar from "../../VerticalBar";
import WebsiteIcon from "../../WebsiteIcon";

const MainStatisticsCard = () => {
  const styles = {
    container: {
      borderRadius: Theme.SPACING(20),
      background: Theme.COLORS.shades.color_8,
      width: Theme.SPACING(650),
      height: Theme.SPACING(350),
    },
    bottomContainer: {
      borderRadius: Theme.SPACING(20),
      background: Theme.COLORS.shades.color_6,
      padding: Theme.SPACING(20),
      width: "100%",
      height: "20%",
    },
    top5Websites: {
      width: "95%",
      padding: Theme.SPACING(4),
    },
    topCategory: {
      background: Theme.COLORS.shades.color_8,
      padding: `${Theme.SPACING(4)} ${Theme.SPACING(8)}`,
      borderRadius: Theme.SPACING(8),
      cursor: "pointer",
    },
    maxProdScore: {
      margin: `${Theme.SPACING(5)} 0 0 ${Theme.SPACING(4)}`,
      color: Theme.COLORS.shades.color_4,
    },
    leftText: {
      color: Theme.COLORS.shades.color_4,
    },
    verticalBar: {
      height: "100%",
      margin: Theme.SPACING(20),
    },
    cardsContainer: {
      width: "100%",
      padding: Theme.SPACING(24),
    },
  };

  const FlexSpaceBetween = ({ leftText, rightText, children }) => {
    return (
      <>
        <Flex
          justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_BETWEEN}
          style={styles.top5Websites}>
          <Text type={CONSTANTS.CSSStyles.FONTS.SMALL} style={styles.leftText}>
            {leftText}
          </Text>
          <Text type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}>{rightText}</Text>
        </Flex>
        {children}
      </>
    );
  };

  const TopCategory = () => {
    return (
      <Flex
        flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
        justifyContent={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
        <FlexSpaceBetween leftText="Top category" rightText="58.3%">
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SUB_HEADING}
            style={styles.topCategory}>
            😂 Category Name
          </Text>
        </FlexSpaceBetween>
      </Flex>
    );
  };

  const TopFiveWebsites = () => {
    return (
      <Flex
        flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
        justifyContent={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
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
      <Flex
        flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
        alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
        <Text type={CONSTANTS.CSSStyles.FONTS.SMALL}>Productivity Score</Text>
        <Flex alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
          <Text type={CONSTANTS.CSSStyles.FONTS.HEADING_2}>77</Text>
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SMALL}
            style={styles.maxProdScore}>
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
          <Text
            type={CONSTANTS.CSSStyles.FONTS.HEADING_2}
            style={stylesLocal.time}>
            {time}
          </Text>
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SMALL}
            style={stylesLocal.timeText}>
            {timeText}
          </Text>
        </>
      );
    };
    const stylesLocal = {
      timeText: {
        fontSize: Theme.SPACING(40),
        color: Theme.COLORS.shades.color_3,
        margin: `0 ${Theme.SPACING(12)} ${Theme.SPACING(7)} ${Theme.SPACING(
          4
        )}`,
      },
      time: {
        fontSize: Theme.SPACING(56),
        color: Theme.COLORS.colors.color_1,
      },
    };
    return (
      <Flex
        flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
        alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
        <Flex>
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
            weight={CONSTANTS.CSSStyles.FONTS.REGULAR}>
            Total screen time
          </Text>
          <WebsiteIcon icon="❓" />
        </Flex>
        <Flex alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_END}>
          <TimeText time={12} />
          <TimeText time={3} timeText="min" />
        </Flex>
      </Flex>
    );
  };

  const InfoCards = () => {
    return (
      <Flex
        style={styles.cardsContainer}
        justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_BETWEEN}>
        {cards.map((item, index) => {
          return (
            <>
              <Flex
                flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
                alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
                <Text
                  type={CONSTANTS.CSSStyles.FONTS.SMALL}
                  style={styles.leftText}>
                  {item.heading}
                </Text>
                <Flex>
                  <WebsiteIcon icon={item.icon} />
                  <Text type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}>
                    {item.value}
                  </Text>
                </Flex>
              </Flex>
              {index !== cards.length - 1 ? (
                <VerticalBar style={{ height: Theme.SPACING(50) }} />
              ) : (
                <></>
              )}
            </>
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
    <Flex
      style={styles.container}
      alignContent={CONSTANTS.CSSStyles.FLEX.FLEX_END}>
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
  );
};

export default MainStatisticsCard;

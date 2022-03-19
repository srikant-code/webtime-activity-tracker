import RelatedWebsitesCard from ".";
import { CalcTopWebsites } from "../../../../frontend";
import { CONSTANTS, USER_DATA } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import Flex from "../../Container";
import CardLayout from "../Layout";
import dayMock from "../../../SampleJSON/day";
import Text from "../../Text";
import WebsiteIcon from "../../WebsiteIcon";
import { useEffect, useState } from "react";
import Tabs from "../../Tabs";

const TopWebsitesContainer = ({ style, heading = "Top sites (today)" }) => {
  const styles = {
    container: {
      background: Theme.COLORS.shades.color_8,
      borderRadius: Theme.SPACING(16),
      padding: Theme.SPACING(5),
      width: "100%",
    },
  };
  const CALC_BY = {
    TIME_SPENT: "totalTimeSpent",
    PROD_SCORE: "productivityScore",
    IDLE_TIME: "totalIdleTime",
    NEW_LINKS: "totalNewLinks",
    SUB_LINKS: "totalSubLinks",
    VISIT_COUNT: "totalVisitCount",
  };
  const [top5ByTime, setTop5ByTime] = useState({});
  const [sortTop5By, setSortTop5By] = useState(CALC_BY.TIME_SPENT);

  useEffect(() => {
    const top5bytime = CalcTopWebsites(
      dayMock ? dayMock["01/January/2021"]?.domains : {},
      sortTop5By
      // USER_DATA?.dayStats ? USER_DATA?.dayStats["01/January/2021"]?.domains : {}
    );
    setTop5ByTime(top5bytime);
    console.log(top5bytime, dayMock, "hello");
  }, [sortTop5By]);

  const RenderRow = ({ data, topValue, index }) => {
    const styles = {
      websiteName: {
        color: Theme.COLORS.shades.color_8,
        width: "75%",
        ...CONSTANTS.CSSStyles.FONTS.ELLIPSIS,
      },
      percentage: {},
      dataContainer: {
        paddingLeft: Theme.SPACING(8),
      },
      value: {
        color: Theme.COLORS.shades.color_4,
      },
    };
    return (
      <Flex
        style={{ width: "100%" }}
        flexFlow={"row"}
        justifyContent={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
        <Text type={CONSTANTS.CSSStyles.FONTS.SUB_HEADING}>#{index + 1}</Text>
        <Flex
          justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_BETWEEN}
          flexFlow={"row"}
          style={{
            borderRadius: Theme.SPACING(30),
            background: Theme.COLORS.colors.color_1,
            width: `${(data.percentage / topValue) * 100 * 0.75}%`,
            padding: `${Theme.SPACING(6)} ${Theme.SPACING(20)}`,
            margin: Theme.SPACING(5),
            transition: CONSTANTS.CSSStyles.ANIMATION.POINT3,
          }}>
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
            style={styles.websiteName}>
            {data.website}
          </Text>
          <WebsiteIcon icon="😁" />
        </Flex>
        <Flex
          flexFlow="column"
          style={styles.dataContainer}
          alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
            style={styles.percentage}>
            {data.percentage}%
          </Text>
          <Text type={CONSTANTS.CSSStyles.FONTS.SMALL} style={styles.value}>
            {data.value} sec
          </Text>
        </Flex>
      </Flex>
    );
  };
  return (
    <CardLayout
      style={{ minWidth: Theme.SPACING(600), ...style }}
      heading={heading}>
      <Flex flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN} style={styles.container}>
        <Tabs
          items={[
            {
              buttonText: "By time spent",
              path: "#",
              onclick: () => {
                setSortTop5By(CALC_BY.TIME_SPENT);
              },
            },
            {
              buttonText: "By productivity score",
              path: "#",
              onclick: () => {
                setSortTop5By(CALC_BY.VISIT_COUNT);
              },
            },
          ]}
          style={{ width: "100%", background: Theme.COLORS.shades.color_8 }}
          linkStyles={{ flex: 1 }}
          buttonStyles={{ width: "100%" }}
        />
        <Flex
          style={{ width: "100%" }}
          flexFlow={"column"}
          alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
          {top5ByTime.top &&
            top5ByTime?.top?.map((item, index) => {
              return (
                <RenderRow
                  key={index}
                  data={item}
                  index={index}
                  topValue={top5ByTime.top[0].percentage}
                />
              );
            })}
        </Flex>
      </Flex>
    </CardLayout>
  );
};

export default TopWebsitesContainer;

{
  /* <RelatedWebsitesCard
  heading=""
  data={[
    {
      icon: "😁",
      text: "figmaafukdhsgkkjfjdshagjjhgkjljhl.com",
      topText: "#1",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#2",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#3",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#4",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#5",
    },
  ]}
/>
<RelatedWebsitesCard
  heading=""
  data={[
    {
      icon: "😁",
      text: "figmaafukdhsgkkjfjdshagjjhgkjljhl.com",
      topText: "#1",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#2",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#3",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#4",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#5",
    },
  ]}
/> */
}

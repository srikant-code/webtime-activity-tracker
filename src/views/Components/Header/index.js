import { useEffect, useState } from "react";
import { CONSTANTS, ROUTES, USER_DATA } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import CustomButton from "../Button";
import Flex from "../Container";
import Text from "../Text";
import Gradient from "../../Assets/Images/gradient.jpg";
import { Link } from "react-router-dom";
import dayMock from "../../SampleJSON/day";
import monthMock from "../../SampleJSON/month";
import tabMock from "../../SampleJSON/tab";
import weekMock from "../../SampleJSON/week";
import CustomLink from "../Link";

const Header = ({ name = "Srikant" }) => {
  const [allData, setAllData] = useState({});
  const loadMockData = () => {
    USER_DATA.DAY_DATA = dayMock;
    USER_DATA.WEEK_DATA = weekMock;
    USER_DATA.MONTH_DATA = monthMock;
    USER_DATA.TAB_DATA = tabMock;
    return {
      dayStats: dayMock,
      tabStats: tabMock,
      weekStats: weekMock,
      monthStats: monthMock,
      categories: {},
    };
  };
  useEffect(() => {
    try {
      setAllData(loadMockData());
      chrome.runtime.sendMessage(
        { command: "GET_ALL_DATA" },
        function (response) {
          console.log(`message from background:`, response);
          setAllData(response);
        }
      );
    } catch (e) {
      console.log(
        JSON.stringify(e),
        "backend is not connected. Outside chrome environment"
      );
    }
  }, []);
  console.log(allData, "All Data");
  return (
    <>
      <Flex>
        <CustomLink to={ROUTES.INDEX}>
          <CustomButton style={{ padding: 0 }}>
            <div
              style={{
                backgroundImage: `url(${Gradient})`,
                backgroundPosition: `center center`,
                backgroundSize: "cover",
                borderRadius: Theme.SPACING(8),
                width: Theme.SPACING(60),
                height: Theme.SPACING(60),
              }}></div>
          </CustomButton>
        </CustomLink>
        <Flex
          flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
          alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
          <Text
            type={CONSTANTS.CSSStyles.FONTS.HEADING}
            weight={CONSTANTS.CSSStyles.FONTS.BOLD}>
            Hi {name}
          </Text>
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
            weight={CONSTANTS.CSSStyles.FONTS.REGULAR}>
            Productivity Tip: 💡
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;

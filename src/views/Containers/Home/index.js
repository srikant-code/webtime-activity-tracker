import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import CustomButton, { BUTTON_CONSTANTS } from "../../Components/Button";
import ButtonRippleEffect from "../../Components/Button/ButtonRippleEffect";
import CalenderSidebar from "../../Components/CalenderSidebar";
import MainStatisticsCard from "../../Components/Cards/MainStatisticsCard";
import RankingList from "../../Components/Cards/Ranking";
import RecentList from "../../Components/Cards/Recent";
import RelatedWebsitesCard from "../../Components/Cards/Top10";
import Flex from "../../Components/Container";
import Header from "../../Components/Header";
import HexagonIntrestWheel from "../../Components/HexagonIntrestWheel";
import CustomTextArea from "../../Components/MarkDownTextArea";
import DaysHoursLeftProgressBar from "../../Components/Progress/DaysLeft";
import Tabs from "../../Components/Tabs";

const RenderHeader = () => {
  return (
    <Flex
      justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_BETWEEN}
      style={{ width: "100%" }}
    >
      <Header />
      <Tabs />
      <Flex>
        <CustomButton
          text="Upgrade to PRO🎁"
          variant={BUTTON_CONSTANTS.OUTLINED}
          style={{
            color: Theme.COLORS.colors.color_1,
            fontWeight: CONSTANTS.CSSStyles.FONTS.BOLD,
          }}
        />
        <CustomButton text="🎁" variant={BUTTON_CONSTANTS.ICON.LARGE} />
        <CustomButton text="🏆" variant={BUTTON_CONSTANTS.ICON.LARGE} />
        <CustomButton text="⚙" variant={BUTTON_CONSTANTS.ICON.LARGE} />
      </Flex>
    </Flex>
  );
};
const CustomFlex = ({ children, style }) => {
  return (
    <Flex
      justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_AROUND}
      alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}
      style={{ width: "100%", ...style }}
    >
      {children}
    </Flex>
  );
};
const HomeScreen = () => {
  const styles = {
    gap: { margin: Theme.SPACING(8) },
  };
  return (
    <Flex
      flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
      style={{ padding: Theme.SPACING(30) }}
    >
      <RenderHeader />
      <CustomFlex style={{ paddingTop: Theme.SPACING(30), flexFlow: "row" }}>
        <CalenderSidebar style={styles.gap} />
        <Flex flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}>
          <CustomFlex>
            <Flex flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}>
              <DaysHoursLeftProgressBar
                style={{ ...styles.gap, width: "97%" }}
              />
              <MainStatisticsCard style={styles.gap} />
            </Flex>
            <RecentList style={styles.gap} />
            <RankingList style={styles.gap} />
          </CustomFlex>
          <CustomFlex>
            <RelatedWebsitesCard
              style={{ ...styles.gap, marginTop: Theme.SPACING(20) }}
            />
            <CustomTextArea style={{ ...styles.gap, width: "50%" }} />
          </CustomFlex>
        </Flex>
      </CustomFlex>
      <Flex>
        <HexagonIntrestWheel />
      </Flex>
    </Flex>
  );
};

export default HomeScreen;

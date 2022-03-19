import { CONSTANTS, ROUTES } from "../../../Utils/Constants";
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
import SearchBar from "../../Components/SearchBar";
import Tabs from "../../Components/Tabs";
import { Link } from "react-router-dom";
import CustomLink from "../../Components/Link";

export const RenderHeader = () => {
  return (
    <Flex
      justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_BETWEEN}
      style={{ width: "100%" }}>
      <Header />
      <Tabs />
      <Flex>
        <CustomLink to={ROUTES.UPGRADE_TO_PRO}>
          <CustomButton
            text="Upgrade to PRO🎁"
            variant={BUTTON_CONSTANTS.OUTLINED}
            style={{
              color: Theme.COLORS.colors.color_1,
              fontWeight: CONSTANTS.CSSStyles.FONTS.BOLD,
            }}
          />
        </CustomLink>
        <CustomLink to={ROUTES.ACHIEVEMENTS}>
          <CustomButton text="🏆" variant={BUTTON_CONSTANTS.ICON.LARGE} />
        </CustomLink>
        <CustomLink to={ROUTES.SETTINGS}>
          <CustomButton text="⚙" variant={BUTTON_CONSTANTS.ICON.LARGE} />
        </CustomLink>
      </Flex>
    </Flex>
  );
};
const CustomFlex = ({ children, style }) => {
  return (
    <Flex
      justifyContent={CONSTANTS.CSSStyles.FLEX.SPACE_AROUND}
      alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}
      style={{ width: "100%", ...style }}>
      {children}
    </Flex>
  );
};
const SiteStatisticsContainer = () => {
  const styles = {
    gap: { margin: Theme.SPACING(8) },
  };
  return (
    <Flex flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}>
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
            <Flex flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}>
              <SearchBar style={{ ...styles.gap, width: "97%" }} />
              <Flex>
                <RecentList style={styles.gap} />
                <RankingList style={styles.gap} />
              </Flex>
            </Flex>
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

export default SiteStatisticsContainer;

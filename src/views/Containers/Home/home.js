import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import MainStatisticsCard from "../../Components/Cards/MainStatisticsCard";
import RankingList from "../../Components/Cards/Ranking";
import RecentList from "../../Components/Cards/Recent";
import TopWebsitesContainer from "../../Components/Cards/Top10/container";
import Flex from "../../Components/Container";
import CustomTextArea from "../../Components/MarkDownTextArea";
import DaysHoursLeftProgressBar from "../../Components/Progress/DaysLeft";
import SearchBar from "../../Components/SearchBar";
const Home = () => {
  const styles = {
    gap: { margin: Theme.SPACING(8) },
  };
  return (
    <Flex
      justifyContent={CONSTANTS.CSSStyles.FLEX.FLEX_START}
      alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}
      style={{ width: "100%" }}>
      <Flex flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN} style={{ flex: 1 }}>
        <DaysHoursLeftProgressBar style={{ ...styles.gap, width: "97%" }} />
        <MainStatisticsCard style={{ ...styles.gap }} />
        <Flex>
          <RecentList style={{ ...styles.gap }} />
          <RankingList style={{ ...styles.gap }} />
        </Flex>
        <TopWebsitesContainer style={{ ...styles.gap }} />
      </Flex>
      <Flex
        flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
        style={{
          minWidth: Theme.SPACING(600),
          flex: 1,
          background: Theme.COLORS.shades.color_8,
          borderRadius: Theme.SPACING(20),
          padding: Theme.SPACING(10),
          height: "100%",
        }}>
        <SearchBar style={{ ...styles.gap, width: "97%" }} />
        <CustomTextArea style={{ ...styles.gap, width: "97%" }} />
      </Flex>
    </Flex>
  );
};
export default Home;

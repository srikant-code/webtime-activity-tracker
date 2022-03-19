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

const InterestsContainer = () => {
  const styles = {
    gap: { margin: Theme.SPACING(8) },
  };
  return (
    <Flex>
      <HexagonIntrestWheel />
    </Flex>
  );
};

export default InterestsContainer;

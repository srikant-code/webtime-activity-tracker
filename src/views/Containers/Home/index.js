import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import CustomButton, { BUTTON_CONSTANTS } from "../../Components/Button";
import RecentList from "../../Components/Cards/Recent";
import Flex from "../../Components/Container";
import Header from "../../Components/Header";
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

const HomeScreen = () => {
  return (
    <Flex
      flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}
      style={{ padding: Theme.SPACING(30) }}
    >
      <RenderHeader />
      <RecentList />
    </Flex>
  );
};

export default HomeScreen;

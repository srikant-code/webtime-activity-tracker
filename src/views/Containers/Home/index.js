import { Outlet } from "react-router-dom";
import { CONSTANTS, ROUTES } from "../../../Utils/Constants";
import Flex from "../../Components/Container";
import Tabs from "../../Components/Tabs";

const HomeScreen = () => {
  return (
    <Flex
      alignItems={CONSTANTS.CSSStyles.FLEX.FLEX_START}
      flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN}>
      <Tabs
        items={[
          {
            buttonText: "Home",
            path: ROUTES.INDEX,
          },
          {
            buttonText: "All Statistics",
            path: ROUTES.ALL_STATS,
          },
          {
            buttonText: "Sites Statistics",
            path: ROUTES.SITE_STATS,
          },
          {
            buttonText: "Categories",
            path: ROUTES.INTERESTS,
          },
        ]}
      />
      <Outlet />
    </Flex>
  );
};

export default HomeScreen;

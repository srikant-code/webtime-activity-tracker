import Flex from "../../Components/Container";
import Text from "../../Components/Text";
import SettingsLayout from "../../Containers/SettingsLayout";

const Achievements = () => {
  return (
    <SettingsLayout
      heading={"Acheivements"}
      contentList={[
        {
          heading: "Contents",
          subItems: [
            { name: "All", active: true },
            { name: "Locked" },
            { name: "FAQ" },
          ],
        },
      ]}
    />
  );
};

export default Achievements;

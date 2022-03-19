import Flex from "../../Components/Container";
import Text from "../../Components/Text";
import SettingsLayout from "../../Containers/SettingsLayout";

const UpgradeToPro = () => {
  return (
    <SettingsLayout
      heading={"Upgrade to Pro"}
      contentList={[
        {
          heading: "Contents",
          subItems: [
            { name: "Pricing", active: true },
            { name: "Comparision" },
            { name: "FAQ" },
            { name: "Feature List" },
          ],
        },
      ]}
    />
  );
};

export default UpgradeToPro;

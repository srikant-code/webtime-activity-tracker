import { CONSTANTS, USER_DATA } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import Flex from "../Container";
import Text from "../Text";
import DayNightImage from "../../Assets/Images/gradientComingSoon.png";
import Vibrant from "node-vibrant";
import { useEffect } from "react";
import ColourPalette from "../ColourPalette";

const ComingSoon = ({ heading = "Heading" }) => {
  const styles = {
    container: {
      width: "100%",
      alignItems: CONSTANTS.CSSStyles.FLEX.FLEX_START,
    },
    comingSoon: {
      height: Theme.SPACING(80),
      width: "100%",
      background: Theme.COLORS.shades.color_5,
      borderRadius: Theme.SPACING(20),
      margin: `${Theme.SPACING(20)} 0`,
      backgroundImage: `url(${DayNightImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };
  // useEffect(() => {
  //   Vibrant.from("../../Assets/Images/gradientComingSoon.png")
  //     .getPalette()
  //     .then((palette) => console.log(palette, "feaj"));

  // });
  return (
    <Flex flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN} style={styles.container}>
      <ColourPalette />
      <Text type={CONSTANTS.CSSStyles.FONTS.HEADING_2}>{heading}</Text>
      <Flex style={styles.comingSoon}>
        <Text type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}>⏳ Coming Soon</Text>
      </Flex>
    </Flex>
  );
};

export default ComingSoon;

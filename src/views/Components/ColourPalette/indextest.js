import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import Flex from "../Container";
import Text from "../Text";
import DayNightImage from "../../Assets/Images/gradient.jpg";
// import DayNightImage from "../../Assets/Images/gradientComingSoon.png";
// import DayNightImage from "../../Assets/Images/dayNightImage.png";
import Vibrant from "node-vibrant";
import { useEffect, useState } from "react";
// "https://s3-alpha.figma.com/profile/a4449dd5-e74c-4507-9ac5-42c69f374a76"
const ColourPalette = ({
  // "https://www.figma.com/file/HlXRUapesEil60OHYMn4iB/thumbnail?ver=thumbnails/bf372803-6e09-47c4-aa3d-52b6e8150453"
  // "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196"
  // "https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico"
  image = "https://srikantsahoo.vercel.app/images/profile.jpg",
  // image = "https://static.figma.com/app/icon/1/favicon.ico",
  // DayNightImage
}) => {
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
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    colour: (rgb) => {
      return {
        background: rgb,
        // background: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
        width: Theme.SPACING(25),
        height: Theme.SPACING(25),
        borderRadius: Theme.SPACING(25),
        margin: Theme.SPACING(4),
        cursor: "pointer",
      };
    },
    colourContainer: {
      ...Theme.COLORS.effects.circleShadow,
      borderRadius: Theme.SPACING(100),
      padding: Theme.SPACING(10),
    },
  };
  const [palette, setPalette] = useState({});
  const [isLoading, setLoading] = useState({});
  const whiteRGB = [255, 255, 255];

  const getPalette = (imageSrc) => {
    Vibrant.from(imageSrc)
      .maxColorCount(200)
      .getPalette()
      .then((palette) => {
        const colors = [];
        let number = 0;
        for (let color in palette) {
          number = number + 1;
          const type = color;
          const typeTextColor = palette[color].getTitleTextColor();
          const hex = palette[color].getHex();
          const hexTextColor = palette[color].getBodyTextColor();
          // const name = getColorName(hex)
          const nameTextColor = palette[color].getBodyTextColor();
          colors.push({
            number,
            type,
            typeTextColor,
            hex,
            hexTextColor,
            nameTextColor,
          });
        }
        console.log(colors);
        setPalette(colors);
      });
  };
  const randomImage = async () => {
    setLoading(true);
    fetch(image)
      .then((response) => {
        getPalette(response.url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function submit() {
    randomImage();
  }
  return (
    // <Flex flexFlow={CONSTANTS.CSSStyles.FLEX.COLUMN} style={styles.container}>
    //     <Text type={CONSTANTS.CSSStyles.FONTS.HEADING_2}>{heading}</Text>
    //     <Flex style={styles.comingSoon}>
    //         <Text type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}>⏳ Coming Soon</Text>
    //     </Flex>
    // </Flex>
    <Flex>
      <button onClick={(e) => submit()}>Generate Palette</button>
      <div style={styles.comingSoon}></div>
      <Flex style={styles.colourContainer}>
        <div
          style={styles.colour(
            palette[0]?.hex ? palette[0]?.hex : whiteRGB
          )}></div>
        <div
          style={styles.colour(
            palette[1]?.hex ? palette[1]?.hex : whiteRGB
          )}></div>
        <div
          style={styles.colour(
            palette[2]?.hex ? palette[2]?.hex : whiteRGB
          )}></div>
        <div
          style={styles.colour(
            palette[3]?.hex ? palette[3]?.hex : whiteRGB
          )}></div>
        <div
          style={styles.colour(
            palette[4]?.hex ? palette[4]?.hex : whiteRGB
          )}></div>
        <div
          style={styles.colour(
            palette[5]?.hex ? palette[5]?.hex : whiteRGB
          )}></div>
      </Flex>
      {/* <Flex style={styles.colourContainer}>
                <div style={styles.colour(palette?.DarkMuted ? palette?.DarkMuted?.rgb : whiteRGB)}></div>
                <div style={styles.colour(palette?.DarkVibrant ? palette?.DarkVibrant?.rgb : whiteRGB)}></div>
                <div style={styles.colour(palette?.LightMuted ? palette?.LightMuted?.rgb : whiteRGB)}></div>
                <div style={styles.colour(palette?.LightVibrant ? palette?.LightVibrant?.rgb : whiteRGB)}></div>
                <div style={styles.colour(palette?.Muted ? palette?.Muted?.rgb : whiteRGB)}></div>
                <div style={styles.colour(palette?.Vibrant ? palette?.Vibrant?.rgb : whiteRGB)}></div>
            </Flex> */}
    </Flex>
  );
};

export default ColourPalette;

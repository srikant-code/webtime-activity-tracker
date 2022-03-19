import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import Flex from "../Container";
import Text from "../Text";
import Vibrant from "node-vibrant";
import { useEffect, useState } from "react";

const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;

const ColourPalette = ({
  image, // = "https://srikantsahoo.vercel.app/images/profile.jpg",
  colors = [
    randomHex(),
    randomHex(),
    randomHex(),
    randomHex(),
    randomHex(),
    randomHex(),
  ],
  variant, ///= "ASf",
  ...other
}) => {
  const styles = {
    container: {
      width: "100%",
      alignItems: CONSTANTS.CSSStyles.FLEX.FLEX_START,
    },
    colour: (hex) => {
      return {
        background: hex,
        width: Theme.SPACING(25),
        height: Theme.SPACING(25),
        borderRadius: variant ? Theme.SPACING(8) : Theme.SPACING(25),
        margin: Theme.SPACING(4),
        cursor: "pointer",
      };
    },
    colourContainer: {
      // ...Theme.COLORS.effects.circleShadow,
      background: Theme.COLORS.shades.color_8,
      borderRadius: variant ? Theme.SPACING(12) : Theme.SPACING(100),
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

  useEffect(() => {
    if (image) randomImage();
  }, []);
  return (
    <Flex {...other}>
      {colors ? (
        <Flex style={styles.colourContainer}>
          {colors.map((item, index) => {
            return <div style={styles.colour(item)} title={item} key={index} />;
          })}
        </Flex>
      ) : (
        <Flex style={styles.colourContainer}>
          {[0, 1, 2, 3, 4, 5].map((item, index) => {
            return (
              <div
                style={styles.colour(
                  palette[item]?.hex ? palette[item]?.hex : whiteRGB
                )}
                key={index}
              />
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

export default ColourPalette;

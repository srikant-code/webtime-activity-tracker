import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import Flex from "../Container";
import Text from "../Text";
import DayNightImage from "../../Assets/Images/gradient.jpg";
// import DayNightImage from "../../Assets/Images/gradientComingSoon.png";
// import DayNightImage from "../../Assets/Images/dayNightImage.png";
import Vibrant from "node-vibrant";
import { useEffect, useState } from "react";

const ColourPalette = ({ image = DayNightImage }) => {
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
                background: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
                width: Theme.SPACING(25),
                height: Theme.SPACING(25),
                borderRadius: Theme.SPACING(25),
                margin: Theme.SPACING(4),
                cursor: "pointer",
            }
        },
        colourContainer: {
            ...Theme.COLORS.effects.circleShadow,
            borderRadius: Theme.SPACING(100),
            padding: Theme.SPACING(10),
        }
    };
    const [palette, setPalette] = useState({});
    const whiteRGB = [255, 255, 255];
    async function submit() {
        const paletteData = await Vibrant.from(image).getPalette();
        setPalette(paletteData);
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
                <div style={styles.colour(palette?.DarkMuted ? palette?.DarkMuted?.rgb : whiteRGB)}></div>
                <div style={styles.colour(palette?.DarkVibrant ? palette?.DarkVibrant?.rgb : whiteRGB)}></div>
                <div style={styles.colour(palette?.LightMuted ? palette?.LightMuted?.rgb : whiteRGB)}></div>
                <div style={styles.colour(palette?.LightVibrant ? palette?.LightVibrant?.rgb : whiteRGB)}></div>
                <div style={styles.colour(palette?.Muted ? palette?.Muted?.rgb : whiteRGB)}></div>
                <div style={styles.colour(palette?.Vibrant ? palette?.Vibrant?.rgb : whiteRGB)}></div>
            </Flex>
        </Flex>
    );
};

export default ColourPalette;

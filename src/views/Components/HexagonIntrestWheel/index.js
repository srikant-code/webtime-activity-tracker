import { useEffect } from "react";
import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import Flex from "../Container";

const HexagonIntrestWheel = ({ style }) => {
  const CSS = CONSTANTS.CSSStyles;
  const SPACING = (v) => Theme.SPACING(v);
  const COLORS = Theme.COLORS;
  const PERCENTAGE = (v) => `${v}%`;
  const commonCircleStyles = (dim) => {
    return {
      width: PERCENTAGE(dim),
      height: PERCENTAGE(dim),
      position: CSS.GENERIC.ABSOLUTE,
      borderRadius: PERCENTAGE(100),
      border: `${SPACING(1)} solid ${COLORS.shades.color_5}`,
      background: COLORS.shades.color_8,
    };
  };
  const commonLineStyles = (angle) => {
    return {
      width: PERCENTAGE(100),
      position: CSS.GENERIC.ABSOLUTE,
      border: `${SPACING(0.5)} solid ${COLORS.shades.color_5}`,
      transform: `rotate(${angle}deg)`,
    };
  };

  const styles = {
    container: {
      position: CSS.GENERIC.RELATIVE,
      height: SPACING(700),
      minWidth: SPACING(700),
      width: PERCENTAGE(100),
    },
    circle1: {
      ...commonCircleStyles(100),
      opacity: 0.25,
    },
    circle2: {
      ...commonCircleStyles(70),
      opacity: 0.5,
    },
    circle3: {
      ...commonCircleStyles(50),
      ...COLORS.effects.circleShadow,
    },
    circle4: {
      ...commonCircleStyles(40),
      ...COLORS.effects.circleShadow,
    },
    circle5: {
      ...commonCircleStyles(30),
      ...COLORS.effects.circleShadow,
    },
    circle6: {
      ...commonCircleStyles(20),
      ...COLORS.effects.circleShadow,
    },
    line1: { ...commonLineStyles(0) },
    line2: { ...commonLineStyles(60) },
    line3: { ...commonLineStyles(120) },
    shape1: {
      clipPath: `polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)`,
      position: CSS.GENERIC.ABSOLUTE,
      border: `${SPACING(0.5)} solid ${COLORS.shades.color_5}`,
    },
  };
  const css = `
  .hexagon {
    display:inline-block;
    width:${PERCENTAGE(50)};
    height:${PERCENTAGE(50)};
    color:${COLORS.colors.color_1};
    margin:20px;
    opacity: 0.5;
    filter:url(#round);
  }
  .hexagon::before {
     content:"";
     display:block;
     padding-top:${PERCENTAGE(100)};
     background:currentColor;
     clip-path: polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%);
    }`;
  // clip-path: polygon(27% 16%, 75% 14%, 100% 50%, 75% 100%, 44% 58%, 0% 50%);
  // clip-path: polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%);
  useEffect(() => {
    document.getElementById("roundSVG").innerHTML = `
    <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
            <filter id="round">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />    
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
        </defs>
    </svg>
    `;
  }, []);
  return (
    <>
      <style>{css}</style>
      <div id="roundSVG"></div>
      <Flex style={{ ...styles.container, ...style }}>
        <div style={styles.circle1}></div>
        <div style={styles.circle2}></div>
        <div style={styles.circle3}></div>
        <div style={styles.circle4}></div>
        <div style={styles.circle5}></div>
        <div style={styles.circle6}></div>
        <div style={styles.line1}></div>
        <div style={styles.line2}></div>
        <div style={styles.line3}></div>
        <div className="hexagon"></div>
      </Flex>
    </>
  );
};

export default HexagonIntrestWheel;

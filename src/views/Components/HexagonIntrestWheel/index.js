import { useEffect } from "react";
import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import Flex from "../Container";
import Text from "../Text";
import WebsiteIcon from "../WebsiteIcon";
import InterestController from "./Interests";
import Gradient from "../../Assets/Images/gradient.jpg";

const CSS = CONSTANTS.CSSStyles;
const FLEX = CSS.FLEX;
const SPACING = (v) => Theme.SPACING(v);
const COLORS = Theme.COLORS;
const PERCENTAGE = (v) => `${v}%`;

const HexagonWheel = ({ style }) => {
  const QUAD = {
    FIRST: "FIRST",
    SECOND: "SECOND",
    THIRD: "THIRD",
    FOURTH: "FOURTH",
    POS: "POS",
    NEG: "NEG",
  };
  const calculateCoordinates = (quad, progress = 1, border = undefined) => {
    const sidePoint = 25;
    const axisPoint = 50;
    const modifiedProgress = progress + (border ? border / 100 : 0);
    const progX = sidePoint * modifiedProgress;
    const progY = 1.732 * progX;
    const progAxis = axisPoint * modifiedProgress;
    const center = 50;

    const SUM = {
      Y_ADD: `${(center + progY).toFixed(1)}%`,
      Y_SUB: `${(center - progY).toFixed(1)}%`,
      X_ADD: `${(center + progX).toFixed(1)}%`,
      X_SUB: `${(center - progX).toFixed(1)}%`,
      X_POS: `${(center + progAxis).toFixed(1)}%`,
      X_NEG: `${(center - progAxis).toFixed(1)}%`,
    };
    if (quad === QUAD.FIRST)
      return {
        COORDINATE: `${SUM.X_SUB} ${SUM.Y_SUB}`,
        X_COORDINATE: SUM.X_SUB,
        Y_COORDINATE: SUM.Y_SUB,
      };
    else if (quad === QUAD.SECOND)
      return {
        COORDINATE: `${SUM.X_ADD} ${SUM.Y_SUB}`,
        X_COORDINATE: SUM.X_ADD,
        Y_COORDINATE: SUM.Y_SUB,
      };
    else if (quad === QUAD.THIRD)
      return {
        COORDINATE: `${SUM.X_SUB} ${SUM.Y_ADD}`,
        X_COORDINATE: SUM.X_SUB,
        Y_COORDINATE: SUM.Y_ADD,
      };
    else if (quad === QUAD.FOURTH)
      return {
        COORDINATE: `${SUM.X_ADD} ${SUM.Y_ADD}`,
        X_COORDINATE: SUM.X_ADD,
        Y_COORDINATE: SUM.Y_ADD,
      };
    else if (quad === QUAD.POS)
      return {
        COORDINATE: `${SUM.X_POS} 50%`,
        X_COORDINATE: SUM.X_POS,
        Y_COORDINATE: `50%`,
      };
    else if (quad === QUAD.NEG)
      return {
        COORDINATE: `${SUM.X_NEG} 50%`,
        X_COORDINATE: SUM.X_NEG,
        Y_COORDINATE: `50%`,
      };
  };

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
      width: PERCENTAGE(80),
      position: CSS.GENERIC.ABSOLUTE,
      border: `${SPACING(0.5)} solid ${COLORS.shades.color_5}`,
      transform: `rotate(${angle}deg)`,
    };
  };

  const hexagonDim = 50;
  const hexagonOpacity = 0.3;
  const hexagonBorder1 = 0.7;
  const hexagonProgressValues1 = [0.3, 0.6, 1, 0.7, 0.5, 0.9];
  const hexagonProgressValues2 = [0.7, 0.5, 0.3, 0.6, 0.9, 1];
  const hexagon1Color = COLORS.colors.color_5;
  const hexagon2Color = COLORS.colors.color_2;

  const styles = {
    container: {
      position: CSS.GENERIC.RELATIVE,
      height: "60vw",
      minWidth: "60vw",
      maxWidth: SPACING(700),
      zIndex: 0,
    },
    circle1: {
      ...commonCircleStyles(120),
      opacity: 0.25,
    },
    circle2: {
      ...commonCircleStyles(88),
      // backgroundImage: `url("https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM=")`,
      backgroundImage: `url(${Gradient})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      animationName: "rotate",
      animationDuration: "20s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      opacity: 1,
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
    },
    pointsDiv: (dim) => {
      return {
        width: dim,
        height: dim,
        position: CSS.GENERIC.ABSOLUTE,
      };
    },
    pointsWrapper: {
      position: CSS.GENERIC.RELATIVE,
      width: PERCENTAGE(100),
      height: PERCENTAGE(100),
    },
    point: (coordinates, color, style) => {
      return {
        position: CSS.GENERIC.ABSOLUTE,
        width: SPACING(3),
        height: SPACING(3),
        borderRadius: SPACING(8),
        background: color,
        opacity: hexagonOpacity * 2,
        border: `${SPACING(1)} solid ${COLORS.shades.color_1}`,
        top: coordinates ? coordinates.Y_COORDINATE : null,
        left: coordinates ? coordinates.X_COORDINATE : null,
        transform: `translate(${PERCENTAGE(-50)}, ${PERCENTAGE(-50)})`,
        cursor: "pointer",
        ...style,
      };
    },
    cardScores: {
      padding: SPACING(10),
      borderRadius: SPACING(6),
    },
    catColor: (color) => {
      return {
        width: SPACING(15),
        height: SPACING(15),
        borderRadius: SPACING(4),
        background: color,
        marginRight: `${SPACING(4)}`,
      };
    },
    cardHeading: {
      width: CSS.GENERIC.FIT_CONTENT,
      padding: `${SPACING(2)} ${SPACING(4)}`,
      borderRadius: SPACING(4),
    },
    score: (color) => {
      return {
        color: color,
        opacity: hexagonOpacity * 2,
      };
    },
    cardPointIndicator: {
      position: CSS.GENERIC.RELATIVE,
      display: "inline-block",
      top: SPACING(2),
      left: `${SPACING(1)}`,
    },
  };

  const createPolygon = (progress, border = hexagonBorder1) => {
    return `${
      calculateCoordinates(QUAD.FIRST, progress[0], border).COORDINATE
    }, ${calculateCoordinates(QUAD.SECOND, progress[1], border).COORDINATE}, ${
      calculateCoordinates(QUAD.POS, progress[2], border).COORDINATE
    }, ${calculateCoordinates(QUAD.FOURTH, progress[3], border).COORDINATE}, ${
      calculateCoordinates(QUAD.THIRD, progress[4], border).COORDINATE
    }, ${calculateCoordinates(QUAD.NEG, progress[5], border).COORDINATE}`;
  };

  const hexagonCSSTemplate = ({
    hexagonDim,
    hexagonBorder,
    hexagonProgressValues,
    color,
    id = 1,
  }) => `
  .hexagon${id}, .hexagonBorder${id} {
    display:inline-block;
    position: absolute;
    width:${PERCENTAGE(hexagonDim)};
    height:${PERCENTAGE(hexagonDim)};
    color:${color};
    margin:20px;
    opacity: ${hexagonOpacity};
    filter:url(#round);
  }
  .hexagon${id}::before, .hexagonBorder${id}::before {
     content:"";
     display:block;
     padding-top:${PERCENTAGE(100)};
     background:currentColor;
     clip-path: polygon(${createPolygon(hexagonProgressValues)});
  }
  .hexagonBorder${id} {
    width:${PERCENTAGE(hexagonDim + hexagonBorder)};
    height:${PERCENTAGE(hexagonDim + hexagonBorder)};
  }
  .hexagonBorder${id}::before {
    clip-path: polygon(${createPolygon(hexagonProgressValues, true)});
  }`;
  const css = `
  ${hexagonCSSTemplate({
    hexagonDim: hexagonDim,
    hexagonBorder: hexagonBorder1,
    hexagonProgressValues: hexagonProgressValues1,
    color: hexagon1Color,
    id: 1,
  })}
  ${hexagonCSSTemplate({
    hexagonDim: hexagonDim,
    hexagonBorder: hexagonBorder1,
    hexagonProgressValues: hexagonProgressValues2,
    color: hexagon2Color,
    id: 2,
  })}
  @keyframes rotate {
    from {transform: (0deg);}
    to {transform: rotate(360deg);}
  }
  `;
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

  const RenderPoint = ({ quad, hexValue, color, style }) => {
    const val =
      quad && hexValue ? calculateCoordinates(quad, hexValue, 2) : undefined;
    return <div style={styles.point(val, color, style)} />;
  };
  const RenderLabels = ({ quad, hexValue, color, props, index }) => {
    return (
      <Flex
        flexFlow={FLEX.COLUMN}
        alignItems={FLEX.FLEX_START}
        style={styles.point(calculateCoordinates(quad, hexValue, 2), color, {
          width: CSS.GENERIC.FIT_CONTENT,
          height: CSS.GENERIC.FIT_CONTENT,
          padding: SPACING(10),
          background: COLORS.shades.color_7,
          ...COLORS.effects.circleShadow,
          border: "none",
          opacity: 1,
        })}
      >
        <Flex
          justifyContent={FLEX.SPACE_BETWEEN}
          style={{ width: PERCENTAGE(95) }}
        >
          <Flex
            style={styles.cardHeading}
            justifyContent={FLEX.FLEX_START}
            className={"cardHover"}
          >
            <WebsiteIcon style={styles.catColor(COLORS.colors.color_1)} />
            <Text type={CSS.FONTS.SUB_TEXT}>Design</Text>
          </Flex>
          <Text type={CSS.FONTS.SUB_TEXT}>#{index + 1}</Text>
        </Flex>
        <Flex alignItems={FLEX.FLEX_START}>
          <Flex
            flexFlow={FLEX.COLUMN}
            alignItems={FLEX.FLEX_START}
            style={styles.cardScores}
            className={"cardHover"}
          >
            <Text
              type={CSS.FONTS.SUB_HEADING}
              style={styles.score(props.psColor)}
            >
              {props.pScoreValues[index] * 100}
            </Text>
            <Text type={CSS.FONTS.ULTRASMALL} weight={CSS.FONTS.REGULAR}>
              <hr style={{ borderColor: props.psColor }} />
              <RenderPoint
                color={props.psColor}
                style={styles.cardPointIndicator}
              />
              Productivity
              <br />
              Score
            </Text>
          </Flex>
          <Flex
            flexFlow={FLEX.COLUMN}
            alignItems={FLEX.FLEX_START}
            style={styles.cardScores}
            className={"cardHover"}
          >
            <Text
              type={CSS.FONTS.SUB_HEADING}
              style={styles.score(props.timeColor)}
            >
              {props.totalTimeValues[index] * 100}h
            </Text>
            <Text type={CSS.FONTS.ULTRASMALL} weight={CSS.FONTS.REGULAR}>
              <hr style={{ borderColor: props.timeColor }} />
              <RenderPoint
                color={props.timeColor}
                style={styles.cardPointIndicator}
              />
              Total Time
              <br />
              Spent
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  };
  const RenderPoints = ({
    hexValues,
    color,
    RenderComponent = <>Please pass a component</>,
    parentDimension = PERCENTAGE(hexagonDim),
    props,
  }) => {
    return (
      <div style={styles.pointsDiv(parentDimension)}>
        <div style={styles.pointsWrapper}>
          <RenderComponent
            quad={QUAD.FIRST}
            hexValue={hexValues[0]}
            color={color}
            props={props}
            index={0}
          />
          <RenderComponent
            quad={QUAD.SECOND}
            hexValue={hexValues[1]}
            color={color}
            props={props}
            index={1}
          />
          <RenderComponent
            quad={QUAD.POS}
            hexValue={hexValues[2]}
            color={color}
            props={props}
            index={2}
          />
          <RenderComponent
            quad={QUAD.FOURTH}
            hexValue={hexValues[3]}
            color={color}
            props={props}
            index={3}
          />
          <RenderComponent
            quad={QUAD.THIRD}
            hexValue={hexValues[4]}
            color={color}
            props={props}
            index={4}
          />
          <RenderComponent
            quad={QUAD.NEG}
            hexValue={hexValues[5]}
            color={color}
            props={props}
            index={5}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{css}</style>
      <div id="roundSVG" />
      <Flex style={{ ...styles.container, ...style }}>
        <div style={styles.circle1} />
        <div style={styles.circle2} />
        <div style={styles.circle3} />
        <div style={styles.circle4} />
        <div style={styles.circle5} />
        <div style={styles.circle6} />
        <div style={styles.line1} />
        <div style={styles.line2} />
        <div style={styles.line3} />
        <div className="hexagon1" />
        <div className="hexagonBorder1" />
        <div className="hexagon2" />
        <div className="hexagonBorder2" />
        <RenderPoints
          hexValues={hexagonProgressValues1}
          color={hexagon1Color}
          RenderComponent={RenderPoint}
        />
        <RenderPoints
          hexValues={hexagonProgressValues2}
          color={hexagon2Color}
          RenderComponent={RenderPoint}
        />
        <RenderPoints
          hexValues={[0.75, 0.75, 0.75, 0.75, 0.75, 0.75]}
          color={hexagon2Color}
          RenderComponent={RenderLabels}
          parentDimension={PERCENTAGE(90)}
          props={{
            pScoreValues: hexagonProgressValues1,
            totalTimeValues: hexagonProgressValues2,
            psColor: hexagon1Color,
            timeColor: hexagon2Color,
          }}
        />
      </Flex>
    </>
  );
};
const HexagonIntrestWheel = ({ style = { width: PERCENTAGE(50) } }) => {
  return (
    <Flex flexFlow={FLEX.ROW}>
      <InterestController />
      <HexagonWheel style={style} />
    </Flex>
  );
};
export default HexagonIntrestWheel;

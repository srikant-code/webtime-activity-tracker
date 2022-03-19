import { Button } from "@material-ui/core";
import { CONSTANTS } from "../../../../Utils/Constants";
import Theme, { CURRENT_MODE, MODE } from "../../../../Utils/theme";
import ButtonRippleEffect from "../../Button/ButtonRippleEffect";
import Flex from "../../Container";
import Text from "../../Text";
import WebsiteIcon from "../../WebsiteIcon";
import CardLayout from "../Layout";

const CSS = CONSTANTS.CSSStyles;
const FLEX = CSS.FLEX;
const SPACING = (v) => Theme.SPACING(v);
const BOTTOM = "BOTTOM";

const IconAndTextCard = ({
  data,
  width = 85,
  borderRadius = 16,
  height = 85,
  textOrientation = FLEX.CENTER,
}) => {
  const isCenter = textOrientation === FLEX.CENTER;
  const isBottom = textOrientation === BOTTOM;
  const styles = {
    icon: {
      zIndex: 0,
      width: SPACING(width),
      height: SPACING(height),
      borderRadius: SPACING(borderRadius),
      background: Theme.COLORS.colors.color_1,
      position: isBottom ? null : CSS.GENERIC.ABSOLUTE,
      top: SPACING(-3),
      left: SPACING(-3),
      padding: isBottom ? SPACING(0) : SPACING(2),
      margin: isBottom ? SPACING(0) : SPACING(2),
      border: `${SPACING(1)} solid ${Theme.COLORS.colors.color_1}`,
    },
    gradient: {
      zIndex: 1,
      width: SPACING(width + 5),
      height: SPACING(width + 5),
      borderRadius: SPACING(borderRadius),
      background: isCenter ? "#0000004a" : Theme.COLORS.gradient.gradient_6,
      position: CSS.GENERIC.ABSOLUTE,
      top: SPACING(0),
      left: SPACING(0),
    },
    text: {
      bottom: SPACING(4),
      left: SPACING(8),
      color: !isBottom ? Theme.COLORS.white : Theme.COLORS.shades.color_1, // CURRENT_MODE.MODE === MODE.DARK ? Theme.COLORS.shades.color_1 : Theme.COLORS.shades.color_8,
      width: SPACING(width - 8),
      ...CSS.FONTS.ELLIPSIS,
      paddingLeft: isCenter ? null : SPACING(4),
      textAlign: isCenter ? null : "left",
      wordBreak: isCenter || isBottom ? "break-all" : null,
      display: isCenter || isBottom ? "-webkit-box" : "block",
      whiteSpace: isCenter || isBottom ? null : "nowrap",
      lineClamp: 2,
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
    },
    flex: {
      position: CSS.GENERIC.ABSOLUTE,
      width: "100%",
      height: isCenter ? "100%" : "85%",
      zIndex: 1,
    },
    container: {
      cursor: "pointer",
      borderRadius: SPACING(borderRadius),
      padding: isBottom ? `0 0 ${SPACING(4)} 0 ` : SPACING(2),
      margin: isBottom
        ? `0 ${SPACING(4)} ${SPACING(4)} ${SPACING(4)} `
        : SPACING(4),
    },
  };
  return (
    <Flex flexFlow={FLEX.COLUMN} style={styles.container} className="cardHover">
      <ButtonRippleEffect
        width={width}
        height={width}
        borderRadius={borderRadius}>
        <WebsiteIcon
          className="cardHover"
          icon={data.icon}
          text={data.text}
          style={styles.icon}
        />
        {isBottom ? (
          <></>
        ) : (
          <>
            <div style={styles.gradient} />
            <Flex
              style={styles.flex}
              alignContent={
                isCenter
                  ? null
                  : data.topText
                  ? FLEX.SPACE_BETWEEN
                  : FLEX.FLEX_END
              }>
              {data.topText && textOrientation !== FLEX.CENTER ? (
                <Text type={CSS.FONTS.SUB_TEXT} style={styles.text}>
                  {data.topText}
                </Text>
              ) : (
                <></>
              )}
              <Text type={CSS.FONTS.SUB_TEXT} style={styles.text}>
                {data.text}
              </Text>
            </Flex>
          </>
        )}
      </ButtonRippleEffect>
      {isBottom ? (
        <Text
          type={CSS.FONTS.SUB_TEXT}
          style={{
            ...styles.text,
            margin: `${SPACING(4)} 0 ${SPACING(4)} ${SPACING(4)}`,
          }}>
          {data.text}
        </Text>
      ) : (
        <></>
      )}
    </Flex>
  );
};
const RenderCards = ({ data, width = 100, height = 100, textOrientation }) => (
  <Flex alignItems={FLEX.FLEX_START} style={{ margin: `0 ${SPACING(4)}` }}>
    {data.map((item, index) => (
      <IconAndTextCard
        data={item}
        key={index}
        width={width}
        height={height}
        textOrientation={textOrientation}
      />
    ))}
  </Flex>
);

const RelatedWebsitesCard = ({
  cardPerRow = 5,
  cardWidth = 100,
  cardHeight = 100,
  heading = "Related Websites",
  // textOrientation = BOTTOM,
  textOrientation = FLEX.CENTER + "fesd",
  style = {},
  data = [
    {
      icon: "😁",
      text: "figmaafukdhsgkkjfjdshagjjhgkjljhl.com",
      topText: "#1",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#2",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#3",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#4",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#5",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#6",
    },
    {
      icon: "😁",
      text: "figma.com",
      topText: "#7",
    },
  ],
}) => {
  let rowData = [];

  return (
    <CardLayout heading={heading} style={style}>
      <Flex>
        {data.length >= cardPerRow ? (
          <Flex flexFlow={FLEX.COLUMN_WRAP} alignItems={FLEX.FLEX_START}>
            {data.map((item, index) => {
              if (index + 1 === data.length && (index + 1) % cardPerRow !== 0) {
                rowData.push(item);
                return (
                  <RenderCards
                    key={index}
                    data={rowData}
                    width={cardWidth}
                    height={cardHeight}
                    textOrientation={textOrientation}
                  />
                );
              } else if ((index + 1) % cardPerRow !== 0) rowData.push(item);
              else {
                rowData.push(item);
                const fiveItems = JSON.parse(JSON.stringify(rowData));
                console.log(rowData, fiveItems);
                rowData = [];
                return (
                  <RenderCards
                    key={index}
                    data={fiveItems}
                    width={cardWidth}
                    height={cardHeight}
                    textOrientation={textOrientation}
                  />
                );
              }
            })}
          </Flex>
        ) : (
          <RenderCards
            data={data}
            width={cardWidth}
            height={cardHeight}
            textOrientation={textOrientation}
          />
        )}
      </Flex>
    </CardLayout>
  );
};

export default RelatedWebsitesCard;

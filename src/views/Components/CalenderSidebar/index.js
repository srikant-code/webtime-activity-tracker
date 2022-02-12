import { useState } from "react";
import { CALENDER_CONSTANTS, CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import ButtonRippleEffect from "../Button/ButtonRippleEffect";
import CardLayout from "../Cards/Layout";
import Flex from "../Container";

const CalenderSidebar = ({ style = {} }) => {
  const months = CALENDER_CONSTANTS.MONTHS;
  const weeks = CALENDER_CONSTANTS.WEEKS;

  const [active, setActive] = useState("january");

  const styles = {
    rowFlex: {
      display: "flex",
    },
    clickRectContainer: {
      fontWeight: CONSTANTS.CSSStyles.FONTS.BOLD,
      background: Theme.COLORS.shades.color_5,
      borderRadius: Theme.SPACING(8),
      width: Theme.SPACING(35),
      margin: Theme.SPACING(4),
      cursor: "pointer",
    },
    columnFlex: {
      display: "flex",
      flexFlow: CONSTANTS.CSSStyles.FLEX.COLUMN,
    },
    datetext: {
      lineBreak: "anywhere",
      position: "sticky",
      textAlign: CONSTANTS.CSSStyles.FLEX.CENTER,
      color: "inherit", //Theme.COLORS.shades.color_2,
      top: Theme.SPACING(50),
      margin: `${Theme.SPACING(20)} 0`,
      bottom: Theme.SPACING(50),
      width: Theme.SPACING(1),
    },
    progressIndicatorContainer: {
      width: Theme.SPACING(150),
    },
    progressIndicator: {
      borderRadius: Theme.SPACING(50),
      margin: Theme.SPACING(10),
      height: Theme.SPACING(16),
      border: `${Theme.SPACING(1)} solid ${Theme.COLORS.shades.color_5}`,
      background: Theme.COLORS.gradient.gradient_5,
    },
  };

  const RenderDays = ({ weekName }) => {
    return (
      <div style={styles.columnFlex}>
        {[1, 2, 3, 4, 5, 6, 7].map((day) => {
          const dateNum = weekName + day;
          return (
            <div style={styles.rowFlex} key={dateNum}>
              <Flex
                style={{
                  ...styles.clickRectContainer,
                  height: Theme.SPACING(35),
                }}
              >
                <CustomButtonRipple
                  id={dateNum}
                  onclick={() => setActive(dateNum)}
                >
                  <Flex style={styles.datetext}>{day}</Flex>
                </CustomButtonRipple>
              </Flex>
              <Flex
                style={styles.progressIndicatorContainer}
                justifyContent={CONSTANTS.CSSStyles.FLEX.FLEX_START}
              >
                {/* Progress Indicator or props */}
                <div
                  style={{
                    ...styles.progressIndicator,
                    width: `${Math.random() * 100}%`,
                  }}
                ></div>
              </Flex>
            </div>
          );
        })}
      </div>
    );
  };

  const RenderWeeks = ({ monthName }) => {
    return (
      <div style={styles.columnFlex}>
        {weeks.map((week) => {
          const weekNum = monthName + week.number;
          return (
            <div key={weekNum} style={styles.rowFlex}>
              <Flex style={styles.clickRectContainer}>
                <CustomButtonRipple
                  id={weekNum}
                  onclick={() => setActive(weekNum)}
                >
                  <Flex style={styles.datetext}>
                    WEEK
                    <br />
                    <br />
                    {week.number}
                  </Flex>
                </CustomButtonRipple>
              </Flex>
              <RenderDays weekName={weekNum} />
            </div>
          );
        })}
      </div>
    );
  };

  const CustomButtonRipple = ({ children, style, id, onclick = undefined }) => {
    const button = {
      height: "100%",
      width: styles.clickRectContainer.width,
      borderRadius: Theme.SPACING(8),
      background: id === active ? Theme.COLORS.colors.color_1 : undefined,
      color: id === active ? Theme.COLORS.shades.color_8 : undefined,
    };
    return (
      <ButtonRippleEffect style={button} onclick={onclick}>
        {children}
      </ButtonRippleEffect>
    );
  };

  return (
    <CardLayout style={style} heading="Calender">
      <div style={{ height: "84vh" }} className="scrollBarHiddenDiv">
        {months.map((month) => {
          const monthName = month.fullName.toUpperCase();
          return (
            <div key={month.index} style={styles.rowFlex}>
              <Flex style={styles.clickRectContainer}>
                <CustomButtonRipple
                  id={monthName}
                  onclick={() => setActive(monthName)}
                >
                  <Flex style={styles.datetext}>{monthName}</Flex>
                </CustomButtonRipple>
              </Flex>
              <RenderWeeks monthName={monthName} />
            </div>
          );
        })}
      </div>
    </CardLayout>
  );
};

export default CalenderSidebar;

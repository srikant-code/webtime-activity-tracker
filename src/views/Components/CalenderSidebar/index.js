import { CALENDER_CONSTANTS, CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import Flex from "../Container";

const CalenderSidebar = () => {
  const months = CALENDER_CONSTANTS.MONTHS;
  const weeks = CALENDER_CONSTANTS.WEEKS;

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
      background: Theme.COLORS.gradient.gradient_5,
    },
  };

  const RenderDays = () => {
    return (
      <div style={styles.columnFlex}>
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <div style={styles.rowFlex} key={day}>
            <Flex
              style={{
                ...styles.clickRectContainer,
                height: Theme.SPACING(35),
              }}>
              <Flex style={styles.datetext}>{day}</Flex>
            </Flex>
            <Flex
              style={styles.progressIndicatorContainer}
              justifyContent={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
              {/* Progress Indicator or props */}
              <div
                style={{
                  ...styles.progressIndicator,
                  width: `${Math.random() * 100}%`,
                }}></div>
            </Flex>
          </div>
        ))}
      </div>
    );
  };

  const RenderWeeks = () => {
    return (
      <div style={styles.columnFlex}>
        {weeks.map((week) => (
          <div key={week.number} style={styles.rowFlex}>
            <Flex style={styles.clickRectContainer}>
              <Flex style={styles.datetext}>
                WEEK
                <br />
                <br />
                {week.number}
              </Flex>
            </Flex>
            <RenderDays />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {months.map((month) => (
        <div key={month.index} style={styles.rowFlex}>
          <Flex style={styles.clickRectContainer}>
            <Flex style={styles.datetext}>{month.fullName.toUpperCase()}</Flex>
          </Flex>
          <RenderWeeks />
        </div>
      ))}
    </>
  );
};

export default CalenderSidebar;

import { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { CONSTANTS, ROUTES } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import Flex from "../Container";
import CustomLink from "../Link";
import Tab from "./Tab";
const Tabs = ({
  items = [
    {
      buttonText: "Today",
      path: ROUTES.DAY,
      expandHeader: "8:58pm",
      expandSubHeader: "07th April 2021",
    },
    {
      buttonText: "Weekly",
      path: ROUTES.WEEK,
      expandHeader: "Week 2",
      expandSubHeader: "June 2021",
    },
    {
      buttonText: "Monthly",
      path: ROUTES.MONTH,
      expandHeader: "June",
      expandSubHeader: "2021",
    },
    {
      buttonText: "All time",
      path: ROUTES.ALL_TIME,
      expandHeader: "204 Days",
      expandSubHeader: "2020-2021",
    },
  ],
  style = {},
  linkStyles = {},
  buttonStyles = {},
}) => {
  const [currentActive, setCurrentActive] = useState(0);
  return (
    <Flex
      justifyContent={CONSTANTS.CSSStyles.FLEX.FLEX_START}
      style={{
        background: Theme.COLORS.shades.color_6,
        borderRadius: Theme.SPACING(10),
        padding: Theme.SPACING(4),
        ...style,
      }}>
      {items.map((item, index) => (
        <CustomLink
          to={item.path}
          style={{ textDecoration: "none", ...linkStyles }}>
          <div
            key={index}
            onClick={() => {
              setCurrentActive(index);
              if (item.onclick) item.onclick();
            }}>
            <Tab
              data={item}
              active={currentActive}
              index={index}
              buttonStyles={buttonStyles}
            />
          </div>
        </CustomLink>
      ))}
    </Flex>
  );
};

export default Tabs;

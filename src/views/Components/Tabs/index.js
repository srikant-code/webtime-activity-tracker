import { useState } from "react";
import { CONSTANTS } from "../../../Utils/Constants";
import Flex from "../Container";
import Tab from "./Tab";
const Tabs = ({
  items = [
    {
      buttonText: "Today",
      expandHeader: "8:58pm",
      expandSubHeader: "07th April 2021",
    },
    {
      buttonText: "Today",
      expandHeader: "8:58pm",
      expandSubHeader: "07th April 2021",
    },
    {
      buttonText: "Today",
      expandHeader: "8:58pm",
      expandSubHeader: "07th April 2021",
    },
  ],
}) => {
  const [currentActive, setCurrentActive] = useState(0);
  return (
    <Flex justifyContent={CONSTANTS.CSSStyles.FLEX.FLEX_START}>
      {items.map((item, index) => (
        <div key={index} onClick={() => setCurrentActive(index)}>
          <Tab data={item} active={currentActive} index={index} />
        </div>
      ))}
    </Flex>
  );
};

export default Tabs;

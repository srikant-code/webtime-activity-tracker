import { useEffect, useState } from "react";
import ChromeLocalStorage from "../../../Utils/Classes/ChromeStorage";
import CustomButton from "../../Components/Button";
import MainStatisticsCard from "../../Components/Cards/MainStatisticsCard";
import SummaryCard from "../../Components/Cards/Summary";
import ComingSoon from "../../Components/ComingSoon";
import CustomTextArea from "../../Components/MarkDownTextArea";
import Tab from "../../Components/Tabs/Tab";
import Today from "../Today";

const TestingComponent = () => {
  const [memUsage, setMemUsage] = useState("");
  // useEffect(() => {
  //   const CLS = new ChromeLocalStorage({
  //     dayStats: {},
  //     tabStats: {},
  //     weekStats: {},
  //     monthStats: {},
  //     categories: {},
  //   });
  //   CLS.getMemoryUse("tabs", (id = "infinity hai re") => {
  //     console.log("Hello getting the memory usage ", id);
  //     setMemUsage(id);
  //   });
  // });
  return (
    <>
      <Today />
      <Tab />
      <CustomTextArea />
      <MainStatisticsCard />
      <CustomButton text="Popup" />
      <SummaryCard />
      <ComingSoon heading="Tab notes" />
      <div>The memory usage is = {memUsage}</div>
      {/* <CircularProgressWithLabel />
  <Chart />
  <DaysHoursLeftProgressBar />
  <TimeDistribution />
  <CalenderSidebar /> */}
    </>
  );
};

export default TestingComponent;

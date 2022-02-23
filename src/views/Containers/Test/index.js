import { useEffect, useState } from "react";
import ChromeLocalStorage from "../../../Utils/Classes/ChromeStorage";
import CustomButton from "../../Components/Button";
import MainStatisticsCard from "../../Components/Cards/MainStatisticsCard";
import SummaryCard from "../../Components/Cards/Summary";
import ComingSoon from "../../Components/ComingSoon";
import CustomTextArea from "../../Components/MarkDownTextArea";
import Tab from "../../Components/Tabs/Tab";
import Today from "../Today";
import dayMock from "../../SampleJSON/day";
import monthMock from "../../SampleJSON/month";
import tabMock from "../../SampleJSON/tab";
import weekMock from "../../SampleJSON/week";
import { USER_DATA } from "../../../Utils/Constants";

const TestingComponent = () => {
  const [memUsage, setMemUsage] = useState("");
  const [allData, setAllData] = useState({});
  const [allData2, setAllData2] = useState({});
  const [counter, setCounter] = useState(0);
  const loadMockData = () => {
    USER_DATA.DAY_DATA = dayMock;
    USER_DATA.WEEK_DATA = weekMock;
    USER_DATA.MONTH_DATA = monthMock;
    USER_DATA.TAB_DATA = tabMock;
    return {
      dayStats: dayMock,
      tabStats: tabMock,
      weekStats: weekMock,
      monthStats: monthMock,
      categories: {},
    };
  };
  useEffect(() => {
    // const CLS = new ChromeLocalStorage({
    //   dayStats: {},
    //   tabStats: {},
    //   weekStats: {},
    //   monthStats: {},
    //   categories: {},
    // });
    // CLS.getMemoryUse("tabs", (id = "infinity hai re") => {
    //   console.log("Hello getting the memory usage ", id);
    //   setMemUsage(id);
    // });
    try {
      // these below 2 lines would not work
      // CLS.LoadDataFromChromeStorage();
      // setAllData(CLS.LogAllStorageData());

      // const hello = (mostVisitedURLs) => {
      // run a loop
      //}
      // chrome.topSites.get(hello);

      setAllData2(loadMockData());
      chrome.runtime.sendMessage(
        { command: "GET_ALL_DATA" },
        function (response) {
          console.log(`message from background:`, response);
          setAllData2(response);
        }
      );
    } catch (e) {
      console.log(e);
      setAllData(JSON.stringify(e));
    }
  }, [counter]);
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
      <button onClick={() => setCounter(counter + 1)}>reload data</button>
      <br />
      <pre>
        All data from STorage directly= {JSON.stringify(allData, null, 4)}
      </pre>

      <pre>
        All allData2 from CHrome API = {JSON.stringify(allData2, null, 4)}
      </pre>
      {/* <CircularProgressWithLabel />
  <Chart />
  <DaysHoursLeftProgressBar />
  <TimeDistribution />
  <CalenderSidebar /> */}
    </>
  );
};

export default TestingComponent;

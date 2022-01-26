import React, { useEffect, useState } from "react";
import CustomButton from "../Components/Button";
import SummaryCard from "../Components/Cards/Summary";
import Header from "../Components/Header";
import Tab from "../Components/Tabs/Tab";
import Tabs from "../Components/Tabs";
import "./App.css";
import Today from "../Containers/Today";
import Chart from "../Charts";
import CircularProgressWithLabel from "../Components/Progress/CircularWithLabel";
import CustomTextArea from "../Components/MarkDownTextArea";
import Theme from "../../Utils/theme";
import CalenderSidebar from "../Components/CalenderSidebar";
import TimeDistribution from "../Components/TimeDistribution";
import DaysHoursLeftProgressBar from "../Components/Progress/DaysLeft";
import MainStatisticsCard from "../Components/Cards/MainStatisticsCard";
import ComingSoon from "../Components/ComingSoon";
import TimeMe from "timeme.js";
import HomeScreen from "../Containers/Home";

const App = () => {
  const css = `
  /* width */
  ::-webkit-scrollbar {
    width: ${Theme.SPACING(6)};
    height: ${Theme.SPACING(6)};
    cursor: pointer !important;
  }

  /* Track */
  ::-webkit-scrollbar-track {
  background: transparent; 
    border-radius: ${Theme.SPACING(10)};
    cursor: pointer !important;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${Theme.COLORS.colors.color_1}; 
    border-radius: ${Theme.SPACING(10)};
    cursor: pointer !important;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${Theme.COLORS.shades.color_2}; 
    cursor: pointer !important;
  }
  `;

  const [timeSpentOnPage, setTimeSpentOnPage] = useState("");

  useEffect(() => {
    // Initialize library and start tracking time
    TimeMe.initialize({
      currentPageName: "my-home-page", // current page
      idleTimeoutInSeconds: 30, // seconds
    });

    // ... Some time later ...

    // Retrieve time spent on current page
    // setTimeSpentOnPage(TimeMe.getTimeOnCurrentPageInSeconds());
  });

  return (
    <div>
      <HomeScreen />
      <div>{timeSpentOnPage}</div>
      <style> {css} </style>
      <Today /> {/* <Tab /> */} <CustomTextArea />
      <MainStatisticsCard />
      <CustomButton text="Popup" /> {/* <SummaryCard /> */}{" "}
      <ComingSoon heading="Tab notes" />
      <CircularProgressWithLabel />
      <Chart />
      <DaysHoursLeftProgressBar />
      <TimeDistribution />
      {/* <CalenderSidebar /> */}
    </div>
  );
};

export default App;

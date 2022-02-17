/*global chrome*/
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
// import TimeMe from "timeme.js";
import HomeScreen from "../Containers/Home";
import { CONSTANTS } from "../../Utils/Constants";
// import Cursor from "../Assets/Images/cursor.png";
import Cursor from "../Assets/Images/cursor2.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TestingComponent from "../Containers/Test";

// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: "aos-init", // class applied after initialization
//   animatedClassName: "aos-animate", // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 70, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: "ease", // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
// });
// cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png"), auto;
// cursor: url(${Cursor}), auto;
// cursor: url("https://duckduckgo.com/i/d3aededb.png"), auto;

const App = () => {
  const css = `
  body > * {
    cursor: url(${Cursor}), auto;
  }
  /* width */
  ::-webkit-scrollbar {
    width: ${Theme.SPACING(6)};
    height: ${Theme.SPACING(6)};
    background: ${Theme.COLORS.shades.color_8};
    cursor: pointer !important;
  }

  /* Track */
  ::-webkit-scrollbar-track {
  background: ${CONSTANTS.CSSStyles.GENERIC.TRANSPARENT}; 
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
  .cardHover {
    transition: 0.15s all ease-in-out;
  }
  .cardHover:hover {
    background: ${Theme.COLORS.shades.color_6} !important; 
    transition: 0.15s all ease-in-out;
  }
  .scrollBarHiddenDiv {
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
  }
  .scrollBarHiddenDiv::-webkit-scrollbar { /* WebKit */
      width: 0;
      height: 0;
  }
  hr {
    border: none;
    margin: ${Theme.SPACING(2)} 0 ${Theme.SPACING(4)} 0;
    border-top: ${Theme.SPACING(0.1)} solid ${Theme.COLORS.colors.color_1};
    opacity: 0.3;
  }
  `;

  const [timeSpentOnPage, setTimeSpentOnPage] = useState("");

  useEffect(() => {
    // Initialize library and start tracking time
    // TimeMe.initialize({
    //   currentPageName: "my-home-page", // current page
    //   idleTimeoutInSeconds: 30, // seconds
    // });
    // ... Some time later ...
    // Retrieve time spent on current page
    // setTimeSpentOnPage(TimeMe.getTimeOnCurrentPageInSeconds());
  });

  return (
    <div style={{ background: Theme.COLORS.shades.color_7 }}>
      <div>{timeSpentOnPage}</div>
      <style> {css} </style>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="test">Test</Link>
            </li>
            <li>
              <Link to="dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="test" element={<TestingComponent />} />
            <Route path="dashboard" element={<HomeScreen />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

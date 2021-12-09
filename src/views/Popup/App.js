import React from "react";
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

function App() {
  return (
    <div>
      <Header />
      <Tabs />
      <Today />
      {/* <Tab /> */}
      <CustomTextArea />
      <CustomButton text="Popup" />
      {/* <SummaryCard /> */}
      <CircularProgressWithLabel />
      <Chart />
    </div>
  );
}

export default App;

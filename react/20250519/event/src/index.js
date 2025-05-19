import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import TabNavigation from "./TabNavigation";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <App4 /> */}
    {/* <App5 /> */}
    <TabNavigation />
  </div>
);

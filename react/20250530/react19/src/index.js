import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App from "./App2";
import TodoApp from "./App3";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<TodoApp />);

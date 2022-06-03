import React from "react";
import { ChartElement, MonthList } from "./Components";

export function App() {
  return (
    <div className="app">
      <h1>Monthly Stats</h1>
      <div>
        <ChartElement />
        <MonthList />
      </div>
    </div>
  );
}

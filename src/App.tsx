import React from "react";
import { MonthList } from "./MonthList";
import { ChartElement } from "./ChartElement";
import s from "./style.module.css";

export function App() {
  return (
    <div className={s.app}>
      <h1>Monthly Stats</h1>
      <div>
        <ChartElement />
        <MonthList />
      </div>
    </div>
  );
}

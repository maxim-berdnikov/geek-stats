import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { DB } from "./DB";
import { Line } from "react-chartjs-2";
import { getTitle, isCategoriesKey } from "./MonthResults";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart"
    // }
  },
};

const colors = {
  comics: {
    line: "#F5B041",
    bg: "#FAD7A0",
  },
  tv_shows: {
    line: "#52BE80",
    bg: "#ABEBC6",
  },
  games: {
    line: "#EC7063",
    bg: "#F5B7B1",
  },
  movies: {
    line: "#5DADE2",
    bg: "#AED6F1",
  },
  books: {
    line: "#63ec70",
    bg: "#B1F5B7",
  },
  audiobooks: {
    line: "#E3F500",
    bg: "#F1FA7F",
  },
};

const showedData = Object.keys(colors).map((key) =>
  isCategoriesKey(key)
    ? {
        label: getTitle(key),
        data: DB.map((month) => month.content[key]?.length || 0),
        borderColor: colors[key].line,
        backgroundColor: colors[key].bg,
      }
    : []
);

const labels = DB.map((month) => month.month);

export const data = {
  labels,
  datasets: showedData,
};

export function ChartElement() {
  return (
    <div className="canvas-container">
      {/* @ts-ignore */}
      <Line options={options} data={data} />
    </div>
  );
}

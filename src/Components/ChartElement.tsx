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
    line: "#EC7063",
    bg: "#F5B7B1",
  },
};

const showedData = [
  {
    label: "Comics",
    data: DB.map((month) => month.content.comics.length),
    borderColor: colors.comics.line,
    backgroundColor: colors.comics.bg,
  },
  {
    label: "TV Shows",
    data: DB.map((month) => month.content.tv_shows.length),
    borderColor: colors.tv_shows.line,
    backgroundColor: colors.tv_shows.bg,
  },
  {
    label: "Games",
    data: DB.map((month) => month.content.games.length),
    borderColor: colors.games.line,
    backgroundColor: colors.games.bg,
  },
  {
    label: "Movies",
    data: DB.map((month) => month.content.movies.length),
    borderColor: colors.movies.line,
    backgroundColor: colors.movies.bg,
  },
];

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

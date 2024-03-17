import React from "react";
import { MonthProps } from "../Types";
import { DB } from "./DB";

type Category = keyof MonthProps["content"];

export const Categories: Record<Category, string> = {
  movies: "Фильмы",
  tv_shows: "Сериалы",
  comics: "Комиксы",
  games: "Игры",
  books: "Книги",
  audiobooks: "Аудиокниги",
};

export function isCategoriesKey(
  value: string
): value is keyof typeof Categories {
  return Object.keys(Categories).includes(value);
}

export const getTitle = (key: string) => {
  if (isCategoriesKey(key)) {
    return Categories[key];
  }

  return null;
};

export const MonthResults = ({
  selectedMonth,
  handleBack,
}: {
  selectedMonth: string;
  handleBack: () => void;
}) => {
  const currentMonth: MonthProps = DB.filter(
    (month) => month.month === selectedMonth
  )[0];

  return (
    <div>
      <div className="back-button" onClick={handleBack}>
        Назад
      </div>
      {currentMonth !== undefined ? (
        <>
          <h2>{currentMonth.month}</h2>
          {Object.entries(currentMonth.content).map(([key, values]) =>
            values.length ? (
              <div>
                <h3>{getTitle(key)}</h3>
                {values.map((value) =>
                  typeof value === "string" ? (
                    <p key={value}>{value}</p>
                  ) : (
                    <p key={value.title}>{value.title}</p>
                  )
                )}
              </div>
            ) : null
          )}
        </>
      ) : (
        void 0
      )}
    </div>
  );
};

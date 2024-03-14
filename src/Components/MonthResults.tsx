import React from "react";
import { MonthProps } from "../Types";
import { DB } from "./DB";

export const MonthResults = ({
  selectedMonth,
  handleBack,
}: {
  selectedMonth: string;
  handleBack: () => void;
}) => {
  const curretnMonth: MonthProps = DB.filter(
    (month) => month.month === selectedMonth
  )[0];
  return (
    <div>
      <div className="back-button" onClick={handleBack}>
        Назад
      </div>
      {curretnMonth !== undefined ? (
        <>
          <h2>{curretnMonth.month}</h2>
          {curretnMonth.content.movies.length > 0 && (
            <div>
              <h3>Фильмы</h3>
              {curretnMonth.content.movies.map((movie) => (
                <p key={movie}>{movie}</p>
              ))}
            </div>
          )}
          {curretnMonth.content.tv_shows.length > 0 && (
            <div>
              <h3>Сериалы</h3>
              {curretnMonth.content.tv_shows.map((show) => (
                <p key={show}>{show}</p>
              ))}
            </div>
          )}
          {curretnMonth.content.comics.length > 0 && (
            <div>
              <h3>Комиксы</h3>
              {curretnMonth.content.comics.map((book) => (
                <p key={book}>{book}</p>
              ))}
            </div>
          )}
          {curretnMonth.content.books.length > 0 && (
            <div>
              <h3>Книги</h3>
              {curretnMonth.content.books.map((book) => (
                <p key={book}>{book}</p>
              ))}
            </div>
          )}
          {curretnMonth.content.games.length > 0 && (
            <div>
              <h3>Игры</h3>
              {curretnMonth.content.games.map((game) => (
                <p key={game.title}>{game.title}</p>
              ))}
            </div>
          )}
        </>
      ) : (
        void 0
      )}
    </div>
  );
};

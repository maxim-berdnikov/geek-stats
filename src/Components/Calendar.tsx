import React, { MouseEvent } from "react";
import { DB } from "./DB";
import classNames from "classnames";

export const Calendar = ({
  handleMonthClick,
}: {
  handleMonthClick: (event: MouseEvent) => void;
}) => {
  return (
    <div className="list">
      {DB.map((month) => (
        <div
          className="list_item"
          key={month.month}
          id={month.month}
          onClick={handleMonthClick}
        >
          {month.month}
        </div>
      ))}
    </div>
  );
};

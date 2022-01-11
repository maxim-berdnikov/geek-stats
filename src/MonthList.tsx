import React, { useState } from "react";
import { DB } from "./DB";
import s from "./style.module.css";

export function MonthList() {
  const [showList, setShowList] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthClick = (event: React.MouseEvent) => {
    setShowList(true);
    const target = event.target as HTMLTextAreaElement;
    setSelectedMonth(target.id);
  };

  const AllMonth = () => {
    return (
      <div className={s.list}>
        {DB.map((month) => (
          <div
            className={s.list_item}
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

  const MonthResults = () => {
    const curretnMonth = DB.find((month) => month.month === selectedMonth);
    return (
      <div>
        {curretnMonth !== undefined ? (
          <>
            <h2>{curretnMonth.month}</h2>
            {curretnMonth.comics.map((book) => (
              <p key={book}>{book}</p>
            ))}
          </>
        ) : (
          void 0
        )}
      </div>
    );
  };

  return <div>{showList ? <MonthResults /> : <AllMonth />}</div>;
}

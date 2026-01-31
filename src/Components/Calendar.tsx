import { MouseEvent, useEffect, useState } from "react";
import { DB } from "./DB";
import classNames from "classnames";
import { MonthProps } from "../Types";

export const Calendar = ({
  isCollapsed,
  handleMonthClick,
}: {
  handleMonthClick: (event: MouseEvent) => void;
  isCollapsed: boolean;
}) => {
  const [list, setList] = useState<MonthProps[]>([]);

  useEffect(() => {
    const reversed = DB.reverse();

    setList(reversed);
  }, [DB]);

  return (
    <div className={classNames("list", isCollapsed && "list__collapsed")}>
      {list.map((month) => (
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

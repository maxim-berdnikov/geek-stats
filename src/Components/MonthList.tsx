import React, { useState } from "react";
import { Calendar } from "./Calendar";
import { MonthResults } from "./MonthResults";
import "./styles.css";

export function MonthList() {
  const [showList, setShowList] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthClick = (event: React.MouseEvent) => {
    setShowList(true);
    const target = event.target as HTMLTextAreaElement;
    setSelectedMonth(target.id);
  };

  const handleBack = () => {
    setShowList(false);
  };

  return (
    <div className="container">
      <Calendar handleMonthClick={handleMonthClick} isCollapsed={showList} />
      {showList && (
        <MonthResults selectedMonth={selectedMonth} handleBack={handleBack} />
      )}
    </div>
  );
}

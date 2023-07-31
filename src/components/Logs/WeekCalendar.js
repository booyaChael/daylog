import { useState, useEffect } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import classes from "./WeekCalendar.module.css";
import backIcon from "../../assets/back.png";
import nextIcon from "../../assets/next.png";

const WeekCalendar = (props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {
    if (btnType === "prev") {
      console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";
    return (
      <div className={classes.displayFlex}>
        <span
          className={classes.icon}
          onClick={() => changeMonthHandle("prev")}
        >
          <img src={backIcon} alt="back" />
        </span>

        <div className={classes.thisMonth}>
          <span>{format(currentMonth, dateFormat)}</span>
        </div>

        <span
          className={classes.icon}
          onClick={() => changeMonthHandle("next")}
        >
          <img src={nextIcon} alt="next" />
        </span>
      </div>
    );
  };

  let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });

  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className={`${classes.day} ${classes.displayFlex}`}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return (
      <>
        <div className={`${classes.displayFlex} ${classes.days}`}>{days}</div>
      </>
    );
  };
  const renderWeekHandleBtn = () => {
    return (
      <div className={classes.weekHandleBtns}>
        <div
          className={`${classes.weekHandleBtn}`}
          onClick={() => changeWeekHandle("prev")}
        >
          <img src={backIcon} alt="back" />
        </div>
        <div
          className={`${classes.weekHandleBtn}`}
          onClick={() => changeWeekHandle("next")}
        >
          <img src={nextIcon} alt="next" />
        </div>
      </div>
    );
  };

  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`${classes.day} ${classes.displayFlex}`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className={`${classes.days} ${classes.displayFlex}`} key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <>
      <div className="calendar">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
      {renderWeekHandleBtn()}
    </>
  );
};

export default WeekCalendar;

import todayIcon from "../../assets/TodayIcon.png";

import classes from "./HeaderTodayBtn.module.css";

const HeaderTodayBtn = (props) => {
  return (
    <button className={classes.button} onClick={props.onShowToday}>
      <span className={classes.icon}>
        <img src={todayIcon} alt="today" />
      </span>
      <span className={classes.text}>오늘의 기록</span>
    </button>
  );
};

export default HeaderTodayBtn;

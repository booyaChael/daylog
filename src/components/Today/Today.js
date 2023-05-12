import Modal from "../UI/Modal";
import Todaylog from "./Todaylog";
import classes from "./Today.module.css";
import { useContext } from "react";
import TodayContext from "../../store/today-context";

const Today = (props) => {
  const todayCtx = useContext(TodayContext);
  const { projects, totalTime } = todayCtx;

  const totalHour = parseInt(totalTime / 60);
  const totalMinute = parseInt(totalTime % 60);
  const todayLogs = projects.map((project) => (
    <Todaylog key={project.id} name={project.name} time={project.time} />
  ));
  console.log(todayLogs);

  return (
    <Modal onClose={props.onClose}>
      {todayLogs}
      <div className={classes.total}>
        <span>오늘의 투자</span>
        <span>
          {totalHour}시간 {totalMinute}분
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          취소
        </button>
        <button className={classes.button}>기록</button>
      </div>
    </Modal>
  );
};

export default Today;

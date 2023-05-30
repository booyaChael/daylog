import Modal from "../UI/Modal";
import Todaylog from "./Todaylog";
import classes from "./Today.module.css";
import { useContext, useState } from "react";
import TodayContext from "../../store/today-context";
import Diary from "./Diary.js";

const Today = (props) => {
  const todayCtx = useContext(TodayContext);
  const { projects, totalTime, addProject, removeProject } = todayCtx;
  const [isDiary, setIsDiary] = useState(false);

  const diaryHandler = () => setIsDiary(true);

  const totalHour = parseInt(totalTime / 60);
  const totalMinute = parseInt(totalTime % 60);

  const hasProject = projects.length > 0;

  const addProjectHandler = (project) => {
    addProject({
      id: project.id,
      name: project.name,
      time: 1,
    });
  };

  const removeProjectHandler = (project) => {
    removeProject({
      id: project.id,
      time: 1,
    });
  };

  const todayLogs = (
    <ul className={classes.projects}>
      {projects.map((project) => (
        <Todaylog
          key={project.id}
          name={project.name}
          time={project.time}
          onAdd={addProjectHandler.bind(null, project)}
          onRemove={removeProjectHandler.bind(null, project)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {todayLogs}
      <div className={classes.total}>
        <span>오늘의 투자</span>
        <span>
          {totalHour}시간 {totalMinute}분
        </span>
      </div>
      {isDiary && <Diary />}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          취소
        </button>
        {hasProject && !isDiary && (
          <button className={classes.button} onClick={diaryHandler}>
            기록
          </button>
        )}
        {hasProject && isDiary && (
          <button className={classes.button}>저장</button>
        )}
      </div>
    </Modal>
  );
};

export default Today;

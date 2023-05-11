import classes from "./MyProject.module.css";
import MyProjectForm from "./MyProjectForm";
import { useContext } from "react";
import TodayContext from "../../../store/today-context";

const MyProject = (props) => {
  const todayCtx = useContext(TodayContext);
  const addTimeToTodayHandler = (time) => {
    todayCtx.addProject({
      id: props.id,
      name: props.name,
      time: time,
    });
  };
  const wantToSpend = `${props.wantToSpend}시간`;
  return (
    <li className={classes.project}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.explanation}>{props.explanation}</div>
        <div className={classes.wantToSpend}>{wantToSpend}</div>
      </div>
      <div>
        <MyProjectForm onAddTimeToToday={addTimeToTodayHandler} />
      </div>
    </li>
  );
};

export default MyProject;

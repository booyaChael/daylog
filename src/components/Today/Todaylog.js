import classes from "./Todaylog.module.css";

const Todaylog = (props) => {
  const minutes = props.time;
  const spend = `${parseInt(minutes / 60)}시간 ${minutes % 60}분`;
  return (
    <li className={classes.project}>
      <div>
        <h2>{props.name}</h2>
        <div>
          <span className={classes.time}>{spend}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};
export default Todaylog;

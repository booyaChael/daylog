import classes from "./Todaylog.module.css";

const Todaylog = (props) => {
  const minutes = props.time;
  const hour = parseInt(minutes / 60);
  const minute = minutes % 60;
  const time = hour === 0 ? `${minute}분` : `${hour}시간 ${minute}분`;
  return (
    <li className={classes.project}>
      <div>
        <h2>{props.name}</h2>
        <div>
          <span className={classes.time}>{time}</span>
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

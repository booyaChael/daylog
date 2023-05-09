import classes from "./Todaylog.module.css";

const Todaylog = (props) => {
  const spend = `${props.spend}시간`;
  return (
    <li className={classes.project}>
      <div>
        <h2>{props.name}</h2>
        <div>
          <span className={classes.spend}>{spend}</span>
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

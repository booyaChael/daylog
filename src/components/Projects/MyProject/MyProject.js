import classes from "./MyProject.module.css";

const MyProject = (props) => {
  const wantToSpend = `${props.wantToSpend}시간`;
  return (
    <li className={classes.project}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.explanation}>{props.explanation}</div>
        <div className={classes.wantToSpend}>{wantToSpend}</div>
      </div>
    </li>
  );
};

export default MyProject;

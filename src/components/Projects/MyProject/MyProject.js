import classes from "./MyProject.module.css";
import MyProjectForm from "./MyProjectForm";

const MyProject = (props) => {
  const wantToSpend = `${props.wantToSpend}시간`;
  return (
    <li className={classes.project}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.explanation}>{props.explanation}</div>
        <div className={classes.wantToSpend}>{wantToSpend}</div>
      </div>
      <div>
        <MyProjectForm />
      </div>
    </li>
  );
};

export default MyProject;

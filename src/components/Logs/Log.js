import classes from "./Log.module.css";
import ProgressBar from "../Progress/ProgressBar";

const Log = (props) => {
  const { projects } = props;
  const { date, text } = props.diary;

  return (
    <li className={classes.log}>
      <div>
        <span className={classes.date}>
          <h3>{date}</h3>
        </span>
        <div>
          {projects.map((project) => (
            <ProgressBar name={project.name} progress={40} />
          ))}
        </div>
        <span>{text}</span>
      </div>
    </li>
  );
};

export default Log;

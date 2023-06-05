import classes from "./Log.module.css";
import ProgressBar from "../Progress/ProgressBar";

const Log = (props) => {
  const { projects, date, text, id } = props;

  return (
    <li className={classes.log} key={id}>
      <div>
        <span className={classes.date}>
          <h3>{date}</h3>
        </span>
        <div>
          {projects.map((project) => (
            <ProgressBar key={project.id} name={project.name} progress={40} />
          ))}
        </div>
        <span>{text}</span>
      </div>
    </li>
  );
};

export default Log;

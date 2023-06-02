import classes from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  const { name } = props;
  const dummyProgress = 40;
  const dummyTime = "1시간 20분";
  const fillerStyle = {
    width: `${dummyProgress}%`,
    backgroundColor: "#F38181",
  };
  return (
    <div className={classes.container}>
      <div className={classes.filler} style={fillerStyle}></div>
      <span className={classes.time}>{dummyTime}</span>
      <span className={classes.name}>{name}</span>
    </div>
  );
};

export default ProgressBar;

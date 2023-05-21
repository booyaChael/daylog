import classes from "./Diary.module.css";

const Diary = (props) => {
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label>날짜</label>
        <input type="date" defaultValue={currentDate}></input>
      </div>
      <div className={classes.control}>
        <label>점수 (0~100)</label>
        <input type="number" defaultValue="0"></input>
      </div>
      <div className={`${classes.control} ${classes.memo}`}>
        <label>기록 몇 마디</label>
        <textarea rows="3"></textarea>
      </div>
    </form>
  );
};

export default Diary;

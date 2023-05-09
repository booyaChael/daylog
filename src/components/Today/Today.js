import Modal from "../UI/Modal";
import Todaylog from "./Todaylog";
import classes from "./Today.module.css";

const dummyTodayData = [
  {
    name: "Udemy 강의 듣기",
    spend: 1,
  },
  {
    name: "매일 운동하기",
    spend: 1.5,
  },
];

const Today = (props) => {
  const todayLogs = dummyTodayData.map((project) => (
    <Todaylog name={project.name} spend={project.spend} />
  ));

  const totalTime = "2.5시간";
  return (
    <Modal>
      {todayLogs}
      <div className={classes.total}>
        <span>오늘의 투자</span>
        <span>{totalTime}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>취소</button>
        <button className={classes.button}>기록</button>
      </div>
    </Modal>
  );
};

export default Today;

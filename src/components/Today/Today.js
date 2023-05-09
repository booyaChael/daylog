import Modal from "../UI/Modal";
import Todaylog from "./Todaylog";
import classes from "./Today.module.css";

const dummyTodayData = [
  {
    id: 1,
    name: "Udemy 강의 듣기",
    spend: 1,
  },
  {
    id: 2,
    name: "매일 운동하기",
    spend: 1.5,
  },
];

const Today = (props) => {
  const todayLogs = dummyTodayData.map((project) => (
    <Todaylog key={project.id} name={project.name} spend={project.spend} />
  ));

  const totalTime = "2.5시간";
  return (
    <Modal onClose={props.onClose}>
      {todayLogs}
      <div className={classes.total}>
        <span>오늘의 투자</span>
        <span>{totalTime}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          취소
        </button>
        <button className={classes.button}>기록</button>
      </div>
    </Modal>
  );
};

export default Today;

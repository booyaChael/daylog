import Modal from "../UI/Modal";
import Todaylog from "./Todaylog";
import classes from "./Today.module.css";
import { useContext, useState } from "react";
import TodayContext from "../../store/today-context";
import Diary from "./Diary";

const Today = (props) => {
  const todayCtx = useContext(TodayContext);
  const { projects, totalTime, addProject, removeProject, clearProject } =
    todayCtx;
  const [isDiary, setIsDiary] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const showDiary = () => setIsDiary(true);
  const hideDiary = () => setIsDiary(false);

  const totalHour = parseInt(totalTime / 60);
  const totalMinute = parseInt(totalTime % 60);

  const hasProject = projects.length > 0;

  const saveHandler = (diaryData) => {
    setIsSubmitting(true);
    fetch("https://daylog-d368c-default-rtdb.firebaseio.com/logs.json", {
      method: "POST",
      body: JSON.stringify({
        diary: diaryData,
        projects: projects,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    clearProject();
  };
  const addProjectHandler = (project) => {
    addProject({
      id: project.id,
      name: project.name,
      time: 1,
    });
  };

  const removeProjectHandler = (project) => {
    removeProject({
      id: project.id,
      time: 1,
    });
  };

  const todayLogs = (
    <ul className={classes.projects}>
      {projects.map((project) => (
        <Todaylog
          key={project.id}
          name={project.name}
          time={project.time}
          onAdd={addProjectHandler.bind(null, project)}
          onRemove={removeProjectHandler.bind(null, project)}
        />
      ))}
    </ul>
  );

  const hasProject = projects.length > 0;


  const isSubmittingModalContent = <p>기록중입니다...</p>;

  const didSubmitModalContent = (
    <>
      <p>기록 완료되었습니다</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          닫기
        </button>
      </div>
    </>
  );

  const todayModalContent = (
    <>
      {todayLogs}
      <div className={classes.total}>
        <span>오늘의 기록</span>
        <span>
          {totalHour}시간 {totalMinute}분
        </span>
      </div>
      {isDiary && <Diary onSave={saveHandler} onClose={hideDiary} />}
      {!isDiary && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            취소
          </button>
          {hasProject && !isDiary && (
            <button className={classes.button} onClick={showDiary}>
              기록
            </button>
          )}
        </div>
      )}
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && todayModalContent}
      {isSubmitting && !didSubmit && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Today;

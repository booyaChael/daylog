import Modal from "../UI/Modal";
import Todaylog from "./Todaylog";
import classes from "./Today.module.css";
import { useContext, useState } from "react";
import TodayContext from "../../store/today-context";
import Diary from "./Diary";
import { db } from "../../utill/firebase";
import { ref, set, get, update } from "firebase/database";

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

  const saveHandler = async (logDate, logText) => {
    setIsSubmitting(true);
    const saveData = {
      logDate,
      logText,
      projects,
    };

    const checkData = async (dateKey) => {
      const snapshot = await get(ref(db, "logs/" + dateKey), dateKey);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    };

    //각 사용자는 고유한 사용자 이름을 갖게 되므로 별도의 키를 만들 필요가 없기 때문에 push 메서드 대신 set 메서드를 사용하는 것이 좋습니다
    const addLog = async (newData) => {
      const previousData = await checkData(newData.logDate);

      if (previousData) {
        let updatedProjects = previousData.projects;
        const newProjects = newData.projects;
        for (let i = 0; i < newProjects.length; i++) {
          const existingPreviousProjectIndex = updatedProjects.findIndex(
            (prevProject) => prevProject.id === newProjects[i].id
          );
          //기존 프로젝트 목록에 추가하려는 프로젝트 id가 존재한다면
          if (existingPreviousProjectIndex !== -1) {
            const existingProject =
              updatedProjects[existingPreviousProjectIndex];
            //해당 프로젝트를 가져와 추가하려는 프로젝트 정보와 내용을 합쳐준다
            const updatedProject = {
              ...existingProject,
              time: existingProject.time + newProjects[i].time,
            };
            //updatedProjects에 있는 내용을 변경해준다
            updatedProjects[existingPreviousProjectIndex] = updatedProject;
            console.log(updatedProjects);
          } else {
            updatedProjects.push(newProjects[i]);
            console.log(updatedProjects);
          }
        }
        console.log(newData);
        const updatedData = {
          ...newData,
          projects: updatedProjects,
        };
        const previousLogRef = ref(db, "logs/" + newData.logDate);
        update(previousLogRef, updatedData);
      } else {
        console.log("no previous Data");
        const logsRef = ref(db, "logs/" + newData.logDate);
        set(logsRef, newData);
      }
    };
    addLog(saveData);
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

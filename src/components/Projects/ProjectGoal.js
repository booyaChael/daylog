import classes from "./Goal.module.css";

const ProjectGoal = (props) => {
  return (
    <section className={classes.goal}>
      <h2>하루하루는 최선을 다해, 인생 전체는 되는대로</h2>
      <ul>
        <li>유데미 강의 마무리하기</li>
        <li>프로젝트 준비하기</li>
        <li>프로젝트 준비하기</li>
        <li>프로젝트 준비하기</li>
      </ul>
    </section>
  );
};

export default ProjectGoal;

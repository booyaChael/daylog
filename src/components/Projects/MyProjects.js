import Card from "../UI/Card";
import MyProject from "./MyProject/MyProject";

const dummyProjects = [
  {
    name: "Udemy 강의 듣기",
    explanation: "리액트에 대한 전문성 향상",
    wantToSpend: 2,
  },
  {
    name: "매일 운동하기",
    explanation: "리액트에 대한 전문성 향상",
    wantToSpend: 2,
  },
  {
    name: "프로젝트 준비",
    explanation: "리액트에 대한 전문성 향상",
    wantToSpend: 2,
  },
];

const MyProjects = (props) => {
  const projectLists = dummyProjects.map((project) => (
    <MyProject
      name={project.name}
      explanation={project.explanation}
      wantToSpend={project.wantToSpend}
    />
  ));
  return (
    <section>
      <Card>{projectLists}</Card>
    </section>
  );
};

export default MyProjects;

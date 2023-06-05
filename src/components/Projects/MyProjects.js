import Card from "../UI/Card";
import MyProject from "./MyProject/MyProject";
import { useEffect, useState } from "react";
import classes from "./MyProjects.module.css";
import { db } from "../../utill/firebase";
import { ref, get } from "firebase/database";

const projectsRef = ref(db, "projects");
const MyProjects = (props) => {
  const [projectsData, setProjectsData] = useState([]);
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await get(projectsRef);
      const projects = await snapshot.val();
      const loadedProjects = [];
      for (const key in projects) {
        loadedProjects.push({
          id: key,
          name: projects[key].name,
          explanation: projects[key].explanation,
          wantToSpend: projects[key].wantToSpend,
        });
      }
      setProjectsData(loadedProjects);
      setIsLoading(false);
    };
    fetchProjects().catch((error) => {
      setHttpError(error.message);
    });
  }, []);
  const projectLists = projectsData.map((project) => (
    <MyProject
      id={project.id}
      key={project.id}
      name={project.name}
      explanation={project.explanation}
      wantToSpend={project.wantToSpend}
    />
  ));
  if (isLoading) {
    return (
      <section className={classes.ProjectsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.Error}>
        <p>Error</p>
      </section>
    );
  }
  return (
    <section className={classes.projects}>
      <Card>{projectLists}</Card>
    </section>
  );
};

export default MyProjects;

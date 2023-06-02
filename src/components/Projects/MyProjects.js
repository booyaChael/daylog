import Card from "../UI/Card";
import MyProject from "./MyProject/MyProject";
import { useEffect, useState } from "react";
import classes from "./MyProjects.module.css";

const MyProjects = (props) => {
  const [projectsData, setProjectsData] = useState([]);
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log(isLoading);
    const fetchProjects = async () => {
      const response = await fetch(
        "https://daylog-d368c-default-rtdb.firebaseio.com/projects.json"
      );
      const responseData = await response.json();

      const loadedProjects = [];
      for (const key in responseData) {
        loadedProjects.push({
          id: key,
          name: responseData[key].name,
          explanation: responseData[key].explanation,
          wantToSpend: responseData[key].wantToSpend,
        });
        setProjectsData(loadedProjects);
        setIsLoading(false);
      }
    };
    fetchProjects().catch((error) => {
      setHttpError(error.message);
    });
  }, [isLoading]);
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

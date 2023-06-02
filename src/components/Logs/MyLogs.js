import Card from "../UI/Card";
import Log from "./Log";
import classes from "./MyLogs.module.css";

const MyLogsPage = () => {
  const dummyLogData = [
    {
      diary: {
        date: "2023-06-05",
        score: 10,
        text: "강의를 열심히 듣자",
      },
      projects: [
        { id: "p1", name: "Udemy", time: 33 },
        { id: "p2", name: "운동", time: 50 },
      ],
    },
    {
      diary: {
        date: "2023-06-06",
        score: 20,
        text: "강의를 많이 들었다",
      },
      projects: [
        { id: "p1", name: "Udemy", time: 33 },
        { id: "p2", name: "운동", time: 50 },
      ],
    },
    {
      diary: {
        date: "2023-06-07",
        score: 20,
        text: "강의를 많이 들었다",
      },
      projects: [
        { id: "p1", name: "Udemy", time: 33 },
        { id: "p2", name: "운동", time: 50 },
      ],
    },
    {
      diary: {
        date: "2023-06-08",
        score: 20,
        text: "강의를 많이 들었다",
      },
      projects: [
        { id: "p1", name: "Udemy", time: 33 },
        { id: "p2", name: "운동", time: 50 },
      ],
    },
    {
      diary: {
        date: "2023-06-09",
        score: 20,
        text: "강의를 많이 들었다",
      },
      projects: [
        { id: "p1", name: "Udemy", time: 33 },
        { id: "p2", name: "운동", time: 50 },
      ],
    },
    {
      diary: {
        date: "2023-06-10",
        score: 20,
        text: "강의를 많이 들었다",
      },
      projects: [
        { id: "p1", name: "Udemy", time: 33 },
        { id: "p2", name: "운동", time: 50 },
      ],
    },
    {
      diary: {
        date: "2023-06-11",
        score: 20,
        text: "강의를 많이 들었다",
      },
      projects: [
        { id: "p1", name: "Udemy", time: 33 },
        { id: "p2", name: "운동", time: 50 },
      ],
    },
  ];

  const logs = dummyLogData.map((log, key) => (
    <Log diary={log.diary} projects={log.projects} key={key} />
  ));

  return (
    <section className={classes.logs}>
      <Card>
        <ul>{logs}</ul>
      </Card>
    </section>
  );
};

export default MyLogsPage;

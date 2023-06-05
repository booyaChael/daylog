import { db } from "../../utill/firebase";
import { ref, get } from "firebase/database";
import Card from "../UI/Card";
import Log from "./Log";
import classes from "./MyLogs.module.css";
import { useEffect, useState } from "react";
import WeekCalendar from "./WeekCalendar";

const logsRef = ref(db, "logs");

const MyLogsPage = () => {
  const [logsData, setLogsData] = useState([]);
  useEffect(() => {
    const fetchLogs = async () => {
      const snapshot = await get(logsRef);
      const logs = await snapshot.val();

      const loadedLogs = [];
      for (const date in logs) {
        loadedLogs.push({
          id: date,
          date: date,
          text: logs[date].text,
          projects: logs[date].projects,
        });
      }
      setLogsData(loadedLogs);
    };
    fetchLogs().catch((error) => {
      return error;
    });
  }, []);

  const logs = logsData.map((log) => (
    <Log key={log.id} date={log.date} text={log.text} projects={log.projects} />
  ));

  return (
    <section className={classes.logs}>
      <Card>
        <WeekCalendar />
        <ul>{logs}</ul>
      </Card>
    </section>
  );
};

export default MyLogsPage;

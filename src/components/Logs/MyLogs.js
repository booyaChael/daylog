import { db } from "../../utill/firebase";
import { ref, get } from "firebase/database";
import Card from "../UI/Card";
import Log from "./Log";
import classes from "./MyLogs.module.css";
import { useEffect, useState } from "react";
import WeekCalendar from "./WeekCalendar";

const MyLogsPage = () => {
  const [logsData, setLogsData] = useState([]);
  const [weekStartDate, setWeekStartDate] = useState();

  useEffect(() => {
    const fetchLogs = async () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Adding 1 to month as it is zero-based
      const day = String(today.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      console.log(formattedDate);
      const logsRef = ref(db, "logs/" + formattedDate);
      const snapshot = await get(logsRef);
      const logs = await snapshot.val();
      console.log(logs);
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
        <WeekCalendar onWeekStartDate={setWeekStartDate} />
        <ul>{logs}</ul>
      </Card>
    </section>
  );
};

export default MyLogsPage;

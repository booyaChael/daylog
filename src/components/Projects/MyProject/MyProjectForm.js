import Input from "../../UI/Input";
import classes from "./MyProjectForm.module.css";
import { useRef } from "react";

const MyProjectForm = (props) => {
  const hourInputRef = useRef();
  const minuteInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredHour = hourInputRef.current.value;
    const enteredMinute = minuteInputRef.current.value;
    const enteredHourNumber = +enteredHour;
    const enteredMinuteNumber = +enteredMinute;
    const calculatedMinute = enteredHourNumber * 60 + enteredMinuteNumber;

    props.onAddTimeToToday(calculatedMinute);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.inputfield}>
        <Input
          ref={hourInputRef}
          name="시간"
          input={{
            id: "time",
            type: "number",
            min: "0",
            step: "1",
            defaultValue: "0",
          }}
        />
        <Input
          ref={minuteInputRef}
          name="분"
          input={{
            id: "time",
            type: "number",
            min: "0",
            step: "1",
            defaultValue: "30",
          }}
        />
      </div>
      <div className={classes.buttonfield}>
        <button>추가</button>
      </div>
    </form>
  );
};
export default MyProjectForm;

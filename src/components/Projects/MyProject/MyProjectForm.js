import Input from "../../UI/Input";
import classes from "./MyProjectForm.module.css";
import { useRef } from "react";

const MyProjectForm = (props) => {
  const timeInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTime = timeInputRef.current.value;
    const enteredTimeNumber = +enteredTime;

    props.onAddTimeToToday(enteredTimeNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={timeInputRef}
        label="시간"
        input={{
          id: "time",
          type: "number",
          min: "0",
          step: "30",
          defaultValue: "30",
        }}
      />
      <button>추가</button>
    </form>
  );
};
export default MyProjectForm;

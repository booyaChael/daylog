import classes from "./Diary.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";

const Diary = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    dateIsValid: true,
    textIsValid: true,
  });
  const dateInputRef = useRef();
  const textInputRef = useRef();
  const currentDate = new Date().toISOString().split("T")[0];
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredDate = dateInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const enteredDateIsValid = !isEmpty(enteredDate);
    const enteredTextIsValid = !isEmpty(enteredText);

    setFormInputValidity({
      dateIsValid: enteredDateIsValid,
      textIsValid: enteredTextIsValid,
    });

    const formIsValid = enteredDateIsValid && enteredTextIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSave(enteredDate, enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label>날짜</label>
        <input
          type="date"
          defaultValue={currentDate}
          ref={dateInputRef}
        ></input>
        {!formInputValidity.dateIsValid && <p>날짜를 입력해주세요</p>}
      </div>
      <div className={`${classes.control} ${classes.memo}`}>
        <label>기록 몇 마디</label>
        <textarea rows="3" ref={textInputRef}></textarea>
        {!formInputValidity.textIsValid && (
          <p>오늘에 대한 이야기를 간단히 적어주세요</p>
        )}
        <div className={classes.actions}>
          <button type="button" onClick={props.onClose}>
            뒤로
          </button>
          <button type="submit" className={classes.submit}>
            저장
          </button>
        </div>
      </div>
    </form>
  );
};
export default Diary;

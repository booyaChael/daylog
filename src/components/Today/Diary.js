import classes from "./Diary.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isNumber0to100 = (value) => {
  const number = Number(value);
  return !isNaN(number) && number >= 0 && number <= 100;
};

const Diary = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    dateIsValid: true,
    scoreIsValid: true,
    textIsValid: true,
  });
  console.log(formInputValidity);
  const dateInputRef = useRef();
  const scoreInputRef = useRef();
  const textInputRef = useRef();
  const currentDate = new Date().toISOString().split("T")[0];
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredDate = dateInputRef.current.value;
    const enteredScore = scoreInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const enteredDateIsValid = !isEmpty(enteredDate);
    const enteredScoreIsValid = isNumber0to100(enteredScore);
    const enteredTextIsValid = !isEmpty(enteredText);

    setFormInputValidity({
      dateIsValid: enteredDateIsValid,
      scoreIsValid: enteredScoreIsValid,
      textIsValid: enteredTextIsValid,
    });

    const formIsValid =
      enteredDateIsValid && enteredScoreIsValid && enteredTextIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSave({
      date: enteredDate,
      score: enteredScore,
      text: enteredText,
    });
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
      <div className={classes.control}>
        <label>점수 (0~100)</label>
        <input type="number" placeholder="0" ref={scoreInputRef}></input>
        {!formInputValidity.scoreIsValid && (
          <p>0에서 100 사이의 숫자로 입력해주세요</p>
        )}
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


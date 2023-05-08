import Input from "../../UI/Input";
import classes from "./MyProjectForm.module.css";

const MyProjectForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
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
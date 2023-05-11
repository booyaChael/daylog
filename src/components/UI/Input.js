import classes from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <input ref={ref} {...props.input} />
      <span>{props.name}</span>
    </div>
  );
});
export default Input;

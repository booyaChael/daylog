import classes from "./SideBarItem.module.css";

const SideBarItem = (props) => {
  return <li className={classes.item}>{props.name}</li>;
};

export default SideBarItem;

import classes from "./Header.module.css";
import HeaderTodayBtn from "./HeaderTodayBtn";
import menuIcon from "../../assets/menu.png";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.title}>
          <button className={classes.button}>
            <span className={classes.icon} onClick={props.onHandleSideBar}>
              <img src={menuIcon} alt="menu" />
            </span>
          </button>

          <h1>하루의 기록</h1>
        </div>
        <HeaderTodayBtn onShowToday={props.onShow} />
      </header>
    </>
  );
}
export default Header;

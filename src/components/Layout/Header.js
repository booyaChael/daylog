import classes from "./Header.module.css";
import HeaderTodayBtn from "./HeaderTodayBtn";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>하루의 기록</h1>
        <HeaderTodayBtn />
      </header>
    </>
  );
}
export default Header;

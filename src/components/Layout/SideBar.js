import classes from "./SideBar.module.css";
import { Link } from "react-router-dom";
import SideBarItem from "./SideBarItem";

const menus = [
  { name: "홈", path: "/" },
  { name: "나의 기록", path: "/my_logs" },
  { name: "통계", path: "/statics" },
  { name: "프로젝트 관리", path: "/edit" },
];

const SideBar = (props) => {
  return (
    <div className={classes.menu}>
      <ul>
        {menus.map((menu, index) => {
          return (
            <Link to={menu.path} key={index} style={{ textDecoration: "none" }}>
              <SideBarItem name={menu.name} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;

import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo512.png";
import MenuItem from "./MenuItem";
import "./Menu.css";
import "./TopNav.css"

export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/admin/dashboard",
    iconClassName: "bi bi-speedometer2",
  },
  { name: "Job Categories", to: `/admin/job-categories`, iconClassName: "bi bi-grid" },
  { name: "Skills", to: `/admin/skills`, iconClassName: "bi bi-grid" },
  { name: "Job locations", to: `/admin/locations`, iconClassName: "bi bi-geo-alt" },
  { name: "Jobs", to: `/admin/job`, iconClassName: "bi bi-award" },
  { name: "Companies", to: `/admin/job-company`, iconClassName: "bi bi-film" },
  { name: "Job Applications", to: `/admin/job-applications`, iconClassName: "bi bi-person" },
  { name: "Candidate Database", to: `/admin/applications-archive`, iconClassName: "bi bi-inbox" },
  { name: "Job OnBoard", to: `/admin/job-onboard`, iconClassName: "bi bi-person" },
  { name: "Interview Schedule", to: `/admin/interview-schedule`, iconClassName: "bi bi-calendar" },
  { name: "Team", to: `/admin/team`, iconClassName: "bi bi-people" },
  { name: "Subscription", to: `/admin/subscribe`, iconClassName: "bi bi-gear" },
  {
    name: "Settings",
    exact: true,
    to: `/admin/dashboard`,
    iconClassName: "bi bi-speedometer2bi bi-gear",
    subMenus: [
      { name: "Profile", to: "/admin/profile" },
      { name: "Business Settings", to: "/admin/setting" },
      { name: "Application Settings", to: "/admin/settings/application-setting" },
      { name: "Roles & Permissions", to: "/admin/settings/role-permission" },
      { name: "Delete Account", to: "/admin/settings/delete-account" },
      { name: "Zoom Setting", to: "/admin/settings/zoom-setting" },
    ],
  },
  
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <>
    <div className="navb">
    <div className="topnav">
            <div onClick={() => setInactive(!inactive)} className="menu-btn">
                <i class="bi bi-list"></i>
            </div>
            <div className="right-nav">
            <div className="userprofile"><i class="bi bi-person-circle"></i></div>
            <div className="username">admin</div>
            <div className="notification"><i class="bi bi-bell"></i></div>
            <div className="logout"><i class="bi bi-power"></i></div>
            </div>
    </div>
    </div>
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {/* <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          <i class="bi bi-list"></i>
        </div> */}
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default SideMenu;

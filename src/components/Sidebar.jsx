import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiTwotoneBug, AiTwotoneEdit } from "react-icons/ai";
import { GoIssueOpened } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { BsFillKanbanFill } from "react-icons/bs";
import { RiDiscussFill, RiSuitcaseFill } from "react-icons/ri";
import { IoCalendarSharp } from "react-icons/io5";
// import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-gray-600 text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <AiTwotoneBug
                className=" text-3xl"
                style={{ color: "blue", marginRight: "-5" }}
              />{" "}
              <span>BugTracker</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prev) => !prev)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className=" mt-10">
            {/* {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))} */}
            <div>
              <p>
                <NavLink
                  to="/"
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <FaHome />
                  <span className="capitalize">Home</span>
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/projects"
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <RiSuitcaseFill />
                  <span className="capitalize">Projects</span>
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/discuss"
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <RiDiscussFill />
                  <span className="capitalize">Discuss</span>
                </NavLink>
              </p>
              <p className="text-gray-400 m-3 mt-4 uppercase">
                <span>Work Overview</span>
                <NavLink
                  to="/bugs"
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <AiTwotoneBug />
                  <span className="capitalize">Bugs</span>
                </NavLink>
                <NavLink
                  to="/issues"
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <GoIssueOpened />
                  <span className="capitalize">Issues</span>
                </NavLink>
                <NavLink
                  to="/improvements"
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <AiTwotoneEdit />
                  <span className="capitalize">Improvements</span>
                </NavLink>
              </p>
              <p className="text-gray-400 m-3 mt-4 uppercase">
                <span>Apps</span>
                <NavLink
                  to="/calender"
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <IoCalendarSharp />
                  <span className="capitalize">Calender</span>
                </NavLink>
                <NavLink
                  to="/kanban"
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <BsFillKanbanFill />
                  <span className="capitalize">Kanban</span>
                </NavLink>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;

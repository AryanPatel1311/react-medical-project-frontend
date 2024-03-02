import { useContext, useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    toggleMenu(); // Close the menu after logout
  };

  return (
    <div>
      <span className="lg:hidden" onClick={toggleMenu}>
        <BiMenu />
      </span>
      <div
        className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md"
        ref={menuRef}
      >
        <button
          onClick={() => {
            setTab("overview");
            toggleMenu(); // Close the menu after selecting a tab
          }}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => {
            setTab("appointments");
            toggleMenu(); // Close the menu after selecting a tab
          }}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => {
            setTab("settings");
            toggleMenu(); // Close the menu after selecting a tab
          }}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>
        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
          >
            Logout
          </button>
          <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

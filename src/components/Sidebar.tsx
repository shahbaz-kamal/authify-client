import logo from "@/assets/images/logo.png";
import { adminSidebarItems } from "@/Router/adminSidebarItems";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="min-w-[202px] rounded-[14px] bg-color-bc bg-opacity-75 h-[580px] pt-2.5 px-2.5  border-[0.5px] border-color-white/75">
      {/* top section */}
      <div className="flex items-center">
        <div className="w-[57px] h-[57px] ">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div>
          <h1 className="font-inter text-lg font-semibold text-color-78">Pen Live</h1>
          <p className="font-inter text-[15px] font-semibold text-color-active gap-2 ">Admin Panel</p>
        </div>
      </div>
      {/* Navigation section */}
      <div className="flex flex-col space-y-[17.7px] mt-[17.7px] pl-2.5 text-inter">
        {adminSidebarItems.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.url}
              className={({ isActive }) => `flex items-center gap-[5.9px] text-[11.8px] ${isActive ? "text-color-active font-medium" : "text-color-18"}`}
            >
              <span>{item.icon}</span>
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

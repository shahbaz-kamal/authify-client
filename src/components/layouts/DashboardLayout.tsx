import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import TopdashBoard from "./TopdashBoard";

const DashboardLayout = () => {
  return (
    <div className="w-full ">
      <div className=" w-full bg-color-eb shadow-[0_4px_31.1px_rgba(0,0,0,0.25)]">
        <div className="max-w-[1440px] mx-auto ">
          <TopdashBoard></TopdashBoard>
        </div>
      </div>
      <div className="bg-dashboard-background pt-6 min-h-screen">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex px-11 gap-4.5">
            <Sidebar></Sidebar>
            <div className="flex-1">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

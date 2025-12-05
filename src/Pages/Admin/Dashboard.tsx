import AvgCommisionIcon from "@/assets/icons/AvgCommisionIcon";
import ExportIcon from "@/assets/icons/ExportIcon";
import TotalAgenciesIcon from "@/assets/icons/TotalAGenciesLogo";
import DashboardTable from "@/components/modules/Admin/Dashboard/DashboardTable";
import DashboardTop from "@/components/modules/Admin/Dashboard/DashboardTop";

const Dashboard = () => {
  return (
    <div>
      {/* Top section */}
      <DashboardTop></DashboardTop>
      {/* bottom table */}
      <DashboardTable></DashboardTable>
    </div>
  );
};

export default Dashboard;

import AvgCommisionIcon from "@/assets/icons/AvgCommisionIcon";
import ExportIcon from "@/assets/icons/ExportIcon";
import TotalAgenciesIcon from "@/assets/icons/TotalAGenciesLogo";
import TotalCoinSalesIcon from "@/assets/icons/TotalCoinSalesIcon";

const DashboardTop = () => {
  return (
    <div className="mb-5">
      <div className="rounded-[29px] bg-color-bc bg-opacity-75 border-[0.5px] border-color-white/75 py-[31px] px-[25px]">
        {/* headline */}
        <div className="flex justify-between items-center w-full mb-[41px]">
          <div className="space-y-[7.76px]">
            <h1 className=" font-semibold text-[27.16px]">Dashboard</h1>
            <h1 className="text-[15.52px] text-color-63">Manage your app from your dashboard</h1>
          </div>
          <button className="flex items-center gap-[9.7px] py-[4.85px] px-[17.63px] rounded-[11px] border  border-b-color-ccc/47 bg-color-2f/1 shadow-[0_4px_17.5px_0_rgba(0,0,0,0.18)] hover:bg-color-2f/10 cursor-pointer transition duration-300">
            <span className="text-[18.4px] leading-none "> Export Data</span>{" "}
            <span className="w-6 h-6 ">
              <ExportIcon></ExportIcon>
            </span>
          </button>
        </div>

        {/* cards */}
        <div className="grid grid-cols-3 gap-[60px]">
          <div className="bg-color-ea px-[28.38px] pt-[19.65px] pb-[13.1px] rounded-[13.1px] flex justify-between items-start">
            <div>
              <p className="font-medium text-[17.46px] text-color-18">Total Agencies</p>
              <p className="font-semibold text-[30.56px] leading-[53.48px] my-1">3</p>
              <p className="text-[17.46px] text-color-00">+3 this month</p>
            </div>
            <div className="bg-color-cc rounded-[5.46px] p-[9.82px]">
              <TotalAgenciesIcon></TotalAgenciesIcon>
            </div>
          </div>
          {/* Total Coin Sales */}
          <div className="bg-color-e4 px-[28.38px] pt-[19.65px] pb-[13.1px] rounded-[13.1px] flex justify-between items-start">
            <div>
              <p className="font-medium text-[17.46px] text-color-18">Total Coin Sales</p>
              <p className="font-semibold text-[30.56px] leading-[53.48px] my-1">5.3M</p>
              <p className="text-[17.46px] text-color-00">+3 this month</p>
            </div>
            <div className="bg-color-9f rounded-[5.46px] p-[9.82px]">
             <TotalCoinSalesIcon></TotalCoinSalesIcon>
            </div>
          </div>
          {/* Avg Commission */}
          <div className="bg-color-d8 px-[28.38px] pt-[19.65px] pb-[13.1px] rounded-[13.1px] flex justify-between items-start">
            <div>
              <p className="font-medium text-[17.46px] text-color-18">Avg Commission</p>
              <p className="font-semibold text-[30.56px] leading-[53.48px] my-1">10%</p>
              <p className="text-[17.46px] text-color-00">+3 this month</p>
            </div>
            <div className="bg-color-95 rounded-[5.46px] p-[9.82px]">
              <AvgCommisionIcon></AvgCommisionIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;

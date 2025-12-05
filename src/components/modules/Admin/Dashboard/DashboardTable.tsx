import LevelIcon from "@/assets/icons/LevelIcon";
import { EyeIcon, FilterIcon, LinkIcon } from "lucide-react";
import { useEffect, useState } from "react";

const DashboardTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const res = fetch("/tableData.json")
      .then((res) => res.json())
      .then((data) => setTableData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(tableData);
  return (
    <div className="space-y-[13.35px]">
      <header className="flex items-center justify-between gap-[28.15px] ">
        <div className="flex-1 rounded-2">
          <input
            className=" rounded-2 border-[0.6px] border-color-bb px-[17.38px] pt-[4.22px] placeholder:text-color-18 placeholder:text-lg min-h-[35.19px] w-full rounded-xl"
            type="text"
            placeholder="Search by agency ID or name"
          />
        </div>
        <div className="flex items-center gap-[15.21px]">
          {" "}
          <div className="flex gap-[8.85px] text-color-ff py-[5.37px] px-[15.44px] bg-white rounded-[30.86px] h-[34.75]">
            <span className="">
              <FilterIcon></FilterIcon>
            </span>
            <span className="font-medium text-[16.14px]">Filter</span>
          </div>
          <button className="py-[5.37px] px-[15.44px] rounded-[27.59px] font-medium text-[16.14px] text-[#ffffff] bg-color-ff min-h-[35.75px]">
            Add Agency
          </button>
        </div>
      </header>
      <div className="w-full border border-white/35 rounded-[29px]">
        <table className="w-full  overflow-hidden ">
          <thead className="">
            <tr className="border-b border-b-color-df">
              <td className="pt-7 pb-4 font-medium text-lg text-color-53 pl-[27px]">User ID</td>
              <td className="pt-7 pb-4 font-medium text-lg text-color-53 pl-[27px]">Name</td>
              <td className="pt-7 pb-4 font-medium text-lg text-color-53 pl-[27px]">Level</td>
              <td className="pt-7 pb-4 font-medium text-lg text-color-53 pl-[27px]">Diamonds</td>
              <td className="pt-7 pb-4 font-medium text-lg text-color-53 pl-[27px]">Beans</td>
              <td className="pt-7 pb-4 font-medium text-lg text-color-53 pl-[27px]">Coin Sell</td>
              <td className="pt-7 pb-4 font-medium text-lg text-color-53 pl-[27px]">Coin Buy</td>
              <td className="pt-7 pb-4 font-medium text-lg text-color-53 pl-[27px]">Location</td>
              <td className="pt-7 pb-4 font-medium text-lg text-color-53 pl-[27px]">Status</td>
              <td className="pt-7 pb-4 font-medium text-lg text-color-53 pl-[27px]">Action</td>
            </tr>
          </thead>

          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className={`${index !== tableData.length - 1 ? "border-b" : ""} border-b-color-df`}>
                <td className="pt-4 pb-[23px] pl-[27px] font-medium text-lg text-color-18">{item?.userId}</td>
                <td className="pt-4 pb-[23px] pl-[27px] text-lg text-color-18">{item.name.slice(0, 8)}...</td>
                <td className="pt-4 pb-[23px] pl-[27px]">
                  <button className="flex gap-2 items-center rounded-lg bg-linear-to-b from-[#DCE0ED] to-[#705996] p-0.5">
                    <span>
                      <LevelIcon></LevelIcon>
                    </span>
                    <span className="font-medium text-[10px] leading-[22px] text-white">Lv{item.level}</span>
                  </button>
                </td>
                <td className="pt-4 pb-[23px] pl-[27px] text-color-18 text-lg">{item.diamonds}M</td>
                <td className="pt-4 pb-[23px] pl-[27px] text-color-18 text-lg">{item.beans}M</td>
                <td className="pt-4 pb-[23px] pl-[27px] text-color-18 text-lg">{item.coinSell}K</td>
                <td className="pt-4 pb-[23px] pl-[27px] text-color-18 text-lg">{item.coinBuy}K</td>
                <td className="pt-4 pb-[23px] pl-[27px] text-color-18 text-lg">{item.location}K</td>
                <td className="pt-4 pb-[23px] pl-[27px] text-color-18 text-lg">
                  <button
                    className={`rounded-[11.16px] px-[14.5px] py-0.5 text-[#005D23] text-[10px] lowercase ${
                      item.status === "Active" ? "bg-linear-to-r from-[#79D49B] to-[#25C962]" : "bg-red-400 text-red-200"
                    }`}
                  >
                    {item.status}
                  </button>
                </td>

                <td className="pt-4 pb-[23px] pl-[27px]">
                  <EyeIcon></EyeIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;

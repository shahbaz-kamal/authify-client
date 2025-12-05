import LogoutIcon from "@/assets/icons/LogoutIcon";
import profilePhoto from "@/assets/images/profilePhoto.png";

const TopdashBoard = () => {
  return (
    <div className="px-11 pt-[47px] pb-6 flex justify-between ">
      {/* left side */}
      <div className="flex gap-[8.47px] items-center">
        <div className="w-[57px] h-[57px] rounded-full">
          <img className="w-full h-full rounded-full" src={profilePhoto} alt="" />
        </div>
        <div>
          <h3 className="text-lg text-color-78 font-semibold">@Mumtahina</h3>
          <p className="text-[12px] font-medium text-color-93">
            <span>admin id: </span> <span>090990</span>
          </p>
        </div>
      </div>
      {/* right side */}
      <div>
        <button className="flex gap-[9.42px] text-color-be font-medium text-lg font-poppins cursor-pointer px-7 py-1 hover:text-color-be/80 transition duration-300">
        <LogoutIcon></LogoutIcon>  Logout{" "}
        </button>
      </div>
    </div>
  );
};

export default TopdashBoard;

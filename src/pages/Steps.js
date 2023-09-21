export default function Steps() {
  return (
    <div className="w-[85%] my-5 md:my-10 grid grid-cols-4 md:gap-4 items-center justify-center text-xs md:text-xl">
      <div className="flex flex-col lg:flex-row sm:flex-col md:flex-row items-center  gap-[20px]">
        <img
          className="relative w-5 h-5 md:w-10 md:h-10"
          alt=""
          src="icons/group-1484578147.svg"
        />
        <div className="relative flex text-sm leading-[110%] lg:flex-col xl:flex-row capitalize">
          <span className="hidden md:hidden lg:block">Step 1 :</span>
          Cart Review
        </div>
      </div>
      <div className="flex  flex-col md:flex-row items-center  gap-[20px]">
        <img
          className="relative w-5 h-5 md:w-10 md:h-10"
          alt=""
          src="icons/group-1484578148.svg"
        />
        <div className="relative flex leading-[110%] lg:flex-col xl:flex-row capitalize">
          <span className="hidden md:hidden lg:block">Step 2 : </span>
          Checkout
        </div>
      </div>
      <div className="flex  flex-col md:flex-row items-center  gap-[20px] text-white">
        <div className="relative w-5 h-5 md:w-10 md:h-10">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue box-border h-5 w-5 md:w-10 md:h-10 border-[2px] border-solid border-royalblue" />
          <div className="absolute   top-[5px] md:top-[10px] left-[7px] md:left-[14px] leading-[110%] capitalize">
            3
          </div>
        </div>
        <b className="relative leading-[110%] capitalize flex md:flex-col lg:flex-col xl:flex-row text-black">
          <span className="hidden md:hidden lg:block">Step 3 : </span>
          Special Offer
        </b>
      </div>
      <div className="flex  flex-col  md:flex-row items-center gap-[20px] text-royalblue">
        <div className="relative w-5 h-5 md:w-10 md:h-10">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-5 h-5  md:w-10 md:h-10 border-[2px] border-solid border-royalblue" />
          <div className="absolute  top-[3px] md:top-[10px] left-[7px] md:left-[14px] leading-[110%] capitalize">
            4
          </div>
        </div>
        <div className="relative flex leading-[110%]  capitalize lg:flex-col xl:flex-row text-black">
          <span className="hidden md:hidden lg:block">Step 4 : </span>
          Confirmation
        </div>
      </div>
    </div>
  );
}

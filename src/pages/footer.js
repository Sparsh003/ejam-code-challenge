export default function Footer() {
  return (
    <>
      <div className=" flex flex-col mt-10 py-2 md:mt-10 md:flex-row  justify-between  bg-darkslategray-300 w-full h-[75px]  text-white">
        <div className="  rounded flex flex-row py-2 md:pl-[3.5%] lg:pl-[7.2%] items-center justify-center md:justify-start gap-[16px]">
          <div className="  text-[12px] md:text-[12px] lg:text-xl capitalize">
            Copyright (c) 2023
          </div>
          <div className=" box-border h-[25px] border-r-[1px] border-solid border-white" />
          <div className=" text-[12px] md:text-[12px] lg:text-xl lowercase">
            Clarifionsupport@clarifion.com
          </div>
        </div>
        <div className="flex flex-row items-center justify-center md:justify-start gap-[16px] text-center md:pr-[3.5%] lg:pr-[7.2%]">
          <img
            className=" w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/lock-7-11.svg"
          />
          <div className="text-[12px] md:text-[12px] lg:text-xl capitalize">
            Secure 256-bit SSL encryption.
          </div>
        </div>
      </div>
    </>
  );
}

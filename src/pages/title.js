import Steps from "./Steps";

export default function Title() {
  return (
    <>
      <div className="w-full flex mt-[65px] md:mt[50px] lg:mt-2 flex-col items-center justify-center  md:px-0 md:justify-center gap-[20px] md:gap-[24px] text-[20px]  md:text-[48px]">
        <div className="w-[80%] md:text-center text-[32px] md:text-[40px] text-center md:w-full leading-[100%] capitalize">
          Wait ! your order in progress.
        </div>
        <div className="w-[80%] md:text-center md:w-full text-[16px] text-center md:text-[24px] leading-[100%] capitalize text-dimgray">{`Lorem ipsum dolor sit amet, consectetur adipiscing `}</div>
      </div>
      <Steps />
    </>
  );
}

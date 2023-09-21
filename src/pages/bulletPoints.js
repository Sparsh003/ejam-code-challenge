export default function BulletPoints() {
  return (
    <>
      <div className="self-stretch w-full flex flex-col items-start justify-start gap-[7px] text-dimgray">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="relative w-[22.5px] h-[22px]"
            alt=""
            src="icons/tickcircle.svg"
          />
          <div className="relative leading-[160%] text-xs md:text-[15px] inline-block w-[95%]  shrink-0">
            <span>Negative Ion Technology may</span>
            <b> help with allergens</b>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="relative w-[22.5px] h-[22px]"
            alt=""
            src="icons/tickcircle.svg"
          />
          <div className="relative leading-[160%] text-xs md:text-[15px]">
            <span>Designed for</span>
            <b> air rejuvenation</b>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="relative w-[22.5px] h-[22px]"
            alt=""
            src="icons/tickcircle.svg"
          />
          <div className="relative leading-[160%] text-xs md:text-[15px]">
            <b>Perfect for every room</b>
            <span> in all types of places.</span>
          </div>
        </div>
      </div>
    </>
  );
}

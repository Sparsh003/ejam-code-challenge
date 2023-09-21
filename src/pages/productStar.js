export default function ProductStar()
{
  return(
    <>
     <div className="self-stretch w-full flex flex-row items-center justify-start gap-[24px] text-[14px]">
    <div className="relative w-[134px] h-[134px] md:w-[200px] md:w-[200px]">
      <img
        className="bg-royalblue rounded-3xs w-[134px] h-[134px] "
        alt=""
        src="images/imageremovebgpreview-12-1@2x.png"
      />
    </div>
    <div className="w-full text-sm flex flex-col items-start justify-start gap-[10px]">
      <div className="self-stretch flex flex-row items-center justify-between  w-[100%]">
        <div className="relative md:text-[24px] text-[11px] leading-[100%] capitalize">
          Clarifion Air Ionizer
        </div>
        <div className="flex flex-row items-center justify-center gap-[10px]  text-darkgray">
          <div className="relative [text-decoration:line-through] capitalize md:text-[22px] text-[12px] font-semibold">
            $180
          </div>
          <div className="relative md:text-[22px] text-[12px] leading-[140%] capitalize  font-semibold text-royalblue">
            $84
          </div>
        </div>
      </div>
      <img
        className="relative w-[98px] h-[18px]"
        alt=""
        src="icons/stars.svg"
      />
      <div className="flex flex-row items-center justify-start gap-[16px] text-darkslategray-100">
        <img
          className="relative w-4 h-4"
          alt=""
          src="icons/group-1000001340.svg"
        />
        <div className="relative font-light text-xs md:text-lg">
          12 left in Stock
        </div>
      </div>
      <div className="relative leading-[140%] text-[11px] md:text-[14px] text-dimgray inline-block w-[95%] md:w-[100%]">
        Simply plug a Clarifion into any standard outlet and replace
        bulky, expensive air purifiers with a simple.
      </div>
    </div>
  </div>
    </>
   
  )
}
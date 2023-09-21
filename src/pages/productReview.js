export default function ProductReview()
{
  return(
    <>
    <div className=" rounded-3xs bg-white w-full mt-5 flex flex-col p-6 box-border items-start justify-start gap-[18px] text-[14px] text-darkslategray-200">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative rounded-[100px] w-12 h-12 object-cover"
                alt=""
                src="images/rectangle-1127@2x.png"
              />
              <div className="relative w-44 h-[35.3px]">
                <img
                  className=" top-[0px] left-[0px] w-[78.11px] h-[11.95px]"
                  alt=""
                  src="icons/stars1.svg"
                />
                <div className=" top-[19.3px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
                  <b className="relative leading-[100%]">Ken T.</b>
                  <div className="relative w-[126px] h-4 text-xs text-mediumaquamarine">
                    <div className=" top-[1px] left-[26px] leading-[120%]">
                      Verified Customer
                    </div>
                    <img
                      className=" top-[0px] left-[0px] w-4 h-4 "
                      alt=""
                      src="icons/verify-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-base leading-[150%] text-dimgray">
              “As soon as the Clarifions arrived I put one in my bedroom. This
              was late in the afternoon. When I went to the bedroom in the
              evening it smelled clean. When I went to bed I felt I could
              breathe better. Wonderful.”
            </div>
          </div>
    </>
  )
}
export default function ProductButtons()
{
  return(
    <>
        <div className="rounded-3xs bg-aliceblue w-[95%] md:w-full flex flex-col py-3 px-4 box-border items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-8 h-8"
                  alt=""
                  src="icons/group-1000004656.svg"
                />
                <div className="relative leading-[140%] text-xs md:text-lg">
                  <span>{`Save `}</span>
                  <span className="text-royalblue">53%</span>
                  <span>{` and get `}</span>
                  <span className="text-royalblue">6 extra Clarifision</span>
                  <span>{` for only `}</span>
                  <span className="text-royalblue">$14 Each</span>
                  <span>.</span>
                </div>
              </div>
            </div>
            <div className="w-full   flex flex-col items-center justify-start gap-[20px] text-lg md:text-xl text-white">
              <div className="flex flex-col items-center justify-start gap-[12px]">
                <div className="lg:w-[85%] md:[70%]   text-md md:text-xl rounded-[50px] bg-forestgreen flex flex-col py-4 px-16 items-center justify-center">
                  <div className="flex flex-row items-center justify-start gap-[12px] md:gap-[19.76px]">
                    <b className="relative uppercase text-[12px] md:text-[16px]  lg:text-[20px]">
                      Yes - Claim my discount
                    </b>
                    <img
                      className="relative w-[16.99px] h-[14.55px]"
                      alt=""
                      src="icons/line-1.svg"
                    />
                  </div>
                </div>
                <div className="w-full rounded flex flex-col md:flex-row p-2 md:py-2 md:px-4 items-center justify-center gap-[16px] text-xs text-dimgray border-[1px] border-solid border-lightgray">
                  <div className="flex">
                    <div className="relative leading-[140%] capitalize">
                      Free shipping
                    </div>
                    <div className="relative box-border w-px h-[17px] border-r-[1px] border-solid border-lightgray" />
                    <div className="flex flex-row items-center justify-start gap-[10px] text-center">
                      <img
                        className="relative w-3 h-3  shrink-0"
                        alt=""
                        src="icons/lock-7-1.svg"
                      />
                      <div className="relative leading-[150%] capitalize">
                        Secure 256-bit SSL encryption.
                      </div>
                    </div>
                    <div className="relative box-border w-px h-[17px] border-r-[1px] border-solid border-lightgray" />
                  </div>
                  <div>
                    <div className="flex flex-row items-center justify-center gap-[2px]">
                      <img
                        className="relative w-6 h-3.5  shrink-0"
                        alt=""
                        src="icons/visa.svg"
                      />
                      <img
                        className="relative w-6 h-3.5  shrink-0"
                        alt=""
                        src="icons/shop-pay.svg"
                      />
                      <img
                        className="relative w-6 h-3.5  shrink-0"
                        alt=""
                        src="icons/paypal.svg"
                      />
                      <img
                        className="relative w-6 h-3.5  shrink-0"
                        alt=""
                        src="icons/mastercard.svg"
                      />
                      <img
                        className="relative w-6 h-3.5  shrink-0"
                        alt=""
                        src="icons/gpay.svg"
                      />
                      <img
                        className="relative w-6 h-3.5  shrink-0"
                        alt=""
                        src="icons/apple-pay.svg"
                      />
                      <img
                        className="relative w-6 h-3.5  shrink-0"
                        alt=""
                        src="icons/amex.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-[18px] [text-decoration:underline] uppercase font-medium text-red">
                No thanks, I don’t want this.
              </div>
            </div>
            <div className="flex flex-row w-[70%]  items-center justify-start gap-[16px] text-dimgray">
              <img
                className="relative w-[88px] h-[88px] object-cover"
                alt=""
                src="images/image-6@2x.png"
              />
              <div className="relative text-[12px] md:text-lg leading-[140%] inline-block w-full  shrink-0">
                <span>{`If you are not completely thrilled with your Clarifion - We have a `}</span>
                <b>30 day satisfaction guarantee</b>
                <span>
                  . Please refer to our return policy at the bottom of the page
                  for more details. Happy Shopping!
                </span>
              </div>
            </div>
    </>
  )
}
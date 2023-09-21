import SubHeader from "./SubHeader";

export default function Header() {
  let array = [
    {
      title: "30-DAY SATISFACTION GUARANTEE",
      image: "icons/fluentcheckmarkstarburst20regular.svg",
    },
    {
      title: "Free delivery on orders over $40.00",
      image: "icons/phtrucklight.svg",
    },
    {
      title: "50.000+ HAPPY CUSTOMERS",
      image: "icons/mdicardsheartoutline.svg",
    },
    {
      title: "100 % Money Back Gurantee",
      image: "icons/fluentarrowsynccheckmark20regular.svg",
    },
  ];
  return (
    <>
      <div className="hidden md:flex w-full bg-darkslategray-300  flex flex-col justify-around md:flex-row gap-4 items-center h-[50px]">
        {array.map((e) => {
          return (
            <>
              <div className="flex  justify-around md:justify-between text-white h-[25px]  md:p-0 md:h-[22px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 block sm:invisible"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <div className="w-full flex">
                  <img src={e.image} alt={e.image} />
                  <h5 className="m-0 text-sm ml-4 p-0 ">{e.title}</h5>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 block sm:invisible"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </>
          );
        })}
      </div>
      <div className=" block md:hidden w-full bg-darkslategray-300 h-[45px] flex flex-col justify-around md:flex-row gap-4 items-center md:h-[50px]">
        <div className="flex w-full justify-center items-center md:justify-between text-white h-[35px]  md:p-0 md:h-[22px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 block sm:invisible"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <div className="w-[95%]  flex items-center justify-center">
            <img src="/fluentcheckmarkstarburst20regular.svg" />
            <h5 className="m-0 text-sm ml-4 p-0 ">
              30-DAY SATISFACTION GUARANTEE
            </h5>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 block sm:invisible"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <SubHeader />
    </>
  );
}

import BulletPoints from "./bulletPoints";
import ProductButtons from "./productButtons";
import ProductReview from "./productReview";
import ProductStar from "./productStar";
import ProductTitle from "./productTitle";

export default function ProductDetails() {
  return (
    <>
      <div className=" w-[85%]">
        <div className="rounded-3xs md:p-10 gap-[10px] md:bg-gray flex flex-col md:flex-row justify-center items-center">
          <div className="hidden md:hidden lg:block w-[50%] p-4 md:p-0">
            <img
              className=" rounded-3xs w-full h-full object-cover"
              alt=""
              src="images/image-4@2x.png"
            />
            <ProductReview />
          </div>
          <div className="w-full md:w-[75%] lg:w-[50%]  md:pl-6 flex justify-start">
            <div className="  flex flex-col gap-[18px] w-full ">
              <ProductTitle />
              <ProductStar />
              <BulletPoints />
              <ProductButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

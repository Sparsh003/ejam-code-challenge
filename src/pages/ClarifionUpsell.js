import Header from "./Header";
import ProductDetails from "./ProductDetails";
import Body from "./body";
import Footer from "./footer";
import Title from "./title";

const ClarifionUpsell = () => {
  return (
    <div className=" bg-white w-full h-[1200px] md:h-[1309px] flex flex-col justify-start md:justify-between items-center  text-left  text-black font-manrope">
      <Header />
      <Title />
      <ProductDetails />
      <Footer />
    </div>
  );
};

export default ClarifionUpsell;

import Categories from "@/components/Categories";
import FirstBanner from "@/components/FirstBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import SecondBanner from "@/components/SecondBanner";
import YaldaDiscountedProducts from "@/components/YaldaDiscountedProducts";
import YaldaLotteries from "@/components/YaldaLotteries";

export default function Home() {
  return (
    <div>
      <Header/>
      <MainBanner/>
      <YaldaLotteries/>
      <YaldaDiscountedProducts/>
      <FirstBanner/>
      <Categories/>
      <SecondBanner/>
      <Footer/>
    </div>
  );
}

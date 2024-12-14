import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import YaldaLotteries from "@/components/YaldaLotteries";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <MainBanner/>
      <YaldaLotteries/>
    </div>
  );
}

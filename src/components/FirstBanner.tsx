import Image from "next/image";

const FirstBanner = () => {
    return ( 
        <div className="relative w-[90%] xs:w-[80%] max-w-[1200px] mx-auto mt-14 rounded-[20px] flex justify-between px-4 sm:px-10 lg:px-16 py-8 sm:py-14 bg-gradient-to-r from-[0%] from-[#C29969] via-[68.5%] via-[#333744] to-[100%] to-[#141B2F]">
            <div className="text-white">
                <p className="text-xs sm:text-base font-medium mb-2">جوایز ویژه شب یلدای اقساط‌مارکت</p>
                <h1 className="text-sm sm:text-2xl lg:text-[28px] font-bold">۱ نیم سکه و ۲ ربع سکه بهار آزادی</h1>
                <button className="text-strong text-[10px] sm:text-[13px] font-medium bg-0 rounded-[29px] py-2 px-[18px] mt-4 sm:mt-6">اطلاعات بیشتر</button>
            </div>
            <Image src="/images/coin-box.svg" alt="coin-box-icon" className="max-sm:hidden absolute left-10 lg:left-20 -top-14" width={270} height={270}/>
            <Image src="/images/banner-credit-card.svg" alt="coin-box-icon" className="sm:hidden absolute left-10 lg:left-20 -top-0" width={120} height={120}/>
        </div>
     );
}
 
export default FirstBanner;
import Image from "next/image";

const MainBanner = () => {
    return ( 
        <section className="h-[180px] sm:h-[450px] bg-hero-pattern bg-cover">
            <div className="h-full flex justify-center bg-gradient-to-b from-[#A91D1D00] to-[#A91D1D]">
                <div className="flex flex-col items-center translate-y-6 sm:translate-y-16">
                    <div className="relative size-[60px] sm:size-[124px]">
                        <Image src="/icons/union.svg" alt="union-icon" layout="fill" />
                        <div className="w-[36px] h-[24px] sm:w-[85px] sm:h-[28px] absolute max-sm:top-1/2 sm:top-[70px] left-1/2 -translate-x-1/2 -translate-y-[5px]">
                            <Image src="/icons/percent.svg" alt="percent-icon" layout="fill" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <Image src="/icons/comma.svg" alt="comma-icon" width={14} height={14} />
                        <h1 className="yekan-font text-white text-lg sm:text-[40px] font-bold">تخفیف‌های‌ ویژه شب یلدا</h1>
                        <Image src="/icons/comma.svg" alt="comma-icon" width={14} height={14} className="rotate-180"/>
                    </div>
                    <div className="flex items-center gap-1 text-[#FABF47] mt-2">
                        <span>(</span>
                        <p className="kalame-font text-[10px] sm:text-[22px] font-black">از  ۲۰ تا ۸۰ درصد</p>
                        <span>)</span>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default MainBanner;
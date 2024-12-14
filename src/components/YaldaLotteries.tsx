import Image from "next/image";

const YaldaLotteries = () => {
    return ( 
        <div className="w-[90%] xs:w-[80%] max-w-[1200px] mx-auto -translate-y-6 sm:-translate-y-20 p-4 pt-6 sm:p-10 bg-0 rounded-[20px] sm:rounded-[40px] shadow-[0px_4px_24px_0px_#26325014]">
            <div className="flex mb-12">
                <div className="w-1/2 flex flex-col items-center max-sm:px-2">
                    <div className="relative">
                        <Image src="/images/credit-card.svg" alt="coin-box-icon" width={232} height={232} />
                        <div className="max-sm:hidden absolute -bottom-3 right-3 inline-flex flex-row-reverse items-start gap-3 bg-[#00000033] backdrop-blur-lg py-1.5 px-8 text-white border border-[#0000000F] rounded-[10px]">
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">12</span>
                                <span className="text-xs font-medium">روز</span>
                            </div>
                            <span>:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">23</span>
                                <span className="text-xs font-medium">ساعت</span>
                            </div>
                            <span>:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">30</span>
                                <span className="text-xs font-medium">دقیقه</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-weak text-[10px] xs:text-sm font-medium mt-10 max-sm:text-center">قرعه‌کشی روزانه اقساط‌مارکت</p>
                    <h2 className="text-strong font-bold text-xs xs:text-base sm:text-xl mt-2 max-sm:text-center">بازگشت ۱۰۰٪ مبلغ سفارش برای ۳ نفر</h2>
                    <div className="sm:hidden inline-flex flex-row-reverse items-start gap-1.5 xs:gap-3 py-1.5">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-semibold text-soft">12</span>
                            <span className="text-[10px] text-weak">روز</span>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-semibold text-soft">23</span>
                            <span className="text-[10px] text-weak">ساعت</span>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-semibold text-soft">30</span>
                            <span className="text-[10px] text-weak">دقیقه</span>
                        </div>
                    </div>
                </div>
                <div className="min-w-[1.5px] bg-[#E6E8EE]"></div>
                <div className="w-1/2 flex flex-col items-center max-sm:px-2">
                    <div className="relative">
                        <Image src="/images/coin-box.svg" alt="coin-box-icon" width={200} height={200}/>
                        <div className="max-sm:hidden absolute -bottom-1 right-3 inline-flex flex-row-reverse items-start gap-3 bg-[#00000033] backdrop-blur-lg py-1.5 px-6 text-white border border-[#0000000F] rounded-[10px]">
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">12</span>
                                <span className="text-xs font-medium">روز</span>
                            </div>
                            <span>:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">23</span>
                                <span className="text-xs font-medium">ساعت</span>
                            </div>
                            <span>:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">30</span>
                                <span className="text-xs font-medium">دقیقه</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-weak text-[10px] xs:text-sm font-medium mt-10">قرعه‌کشی ویژه شب یلدا</p>
                    <h2 className="text-strong font-bold text-xs xs:text-base sm:text-xl mt-2">۱ نیم سکه و ۲ ربع سکه بهار آزادی</h2>
                    <div className="sm:hidden inline-flex flex-row-reverse items-start gap-1.5 xs:gap-3 py-1.5 px-8">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-semibold text-soft">12</span>
                            <span className="text-[10px] text-weak">روز</span>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-semibold text-soft">23</span>
                            <span className="text-[10px] text-weak">ساعت</span>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-semibold text-soft">30</span>
                            <span className="text-[10px] text-weak">دقیقه</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-1 rounded-[28px] overflow-hidden bg-gradient-to-r from-[#E93F40] to-[#BC2727]">
                <div className="flex items-center justify-between p-12 bg-white rounded-[26px]">
                    <div className="w-2/3 flex flex-col gap-7">
                        <div className="flex items-center gap-4">
                            <Image src="/icons/red-apple.svg" alt="red-apple-icon" width={55} height={65}/>
                            <div>
                                <p className="text-weak text-base font-medium mb-1">جوایز ویژه شب یلدا</p>
                                <h2 className="text-[22px] font-bold">شما می‌توانید برنده باشید!</h2>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 text-soft text-sm leading-6">
                            <p>برای شرکت در قرعه‌کشی روزانه، کالاهایی که دوست دارید با تخفیف خریداری کنید را انتخاب کرده و کد تخفیف آن کالا را دریافت کنید. پس از ثبت نام در قرعه‌کشی روزانه شرکت داده خواهید شد.</p>
                            <p>برای شرکت در قرعه‌کشی نهایی شب یلدا، به ازای هر دعوت موفق از دوستان و آشنایان، یک شانس شرکت در قرعه‌کشی دریافت کنید. با دعوت از افراد بیشتر، شانس خود را برای شرکت در قرعه‌کشی افزایش دهید.</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="py-2.5 px-5 rounded-[29px] bg-gradient-to-tr from-[#E93F40] to-[#BC2727] text-xs font-semibold text-white">دعوت از دوستان</button>
                            <button className="p-[1px] rounded-[20px] bg-gradient-to-r from-[#E93F40] to-[#BC2727]">
                                <p className="text-xs font-semibold bg-white rounded-[29px] py-2 px-5">
                                    <span className="red-text-linear">مشاهده کالاهای تخفیف‌دار</span>
                                </p>
                            </button>
                        </div>
                    </div>
                    <Image src="/images/megaphone.svg" alt="megaphone" width={280} height={280} className="max-sm:hidden"/>
                </div>
            </div>
        </div>
     );
}
 
export default YaldaLotteries;
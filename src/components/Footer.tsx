import Image from "next/image";

const Footer = () => {
    return ( 
        <footer className="footer-bg">
            <div className="flex max-sm:flex-col justify-between sm:gap-8 py-16 px-6 sm:px-10 lg:px-20">
                <div className="max-sm:border-b border-[#ffffff2b] max-sm:mb-10 max-sm:pb-10">
                    <div className="flex items-center gap-4 mb-10">
                        <Image src={"/icons/aghsat-market.svg"} alt="aghsat-market" width={52} height={52} />
                        <div>
                            <p className="text-[10px] lg:text-sm font-medium text-white">فروشـــــگاه‌هـای زنــجیـــره‌ای</p>
                            <h2 className="text-base lg:text-[23px] font-bold text-[#E2B052]">اقســـاط مــــارکت</h2>
                        </div>
                    </div>
                    <div className="text-[13px] text-white">
                        <div className="flex items-start gap-2 mb-4 sm:mb-2">
                            <Image src={"/icons/marker-pin.svg"} alt="marker-icon" width={18} height={18}/>
                            <p>فروشگاه‌های زنجیره‌ای اقساط مارکت - تعاونی رفاه بازنشستگاه میهن</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <Image src={"/icons/footer-phone-call.svg"} alt="phone-icon" width={18} height={18}/>
                            <p>۰۲۱ – ۹۱۰۰۵۲۶۰</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 sm:gap-4">
                    <div className="w-[120px] sm:w-[140px]">
                        <p className="text-[#7583A7] text-[10px] font-bold mb-4">اقساط‌مارکت</p>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <div className="flex items-center">
                                    <div className="bg-[#DE9D18] size-1.5 rounded-full ml-2"/>
                                    <p className="text-white text-xs font-medium">درباره اقساط مارکت</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <div className="bg-[#DE9D18] size-1.5 rounded-full ml-2"/>
                                    <p className="text-white text-xs font-medium">تماس باما</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <div className="bg-[#DE9D18] size-1.5 rounded-full ml-2"/>
                                    <p className="text-white text-xs font-medium">قوانین</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[120px] sm:w-[140px]">
                        <p className="text-[#7583A7] text-[10px] font-bold mb-4">مشتریان</p>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <div className="flex items-center">
                                    <div className="bg-[#DE9D18] size-1.5 rounded-full ml-2"/>
                                    <p className="text-white text-xs font-medium">فروشگاه‌ها</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <div className="bg-[#DE9D18] size-1.5 rounded-full ml-2"/>
                                    <p className="text-white text-xs font-medium">پیگیری سفارش</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <div className="bg-[#DE9D18] size-1.5 rounded-full ml-2"/>
                                    <p className="text-white text-xs font-medium">سوالات متداول</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[120px] sm:w-[140px]">
                        <p className="text-[#7583A7] text-[10px] font-bold mb-4">کسب‌وکارها</p>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <div className="flex items-center">
                                    <div className="bg-[#DE9D18] size-1.5 rounded-full ml-2"/>
                                    <p className="text-white text-xs font-medium">همکاری با سازمانها</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <div className="bg-[#DE9D18] size-1.5 rounded-full ml-2"/>
                                    <p className="text-white text-xs font-medium">ثبت فروشگاه</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center max-xs:flex-col max-xs:gap-3 bg-[#14171C4D] px-6 sm:px-10 lg:px-20 py-10">
                <div className="flex items-center gap-3">
                    <Image src={"/icons/instagram.svg"} alt="instagram-icon" width={20} height={20}/>
                    <Image src={"/icons/facebook.svg"} alt="facebook-icon" width={20} height={20}/>
                    <Image src={"/icons/x.svg"} alt="x-icon" width={20} height={20}/>
                </div>
                <p className="text-[10px] text-white">تمام حقوق برای فروشگاه اقساط مارکت محفوظ است.</p>
            </div>
        </footer>
     );
}
 
export default Footer;
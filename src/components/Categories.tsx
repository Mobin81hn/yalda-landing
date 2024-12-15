"use client";
import Image from "next/image";
import { useRef } from "react";

const Categories = () => {
    const firstCarouselRef = useRef<HTMLElement>(null);
    const secondCarouselRef = useRef<HTMLElement>(null);
    const thirdCarouselRef = useRef<HTMLElement>(null);
    const fourthCarouselRef = useRef<HTMLElement>(null);

    const firstCarouselSwitcher = (data: any) => {
        if (firstCarouselRef.current) {
            firstCarouselRef.current.scrollTo(firstCarouselRef?.current?.scrollLeft + 248 * data, 0);
        }
    };
    const secondCarouselSwitcher = (data: any) => {
        if (secondCarouselRef.current) {
            secondCarouselRef.current.scrollTo(secondCarouselRef?.current?.scrollLeft + 248 * data, 0);
        }
    };
    const thirdCarouselSwitcher = (data: any) => {
        if (thirdCarouselRef.current) {
            thirdCarouselRef.current.scrollTo(thirdCarouselRef?.current?.scrollLeft + 248 * data, 0);
        }
    };
    const fourthCarouselSwitcher = (data: any) => {
        if (fourthCarouselRef.current) {
            fourthCarouselRef.current.scrollTo(fourthCarouselRef?.current?.scrollLeft + 248 * data, 0);
        }
    };

    return ( 
        <div className="w-[90%] xs:w-[80%] max-w-[1200px] mx-auto bg-0 p-10 rounded-[32px] mt-14">
            <p className="flex justify-center gap-1 text-2xl font-bold">
                <span className="text-[#DE9D18]"> تخفیف های</span>
                <span className="text-[#E93F40]">ویژه شب یلدا </span>
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-[13px] font-medium">
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-[32px] text-[#F55151] bg-[#F551510D] border border-error">
                    <Image src={"/icons/percent-icon.svg"} alt="percent-icon" width={18} height={18}/>
                    <span>تخفیف های ویژه</span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-[32px] text-normal border border-normal">
                    <Image src={"/icons/nut.svg"} alt="nut-icon" width={18} height={18}/>
                    <span>آجیل و خشکبار</span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-[32px] text-normal border border-normal">
                    <Image src={"/icons/phone-icon.svg"} alt="phone-icon" width={18} height={18}/>
                    <span>کالای دیجیتال</span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-[32px] text-normal border border-normal">
                    <Image src={"/icons/zap.svg"} alt="zap-icon" width={18} height={18}/>
                    <span>لوازم خانگی</span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-[32px] text-normal border border-normal">
                    <Image src={"/icons/furniture.svg"} alt="furniture-icon" width={18} height={18}/>
                    <span>مبلمان منزل</span>
                </button>
            </div>
            <div className="mt-8">
                <div className="relative flex items-center border-t border-normal pt-4">
                    <div className="min-w-[200px]">
                        <Image src={"/icons/red-nut.svg"} alt="nut-icon" width={40} height={40}/>
                        <p className="red-text-linear text-sm font-medium mt-4 mb-1">شب‌نشینی یلدا</p>
                        <h2 className="red-text-linear text-[22px] font-bold mb-4">آجیل و خشکبار</h2>
                        <button className="py-2 px-[18px] text-[13px] font-semibold rounded-[29px] bg-gradient-to-r from-[#E93F40] to-[#BC2727] text-white">دیدن همه</button>
                    </div>
                     <div>
                        <div onClick={() => firstCarouselSwitcher(-1)} className="absolute left-3 top-[350px] sm:top-1/2 -translate-y-1/2 cursor-pointer bg-[#dedede9f] hover:bg-0 transition-all duration-200 min-w-10 min-h-10 flex justify-center items-center rounded-full shadow-lg">
                            <Image src="/icons/chevron-left.svg" alt="chevron-icon" width={30} height={30}/> 
                        </div>
                        <div onClick={() => firstCarouselSwitcher(1)} className="absolute right-3 sm:right-[245px] top-[350px] sm:top-1/2 -translate-y-1/2 rotate-180 cursor-pointer bg-[#dedede9f] hover:bg-0 transition-all duration-200 min-w-10 min-h-10 flex justify-center items-center rounded-full shadow-lg">
                            <Image src="/icons/chevron-left.svg" alt="chevron-icon" width={30} height={30}/> 
                        </div>
                    </div>
                    <div
                        ref={firstCarouselRef}
                        className="sliderContainer w-full overflow-hidden pr-2"
                    >
                        <div className="flex h-full items-center gap-2">
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center border-t border-normal pt-4 mt-4">
                    <div className="min-w-[200px]">
                        <Image src={"/icons/blue-phone.svg"} alt="nut-icon" width={40} height={40}/>
                        <p className="text-sm text-[#2B4FAB] font-medium mt-4 mb-1">پرفروش‌های</p>
                        <h2 className="text-[22px] text-[#2B4FAB] font-bold mb-4">کالای دیجیتال</h2>
                        <button className="py-2 px-[18px] text-[13px] font-semibold rounded-[29px] bg-[#3158BD] text-white">دیدن همه</button>
                    </div>
                     <div>
                        <div onClick={() => secondCarouselSwitcher(-1)} className="absolute left-3 top-[350px] sm:top-1/2 -translate-y-1/2 cursor-pointer bg-[#dedede9f] hover:bg-0 transition-all duration-200 min-w-10 min-h-10 flex justify-center items-center rounded-full shadow-lg">
                            <Image src="/icons/chevron-left.svg" alt="chevron-icon" width={30} height={30}/> 
                        </div>
                        <div onClick={() => secondCarouselSwitcher(1)} className="absolute right-3 sm:right-[245px] top-[350px] sm:top-1/2 -translate-y-1/2 rotate-180 cursor-pointer bg-[#dedede9f] hover:bg-0 transition-all duration-200 min-w-10 min-h-10 flex justify-center items-center rounded-full shadow-lg">
                            <Image src="/icons/chevron-left.svg" alt="chevron-icon" width={30} height={30}/> 
                        </div>
                    </div>
                    <div
                        ref={secondCarouselRef}
                        className="sliderContainer w-full overflow-hidden pr-2"
                    >
                        <div className="flex h-full items-center gap-2">
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center border-t border-normal pt-4 mt-4">
                    <div className="min-w-[200px]">
                        <Image src={"/icons/green-zap.svg"} alt="nut-icon" width={40} height={40}/>
                        <p className="text-sm text-[#20A075] font-medium mt-4 mb-1">پرفروش‌های</p>
                        <h2 className="text-[22px] text-[#20A075] font-bold mb-4">لوازم خانگی</h2>
                        <button className="py-2 px-[18px] text-[13px] font-semibold rounded-[29px] bg-[#20A075] text-white">دیدن همه</button>
                    </div>
                     <div>
                        <div onClick={() => thirdCarouselSwitcher(-1)} className="absolute left-3 top-[350px] sm:top-1/2 -translate-y-1/2 cursor-pointer bg-[#dedede9f] hover:bg-0 transition-all duration-200 min-w-10 min-h-10 flex justify-center items-center rounded-full shadow-lg">
                            <Image src="/icons/chevron-left.svg" alt="chevron-icon" width={30} height={30}/> 
                        </div>
                        <div onClick={() => thirdCarouselSwitcher(1)} className="absolute right-3 sm:right-[245px] top-[350px] sm:top-1/2 -translate-y-1/2 rotate-180 cursor-pointer bg-[#dedede9f] hover:bg-0 transition-all duration-200 min-w-10 min-h-10 flex justify-center items-center rounded-full shadow-lg">
                            <Image src="/icons/chevron-left.svg" alt="chevron-icon" width={30} height={30}/> 
                        </div>
                    </div>
                    <div
                        ref={thirdCarouselRef}
                        className="sliderContainer w-full overflow-hidden pr-2"
                    >
                        <div className="flex h-full items-center gap-2">
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center border-t border-normal pt-4 mt-4">
                    <div className="min-w-[200px]">
                        <Image src={"/icons/yellow-furniture.svg"} alt="nut-icon" width={40} height={40}/>
                        <p className="text-sm text-[#DF953C] font-medium mt-4 mb-1">تخفیف‌های</p>
                        <h2 className="text-[22px] text-[#DF953C] font-bold mb-4">مبلمان منزل</h2>
                        <button className="py-2 px-[18px] text-[13px] font-semibold rounded-[29px] bg-[#DF953C] text-white">دیدن همه</button>
                    </div>
                     <div>
                        <div onClick={() => fourthCarouselSwitcher(-1)} className="absolute left-3 top-[350px] sm:top-1/2 -translate-y-1/2 cursor-pointer bg-[#dedede9f] hover:bg-0 transition-all duration-200 min-w-10 min-h-10 flex justify-center items-center rounded-full shadow-lg">
                            <Image src="/icons/chevron-left.svg" alt="chevron-icon" width={30} height={30}/> 
                        </div>
                        <div onClick={() => fourthCarouselSwitcher(1)} className="absolute right-3 sm:right-[245px] top-[350px] sm:top-1/2 -translate-y-1/2 rotate-180 cursor-pointer bg-[#dedede9f] hover:bg-0 transition-all duration-200 min-w-10 min-h-10 flex justify-center items-center rounded-full shadow-lg">
                            <Image src="/icons/chevron-left.svg" alt="chevron-icon" width={30} height={30}/> 
                        </div>
                    </div>
                    <div
                        ref={fourthCarouselRef}
                        className="sliderContainer w-full overflow-hidden pr-2"
                    >
                        <div className="flex h-full items-center gap-2">
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center min-w-[240px] h-full px-4 pb-4 border-r">
                                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
                                <p className="line-clamp-2 text-xs font-medium text-normal mb-3">گوشی موبایل اپل iphone 13 Pro A2639 با ظرفیت 1 ترابایت و 6 گیگابایت رم دو سیم کارت</p>
                                <div className="flex items-center justify-end flex-row-reverse self-end gap-2">
                                    <div className="bg-red-status text-white text-[11px] pt-[3px] pb-[2px] px-1.5 rounded-[4px]">%20</div>
                                    <div>
                                        <span className="text-strong text-sm font-bold">۷۵,۹۰۰,۰۰۰</span>
                                        <span className="text-weak text-sm mr-0.5">ریال</span>
                                    </div>
                                    <p className="line-through text-weak text-xs translate-y-1">۸۰,۰۰۰,۰۰۰</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Categories;
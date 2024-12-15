"use client"
import Image from "next/image";
import { useRef } from "react";

const YaldaDiscountedProducts = () => {
    const carouselRef = useRef<HTMLElement>(null);
    const carouselSwitcher = (data: any) => {
        if (carouselRef.current) {
          carouselRef.current.scrollTo(carouselRef?.current?.scrollLeft + 248 * data, 0);
        }
    };

    return ( 
        <div className="relative flex max-sm:flex-col w-[90%] xs:w-[80%] max-w-[1200px] mx-auto bg-[#C32B2C] py-5 rounded-[20px]">
            <div className="max-sm:flex min-w-[234px] sm:pt-20 px-3 sm:px-9 pb-8 bg-watermelon-pattern">
                <Image src="/icons/watermelon.svg" alt="watermelon-icon" width={72} height={72} className="max-sm:hidden"/>
                <div className="max-sm:flex max-sm:w-full flex-wrap items-center justify-between max-sm:mr-4 gap-x-4">
                    <div>
                        <h2 className="text-[#FABF47] text-lg sm:text-[25px] yekan-font mt-4">تخفیف‌های داغ</h2>
                        <h2 className="text-sm max-sm:mt-2 sm:text-[25px] font-bold yekan-font text-white mb-4">‌ ویژه شب یلدا</h2>
                    </div>
                    <button className="min-w-24 py-2 rounded-[29px] bg-0 text-[13px] font-medium">دیدن همه</button>
                </div>
            </div>
            <div>
                <div onClick={() => carouselSwitcher(-1)} className="absolute left-3 top-[350px] sm:top-1/2 -translate-y-1/2 cursor-pointer bg-[#dedede9f] hover:bg-0 transition-all duration-200 min-w-10 min-h-10 flex justify-center items-center rounded-full shadow-lg">
                    <Image src="/icons/chevron-left.svg" alt="chevron-icon" width={30} height={30}/> 
                </div>
                <div onClick={() => carouselSwitcher(1)} className="absolute right-3 sm:right-[245px] top-[350px] sm:top-1/2 -translate-y-1/2 rotate-180 cursor-pointer bg-[#dedede9f] hover:bg-0 transition-all duration-200 min-w-10 min-h-10 flex justify-center items-center rounded-full shadow-lg">
                    <Image src="/icons/chevron-left.svg" alt="chevron-icon" width={30} height={30}/> 
                </div>
            </div>
            <div
              ref={carouselRef}
              className="sliderContainer w-full overflow-hidden pr-2"
            >
              <div className="flex h-full items-center gap-2">
                <div className="flex flex-col items-center min-w-[240px] h-full bg-0 rounded-2xl p-4">
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
                <div className="flex flex-col items-center min-w-[240px] h-full bg-0 rounded-2xl p-4">
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
                <div className="flex flex-col items-center min-w-[240px] h-full bg-0 rounded-2xl p-4">
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
                <div className="flex flex-col items-center min-w-[240px] h-full bg-0 rounded-2xl p-4">
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
                <div className="flex flex-col items-center min-w-[240px] h-full bg-0 rounded-2xl p-4">
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
                <div className="flex flex-col items-center min-w-[240px] h-full bg-0 rounded-2xl p-4">
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
                <div className="flex flex-col items-center min-w-[240px] h-full bg-0 rounded-2xl p-4">
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
                <div className="flex flex-col items-center min-w-[240px] h-full bg-0 rounded-2xl p-4">
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
                <div className="flex flex-col items-center min-w-[240px] h-full bg-0 rounded-2xl p-4">
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
                <div className="flex flex-col items-center min-w-[240px] h-full bg-0 rounded-2xl p-4">
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
     );
}
 
export default YaldaDiscountedProducts;
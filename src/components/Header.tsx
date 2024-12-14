import Image from "next/image";

const Header = () => {
    return ( 
        <header className="flex items-center justify-between bg-0 px-4 sm:px-20 py-5">
            <div className="logo">
                <Image src={"/icons/aghsat-market-logo.png"} alt="aghsat-market" width={155} height={80} className="max-sm:w-28" />
            </div>
            <div className="max-sm:hidden flex items-center gap-2">
                <button className="flex justify-center items-center border border-normal size-10 rounded-full">
                    <Image src={"/icons/phone-call.svg"} alt="bag-icon" width={20} height={20} />
                </button>
                <button className="bg-primary-btn text-white py-2.5 px-4 text-xs font-semibold rounded-[32px]">ورود / ثبت نام</button>
            </div>
        </header>
     );
}
 
export default Header;
import Image from "next/image";

const Header = () => {
    return ( 
        <header className="flex items-center justify-between bg-0 px-4 sm:px-20 py-5">
            <div className="flex gap-2 logo">
                <Image src={"/icons/aghsat-market.svg"} alt="aghsat-market" width={40} height={40} />
                <Image src={"/icons/aghsat-market-text.svg"} alt="aghsat-market" width={120} height={40} />
            </div>
            <div className="max-sm:hidden flex items-center gap-2">
                <button className="flex justify-center items-center border border-normal size-10 rounded-full">
                    <Image src={"/icons/phone-call.svg"} alt="bag-icon" width={20} height={20} />
                </button>
                <button className="bg-primary-btn text-white py-2.5 px-4 text-xs font-semibold rounded-[32px]">ورود / ثبت نام</button>
            </div>
            <button className="sm:hidden">
                <Image src={"/icons/menu.svg"} alt="menu-icon" width={24} height={24}/>
            </button>
        </header>
     );
}
 
export default Header;
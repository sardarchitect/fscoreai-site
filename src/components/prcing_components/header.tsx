const Header = () => {
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col items-center px-14 md:px-5">
            <div className="flex flex-col items-center gap-1">
                <div className="mt-6 text-h1 text-[64px] text-black md:text-[48px]  ">Pricing Plans </div>
                <div ><p className="mt-4 text-[18px] font-semibold text-gray-600 ">Start  bulidings for free, then add a site plane to go live. Account plans unlock additional feature.</p></div>
            </div>
            </div>
            <div className=" relative z-[2] flex flex-col items-center px-14 md:px-5">
                <div className="bg-gray-400 flex flex-wrap gap-[30px] rounded-lg border-[1.19px] border-solid border-gray-900">
                <div className=" px-[26px] py-3.5 text-[14px] font-semibold text-gray-900 sm:px-5">monthly</div>
                <div className="px-[26px] py-3.5 text-[14px] font-semibold text-gray-900 sm:px-5">Yearly (Save 40%) </div>
                </div>
            </div>

      
      </div>
    );
  };
  
  export default Header;
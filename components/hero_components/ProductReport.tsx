"use client"
import { useThemeContext } from "@/context/theme";


const ProductReport = () => {
  const [theme, setTheme] = useThemeContext();
  return (
    <div >
    {/* <div className={`${theme}`}> */}
    <div className="flex flex-wrap justify-center text-theme-blue dark:text-white dark:bg-theme-color bg-white p-20">
      <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
        aut!\
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
        aut!\
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
        aut!\
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
        aut!\
      </div>
    </div>
    
    </div>
  );
};

export default ProductReport;

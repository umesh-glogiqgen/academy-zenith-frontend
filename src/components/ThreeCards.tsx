import { ChevronRight } from "lucide-react";
import icon1 from "@/assets/icons/icon1.png";
import icon2 from "@/assets/icons/icon2.png";
import icon3 from "@/assets/icons/icon3.png";

export const ThreeCards = () => {
  return (
    <div className="w-full overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 lg:-mt-16 relative z-30 pb-2 sm:pb-3 lg:pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 relative z-30">
        {/* Workday Consultant Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
          <div className="flex items-center justify-start gap-2 mb-3 sm:mb-4">
            {/* Professional person with tie - Blue */}
            {/* <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <img src={icon1} alt="Workday Consultant Icon" className="w-6 h-6 sm:w-7 sm:h-7" />
            </div> */}
            {/* Briefcase icon - Orange */}
           <img src={icon1} alt="Workday Consultant" className="h-12 w-12" />
          </div>
          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide  font-sf-display font-normal">Become A</p>
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3">WORKDAY CONSULTANT</h3>
          <a href="#courses" className="text-[#0066CC] font-normal font-bold inline-flex items-center hover:underline text-xs uppercase tracking-wide">
            KNOW MORE <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
          </a>
        </div>

        {/* SAP Security Expert Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
          <div className="flex items-center justify-start gap-2 mb-3 sm:mb-4">
            {/* Professional person - Blue */}
            {/* <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <img src={icon3} alt="SAP Security Expert Icon" className="w-6 h-6 sm:w-7 sm:h-7" />
            </div> */}
            {/* Shield icon - Orange */}
            <img src={icon2} alt="SAP Security Expert" className="h-12 w-12" />
          </div>
          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-normal">Become A</p>
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3">SAP SECURITY EXPERT</h3>
          <a href="#courses" className="text-[#0066CC] font-bold inline-flex items-center hover:underline text-xs uppercase font-normal tracking-wide">
            KNOW MORE <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
          </a>
        </div>

        {/* Generative AI Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-start gap-2 mb-3 sm:mb-4">
            {/* Professional person - Blue */}
            {/* <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <img src={icon1} alt="Generative AI Icon" className="w-6 h-6 sm:w-7 sm:h-7" />
            </div> */}
            {/* Brain/AI icon - Orange */}
            <img src={icon3} alt="Generative AI" className="h-12 w-12" />
          </div>
          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-normal">Become A</p>
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Generative AI</h3>
          <a href="#courses" className="text-[#0066CC] font-bold font-normal inline-flex items-center hover:underline text-xs uppercase tracking-wide">
            KNOW MORE <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

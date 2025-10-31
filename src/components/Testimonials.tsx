import { Card } from "@/components/ui/card";
import { Users, Building2, TrendingUp, DollarSign } from "lucide-react";

const placementStats = [
  {
    icon: Users,
    number: "10000+",
    label: "Students Placed",
    color: "bg-[#FF8800]"
  },
  {
    icon: Building2,
    number: "26",
    label: "Partner Companies",
    color: "bg-[#FF8800]"
  },
  {
    icon: TrendingUp,
    number: "99%",
    label: "Placement Rate",
    color: "bg-[#FF8800]"
  },
  {
    icon: DollarSign,
    number: "INR 855K+",
    label: "Average Package",
    color: "bg-[#FF8800]"
  }
];

export const Testimonials = () => {
  return (
    <section className="pb-10 ">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0066CC]">
            Where Our <span className="text-[#0066CC]">Students Get Placed</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our graduates are successfully placed at top-tier companies across various industries. Join our alumni network working at these prestigious organizations.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {placementStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 border-0"
            >
              {/* Circular Icon at Top - Higher position */}
              <div className="flex justify-center    -mt-16 mb-6">
              <div className="w-21 h-21 bg-white  rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <div className={`${stat.color} w-16  h-16 rounded-full flex items-center justify-center text-white shadow-lg`}>
                  <stat.icon className="w-10 h-10" strokeWidth={2} />
                  </div>
                </div>
              </div>

                {/* <div className="absolute mt-3 left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 bg-white  flex items-center justify-center shadow-xl border-4 border-white">
                  <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center text-white">
                    <stat.icon className="w-10 h-10" strokeWidth={2} />
                  </div>
                </div>
              </div> */}


              {/* Number */}
              <div className="text-3xl md:text-2xl font-bold text-[#0066CC] ">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-sm md:text-xl font-semibold text-gray-700">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
import { Users, Building2, TrendingUp, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    value: "10000+",
    label: "Students Placed",
    bgColor: "bg-orange-500"
  },
  {
    icon: Building2,
    value: "26",
    label: "Partner Companies",
    bgColor: "bg-orange-500"
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "Placement Rate",
    bgColor: "bg-orange-500"
  },
  {
    icon: Award,
    value: "INR 855K+",
    label: "Average Package",
    bgColor: "bg-orange-500"
  }
];

export const PlacementStatsCards = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 text-center"
            >
              {/* Icon Circle */}
              <div className="flex justify-center mb-4">
                <div className={`${stat.bgColor} rounded-full p-4 w-16 h-16 flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
              </div>

              {/* Value */}
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-sm md:text-base font-medium text-gray-700">
                {stat.label}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

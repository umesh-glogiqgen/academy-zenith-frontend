import { Award, Users, Globe, Headphones } from "lucide-react";

export const TrustBanner = () => {
  return (
    <div className="bg-primary-900 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-orange-400" />
            <span className="font-semibold">Trusted by Leading Institutions</span>
          </div>
          <div className="flex items-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>500+ Enterprise Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>25+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              <span>24X7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
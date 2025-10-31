import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-8">
          Coming Soon
        </h1>

        <Button
          size="lg"
          className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-8"
          onClick={() => navigate('/')}
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

export const OurVision = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
                Our Vision
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                To be the global leader in professional transformation, bridging the
                gap between traditional education and modern industry needs.
                We envision a future where every learner is empowered to innovate,
                grow, and lead with confidence.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Industry Focus */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    Industry Focus
                  </h3>
                </div>
              </div>

              {/* Innovation Driven */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    Innovation Driven
                  </h3>
                </div>
              </div>

              {/* Community Centered */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    Community Centered
                  </h3>
                </div>
              </div>

              {/* Excellence Focused */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    Excellence Focused
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image with Card Overlay */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {!imageLoaded && (
                <Skeleton className="absolute inset-0 w-full h-[400px] md:h-[500px]" />
              )}
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                alt="Professional collaboration"
                width="800"
                height="500"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-[400px] md:h-[500px] object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl shadow-xl p-5 md:p-6 border-2 border-[#FF8800]">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Transforming Futures
                </h3>
                <p className="text-sm md:text-base text-blue-600">
                  Empowering 10,000+ professionals worldwide to achieve career breakthroughs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

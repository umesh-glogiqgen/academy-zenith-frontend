import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CompactCourseSlider } from "@/components/CompactCourseSlider";

export const ProgramContent = () => {
  return (
    <div className="py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6 container mx-auto px-6">
        <span>Home</span> 
        <span className="mx-2">›</span> 
        <span className="text-professional-primary">Professional Development Training Programs</span>
      </nav>

      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-professional-secondary mb-8">
          Professional Development Training Programs
        </h1>

        {/* Featured Program Banner */}
        <Card className="mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-professional-secondary via-professional-primary to-professional-accent text-white p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Full Stack Development Professional Training
                </h2>
                <div className="flex items-center gap-6 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🌐</span>
                    <span>www.professionaltraining.com</span>
                  </div>
                </div>
                <Button variant="hero" size="lg">
                  Enroll Now - Limited Seats
                </Button>
              </div>
              <div className="relative group">
                {/* PERFECT SLIDER REPLACING STATIC IMAGE */}
                <CompactCourseSlider height="h-48" className="rounded-lg" />
              </div>
            </div>
          </div>
        </Card>

        {/* Program Details */}
        <Card className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-professional-secondary">
            Program Overview
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3 text-professional-primary">What You'll Learn</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Modern frontend frameworks (React, Vue.js)</li>
                <li>• Backend development (Node.js, Python)</li>
                <li>• Database design and management</li>
                <li>• Cloud deployment and DevOps</li>
              </ul>
            </div>
          </div>

          <div className="bg-professional-primary/5 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-3 text-professional-secondary">Career Outcomes</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Our graduates have successfully transitioned into high-paying technical roles at leading companies. 
              With our comprehensive curriculum and job placement assistance, you'll be ready to excel in the competitive tech industry.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-professional-primary">95%</div>
                <div className="text-xs text-muted-foreground">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-professional-primary">$85K+</div>
                <div className="text-xs text-muted-foreground">Average Starting Salary</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-professional-primary">500+</div>
                <div className="text-xs text-muted-foreground">Hiring Partners</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="course" size="lg" className="flex-1">
              Apply Now - Next Batch Starts Soon
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              Download Curriculum
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
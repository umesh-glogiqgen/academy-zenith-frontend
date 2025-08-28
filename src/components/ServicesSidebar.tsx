import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const services = [
  "Recruitment & Talent Acquisition",
  "Career Counselling & Guidance", 
  "Resume Building & Optimization",
  "Interview Coaching & Preparation",
  "Job Market Research & Analysis",
  "Temporary & Contract Staffing",
  "Outplacement Services",
  "Executive Search & Headhunting",
  "Training & Skill Development Programs",
  "Freelance & Gig Work Placement"
];

const courses = [
  "Full Stack Development",
  "Data Science & Analytics",
  "Digital Marketing",
  "Project Management",
  "Cloud Computing (AWS/Azure)",
  "Cybersecurity Fundamentals",
  "Business Analysis",
  "Software Testing (QA)",
  "DevOps & Automation",
  "Mobile App Development"
];

const jobs = [
  "Sr. Software Engineer",
  "Senior PHP Developer", 
  "React.js Developer",
  "Python Developer",
  "Data Scientist",
  "Project Manager",
  "Business Analyst",
  "Quality Assurance Engineer"
];

export const ServicesSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Services */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-professional-secondary">Services</h3>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-professional-primary cursor-pointer group">
              <ChevronRight className="w-3 h-3 group-hover:text-professional-primary" />
              <span className="group-hover:underline">{service}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Courses */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-professional-secondary">Courses</h3>
        <ul className="space-y-2">
          {courses.map((course, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-professional-primary cursor-pointer group">
              <ChevronRight className="w-3 h-3 group-hover:text-professional-primary" />
              <span className="group-hover:underline">{course}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Jobs */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-professional-secondary">Jobs</h3>
        <ul className="space-y-2">
          {jobs.map((job, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-professional-primary cursor-pointer group">
              <ChevronRight className="w-3 h-3 group-hover:text-professional-primary" />
              <span className="group-hover:underline">{job}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
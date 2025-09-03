import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const services = [
  "Online & Offline Training",
  "Real-Time Project Experience", 
  "100% Placement Support",
  "Industry Expert Trainers",
  "Flexible Learning Schedules",
  "1:1 Mentorship Sessions",
  "Career Guidance & Counseling",
  "Certification Assistance",
  "Doubt Clearing Sessions",
  "Group Discussions & Labs"
];

const courses = [
  "Workday HCM",
  "Workday Finance", 
  "Workday Integration",
  "Workday Extend",
  "PeopleSoft ERP",
  "SAP Security",
  "ServiceNow",
  "AI & Machine Learning",
  "Cloud Technologies"
];

const ongoingBatches = [
  "Workday HCM - Starting Soon",
  "Workday Finance - Seats Available", 
  "Workday Integration - Limited Seats",
  "AI & ML Bootcamp - New Batch",
  "SAP Security - Weekend Batch",
  "Cloud Computing - Evening Batch"
];

export const ServicesSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Services */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-professional-secondary">Our Services</h3>
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

      {/* Ongoing Training Batches */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-professional-secondary">Ongoing Training Batches</h3>
        <ul className="space-y-2">
          {ongoingBatches.map((batch, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-professional-primary cursor-pointer group">
              <ChevronRight className="w-3 h-3 group-hover:text-professional-primary" />
              <span className="group-hover:underline">{batch}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
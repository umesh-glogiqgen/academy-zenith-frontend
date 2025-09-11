import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, Building2 } from "lucide-react";

const companies = [
  {
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/200px-Accenture.svg.png",
    placements: 45,
    category: "Consulting"
  },
  {
    name: "ADP",
    logo: "https://www.adp.com/-/media/adp2025/ui/logo-adp.svg?rev=2ffd0a893eca4842b0f071c1e9c186b8&hash=85D6D9870432E605FE0FD7F830F16744",
    placements: 23,
    category: "Technology"
  },
  {
    name: "Capgemini",
    logo: "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg",
    placements: 38,
    category: "Consulting"
  },
  {
    name: "Cognizant",
    logo: "https://cognizant.scene7.com/is/content/cognizant/COG-Logo-2022-without-prism?fmt=png-alpha",
    placements: 52,
    category: "Technology"
  },
  {
    name: "Concentrix",
    logo: "https://www.concentrix.com/wp-content/uploads/2024/02/concentrix_logo.webp",
    placements: 19,
    category: "Services"
  },
  {
    name: "Deloitte",
    logo: "data:image/webp;base64,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",
    placements: 34,
    category: "Consulting"
  },
  {
    name: "DXC",
    logo: "https://dxc.dejobs.org/static/logo.png",
    placements: 27,
    category: "Technology"
  },
  {
    name: "Hexaware",
    logo: "https://tse3.mm.bing.net/th/id/OIP.eWgf2ZQDTaVqSkKHUyxaUAHaEH?rs=1&pid=ImgDetMain&o=7&rm=3",
    placements: 21,
    category: "Technology"
  },
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png",
    placements: 67,
    category: "Technology"
  },
  {
    name: "KPMG",
    logo: "data:image/webp;base64,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",
    placements: 29,
    category: "Consulting"
  },
  {
    name: "Kyndryl",
    logo: "data:image/webp;base64,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",
    placements: 16,
    category: "Technology"
  },
  {
    name: "NTT Data",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/NTT-Data-Logo.svg/200px-NTT-Data-Logo.svg.png",
    placements: 25,
    category: "Technology"
  },
  {
    name: "PwC",
    logo: "data:image/webp;base64,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",
    placements: 31,
    category: "Consulting"
  },
  {
    name: "Zensar",
    logo: "https://www.zensar.com/sites/default/files/zensar-logo.svg",
    placements: 18,
    category: "Technology"
  },
  {
    name: "CEC",
    logo: "https://via.placeholder.com/150x60/1a365d/ffffff?text=CEC",
    placements: 12,
    category: "Technology"
  },
  {
    name: "Coforge",
    logo: "https://www.coforge.com/hubfs/coforge-logo.svg",
    placements: 22,
    category: "Technology"
  },
  {
    name: "Core Team",
    logo: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Core+Team",
    placements: 8,
    category: "Services"
  },
  {
    name: "Jade Global",
    logo: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Jade+Global",
    placements: 14,
    category: "Technology"
  },
  {
    name: "Measruk",
    logo: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Measruk",
    placements: 6,
    category: "Services"
  },
  {
    name: "Michelin",
    logo: "https://www.wikimedia.org/static/images/wmf-logo-2x.png",
    placements: 11,
    category: "Manufacturing"
  },
  {
    name: "Nagarro",
    logo: "https://logos-world.net/wp-content/uploads/2022/04/ADP-Logo.png",
    placements: 19,
    category: "Technology"
  },
  {
    name: "Nice",
    logo: "https://logos-world.net/wp-content/uploads/2022/04/NICE-Logo.png",
    placements: 15,
    category: "Technology"
  },
  {
    name: "People Tech",
    logo: "https://via.placeholder.com/150x60/1a365d/ffffff?text=People+Tech",
    placements: 13,
    category: "Technology"
  },
  {
    name: "Shell Infotech",
    logo: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Shell+IT",
    placements: 9,
    category: "Technology"
  },
  {
    name: "ThoughtWorks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Thoughtworks_logo.svg/200px-Thoughtworks_logo.svg.png",
    placements: 24,
    category: "Technology"
  },
  {
    name: "Trimble",
    logo: "https://logos-world.net/wp-content/uploads/2022/04/Trimble-Logo.png",
    placements: 17,
    category: "Technology"
  }
];

const stats = [
  {
    icon: Users,
    value: "850+",
    label: "Students Placed",
    color: "text-professional-primary"
  },
  {
    icon: Building2,
    value: "26",
    label: "Partner Companies",
    color: "text-professional-accent"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Placement Rate",
    color: "text-professional-success"
  },
  {
    icon: Award,
    value: "$85K+",
    label: "Average Package",
    color: "text-professional-warning"
  }
];

export const StudentPlacementSection = () => {
  const topCompanies = companies.sort((a, b) => b.placements - a.placements).slice(0, 12);

  return (
    <section className="py-20 feature-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Where Our <span className="text-professional-primary">Students Get Placed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our graduates are successfully placed at top-tier companies across various industries. 
            Join our alumni network working at these prestigious organizations.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-elegant p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-professional-primary/10 to-professional-accent/10 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-professional-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Top Placement Companies */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-professional-secondary">
            Top Placement Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {topCompanies.map((company, index) => (
              <Card key={index} className="card-elegant p-6 text-center group hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-16 mb-4 flex items-center justify-center">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/150x60/1a365d/ffffff?text=${encodeURIComponent(company.name)}`;
                      }}
                    />
                  </div>
                  <h4 className="font-semibold text-professional-secondary mb-2 group-hover:text-professional-primary transition-colors">
                    {company.name}
                  </h4>
                  <div className="text-sm text-muted-foreground mb-2">
                    {company.category}
                  </div>
                  <div className="bg-professional-primary/10 text-professional-primary px-3 py-1 rounded-full text-xs font-medium">
                    {company.placements} placements
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Companies Logo Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-professional-secondary">
            Our Complete Placement Partner Network
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-border hover:shadow-md transition-shadow duration-300 group">
                <div className="h-12 flex items-center justify-center bg-gray-50 rounded border border-gray-200">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-elegant p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-professional-secondary">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Start your journey with us and become part of our alumni network working at 
              top companies worldwide. Our dedicated placement team is here to support your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-professional-primary hover:bg-professional-primary/90">
                Start Your Journey Today
              </Button>
              <Button variant="outline" size="lg" className="border-professional-primary text-professional-primary hover:bg-professional-primary hover:text-white">
                View Placement Success Stories
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProgramContent = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-6">
              <span>Home</span> 
              <span className="mx-2">›</span> 
              <span className="text-professional-primary">Workday & Enterprise Technology Training</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-professional-secondary mb-8">
              Enterprise Technology Training Programs
            </h1>

            {/* Featured Program Banner */}
            <Card className="mb-8 overflow-hidden">
              <div className="bg-gradient-to-r from-professional-secondary via-professional-primary to-professional-accent text-white p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Workday HCM Professional Training
                    </h2>
                    <div className="flex items-center gap-6 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <span>📞</span>
                        <span>+91 9573529800</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🌐</span>
                        <span>www.rrtechnos.com</span>
                      </div>
                    </div>
                    <Button variant="hero" size="lg">
                      Enroll Now - Limited Seats
                    </Button>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80"
                      alt="Workday training session"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* About Us Section */}
            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-professional-secondary">
                About RR Technos
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are a leading enterprise technology training institute with 5 top-most Workday experienced professionals 
                who have extensive work experience in all kinds of top MNCs and product-based companies across the globe. 
                Our mission is to bridge the gap between academic learning and industry requirements.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold mb-3 text-professional-primary">Our Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    To be the premier destination for enterprise technology training, empowering professionals 
                    with cutting-edge skills in Workday, AI, and emerging technologies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-professional-primary">Our Mission</h4>
                  <p className="text-sm text-muted-foreground">
                    Providing world-class training with real-time projects, industry mentorship, 
                    and guaranteed placement support to transform careers.
                  </p>
                </div>
              </div>
            </Card>

            {/* Why Choose Us */}
            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-professional-secondary">
                Why Choose RR Technos?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-professional-primary rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-professional-secondary">Real-Time Projects & Case Studies</h4>
                      <p className="text-sm text-muted-foreground">Work on live industry projects with real datasets and scenarios, giving you hands-on experience with actual business requirements and workflows.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-professional-primary rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-professional-secondary">100% Placement Assistance</h4>
                      <p className="text-sm text-muted-foreground">Dedicated placement team with strong industry connections ensuring job opportunities with top MNCs and product-based companies.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-professional-primary rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-professional-secondary">Certification Guidance</h4>
                      <p className="text-sm text-muted-foreground">Complete support for Workday and other technology certifications to boost your professional credibility.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-professional-primary rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-professional-secondary">1:1 Mentorship & Doubt Sessions</h4>
                      <p className="text-sm text-muted-foreground">Personal mentoring from industry experts with dedicated doubt clearing sessions and group discussions.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-professional-primary rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                    <div>
                      <h4 className="font-semibold text-professional-secondary">Flexible Learning Modes</h4>
                      <p className="text-sm text-muted-foreground">Choose from online, offline, or hybrid learning modes with flexible timings to suit your schedule.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-professional-primary rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
                    <div>
                      <h4 className="font-semibold text-professional-secondary">Alumni Success Stories</h4>
                      <p className="text-sm text-muted-foreground">Join our network of successful alumni working in top companies worldwide with significant career growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Training Modes */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-professional-secondary">
                Training Modes
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 border border-professional-primary/20 rounded-lg">
                  <div className="w-12 h-12 bg-professional-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-professional-primary text-xl">💻</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-professional-secondary">Online Training</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Live classes</li>
                    <li>• Recorded sessions</li>
                    <li>• LMS access</li>
                    <li>• 24/7 support</li>
                  </ul>
                </div>

                <div className="text-center p-4 border border-professional-primary/20 rounded-lg">
                  <div className="w-12 h-12 bg-professional-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-professional-primary text-xl">🏢</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-professional-secondary">Offline Training</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Classroom setup</li>
                    <li>• Hands-on labs</li>
                    <li>• Group activities</li>
                    <li>• Direct interaction</li>
                  </ul>
                </div>

                <div className="text-center p-4 border border-professional-primary/20 rounded-lg">
                  <div className="w-12 h-12 bg-professional-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-professional-primary text-xl">🔄</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-professional-secondary">Hybrid Learning</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Best of both modes</li>
                    <li>• Flexible schedule</li>
                    <li>• Personalized approach</li>
                    <li>• Maximum flexibility</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
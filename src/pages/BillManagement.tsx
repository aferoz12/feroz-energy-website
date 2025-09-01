import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const BillManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-accent-light text-accent-foreground mb-6">
            Coming Soon
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Utility Bill Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            AI-powered bill parsing and automation to streamline your utility management 
            across all locations. Upload, parse, and track with zero manual data entry.
          </p>
          <Button size="lg" className="bg-gradient-accent hover:opacity-90">
            Get Early Access
          </Button>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Automated Bill Processing
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform manual bill management into an automated, intelligent system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">AI</span>
                  </div>
                  OCR Bill Scanning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced AI extracts all data from utility bills automatically. 
                  Usage, demand, rates, and charges parsed with 99%+ accuracy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">📊</span>
                  </div>
                  Multi-Location Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Centralized dashboard for all utility accounts across locations. 
                  Track usage patterns, costs, and efficiency metrics in real-time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">⚡</span>
                  </div>
                  Smart Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instant notifications for usage spikes, billing errors, or 
                  opportunities to optimize rates and reduce costs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">📈</span>
                  </div>
                  Usage Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep insights into consumption patterns, demand management 
                  opportunities, and energy efficiency recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">🔄</span>
                  </div>
                  API Integrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with your existing systems. Export data to accounting 
                  software, property management platforms, or custom applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">🏢</span>
                  </div>
                  Enterprise Ready
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scalable solution for businesses with 5 to 5,000+ locations. 
                  Enterprise security, user management, and custom reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Drag & Drop Bill Processing
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the future of utility bill management
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="border-2 border-dashed border-accent rounded-xl p-16 text-center bg-accent-light/20 hover:bg-accent-light/30 transition-colors">
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">📄</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-2">
                      Drop Your Bills Here
                    </h3>
                    <p className="text-muted-foreground">
                      Our AI will automatically extract all data points, identify cost-saving 
                      opportunities, and organize everything in your dashboard.
                    </p>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">
                    Demo Available Soon
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Be First to Access Our Bill Management Platform
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our early access program and help shape the future of utility management. 
            Limited spots available for beta testing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90">
              Join Early Access Waitlist
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Schedule Platform Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillManagement;
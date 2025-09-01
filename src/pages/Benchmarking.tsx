import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Benchmarking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-accent-light text-accent-foreground mb-6">
            Compliance Made Easy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Energy Benchmarking & Compliance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay compliant with local energy laws and track your ENERGY STAR performance 
            across all properties. We handle the reporting so you can focus on your business.
          </p>
          <Button size="lg" className="bg-gradient-accent hover:opacity-90">
            Get Compliance Assessment
          </Button>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Stay Ahead of Energy Compliance
            </h2>
            <p className="text-xl text-muted-foreground">
              Navigate complex local energy laws and reporting requirements with expert guidance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">NYC</span>
                  </div>
                  Local Law 84 & 97 (NYC)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Annual benchmarking and energy efficiency reporting for buildings over 25,000 sq ft. 
                  Carbon emissions limits starting 2024.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Annual Deadline:</span>
                    <span className="text-sm font-medium">May 1st</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Penalty:</span>
                    <span className="text-sm font-medium text-destructive">Up to $0.50/sq ft</span>
                  </div>
                </div>
                <Badge variant="outline" className="border-accent text-accent">
                  Full Service Available
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">⭐</span>
                  </div>
                  ENERGY STAR Portfolio Manager
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Track energy performance, earn ENERGY STAR certification, and meet 
                  federal and state disclosure requirements.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Score Range:</span>
                    <span className="text-sm font-medium">1-100 (75+ for certification)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Updates:</span>
                    <span className="text-sm font-medium">Monthly recommended</span>
                  </div>
                </div>
                <Badge variant="outline" className="border-accent text-accent">
                  Automated Tracking
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Compliance Laws */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Other Compliance Requirements We Handle
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive coverage of energy disclosure laws across major markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                location: "California",
                law: "AB 802 & Title 24",
                requirement: "Annual benchmarking for commercial buildings",
                deadline: "Varies by utility"
              },
              {
                location: "Washington State", 
                law: "Clean Buildings Act",
                requirement: "Energy performance standards for large buildings",
                deadline: "June 1st annually"
              },
              {
                location: "Colorado",
                law: "Energize Denver",
                requirement: "Benchmarking and efficiency reporting",
                deadline: "May 1st annually"
              },
              {
                location: "Illinois",
                law: "Chicago Energy Benchmarking",
                requirement: "Annual reporting for buildings >50k sq ft",
                deadline: "June 1st annually"
              },
              {
                location: "Massachusetts",
                law: "BERDO 2.0 (Boston)",
                requirement: "Emissions performance standards",
                deadline: "May 15th annually"
              },
              {
                location: "Federal",
                law: "GSA Requirements",
                requirement: "ENERGY STAR for federal leases",
                deadline: "Ongoing compliance"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-primary">{item.location}</h3>
                      <p className="text-sm text-muted-foreground">{item.law}</p>
                    </div>
                    <p className="text-sm">{item.requirement}</p>
                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground">
                        Deadline: <span className="font-medium">{item.deadline}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Choose Our Compliance Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  100% Accuracy
                </h3>
                <p className="text-muted-foreground text-sm">
                  Zero compliance violations or late filings across 1000+ properties managed
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Set & Forget
                </h3>
                <p className="text-muted-foreground text-sm">
                  Automated data collection, report generation, and deadline management
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Avoid Penalties
                </h3>
                <p className="text-muted-foreground text-sm">
                  Prevent costly fines and maintain good standing with regulatory agencies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Performance Insights
                </h3>
                <p className="text-muted-foreground text-sm">
                  Detailed analytics and benchmarking to improve energy efficiency
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Let Us Handle Your Energy Compliance
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Focus on running your business while we ensure you meet all energy reporting requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90">
              Get Compliance Quote
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Download Compliance Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benchmarking;
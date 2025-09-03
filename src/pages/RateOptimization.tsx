import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const RateOptimization = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-accent-light text-accent-foreground mb-6">
            Performance-Based Model
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Utility Rate Optimization
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            No savings, no fee. We audit your rates and tariffs to identify overcharges 
            and missed savings opportunities across all your locations.
          </p>
          <Button size="lg" className="bg-gradient-accent hover:opacity-90">
            Start Your Free Audit
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            How Our Rate Optimization Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-foreground">1</span>
                </div>
                <CardTitle>Upload Your Bills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Send us a sample utility bill from any or all locations. 
                  We handle the rest with zero effort from your team.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-foreground">2</span>
                </div>
                <CardTitle>Expert Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our energy experts analyze rate structures, demand charges, 
                  and identify billing errors across multiple utility territories.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-foreground">3</span>
                </div>
                <CardTitle>Guaranteed Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We implement rate changes and secure refunds. You only pay 
                  a percentage of verified savings - no risk to you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Detailed Process */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Detailed Process
            </h2>
            <p className="text-xl text-muted-foreground">
              We follow a proven methodology to identify and capture utility savings opportunities for multi-site businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-lg">
              <CardContent className="text-center">
                <div className="text-6xl font-bold text-accent mb-4">1</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Data Collection</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We gather utility bills for each location. PDFs are fine - we can also import interval data or Green Button formats if available.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-lg">
              <CardContent className="text-center">
                <div className="text-6xl font-bold text-accent mb-4">2</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Usage & Tariff Review</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We analyze how each account uses energy, identify the current rate class and compare it to alternative tariffs. We check both delivery and supply components.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-lg">
              <CardContent className="text-center">
                <div className="text-6xl font-bold text-accent mb-4">3</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Report & Recommendations</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  You receive a customized savings report showing what you pay now, what you would pay under other tariffs and the estimated annual savings.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-lg">
              <CardContent className="text-center">
                <div className="text-6xl font-bold text-accent mb-4">4</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Implementation & Monitoring</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We help you switch to the best tariff, renegotiate supplier contracts and monitor ongoing bills to ensure savings are realized.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Are Different */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">How We Are Different</h2>
          <div className="bg-accent/10 p-8 rounded-lg">
            <p className="text-lg text-muted-foreground mb-6">
              Large consulting firms tend to target enterprises with hundreds of sites. Yet mid‑sized companies with 5–25 locations often have significant energy spend but lack a dedicated energy manager. <strong>Our service bridges that gap.</strong>
            </p>
            <p className="text-muted-foreground">
              We draw inspiration from industry best practices – comprehensive bill auditing for errors and procurement opportunities, data‑driven rate comparisons using advanced algorithms, and systematic assessment of non‑commodity costs and alternative tariffs. Feroz Energy brings these proven strategies together in a tailored service for growing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* What You Need to Provide */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">What You Need to Provide</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Recent utility bills for each account – PDF copies are acceptable.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Details of any third‑party supply contracts (rates, term, supplier).</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">A primary contact person to coordinate data collection and review findings.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Optional: interval load data if you want us to explore time‑of‑use or demand‑management options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized expertise across commercial sectors with complex energy needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Multi-Location Retail",
                description: "Chain stores, shopping centers, and franchise operations",
                roi: "12-20% average savings"
              },
              {
                title: "Restaurant Groups", 
                description: "Fast-casual, quick-serve, and full-service restaurant chains",
                roi: "15-25% average savings"
              },
              {
                title: "Light Industrial",
                description: "Manufacturing, warehousing, and distribution facilities",
                roi: "10-18% average savings"
              },
              {
                title: "Healthcare Facilities",
                description: "Clinics, medical offices, and outpatient centers",
                roi: "12-22% average savings"
              },
              {
                title: "Office Buildings",
                description: "Commercial office space and professional services",
                roi: "8-15% average savings"
              },
              {
                title: "Hospitality",
                description: "Hotels, motels, and extended-stay properties",
                roi: "14-28% average savings"
              }
            ].map((industry, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {industry.description}
                  </p>
                  <Badge variant="outline" className="border-accent text-accent">
                    {industry.roi}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Reduce Your Utility Costs?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of businesses saving money with our risk-free rate optimization.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90">
              <Link to="/">Get Free Rate Analysis</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RateOptimization;
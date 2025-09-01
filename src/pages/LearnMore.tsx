import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LearnMore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-secondary via-background to-accent-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Our Process
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to identify and capture utility savings opportunities for multi-site businesses.
            </p>
          </div>

          {/* Our Process Section */}
          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 shadow-lg">
                <CardContent className="text-center">
                  <div className="text-6xl font-bold text-accent mb-4">1</div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Data Collection</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We gather 12-24 months of utility bills for each location. PDFs are fine - we can also import interval data or Green Button formats if available.
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
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* How We Are Different Section */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-8">How We Are Different</h2>
            <div className="bg-accent/10 p-8 rounded-lg">
              <p className="text-lg text-muted-foreground mb-6">
                Large consulting firms tend to target enterprises with hundreds of sites. Yet mid‑sized companies with 5–25 locations often have significant energy spend but lack a dedicated energy manager. <strong>Our service bridges that gap.</strong>
              </p>
              <p className="text-muted-foreground">
                We draw inspiration from industry best practices – comprehensive bill auditing for errors and procurement opportunities, data‑driven rate comparisons using advanced algorithms, and systematic assessment of non‑commodity costs and alternative tariffs. Feroz Energy brings these proven strategies together in a tailored service for growing businesses.
              </p>
            </div>
          </section>

          {/* What You Need to Provide Section */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-8">What You Need to Provide</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">Recent utility bills (preferably 12–24 months) for each account – PDF copies are acceptable.</p>
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
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-accent/10 to-accent-light/10 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to Reduce Your Utility Costs?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Click the About Us button on our homepage or contact us to upload your bills. Our initial consultation is free. We'll show you how much you could save through rate and tariff optimization and prepare you for energy procurement when you're ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90">
                <Link to="/">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/faq">View FAQ</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;

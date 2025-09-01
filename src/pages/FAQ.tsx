import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-secondary via-background to-accent-light">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <Badge className="bg-accent-light text-accent-foreground text-lg px-4 py-2">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                             Get answers to common questions about how Feroz Energy helps multi‑site organizations reduce utility costs through expert rate and tariff analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-12">
            
            {/* FAQ Items */}
            <section>
              <div className="space-y-8">
                
                {/* FAQ Item 1 */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Why is utility rate optimization so complex?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      North America has over <strong>11,000 different utility rate structures</strong> across thousands of utilities. Each rate structure has different rules, charges, and requirements that can significantly impact your costs.
                    </p>
                    <p className="text-muted-foreground">
                      Most businesses are placed on default rates that may not be optimal for their usage patterns. Without expert analysis, you could be paying thousands more than necessary each year.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 2 */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                                             What makes Feroz Energy different from other consultants?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                                             Most energy consultants focus on enterprise-level clients with hundreds of locations, or only handle energy procurement. Feroz Energy specializes in mid-sized organizations with 5-25 locations who need comprehensive rate optimization.
                    </p>
                    <p className="text-muted-foreground">
                      We provide a complete service that includes analysis, implementation, and ongoing monitoring—all tailored to growing businesses without dedicated energy management staff.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 3 */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      What information do you need from me?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      We need <strong>12-24 months of utility bills</strong> for each location (PDF copies are fine), details of any existing energy contracts, and a primary contact person to coordinate the process.
                    </p>
                    <p className="text-muted-foreground">
                      That's it! We handle all the complex analysis, paperwork, and implementation to get you on the optimal rates.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 4 */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Do you handle all the paperwork and implementation?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      <strong>Yes, absolutely!</strong> We don't just analyze your rates—we handle all the paperwork, filings, and coordination with utilities to get you switched to the optimal tariff.
                    </p>
                    <p className="text-muted-foreground">
                      We also help renegotiate supplier contracts and monitor your bills to ensure the savings are realized. Our goal is to create long-term value, not just a one-time report.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 5 */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      How much can I expect to save?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Savings vary by organization, but many of our clients see <strong>10-25% reductions</strong> in their utility costs through rate optimization alone.
                    </p>
                    <p className="text-muted-foreground">
                      The key is that these savings are achieved without changing your operations or equipment—just by getting you on the right rate structure for your usage patterns.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 6 */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      What happens after you find savings?
                    </h3>
                    <p className="text-muted-foreground">
                      We provide a detailed savings report showing your current costs versus what you would pay under the optimal tariff. If you decide to proceed, we handle all the implementation work and continue monitoring your bills to ensure savings are realized.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-r from-accent/10 to-accent-light/10 p-12 rounded-lg">
              <h2 className="text-3xl font-bold text-primary mb-6">Ready to reduce your utility costs?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation. We'll show you exactly how much you could save and handle all the complex work to get you on the optimal rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90">
                  <Link to="/">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/learn-more">About Us</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

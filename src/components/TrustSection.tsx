import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TrustSection = () => {
  return (
    <section className="min-h-screen bg-secondary flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-20">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Why Utility Bills Are Often Wrong
              </h2>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Complex rate structures, hidden fees, and billing errors cost businesses thousands annually. 
                We specialize in finding these costly mistakes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <Card className="text-center shadow-lg">
                <CardContent className="p-10">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-accent-foreground">85%</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Bills Have Errors
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Most commercial utility bills contain overcharges or missed savings opportunities
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-10">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-accent-foreground">15%</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Average Savings
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our clients typically save 10-25% on their annual utility costs
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-10">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-accent-foreground">$0</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Upfront Costs
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    No savings, no fee. We only get paid when we save you money
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="pt-12">
              <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90 h-16 text-xl font-semibold px-8">
                <Link to="/learn-more">Learn About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
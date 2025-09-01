import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const BlogUtilityTariffs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-secondary via-background to-accent-light">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <Badge className="bg-accent-light text-accent-foreground text-lg px-4 py-2">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Why Reviewing Utility Tariffs Matters for Multi‑Site Businesses
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn why multi‑location organizations should review their utility rate classes and tariffs, what charges make up a tariff and how tailored analysis can unlock hidden savings.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-12">
            
            {/* Introduction */}
            <section>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Managing utility costs across many locations often feels like a necessary evil—bills arrive, invoices get paid and few people think about the underlying rate structure. Yet those <strong>rate structures</strong>, known as tariffs, determine how much you pay for each kilowatt‑hour or therm and can vary widely from one account to another. For mid‑size organizations with multiple facilities, understanding tariffs is a powerful way to reduce overhead without changing how you operate.
              </p>
            </section>

            {/* What exactly is a utility tariff? */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">What exactly is a utility tariff?</h2>
              <p className="text-muted-foreground mb-4">
                A tariff is a <strong>structured pricing plan</strong> approved by regulators. It combines fixed customer fees, per‑unit energy charges, time‑of‑use pricing, seasonal variations and taxes. The distribution portion of a tariff might include a volumetric rate for delivering energy plus a fixed "customer" charge, while the <strong>commodity charge</strong> reflects the gas or electricity you consume.
              </p>
              <p className="text-muted-foreground">
                In deregulated markets you can choose a supplier for the commodity portion, but the distribution rates are set by the local utility. These rules are spelled out in publicly filed tariffs, and each utility can offer several different rate schedules for businesses of various sizes and load profiles.
              </p>
            </section>

            {/* Why do tariffs matter for mid‑size businesses? */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Why do tariffs matter for mid‑size businesses?</h2>
              <p className="text-muted-foreground mb-4">
                North America has more than <strong>11,000 rate structures across 3,500 utilities</strong>. Most customers are placed on a default rate when they open an account, but that rate may not be the cheapest option given their usage pattern. Some tariffs have lower energy rates but higher demand charges, others offer discounts for shifting load to off‑peak periods or for maintaining power factor.
              </p>
              <p className="text-muted-foreground mb-6">
                Non‑commodity costs—transmission, distribution, capacity and other fees—can make up <strong>over half of your total energy cost</strong>. Choosing the wrong tariff can therefore inflate your bills even if your consumption remains unchanged.
              </p>
              <p className="text-muted-foreground">
                For multi‑site organizations, the stakes are higher because each location can have a different load shape. A warehouse operating 24/7 might benefit from a time‑of‑use tariff with lower overnight rates, while a retail store with short hours may be better off on a flat rate. Without reviewing each site's usage, companies can unknowingly pay thousands in unnecessary charges.
              </p>
            </section>

            {/* What charges make up a tariff? */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">What charges make up a tariff?</h2>
              <p className="text-muted-foreground mb-6">
                Most tariffs include these components:
              </p>
              <div className="space-y-4">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-2">Fixed customer charge</h3>
                  <p className="text-muted-foreground">A flat monthly fee to cover metering, billing and customer service, assessed regardless of usage.</p>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-2">Energy charge</h3>
                  <p className="text-muted-foreground">The per‑unit cost for electricity (in kWh) or natural gas (in therms or cubic meters), which may vary by season or time of day.</p>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-2">Demand charge</h3>
                  <p className="text-muted-foreground">A fee based on the highest 15‑ or 30‑minute interval of power consumption during the billing cycle. This charge recovers the cost of generation and transmission capacity that sits idle most of the time but must be ready for your peak demand.</p>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-2">Fuel or cost adjustment riders</h3>
                  <p className="text-muted-foreground">Pass‑through charges that track fluctuations in wholesale fuel prices.</p>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-2">Non‑commodity surcharges</h3>
                  <p className="text-muted-foreground">Transmission, distribution, renewable program fees and other regulatory charges.</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-6">
                Some tariffs also offer <strong>time‑of‑use rates</strong>, where on‑peak hours are priced higher than off‑peak hours, or <strong>demand ratchets</strong>, where a single high peak can influence bills for months. The mix of these charges determines which tariff is best for your operations.
              </p>
            </section>

            {/* How to approach a tariff review */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">How to approach a tariff review</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Collect your data</h3>
                    <p className="text-muted-foreground">Gather 12–24 months of bills for each account. Interval data (hourly or 15‑minute usage) is extremely helpful for modeling demand and time‑of‑use rates.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Analyze usage patterns</h3>
                    <p className="text-muted-foreground">Look for peaks, seasonal variations and differences among locations. Determine whether high demand charges or energy charges are driving costs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Compare alternative tariffs</h3>
                    <p className="text-muted-foreground">Using published rate schedules, calculate what each account would have paid under other available tariffs. Advanced analysis tools and databases can speed this process.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Factor in supply</h3>
                    <p className="text-muted-foreground">In deregulated markets you may also be able to negotiate the supply portion of your bill. Consider switching suppliers or contract types (fixed vs. index) once you have chosen the best distribution tariff.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Implement and monitor</h3>
                    <p className="text-muted-foreground">Switch to the recommended tariff and track bills to confirm savings. Revisit the analysis periodically—tariff structures and your load profile can change.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bridging the gap for multi‑site organizations */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Bridging the gap for multi‑site organizations</h2>
              <div className="bg-accent/10 p-8 rounded-lg">
                <p className="text-lg text-muted-foreground mb-6">
                  Large enterprises often employ in‑house energy managers or engage big consulting firms. Smaller companies rarely review tariffs because they lack time or expertise. Mid‑size businesses with several locations fall into a grey area where utility expenses are significant but internal resources are limited.
                </p>
                <p className="text-muted-foreground">
                                     That's where Feroz Energy comes in. By combining proven best practices from the energy industry—including comprehensive bill auditing, data‑driven rate comparisons, and systematic non‑commodity cost analysis—we deliver a tailored review for each of your accounts and help implement changes.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Conclusion</h2>
              <p className="text-lg text-muted-foreground">
                                 Reviewing and optimizing utility tariffs may not be glamorous, but it can unlock significant savings across multiple locations. By understanding how tariffs are structured and leveraging a systematic analysis, mid‑size organizations can reduce costs without changing operations. Reach out to Feroz Energy to see how much you could save.
              </p>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-r from-accent/10 to-accent-light/10 p-12 rounded-lg">
              <h2 className="text-3xl font-bold text-primary mb-6">Ready to optimize your utility tariffs?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                 Contact Feroz Energy today to start your tariff analysis and discover potential savings across your multi-site organization.
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

export default BlogUtilityTariffs;

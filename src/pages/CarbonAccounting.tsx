import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const CarbonAccounting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-accent-light text-accent-foreground mb-6">
            Sustainability Simplified
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Carbon Accounting & Reporting
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Scale your sustainability efforts with automated carbon footprint tracking. 
            Transform utility data into comprehensive emissions reporting.
          </p>
          <Button size="lg" className="bg-gradient-accent hover:opacity-90">
            Start Carbon Tracking
          </Button>
        </div>
      </section>

      {/* Carbon Accounting Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Comprehensive Carbon Footprint Management
            </h2>
            <p className="text-xl text-muted-foreground">
              From data collection to ESG reporting, we handle the complexity of carbon accounting
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">1</span>
                  </div>
                  Automated Data Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect utility accounts across all locations for automatic energy usage 
                  tracking. No manual data entry or bill uploads required.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">2</span>
                  </div>
                  Emissions Calculations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  EPA-compliant methodology converts energy usage to CO₂ equivalent 
                  emissions using location-specific grid factors and fuel types.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">3</span>
                  </div>
                  Comprehensive Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Generate detailed carbon reports for ESG disclosures, sustainability 
                  initiatives, and regulatory compliance requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scope Coverage */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Complete Scope 1 & 2 Emissions Tracking
            </h2>
            <p className="text-xl text-muted-foreground">
              Track all energy-related emissions across your portfolio with industry-standard methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Scope 1 - Direct Emissions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Emissions from sources directly owned or controlled by your organization.
                </p>
                <div className="space-y-3">
                  {[
                    "Natural gas combustion",
                    "Propane and fuel oil usage", 
                    "Company-owned vehicle fleet",
                    "On-site fuel consumption",
                    "Refrigerant leaks (if tracked)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Scope 2 - Indirect Emissions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Emissions from purchased electricity, steam, heating, and cooling.
                </p>
                <div className="space-y-3">
                  {[
                    "Purchased electricity consumption",
                    "District steam and hot water",
                    "Purchased chilled water",
                    "Location-based grid factors",
                    "Market-based renewable energy credits"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reporting Standards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Industry-Standard Reporting
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet requirements for all major sustainability frameworks and disclosure standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                standard: "GHG Protocol",
                description: "Corporate Accounting & Reporting Standard for greenhouse gas emissions",
                compliance: "Full Scope 1 & 2"
              },
              {
                standard: "CDP Reporting",
                description: "Carbon Disclosure Project climate change questionnaire responses",
                compliance: "Climate Module"
              },
              {
                standard: "SASB Standards", 
                description: "Sustainability Accounting Standards Board industry-specific metrics",
                compliance: "Energy Metrics"
              },
              {
                standard: "TCFD Framework",
                description: "Task Force on Climate-related Financial Disclosures reporting",
                compliance: "Risk Assessment"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-accent-foreground font-bold text-sm">
                        {item.standard.split(' ')[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{item.standard}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <Badge variant="outline" className="border-accent text-accent text-xs">
                        {item.compliance}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Seamless Integration Advantages
            </h2>
            <p className="text-xl text-muted-foreground">
              Combine carbon accounting with our energy management services for maximum efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Unified Data Source
                </h3>
                <p className="text-muted-foreground text-sm">
                  Utility bill data automatically feeds both cost optimization and carbon tracking systems
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Real-Time Tracking
                </h3>
                <p className="text-muted-foreground text-sm">
                  Monthly emissions updates without manual data collection or processing delays
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Actionable Insights
                </h3>
                <p className="text-muted-foreground text-sm">
                  Identify emission reduction opportunities that also deliver cost savings
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Start Your Carbon Accounting Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join forward-thinking companies using our platform to manage their environmental impact 
            while reducing energy costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90">
              Get Carbon Assessment
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Download ESG Report Sample
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarbonAccounting;
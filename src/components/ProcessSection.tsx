import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProcessSection = () => {
  const processSteps = [
    {
      number: "1",
      title: "Data Collection",
      description: "We gather utility bills for each location. PDFs are fine - we can also import interval data or Green Button formats if available."
    },
    {
      number: "2",
      title: "Usage & Tariff Review",
      description: "We analyze how each account uses energy, identify the current rate class and compare it to alternative tariffs. We check both delivery and supply components."
    },
    {
      number: "3",
      title: "Report & Recommendations",
      description: "You receive a customized savings report showing what you pay now, what you would pay under other tariffs and the estimated annual savings."
    },
    {
      number: "4",
      title: "Implementation & Monitoring",
      description: "We help you switch to the best tariff, renegotiate supplier contracts and monitor ongoing bills to ensure savings are realized."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent-light/20 via-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-accent text-white text-lg px-4 py-2 mb-4">
            Our Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How We Deliver Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a proven methodology to identify and capture utility savings opportunities for multi-site businesses.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-bold text-accent mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What You Need Section */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-accent/20">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            What You Need to Provide
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Recent utility bills for each account</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Details of any third-party supply contracts</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Primary contact person to coordinate the process</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Optional: interval load data for advanced options</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see how much you could save?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-accent hover:opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-opacity"
          >
            Start Your Free Analysis
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

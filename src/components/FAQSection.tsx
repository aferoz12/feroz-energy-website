import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FAQSection = () => {
  const faqItems = [
    {
      question: "Why is utility rate optimization so complex?",
      answer: "North America has over 11,000 different utility rate structures across thousands of utilities. Each rate structure has different rules, charges, and requirements that can significantly impact your costs. Most businesses are placed on default rates that may not be optimal for their usage patterns."
    },
    {
      question: "What makes Feroz Energy different from other consultants?",
      answer: "Most energy consultants focus on enterprise-level clients with hundreds of locations, or only handle energy procurement. Feroz Energy specializes in mid-sized organizations with 5-25 locations who need comprehensive rate optimization. We provide a complete service that includes analysis, implementation, and ongoing monitoring."
    },
    {
      question: "What information do you need from me?",
      answer: "We need 12-24 months of utility bills for each location (PDF copies are fine), details of any existing energy contracts, and a primary contact person to coordinate the process. That's it! We handle all the complex analysis, paperwork, and implementation to get you on the optimal rates."
    },
    {
      question: "Do you handle all the paperwork and implementation?",
      answer: "Yes, absolutely! We don't just analyze your rates—we handle all the paperwork, filings, and coordination with utilities to get you switched to the optimal tariff. We also help renegotiate supplier contracts and monitor your bills to ensure the savings are realized."
    },
    {
      question: "How much can I expect to save?",
      answer: "Savings vary by organization, but many of our clients see 10-25% reductions in their utility costs through rate optimization alone. The key is that these savings are achieved without changing your operations or equipment—just by getting you on the right rate structure for your usage patterns."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent-light/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-accent-light text-accent-foreground text-lg px-4 py-2 mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Common Questions About Utility Rate Optimization
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most important questions about how we help multi-site organizations reduce utility costs through expert rate and tariff analysis.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {faqItems.map((item, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.question}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {item.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-accent hover:opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-opacity"
          >
            Get Your Free Analysis
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

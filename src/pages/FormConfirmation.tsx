import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

const FormConfirmation = () => {
  const [searchParams] = useSearchParams();
  const confirmationNumber = searchParams.get('confirmation');

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
            <div className="flex justify-center">
              <CheckCircle className="w-24 h-24 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Form Successfully Submitted!
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thank you for your interest in Feroz Energy. We have received your information and will review your utility bills.
            </p>
            
            {/* Confirmation Number Display */}
            {confirmationNumber && (
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
                <p className="text-sm text-muted-foreground mb-2">Confirmation Number</p>
                <p className="text-2xl font-mono font-bold text-accent bg-accent/10 px-4 py-2 rounded border">
                  {confirmationNumber}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Please save this number for your records
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          
          {/* Confirmation Message */}
          <Card className="shadow-lg">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                What Happens Next?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  <strong>We will reach out to you within 24 hours</strong> to discuss your utility optimization needs and answer any questions you may have.
                </p>
                <p>
                  Our team will analyze your submitted information and prepare a personalized review of your current utility rates and potential savings opportunities.
                </p>
                <p>
                  If you have any questions in the meantime, please don't hesitate to contact us at{' '}
                  <a 
                    href="mailto:info@ferozenergy.com" 
                    className="text-accent hover:underline font-semibold"
                  >
                    info@ferozenergy.com
                  </a>
                  {confirmationNumber && (
                    <span> and reference your confirmation number: <strong>{confirmationNumber}</strong></span>
                  )}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="shadow-lg">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                What to Expect
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">Initial Contact</h4>
                  <p className="text-muted-foreground">
                    Within 24 hours, one of our energy experts will reach out to discuss your specific situation and answer any questions.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">Analysis Process</h4>
                  <p className="text-muted-foreground">
                    We'll review your utility bills, analyze rate structures, and identify potential savings opportunities across all your locations.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">Savings Report</h4>
                  <p className="text-muted-foreground">
                    You'll receive a detailed report showing your current costs versus potential savings under optimized rates.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">Implementation</h4>
                  <p className="text-muted-foreground">
                    If you decide to proceed, we handle all the paperwork and coordination to get you on the optimal rates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-accent/10 to-accent-light/10 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us anytime for assistance or to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90">
                <a href="mailto:info@ferozenergy.com">Contact Us</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FormConfirmation;

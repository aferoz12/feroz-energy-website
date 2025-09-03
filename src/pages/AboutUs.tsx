import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-accent-light text-accent-foreground mb-6">
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            Experience-Led. Accuracy-Obsessed.
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              At Feroz Energy, our story starts with frustration.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600 font-light">
              For the past 8 years, I worked with some of the largest utility bill management providers in the U.S. I saw firsthand how complex and critical this work is — and how often it was handled poorly. Bills were processed late. Errors went unnoticed. Customers were left with gaps in data, unexpected costs, and growing distrust.
            </p>
            
            <p className="text-xl leading-relaxed text-gray-700 font-medium">
              I knew it didn't have to be this way.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600 font-light">
              That's why I started Feroz Energy. Our mission is simple: deliver utility bill management the right way — accurate, reliable, and built around the customer.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600 font-light">
              We combine advanced technology with hands-on expertise to take the burden of managing utility bills, across multiple locations, off your team's shoulders. Beyond bill management, we help businesses track Scope 1 and 2 carbon emissions, meet ENERGY STAR benchmarking requirements, uncover savings through utility rate reviews, and secure rebates that too often go unclaimed.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-accent">
              <p className="text-lg leading-relaxed text-gray-700 font-medium">
                Most importantly, we back it up with a risk-free pilot program. For your first 3 months, you'll pay nothing. If you're not happy, you don't pay a dime. That's how confident we are in our solution.
              </p>
            </div>
            
            <p className="text-xl leading-relaxed text-gray-700 font-medium">
              We've lived your frustrations. Now we're here to fix them.
            </p>
            
            <div className="text-center py-8">
              <p className="text-2xl font-semibold text-primary font-serif italic">
                "Feroz Energy — built on experience, driven by integrity, designed for results."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Highlight */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 font-serif">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Comprehensive energy management solutions backed by real experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Utility Bill Management
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  Process hundreds of bills across dozens of locations with accuracy and reliability
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Carbon Emissions Tracking
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  Track Scope 1 and 2 carbon emissions for sustainability reporting
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  ENERGY STAR Benchmarking
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  Meet compliance requirements and optimize building performance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Savings & Rebates
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  Uncover utility rate savings and secure unclaimed rebates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk-Free Pilot CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent-light to-accent p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-accent-foreground mb-4 font-serif">
              Try Us Risk-Free
            </h2>
            <p className="text-xl text-accent-foreground mb-8 font-light">
              Your first 3 months are completely free. If you're not happy, you don't pay a dime.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent font-medium">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 font-serif">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-light">
            Join the businesses that have transformed their energy management with Feroz Energy.
          </p>
          <Button size="lg" className="bg-gradient-accent hover:opacity-90 font-medium">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

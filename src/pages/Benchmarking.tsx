import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Benchmarking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-accent-light text-accent-foreground mb-6">
            Compliance Made Easy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Fast-tracked compliance with dedicated support — your deadline is our priority
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            With over fifty jurisdictions nationwide enforcing energy and emissions benchmarking, staying compliant can feel overwhelming. We handle the complexity for you, so you can stay focused on what matters most—your business.
          </p>
          <Button size="lg" className="bg-gradient-accent hover:opacity-90">
            Get Compliance Assessment
          </Button>
        </div>
      </section>

      {/* ENERGY STAR® Benchmarking Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              ENERGY STAR® Benchmarking
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              ENERGY STAR® is a national program that helps building owners measure and compare energy performance and identify savings opportunities. It's administered by the U.S. EPA in partnership with the U.S. Department of Energy, and its Portfolio Manager® tool is widely used across U.S. commercial buildings to benchmark building energy use, compare against peers, and track improvements over time. It's the industry standard for commercial buildings in the U.S. and Canada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* What Benchmarking Does */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  What Benchmarking Does
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Brings all your utility data into one place (electricity, gas, water)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Scores performance from 1-100 for eligible building types
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Flags under-performers and highlights quick wins
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Simplifies reporting for local and state benchmarking ordinances
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Why It Matters */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Why It Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    Lower operating costs through targeted efficiency projects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    Clear, comparable metrics for stakeholders and lenders
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    Easier regulatory reporting (where required)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    A credible, nationally recognized framework (not a proprietary score)
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* How Feroz Energy Helps */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  How Feroz Energy Helps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-3 text-sm text-purple-700">
                  <li className="space-y-1">
                    <div className="font-semibold text-purple-800">Data Onboarding</div>
                    <div className="text-purple-600">We collect bills, set up meters, and validate data in Portfolio Manager.</div>
                  </li>
                  <li className="space-y-1">
                    <div className="font-semibold text-purple-800">Compliance & Certification</div>
                    <div className="text-purple-600">We handle required submissions and ENERGY STAR certification support.</div>
                  </li>
                  <li className="space-y-1">
                    <div className="font-semibold text-purple-800">Ongoing Tracking</div>
                    <div className="text-purple-600">Monthly updates and simple dashboards keep performance on track.</div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* What You Get */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <span className="text-2xl">🎁</span>
                  What You Get
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm text-orange-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    A Portfolio Manager workspace set up and maintained for your portfolio
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Clean, validated utility data with clear audit trails
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Optional support for ENERGY STAR certification and local reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive U.S. Support Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background text-gray-500 uppercase tracking-wider font-semibold">
                  Comprehensive Support Across the U.S.
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Maryland BEPS */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">
                  Maryland Building Energy Performance Standards (BEPS)
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Who it covers:</span>
                    <p className="text-gray-600">All commercial & multifamily buildings ≥35,000 sq. ft. statewide.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Requirement:</span>
                    <p className="text-gray-600">Submit annual benchmarking via ENERGY STAR Portfolio Manager. 2024 data due September 1, 2025.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Description:</span>
                    <p className="text-gray-600">Maryland is one of the first states with a statewide BEPS law. Building owners must track and report performance annually; penalties apply for non-compliance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Denver */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">
                  Energize Denver Building Performance Ordinance
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Who it covers:</span>
                    <p className="text-gray-600">Commercial & multifamily buildings ≥25,000 sq. ft.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Requirement:</span>
                    <p className="text-gray-600">Annual benchmarking via Portfolio Manager; 2024 data due September 1, 2025. $2,000+ fines for late filing.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Description:</span>
                    <p className="text-gray-600">Part of Denver's climate action plan to cut building emissions 30% by 2030. Compliance is verified annually with strict penalties for missed deadlines.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seattle */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">
                  Seattle Energy Benchmarking Program
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Who it covers:</span>
                    <p className="text-gray-600">All nonresidential & multifamily buildings ≥20,000 sq. ft.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Requirement:</span>
                    <p className="text-gray-600">Annual reporting via Portfolio Manager; 2024 data was due June 1, 2025. Enforcement begins September 1, 2025.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Description:</span>
                    <p className="text-gray-600">One of the earliest citywide benchmarking programs. Owners face $2,000-$4,000 fines for non-compliance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NYC */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">
                  NYC Local Law 84 – Benchmarking
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Who it covers:</span>
                    <p className="text-gray-600">All buildings ≥25,000 sq. ft. (or ≥10,000 sq. ft. if owned by city).</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Requirement:</span>
                    <p className="text-gray-600">Annual benchmarking via Portfolio Manager by May 1 each year.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Description:</span>
                    <p className="text-gray-600">One of the strictest programs nationally. Missing deadlines results in escalating fines; data feeds into Local Law 97 emissions caps.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Philadelphia */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">
                  Philadelphia Building Energy Benchmarking Ordinance
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Who it covers:</span>
                    <p className="text-gray-600">All commercial & multifamily buildings ≥50,000 sq. ft.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Requirement:</span>
                    <p className="text-gray-600">Annual benchmarking via Portfolio Manager by June 30 each year.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Description:</span>
                    <p className="text-gray-600">Building data is publicly disclosed and used to grade performance, driving transparency and efficiency improvements across the city.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Los Angeles */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">
                  Los Angeles Existing Buildings Energy & Water Efficiency Program
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Who it covers:</span>
                    <p className="text-gray-600">All buildings ≥20,000 sq. ft.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Requirement:</span>
                    <p className="text-gray-600">Annual benchmarking via Portfolio Manager by June 1 each year; audits/retro-commissioning every 5 years.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Description:</span>
                    <p className="text-gray-600">Combines benchmarking with performance improvement. Non-compliance can trigger daily fines and legal action.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Choose Our Compliance Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  100% Accuracy
                </h3>
                <p className="text-muted-foreground text-sm">
                  Zero compliance violations or late filings across 1000+ properties managed
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Set & Forget
                </h3>
                <p className="text-muted-foreground text-sm">
                  Automated data collection, report generation, and deadline management
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Avoid Penalties
                </h3>
                <p className="text-muted-foreground text-sm">
                  Prevent costly fines and maintain good standing with regulatory agencies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Performance Insights
                </h3>
                <p className="text-muted-foreground text-sm">
                  Detailed analytics and benchmarking to improve energy efficiency
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Let Us Handle Your Energy Compliance
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Focus on running your business while we ensure you meet all energy reporting requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90">
              Get Compliance Quote
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Download Compliance Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benchmarking;
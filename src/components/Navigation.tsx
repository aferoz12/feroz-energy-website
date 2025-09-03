import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const serviceItems = [
    { name: "Rate Optimization", href: "/rate-optimization" },
    { name: "Bill Management", href: "/bill-management" },
    { name: "Benchmarking", href: "/benchmarking" },
    { name: "Carbon Accounting", href: "/carbon-accounting" },
  ];

  const navItems = [
    { name: "About Us", href: "/about-us" },
  ];

  const blogItems = [
    { name: "Utility Tariffs for Multi-Site Businesses", href: "/blog/utility-tariffs" },
    { name: "Supply vs. Distribution Charges", href: "/blog/supply-distribution" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Feroz Energy Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl sm:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Feroz Energy
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-16">
              {/* Our Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`px-4 py-3 text-lg font-medium transition-colors ${
                      location.pathname === '/rate-optimization' || 
                      location.pathname === '/bill-management' || 
                      location.pathname === '/benchmarking' || 
                      location.pathname === '/carbon-accounting'
                        ? "text-primary border-b-2 border-accent"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    Our Services
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {serviceItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild className="text-lg">
                      <Link to={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.href}
                    className={`px-4 py-3 text-lg font-medium transition-colors ${
                      location.pathname === item.href
                        ? "text-primary border-b-2 border-accent"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              
              {/* Blog Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`px-4 py-3 text-lg font-medium transition-colors ${
                      location.pathname.startsWith('/blog')
                        ? "text-primary border-b-2 border-accent"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    Blog
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {blogItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild className="text-lg">
                      <Link to={item.href}>
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Right: Email and Get Started Button - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="mailto:info@ferozenergy.com"
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-3"
            >
              info@ferozenergy.com
            </a>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-accent hover:opacity-90 transition-opacity text-lg px-8 py-3"
            >
              <Link to="/#contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Link to="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                      Feroz Energy
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                
                <div className="mt-8 space-y-6">
                  {/* Mobile Services Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Our Services</h3>
                    <div className="space-y-2">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={closeMobileMenu}
                          className={`block px-3 py-2 rounded-md text-base transition-colors ${
                            location.pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Navigation Items */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Navigation</h3>
                    <div className="space-y-2">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={closeMobileMenu}
                          className={`block px-3 py-2 rounded-md text-base transition-colors ${
                            location.pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Blog Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Blog</h3>
                    <div className="space-y-2">
                      {blogItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={closeMobileMenu}
                          className={`block px-3 py-2 rounded-md text-base transition-colors ${
                            location.pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Contact Section */}
                  <div className="pt-4 border-t border-border">
                    <div className="space-y-3">
                      <a 
                        href="mailto:info@ferozenergy.com"
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@ferozenergy.com
                      </a>
                      <Button 
                        asChild 
                        size="lg"
                        className="w-full bg-gradient-accent hover:opacity-90 transition-opacity text-base px-6 py-3"
                        onClick={closeMobileMenu}
                      >
                        <Link to="/#contact">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
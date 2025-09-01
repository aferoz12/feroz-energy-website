import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const serviceItems = [
    { name: "Rate Optimization", href: "/rate-optimization" },
    { name: "Bill Management", href: "/bill-management" },
    { name: "Benchmarking", href: "/benchmarking" },
    { name: "Carbon Accounting", href: "/carbon-accounting" },
  ];

  const navItems = [
    { name: "Our Process", href: "/learn-more" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Feroz Energy Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Feroz Energy
            </Link>
          </div>

          {/* Center: Navigation Links */}
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
                  <DropdownMenuItem asChild className="text-lg">
                    <Link to="/blog/utility-tariffs">
                      Utility Tariffs for Multi-Site Businesses
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-lg">
                    <Link to="/blog/supply-distribution">
                      Supply vs. Distribution Charges
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Right: Get Started Button */}
          <div className="flex-shrink-0">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-accent hover:opacity-90 transition-opacity text-lg px-8 py-3"
            >
              <Link to="/#contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
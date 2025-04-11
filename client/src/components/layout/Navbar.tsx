import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { text: "TwinTry™", href: "/#how-it-works" },
    { text: "TwinMock™", href: "/#twinmock" },
    { text: "Features", href: "/#features" },
    { text: "Benefits", href: "/#benefits" },
    { text: "Integration", href: "/#integration" },
    { text: "Contact", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-violet-500 flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg text-dark">Twinverse</span>
              <span className="block text-xs text-gray-500">Build Beyond Reality</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm font-medium ${
                  (location === "/" && link.href.startsWith("/#")) || 
                  (location === link.href)
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                } transition-colors`}
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-base font-medium py-2 text-gray-700 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </a>
                  ))}
                  <Button className="mt-2" asChild>
                    <a href="/#demo" onClick={() => setIsOpen(false)}>
                      Schedule a Demo
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
              <a href="/#demo">
                Schedule a Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

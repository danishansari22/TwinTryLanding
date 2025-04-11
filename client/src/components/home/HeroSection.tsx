import { Button } from "@/components/ui/button";
import { CalendarIcon, Wand2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-dark mb-6">
              See It Before You Buy – <span className="text-primary">Revolutionize</span> Your Shopping Experience
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              India's first AI-powered 2D virtual try-on technology that transforms online and in-store fashion retail. Experience photorealistic try-ons that enhance confidence and drive conversion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="flex items-center gap-2">
                <a href="#demo">
                  <Wand2 className="h-5 w-5" />
                  Try TwinTry Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="flex items-center gap-2">
                <a href="#demo">
                  <CalendarIcon className="h-5 w-5" />
                  Schedule a Demo
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-violet-500/10 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 w-full">
                <img 
                  src="https://images.unsplash.com/photo-1611083654127-29a64fa2a5ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Virtual try-on demonstration showing a woman trying clothes virtually" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live Demo</span>
                    </div>
                    <p className="text-sm font-medium">Experience real-time virtual try-on with photorealistic results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

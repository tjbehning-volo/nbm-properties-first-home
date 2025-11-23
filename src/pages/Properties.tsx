import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroHome from "@/assets/hero-home.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

const Properties = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Properties</h1>
          <p className="text-xl text-muted-foreground">
            Discover our thoughtfully designed homes built for comfort, accessibility, and modern living.
          </p>
        </div>

        {/* Featured Property */}
        <Card className="mb-12 overflow-hidden border-2">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img 
                src={heroHome} 
                alt="Ranch Home Exterior" 
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                Now Available
              </Badge>
            </div>
            
            <div className="p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl mb-2">Modern Ranch Home</CardTitle>
                <CardDescription className="text-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  801 Locust St, Tipton, IA 52772
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Square className="w-5 h-5 text-primary" />
                    <span className="font-semibold">1,487 sq ft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-primary" />
                    <span className="font-semibold">3 Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-primary" />
                    <span className="font-semibold">2 Bathrooms</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  A beautifully designed single-story ranch perfect for seniors seeking accessible 
                  living or families starting their homeownership journey. This spec home features 
                  an open floor plan, modern finishes, and thoughtful details throughout.
                </p>

                <div className="space-y-2 mb-6">
                  <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                  {[
                    "Single-level living with no stairs",
                    "Open concept kitchen and living area",
                    "Master suite with walk-in closet",
                    "Energy-efficient construction",
                    "Attached two-car garage",
                    "Low-maintenance exterior",
                    "Accessible design features",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="w-full md:w-auto">
                  <Link to="/contact">Schedule a Tour</Link>
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>

        {/* Interior Preview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Interior Spaces</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={interior1} 
                alt="Living Area" 
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Open Living Space</h3>
                  <p className="text-sm text-muted-foreground">Bright and welcoming main living area</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={interior2} 
                alt="Kitchen" 
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Modern Kitchen</h3>
                  <p className="text-sm text-muted-foreground">Functional design with quality finishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Home */}
        <Card className="bg-muted border-0">
          <CardHeader>
            <CardTitle className="text-2xl">Perfect For</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-primary">Seniors</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Single-level design eliminates stair climbing</li>
                  <li>• Wide doorways and hallways for easy mobility</li>
                  <li>• Low-maintenance living</li>
                  <li>• Safe, accessible bathroom features</li>
                  <li>• Easy-to-navigate floor plan</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-primary">Starter Families</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Affordable entry into homeownership</li>
                  <li>• Room to grow with three bedrooms</li>
                  <li>• Modern, move-in ready condition</li>
                  <li>• Energy-efficient features lower costs</li>
                  <li>• Safe neighborhood location</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in This Property?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Contact us today to schedule a tour or learn more about our building process.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Properties;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home as HomeIcon, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroHome from "@/assets/hero-home.jpg";
import iowaLandscape from "@/assets/iowa-landscape.jpg";
import construction from "@/assets/construction.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroHome})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Building Dreams in Eastern Iowa
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Quality, affordable homes designed for families and seniors who value practicality and thoughtful design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/properties">
                  View Properties <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At NBM Properties, we believe everyone deserves a well-built, affordable home. 
              We specialize in creating practical, thoughtfully designed ranch-style homes that 
              serve the needs of seniors seeking comfortable living and families looking for their 
              first home. Every detail is considered, every space is purposeful.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose NBM Properties</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <HomeIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Construction</h3>
                <p className="text-muted-foreground">
                  Partnered with Nissen Builders, bringing decades of experience and craftsmanship to every home we build.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Built for You</h3>
                <p className="text-muted-foreground">
                  Thoughtful floor plans designed specifically for seniors and starter families, emphasizing accessibility and functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Affordable Excellence</h3>
                <p className="text-muted-foreground">
                  We prove that quality doesn't have to be expensive. Smart design and efficient building practices keep costs accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Property Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Current Project</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're currently developing a beautiful 1,487 square foot ranch home—perfect for 
                seniors seeking single-level comfort or families starting their homeownership journey.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Single-story ranch design for easy living</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>1,487 sq ft of well-planned space</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Located in beautiful Eastern Iowa</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link to="/properties">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroHome} 
                alt="Featured Property" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nissen Builders Partnership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={construction} 
                alt="Nissen Builders Construction" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnered with Nissen Builders</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our partnership with Nissen Builders brings unparalleled expertise to every project. 
                With Michael Nissen's extensive experience in home construction through his framing 
                company, we ensure every NBM property is built to the highest standards.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                This collaboration combines our vision for affordable, thoughtful housing with proven 
                construction excellence, creating homes that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eastern Iowa Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proud to Serve Eastern Iowa</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Eastern Iowa is home—a place of strong communities, beautiful landscapes, and hardworking 
              families. We're committed to building homes that reflect the values and character of this region.
            </p>
            <img 
              src={iowaLandscape} 
              alt="Eastern Iowa Landscape" 
              className="rounded-lg shadow-2xl mx-auto w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Home?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with us to learn more about our current and upcoming properties.
            </p>
            <Button asChild variant="secondary" size="lg" className="text-lg">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

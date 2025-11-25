import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Ready to learn more about our properties? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-0">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSch8HQ9msATSmI85dqurz1Vi1a3Wu49mLLoaB8gFf0FxWNyXg/viewform?embedded=true" 
                width="100%" 
                height="980" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="w-full"
              >
                Loading…
              </iframe>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Serving Eastern Iowa communities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@nbmproperties.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      (563) 886-4866
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Schedule a Tour</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Interested in seeing our current property in person? We'd be happy to show you around.
                </p>
                <p className="text-sm opacity-90">
                  Call or email us to schedule a convenient time to visit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted border-0">
              <CardHeader>
                <CardTitle>About Our Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  NBM Properties partners with Nissen Builders to ensure every home meets the highest 
                  standards of quality construction and craftsmanship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

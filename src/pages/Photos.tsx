import { Card } from "@/components/ui/card";
import ranchExterior from "@/assets/ranch-exterior.jpg";
import livingRoomFireplace from "@/assets/living-room-fireplace.jpg";
import kitchen from "@/assets/interior-2.jpg";
import kitchenCorner from "@/assets/locust-kitchen-corner.jpg";
import masterBedroom from "@/assets/interior-3.jpg";
import bathroom from "@/assets/locust-bathroom.jpg";
import laundry from "@/assets/locust-laundry.jpg";
import garage from "@/assets/locust-garage.jpg";
import construction from "@/assets/construction.jpg";
import iowaLandscape from "@/assets/iowa-landscape.jpg";
import SEO from "@/components/SEO";

const Photos = () => {
  const photoGallery = [
    { src: ranchExterior, title: "801 Locust St Exterior", category: "Exterior" },
    { src: livingRoomFireplace, title: "Living Room with Gas Fireplace", category: "Interior" },
    { src: kitchen, title: "Kitchen", category: "Interior" },
    { src: kitchenCorner, title: "Kitchen Detail", category: "Interior" },
    { src: masterBedroom, title: "Master Bedroom", category: "Interior" },
    { src: bathroom, title: "Main Bathroom", category: "Interior" },
    { src: laundry, title: "Laundry Room", category: "Interior" },
    { src: garage, title: "Two-Car Garage", category: "Interior" },
    { src: construction, title: "Quality Construction", category: "Construction" },
    { src: iowaLandscape, title: "Eastern Iowa", category: "Location" },
  ];

  return (
    <div className="min-h-screen py-20">
      <SEO
        title="Photo Gallery | NBM Properties"
        description="Browse photos of our ranch home properties, construction process, and Eastern Iowa communities."
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl text-muted-foreground">
            Take a look at our properties, construction process, and the beautiful Eastern Iowa communities we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoGallery.map((photo, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <span className="text-xs text-primary font-semibold">{photo.category}</span>
                    <h3 className="text-lg font-semibold">{photo.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-8 bg-muted border-0">
            <p className="text-lg mb-4">
              More photos from Nissen Builders' portfolio coming soon!
            </p>
            <p className="text-muted-foreground">
              We're currently updating our gallery with photos from Michael Nissen's extensive construction history.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Photos;

import { useCallback, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, X } from "lucide-react";
import ranchExterior from "@/assets/ranch-exterior.jpg";
import frontAngle from "@/assets/locust-front-angle.jpg";
import rear from "@/assets/locust-rear.jpg";
import livingRoomFireplace from "@/assets/living-room-fireplace.jpg";
import kitchen from "@/assets/interior-2.jpg";
import kitchenCorner from "@/assets/locust-kitchen-corner.jpg";
import masterBedroom from "@/assets/interior-3.jpg";
import bathroom from "@/assets/locust-bathroom.jpg";
import masterBathVanity from "@/assets/locust-master-bath-vanity.jpg";
import masterBathShower from "@/assets/locust-master-bath-shower.jpg";
import laundry from "@/assets/locust-laundry.jpg";
import garage from "@/assets/locust-garage.jpg";
import construction from "@/assets/construction.jpg";
import iowaLandscape from "@/assets/iowa-landscape.jpg";
import SEO from "@/components/SEO";

const Photos = () => {
  const photoGallery = [
    { src: ranchExterior, title: "801 Locust St Exterior", category: "Exterior" },
    { src: frontAngle, title: "Front Entry Angle", category: "Exterior" },
    { src: rear, title: "Rear of Home", category: "Exterior" },
    { src: livingRoomFireplace, title: "Living Room with Gas Fireplace", category: "Interior" },
    { src: kitchen, title: "Kitchen", category: "Interior" },
    { src: kitchenCorner, title: "Kitchen Detail", category: "Interior" },
    { src: masterBedroom, title: "Master Bedroom", category: "Interior" },
    { src: bathroom, title: "Main Bathroom", category: "Interior" },
    { src: masterBathVanity, title: "Master Bathroom Vanity", category: "Interior" },
    { src: masterBathShower, title: "Master Bath Shower & Closet", category: "Interior" },
    { src: laundry, title: "Laundry Room", category: "Interior" },
    { src: garage, title: "Two-Car Garage", category: "Interior" },
    { src: construction, title: "Quality Construction", category: "Construction" },
    { src: iowaLandscape, title: "Eastern Iowa", category: "Location" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + photoGallery.length) % photoGallery.length));
  }, [photoGallery.length]);

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % photoGallery.length));
  }, [photoGallery.length]);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, showPrev, showNext, close]);

  const active = isOpen ? photoGallery[activeIndex!] : null;

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
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow border-0"
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  loading="lazy"
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

      {isOpen && active && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            aria-label="Close viewer"
            className="absolute top-4 right-4 p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors"
            onClick={close}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            aria-label="Previous photo"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-muted/80 hover:bg-muted transition-colors"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          <button
            aria-label="Next photo"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-muted/80 hover:bg-muted transition-colors"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 rotate-180" />
          </button>

          <figure className="max-w-5xl w-full mx-12 md:mx-24" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.title}
              className="w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
            />
            <figcaption className="mt-4 text-center">
              <span className="text-xs text-primary font-semibold uppercase tracking-wider">{active.category}</span>
              <h3 className="text-lg font-semibold">{active.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {activeIndex! + 1} of {photoGallery.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default Photos;

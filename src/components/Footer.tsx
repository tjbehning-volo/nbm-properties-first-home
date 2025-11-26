import { Mail, Phone, MapPin } from "lucide-react";
import logoFullWhite from "@/assets/logo-full-white.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logoFullWhite} alt="NBM Properties" className="h-12 md:h-16 w-auto mb-4" />
            <p className="text-sm opacity-90">
              Building quality, affordable homes for families and seniors in Eastern Iowa.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Eastern Iowa</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@nbmhomes.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(563) 886-4866</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Partnership</h3>
            <p className="text-sm opacity-90 mb-2">
              Proudly partnered with Nissen Builders, bringing decades of construction excellence to every project.
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} NBM Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

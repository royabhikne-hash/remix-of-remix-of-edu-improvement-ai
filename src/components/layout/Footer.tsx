import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-foreground font-heading text-lg font-bold">E</span>
              </div>
              <span className="font-heading text-xl">Edu Improvement AI</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              Improving how students study — with trust, clarity, and accountability. 
              Designed for Indian education, built for better outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">For</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#who-we-serve" className="hover:text-primary-foreground transition-colors">
                  Students
                </a>
              </li>
              <li>
                <a href="#who-we-serve" className="hover:text-primary-foreground transition-colors">
                  Schools
                </a>
              </li>
              <li>
                <a href="#who-we-serve" className="hover:text-primary-foreground transition-colors">
                  Parents
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@eduimprovement.ai" className="hover:text-primary-foreground transition-colors">
                  hello@eduimprovement.ai
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Edu Improvement AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

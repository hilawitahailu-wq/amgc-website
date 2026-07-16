import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container-x py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
              <span className="font-display text-navy-deep text-lg font-semibold">A</span>
            </div>
            <div>
              <div className="text-white font-display text-xl">AMGC</div>
              <div className="text-white/50 text-[10px] uppercase tracking-[0.2em]">Group of Companies</div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed">
            Abdoulwahab Mahamoud Group of Companies — a diversified African business group connecting local capability with global markets.
          </p>
          <p className="mt-3 text-sm text-gold">Resources are limited, creativity is not.</p>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-gold">About AMGC</Link></li>
            <li><Link to="/businesses" className="hover:text-gold">Businesses</Link></li>
            <li><Link to="/partners" className="hover:text-gold">Partners</Link></li>
            <li><Link to="/presence" className="hover:text-gold">Presence</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-5">Corporate Office</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /> AIMEX — Rediat Building, 7th Floor, Office 7-7, Kazanchis, Addis Ababa, Ethiopia</li>
            <li className="mt-1 text-sm"><a href="https://maps.google.com/?q=Rediat+Building+Kazanchis+Addis+Ababa+Ethiopia" target="_blank" rel="noreferrer" className="text-gold underline-offset-4 hover:underline">Open in Google Maps</a></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /> +251 915 000 070</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" /> abdoulwahabimportexport@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Abdoulwahab Mahamoud Group of Companies. All rights reserved.</div>
          <div>Ethiopia · Djibouti · UAE · Türkiye · China · Saudi Arabia</div>
        </div>
      </div>
    </footer>
  );
}

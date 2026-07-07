import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/presence")({
  head: () => ({
    meta: [
      { title: "Our Presence — AMGC Global Offices" },
      { 
        name: "description", 
        content: "AMGC offices across Ethiopia and Djibouti, with our upcoming global hub expanding into the UAE." 
      },
    ],
  }),
  component: PresencePage,
});

type Office = {
  city: string;
  country: string;
  label: string;
  address: string;
  phone: string;
  email: string;
};

const currentOffices: Office[] = [
  {
    city: "Addis Ababa",
    country: "Ethiopia",
    label: "Corporate Head Office",
    address: "Bole Sub-city, Africa Avenue, Addis Ababa, Ethiopia",
    phone: "+251 11 000 0000",
    email: "info@amgc.co",
  },
  {
    city: "Addis Ababa",
    country: "Ethiopia",
    label: "AIMEX Import & Export Office",
    address: "Kirkos Sub-city, Addis Ababa, Ethiopia",
    phone: "+251 11 000 0001",
    email: "aimex@amgc.co",
  },
  {
    city: "Dire Dawa",
    country: "Ethiopia",
    label: "Regional Trade Office",
    address: "Kezira, Dire Dawa, Ethiopia",
    phone: "+251 25 000 0000",
    email: "diredawa@amgc.co",
  },
  {
    city: "Djibouti City",
    country: "Djibouti",
    label: "Port & Logistics Operations",
    address: "Port de Djibouti Zone, Djibouti City, Djibouti",
    phone: "+253 21 000 000",
    email: "djibouti@amgc.co",
  },
];

const futureOffices: Office[] = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    label: "Future Global Headquarters",
    address: "Business Bay, Dubai, UAE",
    phone: "Opening 2026",
    email: "dubai@amgc.co",
  },
  {
    city: "Jigjiga",
    country: "Ethiopia",
    label: "Regional Hub",
    address: "Jigjiga, Somali Region, Ethiopia",
    phone: "Coming Soon",
    email: "jigjiga@amgc.co",
  },
];

export default function PresencePage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-navy-deep text-white">
        <div className="container-x max-w-4xl">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-8">— Our Presence</div>
          <h1 className="font-display font-light text-5xl md:text-7xl text-balance">
            A growing footprint across East Africa & the Gulf.
          </h1>
          <p className="mt-8 text-white/70 text-lg max-w-2xl leading-relaxed">
            From our headquarters in Addis Ababa to strategic hubs on the Red Sea and our upcoming global hub 
            in the UAE — meet the AMGC network.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">— Current Offices</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy-deep mb-16 font-light">Where you can find us today</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {currentOffices.map((o, i) => (
              <OfficeCard key={i} office={o} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-deep text-white">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">— Future Offices</div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-16 font-light">Coming soon</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureOffices.map((o, i) => (
              <div key={i} className="relative border border-white/10 p-8 hover:border-gold transition-all">
                <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-gold">
                  <Clock className="w-3 h-3" /> Coming Soon
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{o.country}</div>
                <div className="font-display text-3xl text-white mb-1">{o.city}</div>
                <div className="text-sm text-white/60 mb-6">{o.label}</div>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />{o.address}</li>
                  <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />{o.phone}</li>
                  <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />{o.email}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="group bg-white border border-border p-10 hover:shadow-elegant hover:border-gold transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
      <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{office.country}</div>
      <div className="font-display text-3xl text-navy-deep mb-1">{office.city}</div>
      <div className="text-sm text-muted-foreground mb-6">{office.label}</div>
      <ul className="space-y-3 text-sm text-navy-deep/80">
        <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />{office.address}</li>
        <li className="flex gap-3">
          <Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />
          <a href={`tel:${office.phone.replace(/\s/g,"")}`} className="hover:text-gold">{office.phone}</a>
        </li>
        <li className="flex gap-3">
          <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
          <a href={`mailto:${office.email}`} className="hover:text-gold">{office.email}</a>
        </li>
      </ul>
    </div>
  );
}
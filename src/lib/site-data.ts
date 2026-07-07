import aimex from "@/assets/div-aimex.jpg";
import trading from "@/assets/div-trading.jpg";
import logistics from "@/assets/div-logistics.jpg";
import manufacturing from "@/assets/div-manufacturing.jpg";
import agriculture from "@/assets/div-agriculture.jpg";
import mining from "@/assets/div-mining.jpg";
import construction from "@/assets/div-construction.jpg";

export const activeDivisions = [
  {
    name: "AIMEX",
    tagline: "Import & Export Excellence",
    description:
      "Our flagship import-export arm delivering premium industrial and consumer goods across East Africa with world-class supply-chain discipline.",
    image: aimex,
  },
  {
    name: "AMGC Trading",
    tagline: "Global Commodities Trading",
    description:
      "Strategic commodity trading connecting African markets with suppliers in the Gulf, Türkiye, China, and beyond.",
    image: trading,
  },
];

export const strategicDivisions = [
  { name: "Transportation & Logistics", description: "End-to-end regional freight, warehousing, and distribution.", image: logistics },
  { name: "Manufacturing", description: "Industrial production of polymers, packaging, and consumer goods.", image: manufacturing },
  { name: "Agriculture", description: "Modern agribusiness — oilseeds, grains, and value-added processing.", image: agriculture },
  { name: "Mining", description: "Responsible extraction of critical minerals for global markets.", image: mining },
  { name: "Construction", description: "Infrastructure and commercial real estate development.", image: construction },
];

export const partners = [
  { name: "Tajchem", focus: "Industrial polymer solutions", country: "Global", url: "https://tajchem.com/" },
  { name: "Golden Africa Djibouti", focus: "Edible oils and food products", country: "Djibouti", url: "https://www.goldenafricadjibouti.com/" },
  { name: "Kadoğlu", focus: "Premium sunflower oil products", country: "Türkiye", url: "https://kadoogluyag.com.tr/en/" },
];

export const markets = [
  { country: "Ethiopia", status: "Headquarters" },
  { country: "Djibouti", status: "Active Operations" },
  { country: "United Arab Emirates", status: "Future HQ" },
  { country: "Türkiye", status: "Sourcing Hub" },
  { country: "China", status: "Sourcing Hub" },
  { country: "Saudi Arabia", status: "Emerging Market" },
];

export const offices = {
  current: [
    { city: "Addis Ababa", label: "Corporate Office", country: "Ethiopia" },
    { city: "Addis Ababa", label: "AIMEX Office", country: "Ethiopia" },
    { city: "Dire Dawa", label: "Regional Office", country: "Ethiopia" },
    { city: "Djibouti", label: "Port Operations", country: "Djibouti" },
  ],
  future: [
    { city: "Dubai", label: "Global Headquarters", country: "UAE" },
    { city: "Jigjiga", label: "Regional Hub", country: "Ethiopia" },
  ],
};

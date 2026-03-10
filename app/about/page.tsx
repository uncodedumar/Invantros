import type { Metadata } from "next";

import Gallery from "../components/Gallery";
import AboutHero from "../components/AboutHero";
import HighText from "../components/HighText";
import Timeline from "../components/Timeline";
import Team from "../components/Team";


export const metadata: Metadata = {
  title: "About Invantros | The Intersection of Academic Brilliance & Industrial Excellence",
  description:
    " Invantros is the definitive tech ecosystem for Pakistan’s next-gen leaders. By uniting the research power of top-tier universities—including NUST, FAST-NUCES, and LUMS—with seasoned industry experts, we turn sophisticated technology into market-dominant solutions. Our mission is to bridge the gap between academic theory and industrial impact, fostering an elite community where innovation meets ROI and raw talent becomes a global powerhouse.",
    keywords: [
      // Mission & Vision
      "About Invantros",
      "Tech Ecosystem Mission",
      "Academic-Industry Bridge",
      "Industrial Excellence Framework",
      "Technical Mentorship Philosophy",
      "Digital Transformation Leadership",
      "Pakistan Tech Revolution",
      "Venture Building Strategy",
      "Sustainable Innovation",
  
      // Institutional Authority (Top 20 Universities 2026 Rankings)
      "NUST (National University of Sciences and Technology)",
      "FAST-NUCES (National University of Computer and Emerging Sciences)",
      "LUMS (Lahore University of Management Sciences)",
      "GIKI (Ghulam Ishaq Khan Institute)",
      "UET Lahore (University of Engineering and Technology)",
      "COMSATS University Islamabad",
      "PIEAS (Pakistan Institute of Engineering and Applied Sciences)",
      "NED University of Engineering & Technology",
      "Air University",
      "Information Technology University (ITU)",
      "Habib University",
      "IBA Karachi",
      "Bahria University",
      "Punjab University (PU)",
      "University of Peshawar",
      "Quaid-i-Azam University (QAU)",
      "GCU Lahore",
      "UET Taxila",
      "LGU (Lahore Garrison University)",
      "Aga Khan University (AKU)",
  
      // Core Pillars & Verticals
      "Generative AI Research Hub",
      "Machine Learning Pipelines",
      "Enterprise Software Architecture",
      "UI/UX Design Systems",
      "Performance Marketing for Founders",
      "Growth Analytics Expertise",
      "BPO & Operational Heavy Lifting",
      "Startup Incubation Network",
  
      // Competitive Advantage
      "High-Performance Tech Talent",
      "Elite Engineering Standards",
      "Sophisticated Technology Integration",
      "Market Dominance Strategy",
      "Global Tech Outreach",
      "Pakistan’s Digital Future",
      "Founder-Led Ecosystem"
  ],
  openGraph: {
    title: "The Story of Invantros | Bridging Academic Brilliance & Industrial Excellence",
    description: "Invantros is Pakistan’s premier tech ecosystem, engineered to bridge the gap between academic brilliance and industrial excellence. In partnership with the country's top-tier universities, we turn sophisticated technology into market-dominant solutions. Our mission is to foster an elite community where researchers from NUST, FAST-NUCES, and LUMS collaborate with industry visionaries to redefine the global digital landscape.",
    url: "https://invantros.com/about",
    images: [
      {
        url: "/logo.svg", // Recommended: A photo of the leadership or team office
        width: 1200,
        height: 630,
        alt: "About Invantros",
      },
    ],
    type: "profile", // "profile" is great for About pages that highlight founders/teams
  },
};

export default function Portfolio() {
  return (
    <>
      <AboutHero/>
    <HighText/>
    <Timeline/>
    <Team/>

    <Gallery/>

   
    </>
  );
}

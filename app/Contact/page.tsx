import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactHero = dynamic(() => import("../components/ContactHero"));
const Socials = dynamic(() => import("../components/Socials"));
export const metadata: Metadata = {
  title: "Contact Invantros | Join the Hub of Pakistan’s Tech Revolution",
  description:
    "Connect with Invantros to bridge the gap between academic brilliance and industrial excellence. Whether you are a student from NUST, FAST, or LUMS looking to innovate, or an entrepreneur seeking elite tech talent, our team is ready to facilitate your growth. Reach out to the heartbeat of Pakistan’s startup ecosystem today and turn sophisticated technology into sustainable business dominance.",
  keywords: [
    // Core Identity & Leadership
    "Invantros",
    "Tech Ecosystem",
    "Startup Hub",
    "Innovation heartbeat",
    "Pakistan Tech Revolution",
    "Academic-Industry Bridge",
    "Multidisciplinary Powerhouse",
    "Entrepreneurial Network",
    "Venture Building",
    "Strategic Technology Hub",
    "Digital Transformation",
    "Next-Gen Innovation",

    // Premier University Network (Top SEO Traffic Drivers)
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
    "IBA Karachi (Institute of Business Administration)",
    "Bahria University",
    "Punjab University (PU)",
    "University of Peshawar",
    "GCU Lahore (Government College University)",
    "SZABIST",
    "UMT Lahore",
    "LGU (Lahore Garrison University)",
    "UET Taxila",

    // Specialized Verticals & Communities
    "AI & Machine Learning Research",
    "Full-Stack Web Development Circles",
    "UI/UX Design Collective",
    "SaaS Founder Network",
    "Data Science Fellowship",
    "Blockchain & Web3 Community",
    "Cybersecurity Research Hub",

    // Strategic Growth & Operational Excellence
    "Performance Marketing for Startups",
    "Growth Analytics and ROI",
    "Tech Mentorship Programs",
    "Startup Incubation Support",
    "Tech Talent Pipeline",
    "Global Entrepreneurial Outreach",
    "Industrial Excellence Framework",
    "Pakistan Startup Ecosystem"
  ],
  openGraph: {
    title: "Get in Touch with Invantros",
    description: "Partner with a global leader in AI and digital transformation. Reach out today for a consultation and maximize your profitability.",
    url: "https://invantros.com/Contact",
    images: [
      {
        url: "/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Contact Invantros",
      },
    ],
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
      <ContactHero/>
      <Socials/>      
    </>
  );
}

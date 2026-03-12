import type { Metadata } from "next";
import dynamic from "next/dynamic";

const EventsnUpdates = dynamic(() => import("../components/Events-n-Updates"));
export const metadata: Metadata = {
  title: "Invantros Events | Join the Premier Tech Summits & Hackathons in Pakistan",
  description:
    "Experience the epicenter of innovation at Invantros. From high-stakes hackathons and AI workshops to exclusive networking summits with founders from NUST, FAST, and LUMS, our events bridge the gap between academic brilliance and industrial excellence. Stay updated on Pakistan’s most influential tech gatherings where developers, designers, and entrepreneurs unite to redefine the digital landscape.",
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
    title: "Invantros Events | Pakistan’s Premier Tech Hackathons, AI Bootcamps & Startup Summits",
    description: "Join the heartbeat of innovation at Invantros. Experience high-impact tech events in collaboration with NUST, FAST-NUCES, LUMS, and GIKI. From the Advanced AI Bootcamp and HackNUST to international conferences on Digital Futures, we bridge the gap between academic brilliance and industrial excellence. Redefine your digital edge through exclusive networking with seasoned entrepreneurs and the brightest developers in Pakistan.",
    url: "https://invantros.com/Events",
    images: [
      {
        url: "/Logo.svg", // Use an image showing a grid of your best work
        width: 1200,
        height: 630,
        alt: "Invantros Events",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | Invantros Success Stories",
    description: "Pakistan’s Premier Tech Hackathons, AI Bootcamps & Startup Summits",
  },
};

export default function Portfolio() {
  return (
    <>
      <EventsnUpdates/>
    </>
  );
}

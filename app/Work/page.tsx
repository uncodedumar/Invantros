import type { Metadata } from 'next';
import Work from "../components/Work";
import ProjectsHero from "../components/ProjectsHero";


export const metadata: Metadata = {
  title: 'Invantros Work | Bridging Academic Research & Industrial Excellence',
  description: 
    'Explore the definitive portfolio of Pakistan’s tech revolution. From AI-driven research at NUST and FAST-NUCES to scalable startup MVPs and industrial engineering solutions at LUMS and GIKI, Invantros bridges the gap between academic brilliance and market dominance. Discover how we turn sophisticated technology into high-performance digital products and sustainable business growth.',
    keywords: [
      // Core Portfolio Identity
      "Invantros Projects",
      "Technical Portfolio",
      "Academic-Industry Collaboration Projects",
      "Industrial Excellence Case Studies",
      "High-Performance Engineering Showcases",
      "Venture Building Portfolio",
      "Startup Case Studies Pakistan",
      "Research-to-Market Transformation",
      "Digital Product Engineering",
      "Scalable SaaS Solutions",
  
      // 2026 Strategic Project Themes (Based on Current Trends)
      "Autonomous Vehicle AI Research (NED University)",
      "Indus AI Week 2026 Innovations",
      "Machine Learning for Materials Engineering (GIKI)",
      "Fintech for Financial Inclusion (LUMS/FAST)",
      "AI-Driven Climate Resilience Systems",
      "Public Health Surveillance AI",
      "Smart City Infrastructure Research",
      "Cybersecurity & National Center Excellence",
      "Blockchain for Supply Chain Transparency",
      "Generative AI Chatbot Architectures",
  
      // Premier University Project Hubs
      "NUST Research Directorate Projects",
      "FAST-NUCES Software Engineering Showcases",
      "LUMS SBASSE Research Highlights",
      "GIKI MTME-2026 Project Expo",
      "UET Lahore Industrial Open House Projects",
      "COMSATS Frontiers of IT (FIT) Showcases",
      "ITU Lahore AI & Robotics Projects",
      "PIEAS Nuclear and AI Engineering Research",
      "NED University Automotive AI Prototypes",
  
      // Growth & Operational Execution
      "Pakistan Startup Fund (PSF) Success Stories",
      "MVP Development for Tech Founders",
      "Cross-Platform Mobile App Case Studies",
      "AWS Cloud Infrastructure Migration Projects",
      "UI/UX Design Systems for Enterprises",
      "Performance Marketing ROI Case Studies",
      "BPO Outsourcing Success Metrics",
      "Growth Analytics Implementation"
  ],
  openGraph: {
    title: 'Invantros Work | Showcasing Academic Brilliance & Industrial Excellence',
    description: 'Explore the definitive portfolio of Pakistan’s tech revolution. From AI-driven research at NUST and FAST-NUCES to scalable startup MVPs and industrial engineering solutions at LUMS and GIKI, Invantros bridges the gap between academic brilliance and market dominance. Discover how we turn sophisticated technology into high-performance digital products and sustainable business growth.',
    url: 'https://antrosys.com/Work',
    images: [
      {
        url: '/Logo.svg', // Recommended: Use a high-quality graphic of your tech stack
        width: 1200,
        height: 630,
        alt: 'Invantros Projects | Showcasing Academic Brilliance & Industrial Excellence',
      },
    ],
    type: 'website',
  },
};

export default function Service() {
  return (
    <>
        <ProjectsHero/>

        <Work/>

    
    </>
  );
}



















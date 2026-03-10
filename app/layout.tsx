import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LoadingBar from "./components/Loading";
import Navigation from "./components/Navbar";
import Footer from './components/Footer';
import Grow from "./components/Grow";
import Boxes from "./components/Boxes";
 import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});



// ✅ This works because layout.tsx is a Server Component
export const metadata: Metadata = {
  metadataBase: new URL('https://www.invantros.com'),
  title: {
    default: "Invantros | Pakistan’s Elite Tech Ecosystem & Startup Hub",
    template: "%s | Invantros"
  },
  description: "Join Invantros, a thriving community for tech enthusiasts and innovators. Connect with global experts in AI, design, and digital transformation to turn inspiration into reality.Join Invantros, the heartbeat of Pakistan’s tech revolution. A multidisciplinary powerhouse bridging the gap between academic brilliance and industrial excellence. In collaboration with 20+ premier universities like NUST, FAST, and LUMS, we unite developers, designers, and entrepreneurs to build the future of innovation.  ",
  keywords: [
    // Core Identity & Leadership
    "Invantros",
    "Tech Ecosystem",
    "Innovation Hub",
    "Pakistan Tech Revolution",
    "Tech Community",
    "Startup Accelerator",
    "Entrepreneurial Network",
    "Multidisciplinary Powerhouse",
    "Academic-Industry Bridge",
    "Research & Development",
    "Tech Mentorship",
    "Innovation Strategy",
    "Pakistan Startup Scene",
    "Digital Transformation",
    "Global Tech Connection",

    // Collaborative Academic Partners (Premier Universities)
    "NUST (National University of Sciences and Technology)",
    "FAST-NUCES (National University of Computer and Emerging Sciences)",
    "LUMS (Lahore University of Management Sciences)",
    "GIKI (Ghulam Ishaq Khan Institute)",
    "UET (University of Engineering and Technology)",
    "PIEAS (Pakistan Institute of Engineering and Applied Sciences)",
    "COMSATS University Islamabad",
    "NED University of Engineering & Technology",
    "Air University",
    "Bahria University",
    "Habib University",
    "Information Technology University (ITU)",
    "Peshawar University",
    "Punjab University (PU)",
    "Institute of Business Administration (IBA)",
    "University of Karachi",

    // Community & Professional Segments
    "Developer Community Pakistan",
    "UI/UX Design Collective",
    "Research Fellowship",
    "Student Entrepreneurs",
    "Creative Visionaries",
    "Tech Talent Pipeline",
    "Founder Network",
    "Engineering Brilliance",
    "Industry Professionals",

    // Strategic Pillars & Initiatives
    "University Collaboration Programs",
    "Startup Incubation Support",
    "Interdisciplinary Research Projects",
    "Industrial Excellence Framework",
    "Next-Gen Tech Leadership",
    "Skill Development & Workshops",
    "Venture Building",
    "Cross-Institutional Innovation",
    "Pakistan Tech Events",
    "Global Entrepreneurship Outreach"
],
  authors: [{ name: "Invantros" }],
  creator: "Antrosys",
  publisher: "Antrosys",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Antrosys",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.invantros.com",
    siteName: "Antrosys",
    title: "Invantros | Pakistan’s Premier Ecosystem for Startups, Developers & Tech Innovation",
    description: "Bridge the gap between academic brilliance and industrial excellence with Invantros. In collaboration with 20+ top-tier universities including NUST, FAST-NUCES, LUMS, and GIKI, we provide the ultimate ecosystem for startups, developers, and researchers. As the heartbeat of Pakistan’s tech revolution, Invantros unites student innovators with seasoned entrepreneurs to build scalable AI models, cutting-edge software, and next-gen digital solutions that dominate the global landscape.",
    images: [
      {
        url: "/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Invantros | Ecosystem of Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invantros | Pakistan’s Premier Hub for Generative AI, Research & Startup Innovation",
    description: "Invantros is the premier destination for bridging academic brilliance with industrial AI and machine learning solutions. In collaboration with 20+ top-tier universities, we specialize in fostering an ecosystem where developers and researchers build the next generation of intelligent chatbots and custom AI models. By uniting the minds of NUST, FAST-NUCES, and LUMS with seasoned entrepreneurs, Invantros transforms the Pakistani tech landscape into a global powerhouse for Generative AI and scalable digital transformation.",
    images: ["/Logo.svg"],
    creator: "@antrosys",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {

  },
  alternates: {
    canonical: "https://www.invantros.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "invantros",
    "url": "https://www.invantros.com",
    "logo": "https://www.invantros.com/Logo.svg",
    "description": "Invantros goes beyond community to ensure Pakistan’s tech talent dominates the global market. We specialize in bridging the gap between academic brilliance and industrial excellence through strategic collaboration with 20+ premier universities. By uniting the minds of NUST, FAST-NUCES, and LUMS with seasoned entrepreneurs, we provide the ultimate platform for startup incubation, technical mentorship, and high-performance networking. Partner with Invantros to turn raw talent into sustainable innovation and technical heavy lifting into national progress.",
    "sameAs": [
      "https://www.linkedin.com/company/antrosys",
      "https://www.instagram.com/antrosys/",
      "https://github.com/uncodedumar",
      "https://x.com/antrosys"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "connect@invantros.com",
      "contactType": "Community"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": ["US", "EU", "AE", "CA", "AU", "TR", "PK"]
    }
  };

  // Critical CSS for hero section - inlined for LCP optimization
  // Minified and optimized for immediate render
  const criticalCSS = `:root{--primary:#000;--secondary:#EF571B;--accent:#FAF3E1;--background:#000;--foreground:#000}body{background:#000;font-family:var(--font-poppins,system-ui,arial),sans-serif;margin:0;padding:0}.bg-black{background-color:#000}.text-white{color:#fff}.text-secondary{color:#EF571B}.font-black{font-weight:900}.hero-h1{font-size:clamp(3rem,8vw,10rem);line-height:0.85;color:#fff;font-weight:900;letter-spacing:-0.05em;margin:0;padding:0;opacity:1!important;visibility:visible!important;transform:none!important}.hero-h1 .text-secondary{color:#EF571B}.hero-container{min-height:100vh;position:relative;background-color:#000}.hero-h1,.hero-container{contain:layout style paint}`;

  return (
    <html lang="en">
      <head>
        {/* Manifest - Icons are handled by Next.js metadata API */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Inline Critical CSS for immediate render - ensures H1 is visible without waiting for CSS */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <LoadingBar />

         <Navigation />
         {children}
         <Grow/>
         <Boxes/>
         <Footer />

        
        <Analytics />
        <GoogleAnalytics gaId="GTM-WXRRT5QJ" />
        <SpeedInsights /> 
      </body>
    </html>
  );
}

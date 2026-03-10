import Image from 'next/image';

const HeroSection = () => {
  return (
    <section 
      className="bg-white flex flex-col items-center justify-center py-12 px-4 min-h-screen"
      aria-label="Invantros Hero Section"
    >
      {/* Hidden SEO Metadata for Indexing */}
      <div className="sr-only">
        <h2>Invantros: Pakistan's Largest Tech and Entrepreneur Community</h2>
        <p>
          Powered by Antrosys, Invantros is a premier ecosystem for startups, developers, 
          designers, entrepreneurs, research teams, and creative students. In collaboration with 
          20+ prestigious universities including NUST, FAST NUCES, GIKI, LUMS, Air University, 
          NASTP, Bahria University, PUCIT, PIEAS, COMSATS, ITU, and BNU. 
          Focusing on digital transformation, AI art, custom SaaS software development, 
          and high-performance full-stack web and mobile application development.
        </p>
        {/* Long-tail SEO Keywords */}
        <ul>
            <li>startup incubator pakistan for student entrepreneurs</li>
            <li>best community for developers and designers in lahore islamabad karachi</li>
            <li>antrosys enterprise AI integration and digital transformation services</li>
            <li>collaborative research projects for pakistani university students</li>
            <li>pakistan tech community for creative people and freelancers</li>
            <li>connecting startups with investors and mentors at NUST FAST LUMS GIKI</li>
            <li>high performance full stack development for pakistani startups</li>
        </ul>
      </div>

      <div className="relative rounded-[30px] overflow-hidden w-[95%] w-full shadow-xl aspect-video md:aspect-[21/9]">
        {/* Optimized Background Image */}
        <Image
          src="/clouds.png" 
          alt="NOT HERE TO WIN AWARDS. HERE TO HELP YOU WIN. - Invantros x Antrosys"
          fill
          priority
          sizes="95vw"
          className="rounded-[30px] object-cover transition-transform duration-700 hover:scale-105"
        />

        {/* Text Overlay - Visuals preserved 100% */}
        <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12 text-center bg-black/10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none uppercase font-sans drop-shadow-2xl">
            <span className="block">NOT HERE TO WIN</span>
            <span className="block">AWARDS. HERE TO</span>
            <span className="block">HELP YOU <span className="text-[#28193d]">WIN.</span></span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
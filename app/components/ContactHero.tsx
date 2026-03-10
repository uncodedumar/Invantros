"use client";

import React, { useState, useRef, useEffect, useCallback, Suspense } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Paperclip, RotateCcw } from "lucide-react";

type Role = "Student" | "Researcher" | "Entrepreneur" | "Creative" | "Startup" | "Developer" | "Designer";

const ContactHero = () => {
  const [activeTab, setActiveTab] = useState<Role>("Creative");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    companyOrPortfolio: "",
    graduationOrLaunch: "",
    email: "",
    phone: "",
    message: "",
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Sync Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]); // Capped at 1 for cleaner UI
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 1, 1]);

  const roles: Role[] = ["Student", "Researcher", "Entrepreneur", "Creative", "Startup", "Developer", "Designer"];

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      field: keyof typeof formValues
    ) => {
      const value = e.target.value;
      setFormValues((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError(null);

    // Basic client-side validation to avoid unnecessary network round-trips
    if (!formValues.firstName || !formValues.lastName || !formValues.email) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          role: activeTab,
        }),
        cache: "no-store",
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send message.");
      }

      setIsSent(true);

      // Reset form values but preserve selected role to reduce layout shift
      setFormValues({
        firstName: "",
        lastName: "",
        companyOrPortfolio: "",
        graduationOrLaunch: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = () => {
    setIsSent(false);
    setError(null);
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-black text-white py-12 md:py-20 px-4 sm:px-6 overflow-hidden font-sans"
      aria-label="Contact Invantros Community"
    >
      {/* SEO Keyword Bank (Visually Hidden) */}
      <div className="sr-only">
        <h2>Pakistan's Largest Tech and Entrepreneur Community</h2>
        <p>Invantros by Antrosys: Connecting Air University, NASTP, FAST NUCES, NUST, Bahria University, LUMS, PUCIT, PIEAS, GIKI, COMSATS, ITU, and BNU.</p>
        <ul>
          <li>Startup incubation Pakistan 2026</li>
          <li>Top Pakistani developer community for AI and SaaS</li>
          <li>Designers and creative professionals networking Lahore Karachi Islamabad</li>
          <li>University research collaboration projects Pakistan</li>
          <li>Entrepreneurship ecosystem for Pakistani students</li>
          <li>Antrosys digital transformation and technology consulting</li>
          <li>Headless WordPress and Shopify development Pakistan</li>
          <li>AWS cloud infrastructure for startups</li>
        </ul>
      </div>

      {/* Grid Lines - Optimized with #28193d accent */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute left-[5%] md:left-[10%] top-0 bottom-0 w-[1px] bg-[#28193d]/30" />
        <div className="absolute right-[5%] md:right-[10%] top-0 bottom-0 w-[1px] bg-[#28193d]/30" />
        <div className="absolute top-[20%] md:top-[30%] left-0 right-0 h-[1px] bg-[#28193d]/30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated Heading - wrapped in Suspense to avoid blocking first paint */}
        <Suspense
          fallback={
            <div className="text-center mb-16 md:mb-24 pt-12 md:pt-20">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                WHERE IDEAS <br className="hidden sm:block" /> ARE BORN
              </h1>
              <p className="mt-6 text-gray-500 uppercase tracking-widest text-xs md:text-sm">
                Powered by <span className="text-[#28193d] font-bold">INVANTROS</span> Ecosystem
              </p>
            </div>
          }
        >
          <motion.div 
            style={{ scale, opacity }}
            className="text-center mb-16 md:mb-24 pt-12 md:pt-20 will-change-transform will-change-opacity"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              WHERE IDEAS <br className="hidden sm:block" /> ARE BORN
            </h1>
            <p className="mt-6 text-gray-500 uppercase tracking-widest text-xs md:text-sm">
              Powered by <span className="text-[#28193d] font-bold">INVANTROS</span> Ecosystem
            </p>
          </motion.div>
        </Suspense>

        {/* Dynamic Role Selector */}
        <div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16"
          role="tablist"
          aria-label="Select your role"
        >
          {roles.map((role) => (
            <button
              key={role}
              role="tab"
              aria-selected={activeTab === role}
              onClick={() => setActiveTab(role)}
              className={`px-4 md:px-6 py-2 border rounded-full transition-all duration-300 text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#28193d] ${
                activeTab === role 
                ? "bg-white text-black border-white" 
                : "bg-transparent text-white border-white/20 hover:border-white"
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Dynamic Form with Resend Logic */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                {error && (
                  <p className="text-red-400 text-xs md:text-sm" aria-live="polite">
                    {error}
                  </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="relative border-b border-white/30 focus-within:border-[#28193d] transition-colors group">
                    <label className="block text-[10px] uppercase text-gray-500 mb-1 group-focus-within:text-[#28193d]">First Name*</label>
                    <input
                      type="text"
                      className="bg-transparent w-full py-2 outline-none text-base md:text-lg"
                      required
                      aria-required="true"
                      autoComplete="given-name"
                      value={formValues.firstName}
                      onChange={(e) => handleChange(e, "firstName")}
                    />
                  </div>

                  <div className="relative border-b border-white/30 focus-within:border-[#28193d] transition-colors group">
                    <label className="block text-[10px] uppercase text-gray-500 mb-1 group-focus-within:text-[#28193d]">Last Name*</label>
                    <input
                      type="text"
                      className="bg-transparent w-full py-2 outline-none text-base md:text-lg"
                      required
                      aria-required="true"
                      autoComplete="family-name"
                      value={formValues.lastName}
                      onChange={(e) => handleChange(e, "lastName")}
                    />
                  </div>

                  {activeTab === "Entrepreneur" || activeTab === "Startup" ? (
                    <div className="relative border-b border-white/30 focus-within:border-[#28193d] transition-colors group">
                      <label className="block text-[10px] uppercase text-gray-500 mb-1 group-focus-within:text-[#28193d]">Company/Team Name*</label>
                      <input
                        type="text"
                        className="bg-transparent w-full py-2 outline-none text-base md:text-lg"
                        required
                        value={formValues.companyOrPortfolio}
                        onChange={(e) => handleChange(e, "companyOrPortfolio")}
                      />
                    </div>
                  ) : (
                    <div className="relative border-b border-white/30 focus-within:border-[#28193d] transition-colors group">
                      <label className="block text-[10px] uppercase text-gray-500 mb-1 group-focus-within:text-[#28193d]">Portfolio/Website</label>
                      <input
                        type="url"
                        className="bg-transparent w-full py-2 outline-none text-base md:text-lg"
                        placeholder="https://"
                        inputMode="url"
                        value={formValues.companyOrPortfolio}
                        onChange={(e) => handleChange(e, "companyOrPortfolio")}
                      />
                    </div>
                  )}

                  <div className="relative border-b border-white/30 focus-within:border-[#28193d] transition-colors group">
                    <label className="block text-[10px] uppercase text-gray-500 mb-1 group-focus-within:text-[#28193d]">
                      {activeTab === "Student" ? "Expected Graduation*" : "Estimated Launch"}
                    </label>
                    <input
                      type="text"
                      className="bg-transparent w-full py-2 outline-none text-base md:text-lg"
                      required
                      value={formValues.graduationOrLaunch}
                      onChange={(e) => handleChange(e, "graduationOrLaunch")}
                    />
                  </div>

                  <div className="relative border-b border-white/30 focus-within:border-[#28193d] transition-colors group">
                    <label className="block text-[10px] uppercase text-gray-500 mb-1 group-focus-within:text-[#28193d]">Email Address*</label>
                    <input
                      type="email"
                      className="bg-transparent w-full py-2 outline-none text-base md:text-lg"
                      required
                      autoComplete="email"
                      value={formValues.email}
                      onChange={(e) => handleChange(e, "email")}
                    />
                  </div>

                  <div className="relative border-b border-white/30 focus-within:border-[#28193d] transition-colors group">
                    <label className="block text-[10px] uppercase text-gray-500 mb-1 group-focus-within:text-[#28193d]">Phone Number</label>
                    <input
                      type="tel"
                      className="bg-transparent w-full py-2 outline-none text-base md:text-lg"
                      autoComplete="tel"
                      inputMode="tel"
                      value={formValues.phone}
                      onChange={(e) => handleChange(e, "phone")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                  <div className="md:col-span-3 border border-white/30 p-4 min-h-[150px] focus-within:border-[#28193d] transition-colors">
                    <label className="block text-[10px] uppercase text-gray-500 mb-2">
                      Tell us about your project or research
                    </label>
                    <textarea 
                      className="bg-transparent w-full h-32 outline-none resize-none text-base md:text-lg"
                      placeholder="Message..."
                      value={formValues.message}
                      onChange={(e) => handleChange(e, "message")}
                    />
                  </div>

                  <label className="md:col-span-1 border border-dashed border-white/30 flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 hover:border-[#28193d] transition-all p-4 group">
                    <Paperclip className="w-5 h-5 mb-2 group-hover:rotate-12 transition-transform group-hover:text-[#28193d]" />
                    <span className="text-[10px] uppercase text-center">Attach a File <br /> (Resume/Deck)</span>
                    <input type="file" className="hidden" aria-label="Upload file" />
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-12 w-full md:w-auto px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-[#28193d] hover:text-white transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Submit Application"}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 border border-[#28193d] bg-[#28193d]/10"
              >
                <h2 className="text-3xl font-bold mb-4">Application Received.</h2>
                <p className="text-gray-400 mb-8 uppercase tracking-widest text-sm">We'll get back to you shortly.</p>
                <button 
                  onClick={handleResend}
                  className="flex items-center gap-2 mx-auto px-6 py-3 border border-white/20 hover:border-white transition-colors uppercase text-xs tracking-tighter"
                >
                  <RotateCcw className="w-4 h-4" /> Resend or New Entry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
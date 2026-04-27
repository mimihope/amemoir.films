/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
    viewport: { once: true }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-white">
      {/* 00 — NAV */}
      <nav className="bg-brand-black px-7 py-4 flex justify-between items-center z-50">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display text-2xl text-brand-white tracking-widest uppercase"
        >
          MEMOIR
        </motion.span>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] text-brand-red font-bold uppercase tracking-[0.3em] hidden sm:block"
        >
          For Graduating Classes
        </motion.span>
      </nav>

      {/* 01 — HERO */}
      <section className="bg-brand-black px-7 py-20 md:py-32 section-border border-white/10 relative overflow-hidden">
        <div className="max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] text-brand-red font-bold uppercase tracking-[0.2em] mb-4"
          >
            Est. Your Final Year
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.3 }
              }
            }}
            className="font-display text-5xl md:text-8xl leading-[0.95] text-brand-white uppercase mb-8"
          >
            {["Four years.", "One film.", "Don't waste it on photos."].map((line, i) => (
              <motion.span 
                key={i} 
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
                }}
              >
                {line === "Don't waste it on photos." ? (
                  <span className="text-brand-red">{line}</span>
                ) : line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed mb-12"
          >
            We hang out with your class before everything ends. No scripts. No cheesy poses. Just your story, made into a proper film.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
          >
            <a href="#video" className="cta-btn text-lg px-10">WATCH WHAT WE DO ↓</a>
          </motion.div>
        </div>
        
        {/* Subtle background element */}
        <motion.div 
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute right-0 bottom-0 pointer-events-none select-none font-display text-[20vw] leading-none text-white uppercase -mb-12 -mr-12"
        >
          2026
        </motion.div>
      </section>

      {/* TICKER */}
      <div className="bg-brand-red py-3 overflow-hidden border-y-2 border-brand-black">
        <div className="whitespace-nowrap flex animate-ticker">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-display text-sm text-brand-white uppercase px-8">
              MEMOIR • YOUR CLASS • YOUR FILM • BEFORE IT'S ALL A MEMORY • 
            </span>
          ))}
        </div>
      </div>

      {/* 02 — THE PROBLEM */}
      <section className="px-7 py-20 section-border">
        <div className="max-w-6xl">
          <motion.div {...fadeInUp} className="text-[10px] text-brand-red font-bold uppercase tracking-[0.2em] mb-8">The Problem</motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {[
              { t: "The yearbook is already missing.", s: "Someone has it. No one remembers who." },
              { t: "You have 4,000 photos. You feel nothing.", s: "Because photos don't capture how it actually felt." },
              { t: "In 5 years, you won't remember half these names.", s: "Not because you didn't care. Because nothing made it stick." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ transform: "translateY(-4px)" }}
                className="border-2 border-brand-black p-8 bg-white transition-all hover:shadow-[8px_8px_0px_0px_#0a0a0a]"
              >
                <div className="font-display text-3xl md:text-5xl uppercase leading-none mb-2">{item.t}</div>
                <p className="text-xs text-gray-600 uppercase font-bold">{item.s}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 03 — VIDEO SECTION */}
      <section id="video" className="bg-brand-black px-7 py-20 section-border border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-[10px] text-brand-red font-bold uppercase tracking-[0.2em] mb-8">The Film</motion.div>
          <motion.h2 {...fadeInUp} className="font-display text-3xl md:text-5xl text-brand-white uppercase mb-2">THIS IS WHAT YOUR CLASS COULD LOOK LIKE.</motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-[10px] text-gray-500 mb-10 flex items-center tracking-widest uppercase">
            REAL STUDENTS • REAL CONVERSATIONS • NO DIRECTOR • NO SCRIPT
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="border-3 border-brand-red aspect-video bg-black relative group shadow-[15px_15px_0px_0px_#e63232]"
          >
            <iframe
              src="https://www.youtube.com/embed/VChkVf_8CGo?autoplay=0&controls=1&rel=0"
              title="MEMOIR CLASS FILM"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* 04 — HOW IT WORKS */}
      <section className="px-7 py-20 section-border">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-[10px] text-brand-red font-bold uppercase tracking-[0.2em] mb-8">How it works</motion.div>
          <motion.h2 {...fadeInUp} className="font-display text-3xl md:text-5xl uppercase mb-12 italic tracking-tighter">Three steps. One film.</motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { n: "01", t: "We Show Up", c: "We come to your campus. We attend your events. We hang out. No cameras in faces — just us, being there." },
              { n: "02", t: "We Have The Conversation", c: "We sit down with your class and talk — about the grind, the friendships, the stuff nobody posts on Instagram." },
              { n: "03", t: "We Make Your Film", c: "Edited. Scored. Cinematic. A short documentary of your class — yours to keep forever." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="border-2 border-brand-black p-8 hover:bg-brand-white transition-colors"
              >
                <div className="font-display text-6xl text-brand-red leading-none mb-4">{step.n}</div>
                <div className="font-display text-xl uppercase mb-3">{step.t}</div>
                <p className="text-xs text-gray-600 leading-relaxed font-bold uppercase tracking-tight">
                  {step.c}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 05 — PRICING */}
      <section className="bg-brand-black px-7 py-20 section-border border-white/10 text-brand-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-[10px] text-brand-red font-bold uppercase tracking-[0.2em] mb-8">Pricing</motion.div>
          <motion.h2 {...fadeInUp} className="font-display text-3xl md:text-5xl uppercase mb-2">Pick Your Memoir.</motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-xs text-gray-500 mb-12 uppercase tracking-wide">Every tier ends with a film. It's just a question of how deep we go.</motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {/* TIER 1 */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="bg-[#111] border-2 border-[#333] p-8 flex flex-col hover:border-white/30 transition-colors"
            >
              <div className="text-[10px] text-brand-red uppercase tracking-[0.2em] mb-2 font-bold">TIER 01</div>
              <div className="font-display text-2xl uppercase mb-2">The Short</div>
              <p className="text-[11px] text-gray-500 mb-6 leading-relaxed uppercase font-bold tracking-tight">The vibe of your set — bottled into one film. Fast, fun, and everyone's in it.</p>
              <div className="text-[10px] space-y-4 mb-10 text-gray-400 border-t border-white/5 pt-6 tracking-wide leading-relaxed">
                <div>🎬 <span className="text-brand-white">1 shoot day</span> — your sign-out, last paper, or water-splash moment</div>
                <div>🎤 <span className="text-brand-white">Vox pops</span> with students from across the class</div>
                <div>🎵 <span className="text-brand-white">Music-driven edit</span> — high energy, cinematic</div>
                <div>⏱ <span className="text-brand-white">10–15 minute film</span></div>
              </div>
              <a 
                href="https://wa.me/message/GRVIOIHB5XSCE1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#333] text-brand-white font-display text-sm py-4 uppercase tracking-[0.15em] hover:bg-brand-red transition-colors mt-auto text-center"
              >
                GET A QUOTE →
              </a>
            </motion.div>

            {/* TIER 2 - FEATURED */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-brand-black border-3 border-brand-red p-8 flex flex-col transform md:scale-105 z-10 shadow-2xl relative group"
            >
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 right-0 bg-brand-red text-brand-white px-3 py-1 font-display uppercase tracking-widest text-[9px] -translate-y-1/2 -mr-1"
              >
                MOST POPULAR
              </motion.div>
              <div className="text-[10px] text-brand-red uppercase tracking-[0.2em] mb-2 font-bold">TIER 02</div>
              <div className="font-display text-2xl uppercase mb-2">The Full Story</div>
              <p className="text-[11px] text-gray-500 mb-6 leading-relaxed uppercase font-bold tracking-tight">From Jambite to Graduate. The full journey — the struggle, the growth, the victory.</p>
              <div className="text-[10px] space-y-4 mb-10 text-gray-400 border-t border-white/5 pt-6 tracking-wide leading-relaxed">
                <div>🎬 <span className="text-brand-red">Multiple shoot days</span> — campus life, events, the real stuff</div>
                <div>🎉 <span className="text-brand-red">FYB week covered</span> — Costume Day, Old School Day, all of it</div>
                <div>🎙 <span className="text-brand-red">Interviews</span> with class reps, standout students, even that one lecturer</div>
                <div>📖 <span className="text-brand-red">Chapters:</span> The Beginning → The Struggle → The Victory</div>
                <div>⏱ <span className="text-brand-red">20–35 minute film</span></div>
              </div>
              <a 
                href="https://wa.me/message/GRVIOIHB5XSCE1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-red text-brand-white font-display text-sm py-4 uppercase tracking-[0.15em] hover:brightness-110 transition-all mt-auto text-center"
              >
                GET A QUOTE →
              </a>
            </motion.div>

            {/* TIER 3 */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-[#111] border-2 border-[#333] p-8 flex flex-col hover:border-white/30 transition-colors"
            >
              <div className="absolute top-0 right-0 bg-yellow-500 text-brand-black px-3 py-1 font-display uppercase tracking-widest text-[9px] -translate-y-1/2 -mr-1">
                FULL EXPERIENCE
              </div>
              <div className="text-[10px] text-brand-red uppercase tracking-[0.2em] mb-2 font-bold">TIER 03</div>
              <div className="font-display text-2xl uppercase mb-2">The Premiere</div>
              <p className="text-[11px] text-gray-500 mb-6 leading-relaxed uppercase font-bold tracking-tight">The full movie treatment. Your department becomes a feature film — and you all watch it together.</p>
              <div className="text-[10px] space-y-4 mb-10 text-gray-400 border-t border-white/5 pt-6 tracking-wide leading-relaxed">
                <div>🎬 <span className="text-brand-white">All-access coverage</span> — every semester milestone</div>
                <div>😂 <span className="text-brand-white">Bloopers + BTS</span> included</div>
                <div>💌 <span className="text-brand-white">"Future Self" messages</span> — every student, on camera</div>
                <div>🎟 <span className="text-brand-white">Private premiere</span> — cinema night or dinner screening</div>
                <div>💾 <span className="text-brand-white">Physical keepsake</span> — custom USB or plaque</div>
                <div>⏱ <span className="text-brand-white">40–60+ minute feature film</span></div>
              </div>
              <a 
                href="https://wa.me/message/GRVIOIHB5XSCE1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#333] text-brand-white font-display text-sm py-4 uppercase tracking-[0.15em] hover:bg-brand-red transition-colors mt-auto text-center"
              >
                GET A QUOTE →
              </a>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-[10px] text-brand-red font-bold uppercase tracking-[0.2em] mb-6">At a glance</motion.div>
          <div className="overflow-x-auto border-t-2 border-brand-red/20 pt-8">
            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="py-4 font-display uppercase tracking-widest text-[10px] text-gray-500">What you get</th>
                  <th className="py-4 px-4 text-center"><span className="bg-[#333] px-3 py-1 rounded-full uppercase text-[9px] font-bold">The Short</span></th>
                  <th className="py-4 px-4 text-center"><span className="bg-brand-red/20 text-brand-red px-3 py-1 rounded-full uppercase text-[9px] font-bold">The Full Story</span></th>
                  <th className="py-4 px-4 text-center"><span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full uppercase text-[9px] font-bold">The Premiere</span></th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {[
                  { label: "Shoot days", sub: "Days on ground", t1: "1 day", t2: "Several days", t3: "All semester" },
                  { label: "FYB week coverage", sub: "Costume/Old School Day", t1: "—", t2: "YES", t3: "YES", highlight: true },
                  { label: "Student interviews", sub: "Real conversations", t1: "Vox pops", t2: "In-depth", t3: "Everyone" },
                  { label: "Lecturer appearance", sub: "Your favorites", t1: "—", t2: "YES", t3: "YES" },
                  { label: "Film length", sub: "Edited and scored", t1: "10-15m", t2: "20-35m", t3: "40-60m+" },
                  { label: "Private premiere", sub: "Cinema style", t1: "—", t2: "—", t3: "YES", highlight: true },
                  { label: "Physical keepsake", sub: "USB or Plaque", t1: "—", t2: "—", t3: "YES" },
                  { label: "Bloopers + Future Self", sub: "The rewatchables", t1: "—", t2: "—", t3: "YES" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#222] hover:bg-white/5 transition-colors">
                    <td className="py-5">
                      <div className="font-bold text-brand-white uppercase text-[11px] mb-1">{row.label}</div>
                      <div className="text-[9px] text-gray-600 uppercase tracking-tight">{row.sub}</div>
                    </td>
                    <td className={`py-5 px-4 text-center ${row.t1 === "—" ? "text-gray-800" : ""}`}>{row.t1}</td>
                    <td className={`py-5 px-4 text-center font-bold ${row.t2 === "YES" ? "text-brand-red" : ""}`}>{row.t2}</td>
                    <td className={`py-5 px-4 text-center font-bold ${row.t3 === "YES" ? "text-yellow-500" : ""}`}>{row.t3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 06 — THE CLOSING ARGUMENT */}
      <section className="bg-brand-black px-7 py-32 text-center text-brand-white overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="font-display text-4xl md:text-7xl uppercase leading-[0.95] mb-6"
        >
          In ten years,<br />
          you won't remember the exam.<br />
          <span className="text-brand-red">You'll remember the people.</span>
        </motion.h2>
        <motion.p {...fadeInUp} className="text-xs text-gray-500 mb-12 tracking-widest uppercase">Talk to us. We'll figure out the rest.</motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="https://wa.me/message/GRVIOIHB5XSCE1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-btn text-xl px-12"
          >
            REACH OUT ON WHATSAPP →
          </a>
        </motion.div>
      </section>

      {/* 07 — FOOTER */}
      <footer className="bg-brand-black px-7 py-10 flex flex-col sm:flex-row justify-between items-center border-t border-white/10 gap-6">
        <div className="font-display text-2xl text-brand-white italic tracking-tighter">MEMOIR</div>
        <div className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-bold text-center">
          Made for graduating classes across Nigeria
        </div>
        <div className="text-[10px] text-brand-red font-bold uppercase tracking-[0.2em]">
          @memoir.films
        </div>
      </footer>

      {/* FIXED WHATSAPP BUTTON (Mobile Optimization) */}
      <motion.a 
        href="https://wa.me/message/GRVIOIHB5XSCE1" 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-brand-red text-brand-white p-5 shadow-2xl z-50 border-2 border-brand-black"
        aria-label="Contact on WhatsApp"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 3 }}
        >
          <MessageCircle className="w-8 h-8" />
        </motion.div>
      </motion.a>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
      `}</style>
    </div>
  );
}

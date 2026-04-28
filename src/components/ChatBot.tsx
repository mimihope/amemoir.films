import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, User, Bot, ExternalLink } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const WHATSAPP_LINK = "https://wa.me/message/GRVIOIHB5XSCE1";

const MEMOIR_SYSTEM_PROMPT = `
You are the Memoir AI Assistant. Your job is to help graduating students and class representatives understand how Memoir can capture their final year on film.

Memoir is a cinematic film-making service for graduating classes across Nigeria, partnered with LUMINA. We don't just take photos; we make proper documentaries.

OUR SERVICES:
1. TIER 01: THE SHORT (₦120,000)
   - 1 shoot day (sign-out or specific moment).
   - Vox pops with students.
   - High-energy, cinematic music-driven edit.
   - 10-15 minute film.

2. TIER 02: THE FULL STORY (₦250,000)
   - Multiple shoot days capturing campus life and events.
   - Full FYB (Final Year Breaker) week coverage (Costume Day, Old School Day, etc.).
   - In-depth interviews with class reps and students.
   - 20-35 minute film divided into "The Beginning", "The Struggle", and "The Victory".

3. TIER 03: THE PREMIERE (₦480,000) - RECOMMENDED/BEST OPTION
   - All-access coverage of the entire final semester.
   - Bloopers and Behind-the-scenes included.
   - "Future Self" messages from every student.
   - Private premiere event organization (cinema night or dinner screening).
   - Physical keepsake (custom USB or plaque).
   - 40-60+ minute feature length film.

OUR PROCESS:
Step 01: We Show Up (We hang out, attend events, no cameras in faces).
Step 02: We Have The Conversation (Real talk about the grind and friendships).
Step 03: We Make Your Film (Scored, cinematic, yours forever).

TONE:
Cinematic, emotional, cool, direct. Avoid being overly salesy. Focus on the value of memories. If a user asks for prices, give them these fixed rates but mention that custom add-ons are available via WhatsApp. Always recommend Tier 03 (The Premiere) as the best way to close the chapter.

IMPORTANT: If you don't know an answer or if the user wants to book/get a specific price, encourage them to click the "Chat on WhatsApp" button or use the link provided.
`;

interface Message {
  role: "user" | "bot";
  text: string;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Yo! I'm the Memoir AI. Ready to turn your class memories into a film? Ask me anything about our tiers or process." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: "user", parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: MEMOIR_SYSTEM_PROMPT,
          temperature: 0.7,
        },
      });

      const botText = response.text || "I'm having a bit of a technical glitch. Try reaching out via WhatsApp for a quicker response!";
      setMessages((prev) => [...prev, { role: "bot", text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { role: "bot", text: "My system hit a snag. Please reach out to us on WhatsApp instead!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-brand-red text-brand-white p-5 shadow-2xl z-50 border-2 border-brand-black"
        aria-label="Open Chat Bot"
      >
        <motion.div
          animate={isOpen ? { rotate: 90 } : { rotate: [0, 10, -10, 0] }}
          transition={isOpen ? { duration: 0.2 } : { duration: 2, repeat: Infinity, delay: 3 }}
        >
          <MessageCircle className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-brand-white border-3 border-brand-black shadow-[12px_12px_0px_0px_#0a0a0a] z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-black p-4 flex justify-between items-center text-brand-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-red flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="font-display text-sm tracking-widest uppercase">MEMOIR AI</div>
                  <div className="text-[9px] text-gray-500 uppercase font-bold">Online & Ready</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:text-brand-red transition-colors"
                aria-label="Close Chat"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] p-3 text-xs leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-brand-red text-brand-white font-bold" 
                      : "bg-white border-2 border-brand-black text-brand-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border-2 border-brand-black p-3 text-xs flex gap-1">
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>•</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>•</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>•</motion.span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Input */}
            <div className="p-4 bg-white border-t-2 border-brand-black">
              <div className="flex gap-2 mb-3">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about Tiers, Process, etc..."
                  className="flex-1 border-2 border-brand-black px-3 py-2 text-xs focus:ring-0 focus:outline-none"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-brand-black text-brand-white p-2 hover:bg-brand-red transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 border-2 border-brand-black hover:bg-gray-100 transition-colors text-[10px] font-bold uppercase tracking-widest text-brand-black"
              >
                In-person Support (WhatsApp) <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

"use client";

import { motion } from "framer-motion";
import { Hammer } from "lucide-react";
import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center relative overflow-hidden px-8">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-african-gold blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full bg-taupe blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center text-center max-w-2xl"
      >
        {/* Logo or Brand Mark */}
        <div className="mb-12 relative w-32 h-32">
             <Image 
                src="/favicon.ico" 
                alt="African Sushi" 
                fill 
                className="object-contain filter grayscale invert brightness-200"
            />
        </div>

        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.2, duration: 0.6 }}
        >
            <h1 className="font-heading text-5xl lg:text-7xl text-pearl mb-6 tracking-tight">
                SITE UNDER <br /> 
                <span className="text-african-gold">EVOLUTION</span>
            </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
            <p className="font-manrope text-xl lg:text-2xl text-pearl/80 mb-12 leading-relaxed">
                We are currently refining our digital experience to better serve your heritage. 
                Our platform will be back online shortly with enhanced collections.
            </p>
        </motion.div>

        <motion.div
           initial={{ width: 0 }}
           animate={{ width: "100%" }}
           transition={{ delay: 0.6, duration: 1 }}
           className="h-px bg-gradient-to-r from-transparent via-african-gold to-transparent mb-12 max-w-md w-full"
        />

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8, duration: 0.6 }}
           className="flex items-center space-x-3 text-taupe font-syne uppercase tracking-[0.2em] text-sm"
        >
            <span className="w-2 h-2 rounded-full bg-african-gold animate-pulse" />
            <span>Scheduled Maintenance in Progress</span>
        </motion.div>
      </motion.div>

      {/* Footer-like text */}
      <div className="absolute bottom-12 left-0 w-full text-center text-pearl/40 font-manrope text-sm tracking-widest uppercase">
        African Pride &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
}

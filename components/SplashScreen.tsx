"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function SplashScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
        >
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-saffron/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-india-green/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative flex flex-col items-center space-y-12 z-10">
                {/* Ashoka Chakra Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
                    animate={{ scale: 1, opacity: 1, rotate: 360 }}
                    transition={{
                        duration: 3,
                        ease: "easeOut",
                        rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                    }}
                    className="relative w-32 h-32 md:w-48 md:h-48"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-navy-blue drop-shadow-[0_0_15px_rgba(0,0,128,0.3)]">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                        <circle cx="50" cy="50" r="6" fill="currentColor" />
                        {[...Array(24)].map((_, i) => (
                            <line
                                key={i}
                                x1="50"
                                y1="50"
                                x2={Number((50 + 45 * Math.cos((i * 15 * Math.PI) / 180)).toFixed(2))}
                                y2={Number((50 + 45 * Math.sin((i * 15 * Math.PI) / 180)).toFixed(2))}
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                        ))}
                    </svg>
                </motion.div>

                {/* Typography */}
                <div className="text-center space-y-4">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter"
                    >
                        <span className="text-saffron">NPS</span>{" "}
                        <span className="text-foreground">Assistant</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="flex items-center justify-center gap-2 text-muted-foreground"
                    >
                        <Sparkles className="h-4 w-4 text-saffron" />
                        <span className="text-sm font-medium tracking-widest uppercase opacity-70">
                            Securing Your Future with AI
                        </span>
                    </motion.div>
                </div>

                {/* Progress Indicator */}
                <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 4.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-saffron via-accent to-india-green"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 2, duration: 2, repeat: Infinity }}
                    className="text-[10px] text-muted-foreground/40 font-mono uppercase tracking-[0.2em]"
                >
                    Initializing Intelligent Systems...
                </motion.p>
            </div>

            {/* Bottom Tagline */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-12 flex items-center gap-3 text-xs font-semibold tracking-widest uppercase"
            >
                <div className="h-px w-8 bg-zinc-800" />
                <span>Government of India</span>
                <div className="h-px w-8 bg-zinc-800" />
            </motion.div>
        </motion.div>
    );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Mic, MicOff, Volume2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LiveAssistantProps {
    isOpen: boolean;
    onClose: () => void;
    sendMessage: (message: { text: string }, options?: { body?: any }) => void;
    messages: any[];
    isLoading: boolean;
}

export function LiveAssistant({ isOpen, onClose, sendMessage, messages, isLoading }: LiveAssistantProps) {
    const { t, language } = useLanguage();
    const [status, setStatus] = useState<"resting" | "listening" | "thinking" | "speaking">("resting");
    const [transcript, setTranscript] = useState("");
    const recognitionRef = useRef<any>(null);
    const lastMessageRef = useRef<string | null>(null);

    // Get the latest assistant message
    const latestAssistantMessage = messages.filter(m => m.role === 'assistant').pop()?.content || "";

    useEffect(() => {
        if (isOpen) {
            startListening();
        } else {
            stopEverything();
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isLoading && latestAssistantMessage && latestAssistantMessage !== lastMessageRef.current && status === "thinking") {
            lastMessageRef.current = latestAssistantMessage;
            handleReadAloud(latestAssistantMessage);
        }
    }, [isLoading, latestAssistantMessage]);

    const stopEverything = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
        window.speechSynthesis.cancel();
        setStatus("resting");
        setTranscript("");
    };

    const startListening = () => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            // @ts-ignore
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = language === 'en' ? 'en-IN' : `${language}-IN`;
            recognition.continuous = false;
            recognition.interimResults = true;

            recognition.onstart = () => {
                setStatus("listening");
                setTranscript("");
            };

            recognition.onresult = (event: any) => {
                const current = event.results[event.results.length - 1];
                const text = current[0].transcript;
                setTranscript(text);

                if (current.isFinal) {
                    setStatus("thinking");
                    sendMessage({ text }, { body: { language } });
                }
            };

            recognition.onerror = () => setStatus("resting");
            recognition.onend = () => {
                if (status === "listening") setStatus("resting");
            };

            recognitionRef.current = recognition;
            recognition.start();
        }
    };

    const handleReadAloud = (text: string) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'en' ? 'en-IN' : `${language}-IN`;

        utterance.onstart = () => setStatus("speaking");
        utterance.onend = () => {
            setStatus("resting");
            // Automatically start listening again after speaking
            setTimeout(startListening, 500);
        };
        utterance.onerror = () => setStatus("resting");

        window.speechSynthesis.speak(utterance);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-2xl"
                >
                    {/* Close Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="absolute top-6 right-6 h-12 w-12 rounded-full hover:bg-white/10 text-muted-foreground"
                    >
                        <X className="h-6 w-6" />
                    </Button>

                    <div className="flex flex-col items-center max-w-2xl px-6 w-full text-center space-y-12">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-2"
                        >
                            <div className="flex items-center justify-center gap-2 text-saffron mb-2">
                                <Sparkles className="h-5 w-5 fill-current" />
                                <span className="text-sm font-bold tracking-widest uppercase">{t.chat.liveAssistant}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                {status === "listening" ? t.chat.listening :
                                    status === "thinking" ? t.chat.thinking :
                                        status === "speaking" ? "Assistant is speaking..." : "Ready to help"}
                            </h2>
                        </motion.div>

                        {/* AI Avatar / Orb */}
                        <div className="relative flex items-center justify-center">
                            {/* Outer Glows */}
                            <motion.div
                                animate={{
                                    scale: status === "listening" ? [1, 1.2, 1] : 1,
                                    opacity: status === "listening" ? [0.3, 0.6, 0.3] : 0.2
                                }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-saffron via-accent to-india-green blur-3xl"
                            />

                            {/* The Orb */}
                            <motion.div
                                animate={{
                                    scale: status === "speaking" ? [1, 1.05, 1] : 1,
                                    boxShadow: status === "listening"
                                        ? "0 0 50px rgba(244, 158, 11, 0.6)"
                                        : "0 0 30px rgba(244, 158, 11, 0.3)"
                                }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className={cn(
                                    "relative w-40 h-40 rounded-full bg-gradient-to-br from-saffron via-accent to-india-green flex items-center justify-center shadow-2xl z-10",
                                    status === "thinking" && "animate-pulse"
                                )}
                            >
                                {status === "listening" ? (
                                    <Mic className="h-12 w-12 text-white animate-pulse" />
                                ) : status === "speaking" ? (
                                    <Volume2 className="h-12 w-12 text-white" />
                                ) : (
                                    <Bot className="h-12 w-12 text-white" />
                                )}
                            </motion.div>

                            {/* Waveforms (Visual Feedback) */}
                            {status === "listening" && (
                                <div className="absolute inset-0 flex items-center justify-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [10, 30, 10] }}
                                            transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                                            className="w-1 bg-white/40 rounded-full"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Transcript / Response Area */}
                        <div className="min-h-[100px] w-full bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-md">
                            <AnimatePresence mode="wait">
                                {transcript ? (
                                    <motion.p
                                        key="transcript"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-xl md:text-2xl font-medium text-foreground leading-relaxed"
                                    >
                                        “{transcript}”
                                    </motion.p>
                                ) : (
                                    <motion.p
                                        key="placeholder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-muted-foreground/60 italic"
                                    >
                                        Try asking "What are the tax benefits of NPS?"
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-6">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={status === "resting" ? startListening : stopEverything}
                                className={cn(
                                    "rounded-full px-8 h-12 font-semibold transition-all duration-300",
                                    status === "listening" ? "bg-red-500/10 text-red-500 border-red-500/20" : "hover:bg-saffron/10 hover:text-saffron hover:border-saffron/20"
                                )}
                            >
                                {status === "listening" ? (
                                    <><MicOff className="mr-2 h-5 w-5" /> Stop Listening</>
                                ) : (
                                    <><Mic className="mr-2 h-5 w-5" /> Start Speaking</>
                                )}
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

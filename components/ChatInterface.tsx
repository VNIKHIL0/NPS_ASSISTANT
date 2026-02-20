"use client";

import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Mic, MicOff, Sparkles, ArrowDown, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LiveAssistant } from "./LiveAssistant";

function getMessageText(message: any): string {
    if (message.content && typeof message.content === 'string') {
        return message.content;
    }
    if (message.parts && Array.isArray(message.parts)) {
        return message.parts
            .filter((p: any) => p.type === 'text')
            .map((p: any) => p.text)
            .join('');
    }
    return '';
}

export function ChatInterface() {
    const { t, language } = useLanguage();

    // Pass onError in options
    const { messages, status, sendMessage } = useChat({
        onError: (e: any) => console.error("Chat Error:", e),
    });

    const isLoading = status === "submitted" || status === "streaming";
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isListening, setIsListening] = useState(false);
    const [showScrollBtn, setShowScrollBtn] = useState(false);
    const [currentlyReadingId, setCurrentlyReadingId] = useState<string | null>(null);
    const [isAssistantOpen, setIsAssistantOpen] = useState(false);

    // Dynamic quick actions based on translation
    const quickActions = [
        { label: t.chat.q1, prompt: t.chat.q1 },
        { label: t.chat.q2, prompt: t.chat.q2 },
        { label: t.chat.q3, prompt: t.chat.q3 },
        { label: t.chat.q4, prompt: t.chat.q4 },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSend = async (text: string) => {
        if (!text.trim()) return;
        if (sendMessage) {
            // Pass language in body here
            sendMessage({ text: text.trim() }, { body: { language } });
            setInputValue("");
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleSend(inputValue);
    };

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Show/hide scroll button
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = container;
            setShowScrollBtn(scrollHeight - scrollTop - clientHeight > 100);
        };
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    // Voice Input - Set language for recognition
    const startListening = () => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            // @ts-ignore
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            // Map selected language to BCP 47 tag if needed, or default to language-IN
            recognition.lang = language === 'en' ? 'en-IN' : `${language}-IN`;
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.onstart = () => setIsListening(true);
            recognition.onend = () => setIsListening(false);
            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setInputValue(transcript);
            };
            recognition.start();
        } else {
            alert("Browser does not support speech recognition.");
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleReadAloud = (text: string, messageId: string) => {
        if (currentlyReadingId === messageId) {
            window.speechSynthesis.cancel();
            setCurrentlyReadingId(null);
            return;
        }

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'en' ? 'en-IN' : `${language}-IN`;

        utterance.onend = () => setCurrentlyReadingId(null);
        utterance.onerror = () => setCurrentlyReadingId(null);

        setCurrentlyReadingId(messageId);
        window.speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col bg-gradient-to-b from-background via-background to-muted/20">
            {/* Chat Header */}
            <div className="border-b border-border/50 bg-background/80 backdrop-blur-xl px-4 py-3 md:px-6">
                <div className="max-w-4xl mx-auto flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron via-accent to-india-green flex items-center justify-center shadow-lg shadow-saffron/20">
                            <Bot className="h-5 w-5 text-white" />
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-foreground text-sm md:text-base">{t.chat.header}</h1>
                        <p className="text-xs text-muted-foreground">
                            {isLoading ? (
                                <span className="text-saffron animate-pulse">{t.chat.thinking}</span>
                            ) : (
                                t.chat.subheader
                            )}
                        </p>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                            <Sparkles className="h-3 w-3 text-saffron" />
                            <span>AI Powered</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-hidden relative">
                <div
                    ref={scrollContainerRef}
                    className="absolute inset-0 overflow-y-auto px-4 py-6 scroll-smooth"
                >
                    <div className="max-w-4xl mx-auto space-y-4">
                        {/* Empty State */}
                        {messages.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-saffron/20 via-accent/10 to-india-green/20 flex items-center justify-center mb-6 border border-saffron/20">
                                    <Bot className="h-10 w-10 text-saffron/60" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-saffron via-foreground to-india-green bg-clip-text text-transparent">
                                    {t.chat.emptyTitle}
                                </h2>
                                <p className="text-muted-foreground mb-8 max-w-md text-sm md:text-base">
                                    {t.chat.emptyDesc}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-lg">
                                    {quickActions.map((action, i) => (
                                        <motion.button
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                            onClick={() => handleSend(action.prompt)}
                                            className="text-left px-4 py-3 rounded-xl border border-border/60 bg-card/50 hover:bg-card hover:border-saffron/40 hover:shadow-md hover:shadow-saffron/5 transition-all duration-200 text-sm group"
                                        >
                                            <span className="group-hover:text-foreground text-muted-foreground">
                                                {action.label}
                                            </span>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}



                        {/* Messages */}
                        <AnimatePresence initial={false}>
                            {messages.map((m) => {
                                const text = getMessageText(m);
                                if (!text) return null;
                                const isUser = m.role === "user";

                                return (
                                    <motion.div
                                        key={m.id}
                                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                        className={cn(
                                            "flex w-full gap-3 md:gap-4 mb-2",
                                            isUser ? "flex-row-reverse" : "flex-row"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-md transition-transform duration-200 hover:scale-105",
                                            isUser
                                                ? "bg-gradient-to-br from-muted/80 to-muted border border-border/40"
                                                : "bg-gradient-to-br from-saffron to-accent text-white"
                                        )}>
                                            {isUser ? <User className="h-5 w-5 text-muted-foreground" /> : <Bot className="h-5 w-5" />}
                                        </div>

                                        <div
                                            className={cn(
                                                "relative max-w-[85%] md:max-w-[80%] rounded-2xl px-5 py-3.5 shadow-sm transition-all duration-300",
                                                isUser
                                                    ? "bg-gradient-to-br from-saffron to-saffron/90 text-white rounded-tr-none glow-saffron/10"
                                                    : "bg-card/90 backdrop-blur-sm border border-border/60 text-foreground rounded-tl-none hover:border-saffron/20"
                                            )}
                                        >
                                            <div className={cn(
                                                "prose prose-sm max-w-none break-words",
                                                isUser ? "prose-invert" : "dark:prose-invert"
                                            )}>
                                                <ReactMarkdown
                                                    remarkPlugins={[remarkGfm]}
                                                    components={{
                                                        h1: ({ node, ...props }: any) => <h1 className="text-lg font-bold mb-2 mt-1" {...props} />,
                                                        h2: ({ node, ...props }: any) => <h2 className="text-base font-bold mb-2 mt-1" {...props} />,
                                                        h3: ({ node, ...props }: any) => <h3 className="text-sm font-bold mb-1 mt-1" {...props} />,
                                                        p: ({ node, ...props }: any) => <p className="mb-2 last:mb-0 leading-relaxed text-sm" {...props} />,
                                                        ul: ({ node, ...props }: any) => <ul className="list-disc ml-4 mb-2" {...props} />,
                                                        ol: ({ node, ...props }: any) => <ol className="list-decimal ml-4 mb-2" {...props} />,
                                                        li: ({ node, ...props }: any) => <li className="mb-1" {...props} />,
                                                        code: ({ node, inline, ...props }: any) =>
                                                            inline ? (
                                                                <code className="bg-muted/30 px-1.5 py-0.5 rounded text-[12px] font-mono" {...props} />
                                                            ) : (
                                                                <pre className="bg-muted/20 p-3 rounded-lg overflow-x-auto my-2 text-xs font-mono">
                                                                    <code {...props} />
                                                                </pre>
                                                            ),
                                                        table: ({ node, ...props }: any) => (
                                                            <div className="overflow-x-auto my-4 rounded-xl border border-border/40 bg-card/50">
                                                                <table className="min-w-full divide-y divide-border/40" {...props} />
                                                            </div>
                                                        ),
                                                        th: ({ node, ...props }: any) => <th className="px-4 py-2 bg-muted/20 text-left text-xs font-semibold" {...props} />,
                                                        td: ({ node, ...props }: any) => <td className="px-4 py-2 border-t border-border/40 text-xs" {...props} />,
                                                        strong: ({ node, ...props }: any) => <strong className={cn("font-bold", isUser ? "text-white" : "text-saffron")} {...props} />,
                                                    }}
                                                >
                                                    {text}
                                                </ReactMarkdown>
                                            </div>
                                            {!isUser && (
                                                <div className="flex items-center justify-between mt-2 gap-4">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleReadAloud(text, m.id)}
                                                        className={cn(
                                                            "h-7 px-2.5 text-[10px] rounded-lg flex items-center gap-1.5 transition-all duration-200 border",
                                                            currentlyReadingId === m.id
                                                                ? "text-white bg-red-600 border-red-500 hover:bg-red-700"
                                                                : "text-white bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40"
                                                        )}
                                                    >
                                                        {currentlyReadingId === m.id ? (
                                                            <>
                                                                <VolumeX className="h-3 w-3 text-white" />
                                                                <span className="font-semibold">{t.chat.stop}</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Volume2 className="h-3 w-3 text-white" />
                                                                <span className="font-semibold">{t.chat.readAloud}</span>
                                                            </>
                                                        )}
                                                    </Button>
                                                    <p className="text-[10px] text-muted-foreground/40 text-right">
                                                        AI Assistant • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>

                        {/* Typing Indicator */}
                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex w-full gap-3 justify-start"
                            >
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-saffron to-accent flex items-center justify-center shrink-0 shadow-sm">
                                    <Bot className="h-4 w-4 text-white" />
                                </div>
                                <div className="bg-card border border-border/60 rounded-2xl rounded-bl-md px-5 py-3.5 shadow-sm">
                                    <div className="flex space-x-1.5 items-center h-5">
                                        <span className="w-2 h-2 bg-saffron/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-2 h-2 bg-saffron/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-2 h-2 bg-saffron/60 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Scroll to bottom */}
                <AnimatePresence>
                    {showScrollBtn && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={scrollToBottom}
                            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-card border border-border/60 shadow-lg flex items-center justify-center hover:bg-muted transition-colors z-10"
                        >
                            <ArrowDown className="h-4 w-4 text-muted-foreground" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Input Area */}
            <div className="border-t border-border/50 bg-background/80 backdrop-blur-xl px-4 py-3 md:px-6">
                <form onSubmit={handleFormSubmit} className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 bg-card border border-border/60 rounded-2xl px-3 py-1.5 shadow-sm focus-within:border-saffron/40 focus-within:shadow-md focus-within:shadow-saffron/5 transition-all duration-200">
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsAssistantOpen(true)}
                            className={cn(
                                "h-9 w-9 rounded-xl shrink-0 group hover:bg-saffron/10 transition-colors"
                            )}
                        >
                            <Sparkles className="h-4 w-4 text-muted-foreground group-hover:text-saffron transition-colors fill-current opacity-70 group-hover:opacity-100" />
                        </Button>

                        <Input
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder={t.chat.placeholder}
                            className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-1 text-sm placeholder:text-muted-foreground/60"
                        />

                        <Button
                            type="submit"
                            size="icon"
                            disabled={isLoading || !inputValue.trim()}
                            className="h-9 w-9 rounded-xl bg-gradient-to-br from-saffron to-saffron/90 hover:from-saffron/90 hover:to-saffron/80 text-white shadow-sm disabled:opacity-40 shrink-0"
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                    <p className="text-center text-[10px] text-muted-foreground/50 mt-2">
                        {t.chat.disclaimer}
                    </p>
                </form>
            </div>

            <LiveAssistant
                isOpen={isAssistantOpen}
                onClose={() => setIsAssistantOpen(false)}
                sendMessage={sendMessage}
                messages={messages}
                isLoading={isLoading}
            />
        </div>
    );
}

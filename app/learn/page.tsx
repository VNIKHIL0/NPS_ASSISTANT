"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, AlertCircle, Coins, Users, ArrowRight, MessageSquare, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LearnPage() {
    const { t } = useLanguage();

    const articles = [
        {
            title: t.learn.a1title,
            description: t.learn.a1desc,
            icon: <Users className="h-6 w-6" />,
            category: t.learn.a1cat,
            color: "from-blue-500/10 to-blue-500/5 border-blue-500/20 hover:border-blue-500/40 text-blue-400",
        },
        {
            title: t.learn.a2title,
            description: t.learn.a2desc,
            icon: <Coins className="h-6 w-6" />,
            category: t.learn.a2cat,
            color: "from-india-green/10 to-india-green/5 border-india-green/20 hover:border-india-green/40 text-india-green",
        },
        {
            title: t.learn.a3title,
            description: t.learn.a3desc,
            icon: <AlertCircle className="h-6 w-6" />,
            category: t.learn.a3cat,
            color: "from-saffron/10 to-saffron/5 border-saffron/20 hover:border-saffron/40 text-saffron",
        },
        {
            title: t.learn.a4title,
            description: t.learn.a4desc,
            icon: <BookOpen className="h-6 w-6" />,
            category: t.learn.a4cat,
            color: "from-purple-500/10 to-purple-500/5 border-purple-500/20 hover:border-purple-500/40 text-purple-400",
        }
    ];

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-gradient-hero">
            <div className="container py-8 md:py-12 space-y-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-3"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-india-green/20 bg-india-green/5 px-4 py-1.5 text-xs font-semibold text-india-green">
                        <GraduationCap className="h-3 w-3" />
                        {t.learn.badge}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.learn.title}</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                        {t.learn.subtitle}
                    </p>
                </motion.div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 gap-5">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className={`group glass border bg-gradient-to-br hover:shadow-xl transition-all duration-300 cursor-pointer h-full ${article.color}`}>
                                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                                    <div className="p-3 rounded-xl bg-background/60 shrink-0 mt-0.5">
                                        {article.icon}
                                    </div>
                                    <div className="space-y-1 min-w-0">
                                        <div className="text-[10px] font-semibold uppercase tracking-wider opacity-70">
                                            {article.category}
                                        </div>
                                        <CardTitle className="text-base text-foreground">{article.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3 pt-0">
                                    <CardDescription className="text-sm leading-relaxed">
                                        {article.description}
                                    </CardDescription>
                                    <div className="flex items-center text-xs font-medium group-hover:translate-x-1 transition-transform">
                                        {t.learn.readMore} <ArrowRight className="ml-1 h-3 w-3" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy via-navy/95 to-navy/90 p-8 md:p-12"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-india-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 text-center md:text-left">
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <MessageSquare className="h-5 w-5 text-saffron" />
                                <h3 className="text-xl md:text-2xl font-bold text-white">{t.learn.ctaTitle}</h3>
                            </div>
                            <p className="text-white/60 max-w-md text-sm">
                                {t.learn.ctaDesc}
                            </p>
                        </div>
                        <Link href="/chat">
                            <Button size="lg" className="h-12 px-8 bg-saffron hover:bg-saffron/90 text-white font-semibold shadow-lg shadow-saffron/20">
                                {t.learn.ctaBtn} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}

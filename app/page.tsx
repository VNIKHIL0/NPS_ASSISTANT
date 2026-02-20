"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Calculator, BookOpen, Shield, Users, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { value: "7.4 Cr+", label: t.stats.subscribers, icon: Users },
    { value: "₹12.8L Cr", label: t.stats.aum, icon: TrendingUp },
    { value: "14%", label: t.stats.returns, icon: Zap },
    { value: "100%", label: t.stats.govtBacked, icon: Shield },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-20 md:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-saffron/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-india-green/5 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-saffron/20 bg-saffron/5 px-4 py-1.5 text-xs font-semibold text-saffron backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
              {t.hero.tag}
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-foreground">{t.hero.title}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-foreground max-w-[600px] mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            <Link href="/chat">
              <Button size="lg" className="h-12 px-8 text-base bg-gradient-to-r from-saffron to-saffron/90 hover:from-saffron/90 hover:to-saffron/80 text-white border-0 shadow-lg shadow-saffron/20 font-semibold">
                {t.hero.ctaChat} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/calculator">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base border-border/60 hover:bg-muted/50 font-semibold">
                {t.hero.ctaCalc}
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass rounded-xl p-4 text-center hover:glow-saffron transition-all duration-300"
              >
                <stat.icon className="h-5 w-5 mx-auto mb-2 text-saffron" />
                <div className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container py-20 space-y-12 relative">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.hero.featuresTitle}</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t.hero.featuresSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <FeatureCard
            icon={<MessageSquare className="h-7 w-7" />}
            title={t.hero.f1title}
            description={t.hero.f1desc}
            color="saffron"
            href="/chat"
          />
          <FeatureCard
            icon={<Calculator className="h-7 w-7" />}
            title={t.hero.f2title}
            description={t.hero.f2desc}
            color="navy"
            href="/calculator"
          />
          <FeatureCard
            icon={<BookOpen className="h-7 w-7" />}
            title={t.hero.f3title}
            description={t.hero.f3desc}
            color="green"
            href="/learn"
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy via-navy/95 to-navy/90 p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-india-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white">{t.hero.ctaBannerTitle}</h3>
              <p className="text-white/60 max-w-md">
                {t.hero.ctaBannerDesc}
              </p>
            </div>
            <Link href="/chat">
              <Button size="lg" className="h-12 px-8 bg-saffron hover:bg-saffron/90 text-white font-semibold shadow-lg shadow-saffron/20">
                {t.hero.ctaBannerBtn} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, color, href }: { icon: React.ReactNode, title: string, description: string, color: string, href: string }) {
  const colorClasses: Record<string, string> = {
    saffron: "from-saffron/10 to-saffron/5 border-saffron/20 hover:border-saffron/40 hover:shadow-saffron/10 text-saffron",
    navy: "from-navy/10 to-navy/5 border-navy/20 hover:border-navy/40 hover:shadow-navy/10 text-navy dark:text-blue-400 dark:from-blue-500/10 dark:to-blue-500/5 dark:border-blue-500/20 dark:hover:border-blue-500/40",
    green: "from-india-green/10 to-india-green/5 border-india-green/20 hover:border-india-green/40 hover:shadow-india-green/10 text-india-green",
  };

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex flex-col p-6 space-y-4 rounded-xl border bg-gradient-to-br shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full",
          colorClasses[color]
        )}
      >
        <div className="p-3 rounded-xl bg-background/80 w-fit">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex items-center text-xs font-medium mt-auto pt-2">
          Explore <ArrowRight className="ml-1 h-3 w-3" />
        </div>
      </motion.div>
    </Link>
  );
}

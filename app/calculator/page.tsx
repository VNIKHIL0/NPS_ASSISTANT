"use client";

import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { IndianRupee, TrendingUp, Wallet, PiggyBank, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CalculatorPage() {
    const { t } = useLanguage();
    const [age, setAge] = useState(25);
    const [retirementAge, setRetirementAge] = useState(60);
    const [monthlyContribution, setMonthlyContribution] = useState(5000);
    const [expectedReturn, setExpectedReturn] = useState(10);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const data = useMemo(() => {
        let corpus = 0;
        let invested = 0;
        const chartData = [];
        const months = (retirementAge - age) * 12;
        const monthlyRate = expectedReturn / 12 / 100;

        for (let i = 0; i <= months; i++) {
            chartData.push({
                age: age + (i / 12),
                corpus: Math.round(corpus),
                invested: Math.round(invested)
            });
            corpus = (corpus + monthlyContribution) * (1 + monthlyRate);
            invested += monthlyContribution;
        }
        return { chartData, finalCorpus: Math.round(corpus), totalInvested: Math.round(invested) };
    }, [age, retirementAge, monthlyContribution, expectedReturn]);

    const wealthGain = data.finalCorpus - data.totalInvested;

    const formatCurrency = (value: number) => {
        if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
        if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-gradient-hero">
            <div className="container py-8 md:py-12 space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-3"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-saffron/20 bg-saffron/5 px-4 py-1.5 text-xs font-semibold text-saffron">
                        <IndianRupee className="h-3 w-3" />
                        {t.calc.badge}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.calc.title}</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                        {t.calc.subtitle}
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3"
                >
                    <StatCard
                        icon={<Wallet className="h-4 w-4" />}
                        label={t.calc.invested}
                        value={formatCurrency(data.totalInvested)}
                        color="text-blue-400"
                    />
                    <StatCard
                        icon={<TrendingUp className="h-4 w-4" />}
                        label={t.calc.wealth}
                        value={formatCurrency(wealthGain)}
                        color="text-india-green"
                    />
                    <StatCard
                        icon={<Target className="h-4 w-4" />}
                        label={t.calc.corpus}
                        value={formatCurrency(data.finalCorpus)}
                        color="text-saffron"
                        highlight
                    />
                    <StatCard
                        icon={<PiggyBank className="h-4 w-4" />}
                        label={t.calc.pension}
                        value={formatCurrency(Math.round(data.finalCorpus * 0.4 * 0.06 / 12))}
                        color="text-purple-400"
                    />
                </motion.div>

                {/* Main Grid */}
                <div className="grid md:grid-cols-5 gap-6">
                    {/* Inputs */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2"
                    >
                        <Card className="glass border-border/50">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base font-semibold">{t.calc.inputTitle}</CardTitle>
                                <CardDescription className="text-xs">{t.calc.inputDesc}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <SliderInput
                                    label={t.calc.age}
                                    value={age}
                                    unit={` ${t.calc.years}`}
                                    min={18} max={59} step={1}
                                    onChange={(val) => setAge(val[0])}
                                />
                                <SliderInput
                                    label={t.calc.retAge}
                                    value={retirementAge}
                                    unit={` ${t.calc.years}`}
                                    min={age + 1} max={75} step={1}
                                    onChange={(val) => setRetirementAge(val[0])}
                                />
                                <SliderInput
                                    label={t.calc.monthly}
                                    value={monthlyContribution}
                                    unit=""
                                    displayValue={formatCurrency(monthlyContribution)}
                                    min={500} max={150000} step={500}
                                    onChange={(val) => setMonthlyContribution(val[0])}
                                />
                                <SliderInput
                                    label={t.calc.expReturn}
                                    value={expectedReturn}
                                    unit="%"
                                    min={5} max={15} step={0.5}
                                    onChange={(val) => setExpectedReturn(val[0])}
                                />

                                <div className="pt-2 border-t border-border/50 space-y-2 text-xs text-muted-foreground">
                                    <p>{t.calc.duration}: <span className="text-foreground font-medium">{retirementAge - age} {t.calc.years}</span></p>
                                    <p>{t.calc.taxSaved}: <span className="text-india-green font-medium">{t.calc.taxValue}</span></p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-3"
                    >
                        <Card className="glass border-border/50 h-full flex flex-col">
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                    <TrendingUp className="h-4 w-4 text-saffron" />
                                    {t.calc.chartTitle}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 min-h-[350px]">
                                {isMounted ? (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={data.chartData}>
                                            <defs>
                                                <linearGradient id="colorCorpus" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="hsl(29, 100%, 60%)" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="hsl(29, 100%, 60%)" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="hsl(215, 80%, 60%)" stopOpacity={0.15} />
                                                    <stop offset="95%" stopColor="hsl(215, 80%, 60%)" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                            <XAxis
                                                dataKey="age"
                                                tickLine={false}
                                                axisLine={false}
                                                tickFormatter={(value) => `${Math.floor(value)}y`}
                                                interval="preserveStartEnd"
                                                minTickGap={30}
                                                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                                            />
                                            <YAxis
                                                tickLine={false}
                                                axisLine={false}
                                                tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
                                                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                                            />
                                            <Tooltip
                                                formatter={(value: any) => [`${formatCurrency(value || 0)}`, ""]}
                                                labelFormatter={(label) => `Age: ${Math.floor(label)}`}
                                                contentStyle={{
                                                    backgroundColor: 'hsl(var(--card))',
                                                    borderColor: 'hsl(var(--border))',
                                                    borderRadius: '12px',
                                                    fontSize: '12px',
                                                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                                                }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="corpus"
                                                stroke="hsl(29, 100%, 60%)"
                                                fillOpacity={1}
                                                fill="url(#colorCorpus)"
                                                strokeWidth={2}
                                                name={t.calc.corpus}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="invested"
                                                stroke="hsl(215, 80%, 60%)"
                                                fillOpacity={1}
                                                fill="url(#colorInvested)"
                                                strokeWidth={2}
                                                strokeDasharray="5 5"
                                                name={t.calc.invested}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm">
                                        {t.calc.loading}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, color, highlight }: { icon: React.ReactNode, label: string, value: string, color: string, highlight?: boolean }) {
    return (
        <Card className={`glass border-border/50 ${highlight ? 'glow-saffron border-saffron/20' : ''}`}>
            <CardContent className="p-4">
                <div className={`flex items-center gap-1.5 text-xs ${color} mb-1.5`}>
                    {icon}
                    <span className="text-muted-foreground">{label}</span>
                </div>
                <div className="text-lg md:text-xl font-bold text-foreground tracking-tight">{value}</div>
            </CardContent>
        </Card>
    );
}

function SliderInput({ label, value, unit, displayValue, min, max, step, onChange }: {
    label: string, value: number, unit: string, displayValue?: string, min: number, max: number, step: number, onChange: (val: number[]) => void
}) {
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <Label className="text-xs text-muted-foreground">{label}</Label>
                <span className="text-sm font-semibold text-foreground">
                    {displayValue || `${value}${unit}`}
                </span>
            </div>
            <Slider
                value={[value]}
                onValueChange={onChange}
                min={min}
                max={max}
                step={step}
                className="cursor-pointer"
            />
        </div>
    );
}

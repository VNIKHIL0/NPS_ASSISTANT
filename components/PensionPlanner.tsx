"use client";
// Version: 1.0.3 - Forcing Rebuild

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/constants/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronLeft, Download, RefreshCcw, Sparkles, FileText, User, IndianRupee, TrendingUp } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export function PensionPlanner() {
    const { language } = useLanguage();
    const t = translations[language].planner;
    const [step, setStep] = useState(1);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const reportRef = useRef<HTMLDivElement>(null);

    const [data, setData] = useState({
        age: 25,
        income: 50000,
        retirementAge: 60,
        savings: 0,
        pensionGoal: 30000,
        riskProfile: "balanced" as "conservative" | "balanced" | "aggressive",
    });

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const generatePlan = async () => {
        setIsGenerating(true);
        setStep(4);
        try {
            setResult(null); // Reset previous result
            const response = await fetch("/api/plan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data, language }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || "Failed to generate plan. Please try again.");
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let content = "";

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    const text = decoder.decode(value, { stream: true });
                    content += text;
                    setResult(content);
                }
            }
            if (!content) {
                throw new Error("No content received from AI. This may be due to safety filters or a temporary glitch.");
            }
        } catch (error: any) {
            console.error(error);
            setResult(`Error: ${error.message}`);
        } finally {
            setIsGenerating(false);
        }
    };

    const downloadPDF = async () => {
        if (!reportRef.current) return;
        setIsDownloading(true);

        try {
            const element = reportRef.current;
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff",
                onclone: (clonedDoc) => {
                    // Ensure the cloned element is visible and has enough width for rendering
                    const clonedElement = clonedDoc.getElementById(element.id) || clonedDoc.querySelector('[ref="reportRef"]');
                    if (clonedElement) {
                        (clonedElement as HTMLElement).style.height = "auto";
                    }
                }
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;

            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pdfHeight;
            }

            pdf.save(`NPS_Retirement_Plan_${language}.pdf`);
        } catch (error) {
            console.error("PDF Download Error:", error);
            alert("Failed to generate PDF. Please try again or use the print option (Ctrl+P).");
        } finally {
            setIsDownloading(false);
        }
    };

    const reset = () => {
        setStep(1);
        setResult(null);
    };

    return (
        <div className={`mx-auto py-12 px-4 transition-all duration-500 ${step === 4 ? "max-w-7xl" : "max-w-4xl"}`}>
            <div className="text-center mb-12">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/10 text-saffron mb-4 text-sm font-semibold border border-saffron/20"
                >
                    <Sparkles className="h-4 w-4" />
                    <span>NPS AI Labs</span>
                </motion.div>
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">{t.title}</h1>
                <p className="text-muted-foreground text-lg">{t.subtitle}</p>
            </div>

            <div className="relative">
                {/* Progress Bar */}
                {step <= 3 && (
                    <div className="flex justify-between mb-8 max-w-xs mx-auto relative">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col items-center z-10">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${step >= i ? "bg-saffron border-saffron text-white" : "bg-background border-muted text-muted-foreground"}`}>
                                    {i}
                                </div>
                            </div>
                        ))}
                        <div className="absolute top-4 left-0 right-0 h-0.5 bg-muted -z-0" />
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${((step - 1) / 2) * 100}%` }}
                            className="absolute top-4 left-0 h-0.5 bg-saffron -z-0 transition-all duration-500"
                        />
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                        >
                            <Card className="border-accent/10 bg-card/50 backdrop-blur-sm shadow-xl">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-saffron/10 text-saffron">
                                            <User className="h-5 w-5" />
                                        </div>
                                        <CardTitle>{t.step1}</CardTitle>
                                    </div>
                                    <CardDescription>{t.step1Desc}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm font-medium">
                                            <Label>{t.ageLabel}</Label>
                                            <span className="text-saffron font-bold text-lg">{data.age}</span>
                                        </div>
                                        <Slider
                                            value={[data.age]}
                                            onValueChange={([v]) => setData({ ...data, age: v })}
                                            min={18}
                                            max={60}
                                            step={1}
                                            className="py-4"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <Label>{t.incomeLabel}</Label>
                                        <div className="relative">
                                            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                type="number"
                                                className="pl-10 h-12 text-lg bg-background/50"
                                                value={data.income}
                                                onChange={(e) => setData({ ...data, income: parseInt(e.target.value) || 0 })}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end pt-4">
                                        <Button onClick={nextStep} className="bg-saffron hover:bg-saffron/90 text-white gap-2 px-8 h-12">
                                            {t.next} <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                        >
                            <Card className="border-accent/10 bg-card/50 backdrop-blur-sm shadow-xl">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-india-green/10 text-india-green">
                                            <TrendingUp className="h-5 w-5" />
                                        </div>
                                        <CardTitle>{t.step2}</CardTitle>
                                    </div>
                                    <CardDescription>{t.step2Desc}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <Label>{t.retirementAgeLabel}</Label>
                                            <div className="flex items-center gap-4">
                                                <Input
                                                    type="number"
                                                    value={data.retirementAge}
                                                    onChange={(e) => setData({ ...data, retirementAge: parseInt(e.target.value) || 0 })}
                                                    className="h-12 bg-background/50"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <Label>{t.savingsLabel}</Label>
                                            <div className="relative">
                                                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    type="number"
                                                    value={data.savings}
                                                    onChange={(e) => setData({ ...data, savings: parseInt(e.target.value) || 0 })}
                                                    className="pl-10 h-12 bg-background/50"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm font-medium">
                                            <Label>{t.pensionGoalLabel}</Label>
                                            <span className="text-india-green font-bold text-lg">₹{data.pensionGoal.toLocaleString()}</span>
                                        </div>
                                        <Slider
                                            value={[data.pensionGoal]}
                                            onValueChange={([v]) => setData({ ...data, pensionGoal: v })}
                                            min={5000}
                                            max={200000}
                                            step={5000}
                                            className="py-4"
                                        />
                                    </div>
                                    <div className="flex justify-between pt-4">
                                        <Button variant="outline" onClick={prevStep} className="gap-2 px-8 h-12">
                                            <ChevronLeft className="h-4 w-4" /> {t.back}
                                        </Button>
                                        <Button onClick={nextStep} className="bg-saffron hover:bg-saffron/90 text-white gap-2 px-8 h-12">
                                            {t.next} <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                        >
                            <Card className="border-accent/10 bg-card/50 backdrop-blur-sm shadow-xl">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-navy-blue/10 text-navy-blue">
                                            <Sparkles className="h-5 w-5" />
                                        </div>
                                        <CardTitle>{t.step3}</CardTitle>
                                    </div>
                                    <CardDescription>{t.step3Desc}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {["conservative", "balanced", "aggressive"].map((p) => (
                                            <button
                                                key={p}
                                                onClick={() => setData({ ...data, riskProfile: p as any })}
                                                className={`p-6 rounded-xl border-2 transition-all text-center space-y-2 ${data.riskProfile === p ? "border-saffron bg-saffron/5 shadow-inner" : "border-muted hover:border-saffron/30"}`}
                                            >
                                                <div className="font-bold capitalize">{t[p as keyof typeof t]}</div>
                                                <div className="text-xs text-muted-foreground">
                                                    {p === "conservative" && t.consDesc}
                                                    {p === "balanced" && t.balDesc}
                                                    {p === "aggressive" && t.aggDesc}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex justify-between pt-4">
                                        <Button variant="outline" onClick={prevStep} className="gap-2 px-8 h-12">
                                            <ChevronLeft className="h-4 w-4" /> {t.back}
                                        </Button>
                                        <Button onClick={generatePlan} className="bg-gradient-to-r from-saffron to-orange-500 hover:opacity-90 text-white gap-2 px-8 h-12 font-bold shadow-lg shadow-saffron/20">
                                            <Sparkles className="h-4 w-4 text-white animate-pulse" /> {t.generatePlan}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Card className="border-accent/10 bg-card/50 overflow-hidden shadow-2xl">
                                <CardHeader className="bg-muted/30 border-b">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-saffron text-white shadow-lg shadow-saffron/30">
                                                <FileText className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-2xl">{t.title}</CardTitle>
                                                <CardDescription>{t.genDate} {new Date().toLocaleDateString()}</CardDescription>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" onClick={reset} className="gap-2">
                                                <RefreshCcw className="h-4 w-4" /> {t.reset}
                                            </Button>
                                            <Button
                                                disabled={isGenerating || isDownloading}
                                                onClick={downloadPDF}
                                                className="bg-navy-blue hover:bg-navy-blue/90 text-white gap-2 shadow-lg shadow-navy-blue/20"
                                            >
                                                {isDownloading ? (
                                                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                ) : (
                                                    <Download className="h-4 w-4" />
                                                )}
                                                {isDownloading ? t.pdfLoading : t.downloadPlan}
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="p-4 md:p-8 bg-background/30 backdrop-blur-md">
                                        {isGenerating && !result ? (
                                            <div className="flex flex-col items-center justify-center py-20 space-y-4">
                                                <div className="w-12 h-12 border-4 border-saffron border-t-transparent rounded-full animate-spin" />
                                                <p className="text-muted-foreground animate-pulse font-medium">{t.calculating}</p>
                                            </div>
                                        ) : (
                                            <div ref={reportRef} className="p-6 md:p-12 bg-white text-zinc-900 rounded-xl shadow-2xl prose prose-zinc max-w-none border border-zinc-200">
                                                <div className="pb-8 border-b-2 border-zinc-100 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <div className="w-8 h-8 rounded bg-saffron flex items-center justify-center text-white font-bold">NPS</div>
                                                            <h2 className="text-zinc-400 uppercase tracking-widest text-xs font-bold m-0">{t.reportHeader}</h2>
                                                        </div>
                                                        <h1 className="text-3xl md:text-4xl font-black m-0 text-zinc-900 tracking-tight leading-none">{t.reportTitle}</h1>
                                                        <p className="text-zinc-500 mt-2 text-sm">{t.reportSub}</p>
                                                    </div>
                                                    <div className="text-left md:text-right">
                                                        <Badge variant="outline" className="border-saffron/30 text-saffron bg-saffron/5 px-4 py-1 uppercase tracking-widest font-bold text-xs">{data.riskProfile} Portfolio</Badge>
                                                        <p className="text-[10px] text-zinc-400 mt-2 font-mono uppercase">ID: NPS-AI-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                                                    {[
                                                        { label: "Current Age", value: data.age, icon: User },
                                                        { label: "Monthly Income", value: `₹${data.income.toLocaleString()}`, icon: IndianRupee },
                                                        { label: "Target Pension", value: `₹${data.pensionGoal.toLocaleString()}/mo`, icon: TrendingUp },
                                                        { label: "Current Assets", value: `₹${data.savings.toLocaleString()}`, icon: FileText }
                                                    ].map((item) => (
                                                        <div key={item.label} className="relative group">
                                                            <div className="text-[10px] uppercase font-black text-zinc-400 mb-1 tracking-tighter flex items-center gap-1">
                                                                <item.icon className="h-3 w-3" />
                                                                {item.label}
                                                            </div>
                                                            <div className="text-lg font-black text-zinc-900 leading-none">{item.value}</div>
                                                            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-saffron/20 group-hover:bg-saffron transition-colors rounded-full" />
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="markdown-content prose prose-zinc max-w-none text-zinc-800 min-h-[300px]">
                                                    {result ? (
                                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                            {result}
                                                        </ReactMarkdown>
                                                    ) : (
                                                        !isGenerating && (
                                                            <div className="py-20 text-center text-zinc-400 border-2 border-dashed border-zinc-100 rounded-2xl bg-zinc-50/50">
                                                                <FileText className="h-12 w-12 mx-auto mb-4 opacity-10" />
                                                                <p className="text-sm font-medium mb-4">{t.noPlanContent}</p>
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    onClick={generatePlan}
                                                                    className="gap-2 border-saffron/20 hover:border-saffron/50 text-saffron"
                                                                >
                                                                    <RefreshCcw className="h-3 w-3" /> {t.retry}
                                                                </Button>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <div className="mt-16 pt-10 border-t border-zinc-100 flex flex-col items-center gap-4">
                                                    <div className="flex gap-4 opacity-50 grayscale">
                                                        <div className="w-12 h-6 bg-zinc-200 rounded" />
                                                        <div className="w-12 h-6 bg-zinc-200 rounded" />
                                                        <div className="w-12 h-6 bg-zinc-200 rounded" />
                                                    </div>
                                                    <p className="text-[10px] text-zinc-400 text-center font-medium max-w-md">
                                                        {t.disclaimer}
                                                    </p>
                                                    <div className="text-[10px] text-zinc-300 font-mono">CODE: NPS-LABS-G1.5F</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/constants/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "languageFullNames",
    ()=>languageFullNames,
    "languageNames",
    ()=>languageNames,
    "translations",
    ()=>translations
]);
const languageNames = {
    en: "English",
    hi: "हिन्दी",
    ta: "தமிழ்",
    te: "తెలుగు",
    bn: "বাংলা",
    mr: "मराठी",
    gu: "ગુજરાતી",
    kn: "ಕನ್ನಡ",
    ml: "മലയാളം",
    pa: "ਪੰਜਾਬੀ",
    or: "ଓଡ଼ିଆ",
    as: "অসমীয়া",
    ur: "اردو",
    sa: "संस्कृतम्",
    mai: "मैथिली",
    sat: "ᱥᱟᱱᱛᱟᱲᱤ",
    ks: "کٲشُر",
    ne: "नेपाली",
    sd: "سنڌي",
    kok: "कोंकणी",
    doi: "डोगरी",
    mni: "মৈতৈলোন্",
    brx: "बड़ो"
};
const languageFullNames = {
    en: "English",
    hi: "Hindi",
    ta: "Tamil",
    te: "Telugu",
    bn: "Bengali",
    mr: "Marathi",
    gu: "Gujarati",
    kn: "Kannada",
    ml: "Malayalam",
    pa: "Punjabi",
    or: "Odia",
    as: "Assamese",
    ur: "Urdu",
    sa: "Sanskrit",
    mai: "Maithili",
    sat: "Santali",
    ks: "Kashmiri",
    ne: "Nepali",
    sd: "Sindhi",
    kok: "Konkani",
    doi: "Dogri",
    mni: "Manipuri",
    brx: "Bodo"
};
const en = {
    nav: {
        brand: "NPS Assistant",
        home: "Home",
        ai: "AI Assistant",
        calc: "Calculator",
        learn: "Learn",
        login: "Login",
        getStarted: "Get Started"
    },
    hero: {
        tag: "Powered by Generative AI",
        title: "Secure Your Future with NPS Assistant",
        subtitle: "Get instant answers, personalized pension planning, and financial education in your language.",
        ctaChat: "Talk to AI Agent",
        ctaCalc: "Calculate Pension",
        featuresTitle: "Everything you need to know",
        featuresSubtitle: "Comprehensive tools to manage your retirement planning.",
        f1title: "Multilingual AI Chat",
        f1desc: "Ask questions in any Indian language. Our AI understands and responds in all 22 official languages.",
        f2title: "Pension Calculator",
        f2desc: "Visualize your future wealth with our interactive calculator.",
        f3title: "Financial Literacy",
        f3desc: "Master the National Pension System with easy-to-understand guides.",
        ctaBannerTitle: "Ready to plan your retirement?",
        ctaBannerDesc: "Start a conversation with our AI assistant and get personalized guidance in seconds.",
        ctaBannerBtn: "Start Chatting"
    },
    stats: {
        subscribers: "Subscribers",
        aum: "AUM",
        returns: "Avg Returns",
        govtBacked: "Govt Backed"
    },
    chat: {
        header: "NPS AI Assistant",
        subheader: "Powered by Gemini AI • Government of India",
        emptyTitle: "NPS AI Assistant",
        emptyDesc: "Ask me anything about the National Pension System — tax benefits, withdrawal rules, account management, and more.",
        q1: "💰 Tax Benefits",
        q2: "📋 Open Account",
        q3: "🏦 Withdrawal Rules",
        q4: "📊 Tier I vs Tier II",
        placeholder: "Ask about NPS, tax benefits, withdrawal rules...",
        disclaimer: "NPS AI Assistant may produce inaccurate information. Verify with official PFRDA sources.",
        readAloud: "Read Aloud",
        stop: "Stop",
        liveAssistant: "Live Assistant",
        listening: "I'm listening...",
        thinking: "Thinking..."
    },
    calc: {
        badge: "Pension Calculator",
        title: "NPS Pension Calculator",
        subtitle: "See the power of compounding. Adjust the sliders to visualize how your monthly contributions grow into a retirement corpus.",
        invested: "Total Invested",
        wealth: "Wealth Gained",
        corpus: "Total Corpus",
        pension: "Monthly Pension (est)",
        inputTitle: "Your Inputs",
        inputDesc: "Customize your investment plan",
        age: "Current Age",
        retAge: "Retirement Age",
        monthly: "Monthly Contribution",
        expReturn: "Expected Return",
        duration: "Duration",
        taxSaved: "Tax saved (80CCD)",
        taxValue: "Up to ₹2L/year",
        years: "years",
        chartTitle: "Growth Projection",
        loading: "Loading Chart..."
    },
    learn: {
        badge: "Financial Education",
        title: "Financial Wisdom Hub",
        subtitle: "Master your retirement planning with our curated guides and resources about the National Pension System.",
        a1title: "Understanding NPS Tiers",
        a1cat: "Basics",
        a1desc: "Tier I is mandatory for government servants, while Tier II is a voluntary savings account. Learn about contribution limits, lock-in periods, and withdrawal flexibility.",
        a2title: "Tax Benefits Explained",
        a2cat: "Tax Savings",
        a2desc: "Save up to ₹1.5 Lakhs under Section 80C and an additional ₹50,000 under Section 80CCD(1B). Your employer's contribution up to 14% is also tax-free.",
        a3title: "Withdrawal Rules",
        a3cat: "Regulations",
        a3desc: "You can withdraw up to 60% of your corpus tax-free at age 60. The remaining 40% must be used to purchase an annuity.",
        a4title: "Investment Choices",
        a4cat: "Investing",
        a4desc: "Choose between Auto Choice (Life Cycle Fund) or Active Choice to allocate between Equity (E), Corporate Bonds (C), Government Securities (G), and Alternative Assets (A).",
        readMore: "Read full article",
        ctaTitle: "Confused? Ask our AI Expert.",
        ctaDesc: "Don't want to read through long manuals? Just chat with our AI assistant in your preferred language.",
        ctaBtn: "Start Chatting"
    }
};
const hi = {
    nav: {
        brand: "एनपीएस सहायक",
        home: "होम",
        ai: "एआई सहायक",
        calc: "कैलकुलेटर",
        learn: "सीखें",
        login: "लॉगिन",
        getStarted: "शुरू करें"
    },
    hero: {
        tag: "जेनेरेटिव एआई द्वारा संचालित",
        title: "एनपीएस सहायक के साथ अपना भविष्य सुरक्षित करें",
        subtitle: "अपनी भाषा में त्वरित उत्तर, व्यक्तिगत पेंशन योजना और वित्तीय शिक्षा प्राप्त करें।",
        ctaChat: "एआई एजेंट से बात करें",
        ctaCalc: "पेंशन की गणना करें",
        featuresTitle: "वह सब कुछ जो आपको जानना आवश्यक है",
        featuresSubtitle: "आपकी सेवानिवृत्ति योजना के लिए व्यापक उपकरण।",
        f1title: "बहुभाषी एआई चैट",
        f1desc: "किसी भी भारतीय भाषा में प्रश्न पूछें। हमारा एआई सभी 22 आधिकारिक भाषाओं में जवाब देता है।",
        f2title: "पेंशन कैलकुलेटर",
        f2desc: "हमारे इंटरैक्टिव कैलकुलेटर से अपनी भविष्य की संपत्ति देखें।",
        f3title: "वित्तीय साक्षरता",
        f3desc: "आसान गाइड के साथ राष्ट्रीय पेंशन प्रणाली में महारत हासिल करें।",
        ctaBannerTitle: "अपनी सेवानिवृत्ति की योजना बनाने के लिए तैयार हैं?",
        ctaBannerDesc: "हमारे एआई सहायक से बात करें और सेकंडों में मार्गदर्शन पाएं।",
        ctaBannerBtn: "चैट शुरू करें"
    },
    stats: {
        subscribers: "ग्राहक",
        aum: "एयूएम",
        returns: "औसत रिटर्न",
        govtBacked: "सरकार समर्थित"
    },
    chat: {
        header: "एनपीएस एआई सहायक",
        subheader: "जेमिनी एआई द्वारा संचालित • भारत सरकार",
        emptyTitle: "एनपीएस एआई सहायक",
        emptyDesc: "राष्ट्रीय पेंशन प्रणाली के बारे में कुछ भी पूछें — कर लाभ, निकासी नियम, खाता प्रबंधन।",
        q1: "💰 कर लाभ",
        q2: "📋 खाता खोलें",
        q3: "🏦 निकासी नियम",
        q4: "📊 टियर I बनाम II",
        placeholder: "NPS, कर लाभ, निकासी नियमों के बारे में पूछें...",
        disclaimer: "एनपीएस एआई सहायक गलत जानकारी दे सकता है। आधिकारिक PFRDA स्रोतों से सत्यापित करें।",
        readAloud: "ज़ोर से पढ़ें",
        stop: "रोकें",
        liveAssistant: "लाइव सहायक",
        listening: "मैं सुन रहा हूँ...",
        thinking: "सोच रहा हूँ..."
    },
    calc: {
        badge: "पेंशन कैलकुलेटर",
        title: "एनपीएस पेंशन कैलकुलेटर",
        subtitle: "चक्रवृद्धि की शक्ति देखें। स्लाइडर्स को समायोजित करें।",
        invested: "कुल निवेश",
        wealth: "संपत्ति लाभ",
        corpus: "कुल कोष",
        pension: "मासिक पेंशन (अनु.)",
        inputTitle: "आपके इनपुट",
        inputDesc: "अपनी निवेश योजना अनुकूलित करें",
        age: "वर्तमान आयु",
        retAge: "सेवानिवृत्ति आयु",
        monthly: "मासिक योगदान",
        expReturn: "अपेक्षित रिटर्न",
        duration: "अवधि",
        taxSaved: "कर बचत (80CCD)",
        taxValue: "₹2L/वर्ष तक",
        years: "वर्ष",
        chartTitle: "वृद्धि अनुमान",
        loading: "चार्ट लोड हो रहा है..."
    },
    learn: {
        badge: "वित्तीय शिक्षा",
        title: "वित्तीय ज्ञान केंद्र",
        subtitle: "राष्ट्रीय पेंशन प्रणाली के बारे में हमारे गाइड से सेवानिवृत्ति योजना में महारत हासिल करें।",
        a1title: "एनपीएस टियर समझें",
        a1cat: "मूल बातें",
        a1desc: "टियर I सरकारी कर्मचारियों के लिए अनिवार्य है, जबकि टियर II एक स्वैच्छिक बचत खाता है।",
        a2title: "कर लाभ समझाए गए",
        a2cat: "कर बचत",
        a2desc: "धारा 80C के तहत ₹1.5 लाख और 80CCD(1B) के तहत अतिरिक्त ₹50,000 बचाएं।",
        a3title: "निकासी नियम",
        a3cat: "नियमन",
        a3desc: "60 वर्ष की आयु में अपने कोष का 60% तक कर-मुक्त निकाल सकते हैं।",
        a4title: "निवेश विकल्प",
        a4cat: "निवेश",
        a4desc: "ऑटो चॉइस या एक्टिव चॉइस के बीच चुनें — इक्विटी, कॉर्पोरेट बॉन्ड, सरकारी प्रतिभूतियां।",
        readMore: "पूरा लेख पढ़ें",
        ctaTitle: "भ्रमित हैं? हमारे एआई विशेषज्ञ से पूछें।",
        ctaDesc: "लंबे मैनुअल नहीं पढ़ना चाहते? बस हमारे एआई सहायक से चैट करें।",
        ctaBtn: "चैट शुरू करें"
    }
};
// Helper to generate translations for other languages using translated key strings
function makeLang(nav, hero, stats, chat, calc, learn) {
    return {
        nav: {
            ...en.nav,
            ...nav
        },
        hero: {
            ...en.hero,
            ...hero
        },
        stats: {
            ...en.stats,
            ...stats
        },
        chat: {
            ...en.chat,
            ...chat
        },
        calc: {
            ...en.calc,
            ...calc
        },
        learn: {
            ...en.learn,
            ...learn
        }
    };
}
const ta = makeLang({
    brand: "NPS உதவியாளர்",
    home: "முகப்பு",
    ai: "AI உதவியாளர்",
    calc: "கால்குலேட்டர்",
    learn: "கற்றுக்கொள்",
    login: "உள்நுழைய",
    getStarted: "தொடங்கு"
}, {
    tag: "ஜெனரேட்டிவ் AI மூலம் இயக்கப்படுகிறது",
    title: "NPS உதவியாளருடன் உங்கள் எதிர்காலத்தைப் பாதுகாக்கவும்",
    subtitle: "உங்கள் மொழியில் உடனடி பதில்கள், தனிப்பயன் ஓய்வூதிய திட்டமிடல் மற்றும் நிதிக் கல்வி பெறுங்கள்.",
    ctaChat: "AI முகவருடன் பேசு",
    ctaCalc: "ஓய்வூதியம் கணக்கிடு",
    featuresTitle: "நீங்கள் தெரிந்துகொள்ள வேண்டிய அனைத்தும்",
    f1title: "பல மொழி AI அரட்டை",
    f2title: "ஓய்வூதிய கால்குலேட்டர்",
    f3title: "நிதி கல்வி",
    ctaBannerTitle: "உங்கள் ஓய்வுக் காலத்தை திட்டமிடத் தயாரா?",
    ctaBannerBtn: "அரட்டை தொடங்கு"
}, {
    subscribers: "சந்தாதாரர்கள்",
    aum: "AUM",
    returns: "சராசரி வருமானம்",
    govtBacked: "அரசு ஆதரவு"
}, {
    header: "NPS AI உதவியாளர்",
    emptyTitle: "NPS AI உதவியாளர்",
    emptyDesc: "தேசிய ஓய்வூதிய திட்டம் பற்றி எதையும் கேளுங்கள்.",
    q1: "💰 வரிச் சலுகைகள்",
    q2: "📋 கணக்கு திறக்க",
    q3: "🏦 திரும்பப்பெறும் விதிகள்",
    q4: "📊 டையர் I vs II",
    placeholder: "NPS, வரிச் சலுகைகள் பற்றி கேளுங்கள்...",
    liveAssistant: "நேரடி உதவியாளர்",
    listening: "நான் கேட்கிறேன்...",
    thinking: "சிந்திக்கிறேன்..."
}, {
    badge: "ஓய்வூதிய கால்குலேட்டர்",
    title: "NPS ஓய்வூதிய கால்குலேட்டர்",
    invested: "மொத்த முதலீடு",
    wealth: "செல்வ ஆதாயம்",
    corpus: "மொத்த நிதி",
    pension: "மாத ஓய்வூதியம்",
    inputTitle: "உங்கள் உள்ளீடுகள்",
    age: "தற்போதைய வயது",
    retAge: "ஓய்வு வயது",
    monthly: "மாதாந்திர பங்களிப்பு",
    expReturn: "எதிர்பார்க்கப்படும் வருமானம்",
    chartTitle: "வளர்ச்சி கணிப்பு",
    years: "ஆண்டுகள்"
}, {
    badge: "நிதிக் கல்வி",
    title: "நிதி ஞான மையம்",
    a1title: "NPS அடுக்குகளைப் புரிந்துகொள்",
    a2title: "வரிச் சலுகைகள் விளக்கம்",
    a3title: "திரும்பப்பெறும் விதிகள்",
    a4title: "முதலீட்டு விருப்பங்கள்",
    readMore: "முழு கட்டுரை படிக்க",
    ctaTitle: "குழப்பமா? எங்கள் AI நிபுணரிடம் கேளுங்கள்.",
    ctaBtn: "அரட்டை தொடங்கு"
});
const te = makeLang({
    brand: "NPS సహాయకుడు",
    home: "హోమ్",
    ai: "AI సహాయకుడు",
    calc: "కాలిక్యులేటర్",
    learn: "నేర్చుకో",
    getStarted: "ప్రారంభించు"
}, {
    tag: "జెనరేటివ్ AI ద్వారా",
    title: "NPS సహాయకుడితో మీ భవిష్యత్తును భద్రం చేసుకోండి",
    subtitle: "మీ భాషలో తక్షణ సమాధానాలు, పెన్షన్ ప్రణాళిక మరియు ఆర్థిక విద్య పొందండి.",
    ctaChat: "AI ఏజెంట్‌తో మాట్లాడండి",
    ctaCalc: "పెన్షన్ లెక్కించండి",
    featuresTitle: "మీరు తెలుసుకోవలసినవన్నీ",
    ctaBannerTitle: "మీ పదవీ విరమణను ప్రణాళిక చేయడానికి సిద్ధంగా ఉన్నారా?",
    ctaBannerBtn: "చాట్ ప్రారంభించు"
}, {
    subscribers: "చందాదారులు",
    returns: "సగటు రాబడి",
    govtBacked: "ప్రభుత్వ మద్దతు"
}, {
    header: "NPS AI సహాయకుడు",
    emptyDesc: "జాతీయ పెన్షన్ వ్యవస్థ గురించి ఏదైనా అడగండి.",
    placeholder: "NPS, పన్ను ప్రయోజనాల గురించి అడగండి...",
    liveAssistant: "లైవ్ అసిస్టెంట్",
    listening: "నేను వింటున్నాను...",
    thinking: "ఆలోచిస్తున్నాను..."
}, {
    badge: "పెన్షన్ కాలిక్యులేటర్",
    title: "NPS పెన్షన్ కాలిక్యులేటర్",
    invested: "మొత్తం పెట్టుబడి",
    wealth: "సంపద లాభం",
    corpus: "మొత్తం కార్పస్",
    pension: "నెలవారీ పెన్షన్",
    inputTitle: "మీ ఇన్‌పుట్‌లు",
    age: "ప్రస్తుత వయసు",
    retAge: "రిటైర్మెంట్ వయసు",
    monthly: "నెలవారీ సహకారం",
    chartTitle: "వృద్ధి అంచనా",
    years: "సంవత్సరాలు"
}, {
    badge: "ఆర్థిక విద్య",
    title: "ఆర్థిక జ్ఞాన కేంద్రం",
    readMore: "పూర్తి వ్యాసం చదవండి",
    ctaTitle: "అయోమయంగా ఉందా? మా AI నిపుణుడిని అడగండి.",
    ctaBtn: "చాట్ ప్రారంభించు"
});
const bn = makeLang({
    brand: "NPS সহায়ক",
    home: "হোম",
    ai: "AI সহায়ক",
    calc: "ক্যালকুলেটর",
    learn: "শিখুন",
    getStarted: "শুরু করুন"
}, {
    tag: "জেনারেটিভ AI দ্বারা চালিত",
    title: "NPS সহায়কের সাথে আপনার ভবিষ্যৎ সুরক্ষিত করুন",
    subtitle: "আপনার ভাষায় তাৎক্ষণিক উত্তর, পেনশন পরিকল্পনা এবং আর্থিক শিক্ষা পান।",
    ctaChat: "AI এজেন্টের সাথে কথা বলুন",
    ctaCalc: "পেনশন গণনা করুন",
    featuresTitle: "আপনার জানা দরকার সবকিছু",
    ctaBannerTitle: "অবসর পরিকল্পনা করতে প্রস্তুত?",
    ctaBannerBtn: "চ্যাট শুরু করুন"
}, {
    subscribers: "গ্রাহক",
    returns: "গড় রিটার্ন",
    govtBacked: "সরকার সমর্থিত"
}, {
    header: "NPS AI সহায়ক",
    emptyDesc: "জাতীয় পেনশন প্রকল্প সম্পর্কে যেকোনো কিছু জিজ্ঞাসা করুন।",
    placeholder: "NPS, কর সুবিধা সম্পর্কে জিজ্ঞাসা করুন...",
    liveAssistant: "লাইভ সহকারী",
    listening: "আমি শুনছি...",
    thinking: "ভাবছি..."
}, {
    badge: "পেনশন ক্যালকুলেটর",
    title: "NPS পেনশন ক্যালকুলেটর",
    invested: "মোট বিনিয়োগ",
    wealth: "সম্পদ লাভ",
    corpus: "মোট কর্পাস",
    pension: "মাসিক পেনশন",
    inputTitle: "আপনার ইনপুট",
    age: "বর্তমান বয়স",
    retAge: "অবসরের বয়স",
    monthly: "মাসিক অবদান",
    chartTitle: "প্রবৃদ্ধি অনুমান",
    years: "বছর"
}, {
    badge: "আর্থিক শিক্ষা",
    title: "আর্থিক জ্ঞান কেন্দ্র",
    readMore: "সম্পূর্ণ নিবন্ধ পড়ুন",
    ctaTitle: "বিভ্রান্ত? আমাদের AI বিশেষজ্ঞকে জিজ্ঞাসা করুন।",
    ctaBtn: "চ্যাট শুরু করুন"
});
const mr = makeLang({
    brand: "NPS सहाय्यक",
    home: "मुख्यपृष्ठ",
    ai: "AI सहाय्यक",
    calc: "कॅल्क्युलेटर",
    learn: "शिका",
    getStarted: "सुरू करा"
}, {
    title: "NPS सहाय्यकासह तुमचे भविष्य सुरक्षित करा",
    subtitle: "तुमच्या भाषेत त्वरित उत्तरे, पेन्शन नियोजन आणि आर्थिक शिक्षण मिळवा.",
    ctaChat: "AI एजंटशी बोला",
    ctaCalc: "पेन्शन मोजा",
    featuresTitle: "तुम्हाला जे माहित असणे आवश्यक आहे",
    ctaBannerTitle: "तुमच्या निवृत्तीचे नियोजन करण्यास तयार आहात?",
    ctaBannerBtn: "चॅट सुरू करा"
}, {
    subscribers: "ग्राहक",
    returns: "सरासरी परतावा",
    govtBacked: "सरकार समर्थित"
}, {
    header: "NPS AI सहाय्यक",
    emptyDesc: "राष्ट्रीय पेन्शन योजनेबद्दल काहीही विचारा.",
    placeholder: "NPS, कर लाभांबद्दल विचारा...",
    liveAssistant: "लाइव्ह सहाय्यक",
    listening: "मी ऐकत आहे...",
    thinking: "विचार करत आहे..."
}, {
    badge: "पेन्शन कॅल्क्युलेटर",
    title: "NPS पेन्शन कॅल्क्युलेटर",
    invested: "एकूण गुंतवणूक",
    wealth: "संपत्ती लाभ",
    corpus: "एकूण कॉर्पस",
    pension: "मासिक पेन्शन",
    inputTitle: "तुमचे इनपुट्स",
    age: "सध्याचे वय",
    retAge: "निवृत्ती वय",
    monthly: "मासिक योगदान",
    chartTitle: "वृद्धी अंदाज",
    years: "वर्षे"
}, {
    badge: "आर्थिक शिक्षण",
    title: "आर्थिक ज्ञान केंद्र",
    readMore: "पूर्ण लेख वाचा",
    ctaTitle: "गोंधळात आहात? आमच्या AI तज्ञांना विचारा.",
    ctaBtn: "चॅट सुरू करा"
});
const gu = makeLang({
    brand: "NPS સહાયક",
    home: "હોમ",
    ai: "AI સહાયક",
    calc: "કેલ્ક્યુલેટર",
    learn: "શીખો",
    getStarted: "શરૂ કરો"
}, {
    title: "NPS સહાયક સાથે તમારું ભવિષ્ય સુરક્ષિત કરો",
    ctaChat: "AI એજન્ટ સાથે વાત કરો",
    ctaCalc: "પેન્શન ગણતરી",
    featuresTitle: "તમારે જાણવાની જરૂર છે બધું",
    ctaBannerTitle: "તમારી નિવૃત્તિ આયોજન કરવા તૈયાર છો?",
    ctaBannerBtn: "ચેટ શરૂ કરો"
}, {
    subscribers: "ગ્રાહકો",
    returns: "સરેરાશ વળતર",
    govtBacked: "સરકાર સમર્થિત"
}, {
    header: "NPS AI સહાયક",
    thinking: "વિચારી રહ્યું છે...",
    placeholder: "NPS, કર લાભ વિશે પૂછો..."
}, {
    badge: "પેન્શન કેલ્ક્યુલેટર",
    title: "NPS પેન્શન કેલ્ક્યુલેટર",
    invested: "કુલ રોકાણ",
    wealth: "સંપત્તિ લાભ",
    corpus: "કુલ કોર્પસ",
    pension: "માસિક પેન્શન",
    age: "વર્તમાન ઉંમર",
    retAge: "નિવૃત્તિ ઉંમર",
    monthly: "માસિક યોગદાન",
    chartTitle: "વૃદ્ધિ અંદાજ",
    years: "વર્ષ"
}, {
    badge: "નાણાકીય શિક્ષણ",
    title: "નાણાકીય જ્ઞાન કેન્દ્ર",
    readMore: "સંપૂર્ણ લેખ વાંચો",
    ctaTitle: "મૂંઝવણમાં છો? અમારા AI નિષ્ણાતને પૂછો.",
    ctaBtn: "ચેટ શરૂ કરો"
});
const kn = makeLang({
    brand: "NPS ಸಹಾಯಕ",
    home: "ಮುಖಪುಟ",
    ai: "AI ಸಹಾಯಕ",
    calc: "ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    learn: "ಕಲಿಯಿರಿ",
    getStarted: "ಪ್ರಾರಂಭಿಸಿ"
}, {
    title: "NPS ಸಹಾಯಕದೊಂದಿಗೆ ನಿಮ್ಮ ಭವಿಷ್ಯವನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಿ",
    ctaChat: "AI ಏಜೆಂಟ್‌ನೊಂದಿಗೆ ಮಾತನಾಡಿ",
    ctaCalc: "ಪಿಂಚಣಿ ಲೆಕ್ಕಹಾಕಿ",
    ctaBannerTitle: "ನಿಮ್ಮ ನಿವೃತ್ತಿಯನ್ನು ಯೋಜಿಸಲು ಸಿದ್ಧರಾ?",
    ctaBannerBtn: "ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ"
}, {
    subscribers: "ಚಂದಾದಾರರು",
    returns: "ಸರಾಸರಿ ಆದಾಯ",
    govtBacked: "ಸರ್ಕಾರ ಬೆಂಬಲಿತ"
}, {
    header: "NPS AI ಸಹಾಯಕ",
    thinking: "ಯೋಚಿಸುತ್ತಿದೆ...",
    placeholder: "NPS, ತೆರಿಗೆ ಪ್ರಯೋಜನಗಳ ಬಗ್ಗೆ ಕೇಳಿ..."
}, {
    badge: "ಪಿಂಚಣಿ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    title: "NPS ಪಿಂಚಣಿ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    invested: "ಒಟ್ಟು ಹೂಡಿಕೆ",
    corpus: "ಒಟ್ಟು ಕಾರ್ಪಸ್",
    pension: "ಮಾಸಿಕ ಪಿಂಚಣಿ",
    age: "ಪ್ರಸ್ತುತ ವಯಸ್ಸು",
    chartTitle: "ಬೆಳವಣಿಗೆ ಅಂದಾಜು",
    years: "ವರ್ಷಗಳು"
}, {
    badge: "ಹಣಕಾಸು ಶಿಕ್ಷಣ",
    title: "ಹಣಕಾಸು ಜ್ಞಾನ ಕೇಂದ್ರ",
    readMore: "ಪೂರ್ಣ ಲೇಖನ ಓದಿ",
    ctaTitle: "ಗೊಂದಲವಿದೆಯೇ? ನಮ್ಮ AI ತಜ್ಞರನ್ನು ಕೇಳಿ.",
    ctaBtn: "ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ"
});
const ml = makeLang({
    brand: "NPS അസിസ്റ്റന്റ്",
    home: "ഹോം",
    ai: "AI അസിസ്റ്റന്റ്",
    calc: "കാൽക്കുലേറ്റർ",
    learn: "പഠിക്കുക",
    getStarted: "തുടങ്ങുക"
}, {
    title: "NPS അസിസ്റ്റന്റുമായി നിങ്ങളുടെ ഭാവി സുരക്ഷിതമാക്കുക",
    ctaChat: "AI ഏജന്റിനോട് സംസാരിക്കുക",
    ctaCalc: "പെൻഷൻ കണക്കാക്കുക",
    ctaBannerTitle: "നിങ്ങളുടെ വിരമിക്കൽ ആസൂത്രണം ചെയ്യാൻ തയ്യാറാണോ?",
    ctaBannerBtn: "ചാറ്റ് ആരംഭിക്കുക"
}, {
    subscribers: "ഗ്രാഹകർ",
    returns: "ശരാശരി വരുമാനം",
    govtBacked: "സർക്കാർ പിന്തുണ"
}, {
    header: "NPS AI അസിസ്റ്റന്റ്",
    thinking: "ചിന്തിക്കുന്നു...",
    placeholder: "NPS, നികുതി ആനുകൂല്യങ്ങളെ കുറിച്ച് ചോദിക്കുക..."
}, {
    badge: "പെൻഷൻ കാൽക്കുലേറ്റർ",
    title: "NPS പെൻഷൻ കാൽക്കുലേറ്റർ",
    invested: "ആകെ നിക്ഷേപം",
    corpus: "ആകെ കോർപ്പസ്",
    pension: "പ്രതിമാസ പെൻഷൻ",
    age: "നിലവിലെ പ്രായം",
    chartTitle: "വളർച്ചാ പ്രവചനം",
    years: "വർഷം"
}, {
    badge: "സാമ്പത്തിക വിദ്യാഭ്യാസം",
    title: "സാമ്പത്തിക ജ്ഞാന കേന്ദ്രം",
    readMore: "പൂർണ്ണ ലേഖനം വായിക്കുക",
    ctaTitle: "ആശയക്കുഴപ്പമുണ്ടോ? ഞങ്ങളുടെ AI വിദഗ്ധനോട് ചോദിക്കുക.",
    ctaBtn: "ചാറ്റ് ആരംഭിക്കുക"
});
const pa = makeLang({
    brand: "NPS ਸਹਾਇਕ",
    home: "ਹੋਮ",
    ai: "AI ਸਹਾਇਕ",
    calc: "ਕੈਲਕੁਲੇਟਰ",
    learn: "ਸਿੱਖੋ",
    getStarted: "ਸ਼ੁਰੂ ਕਰੋ"
}, {
    title: "NPS ਸਹਾਇਕ ਨਾਲ ਆਪਣਾ ਭਵਿੱਖ ਸੁਰੱਖਿਅਤ ਕਰੋ",
    ctaChat: "AI ਏਜੰਟ ਨਾਲ ਗੱਲ ਕਰੋ",
    ctaCalc: "ਪੈਨਸ਼ਨ ਗਣਨਾ",
    ctaBannerTitle: "ਆਪਣੀ ਰਿਟਾਇਰਮੈਂਟ ਯੋਜਨਾ ਬਣਾਉਣ ਲਈ ਤਿਆਰ ਹੋ?",
    ctaBannerBtn: "ਚੈਟ ਸ਼ੁਰੂ ਕਰੋ"
}, {
    subscribers: "ਗਾਹਕ",
    returns: "ਔਸਤ ਵਾਪਸੀ",
    govtBacked: "ਸਰਕਾਰ ਸਮਰਥਿਤ"
}, {
    header: "NPS AI ਸਹਾਇਕ",
    thinking: "ਸੋਚ ਰਿਹਾ ਹੈ...",
    placeholder: "NPS, ਟੈਕਸ ਲਾਭਾਂ ਬਾਰੇ ਪੁੱਛੋ..."
}, {
    badge: "ਪੈਨਸ਼ਨ ਕੈਲਕੁਲੇਟਰ",
    title: "NPS ਪੈਨਸ਼ਨ ਕੈਲਕੁਲੇਟਰ",
    invested: "ਕੁੱਲ ਨਿਵੇਸ਼",
    corpus: "ਕੁੱਲ ਕਾਰਪਸ",
    pension: "ਮਹੀਨਾਵਾਰ ਪੈਨਸ਼ਨ",
    age: "ਮੌਜੂਦਾ ਉਮਰ",
    chartTitle: "ਵਾਧਾ ਅਨੁਮਾਨ",
    years: "ਸਾਲ"
}, {
    badge: "ਵਿੱਤੀ ਸਿੱਖਿਆ",
    title: "ਵਿੱਤੀ ਗਿਆਨ ਕੇਂਦਰ",
    readMore: "ਪੂਰਾ ਲੇਖ ਪੜ੍ਹੋ",
    ctaTitle: "ਉਲਝਣ ਵਿੱਚ ਹੋ? ਸਾਡੇ AI ਮਾਹਰ ਨੂੰ ਪੁੱਛੋ.",
    ctaBtn: "ਚੈਟ ਸ਼ੁਰੂ ਕਰੋ"
});
// Simplified entries for remaining languages — key strings translated, rest falls back to English
const orT = makeLang({
    brand: "NPS ସହାୟକ",
    home: "ହୋମ",
    getStarted: "ଆରମ୍ଭ କରନ୍ତୁ"
}, {
    title: "NPS ସହାୟକ ସହିତ ଆପଣଙ୍କ ଭବିଷ୍ୟତ ସୁରକ୍ଷିତ କରନ୍ତୁ",
    ctaChat: "AI ଏଜେଣ୍ଟଙ୍କ ସହ କଥା ହୁଅନ୍ତୁ",
    ctaBannerBtn: "ଚାଟ୍ ଆରମ୍ଭ କରନ୍ତୁ"
}, {
    subscribers: "ଗ୍ରାହକ"
}, {
    header: "NPS AI ସହାୟକ",
    thinking: "ଚିନ୍ତା କରୁଛି..."
}, {
    title: "NPS ପେନ୍‌ସନ୍ କ୍ୟାଲକୁଲେଟର୍"
}, {
    title: "ଆର୍ଥିକ ଜ୍ଞାନ କେନ୍ଦ୍ର",
    ctaBtn: "ଚାଟ୍ ଆରମ୍ଭ କରନ୍ତୁ"
});
const asT = makeLang({
    brand: "NPS সহায়ক",
    home: "হোম",
    getStarted: "আৰম্ভ কৰক"
}, {
    title: "NPS সহায়কৰ সৈতে আপোনাৰ ভৱিষ্যৎ সুৰক্ষিত কৰক",
    ctaBannerBtn: "চাট আৰম্ভ কৰক"
}, {}, {
    header: "NPS AI সহায়ক",
    thinking: "ভাবি আছে..."
}, {
    title: "NPS পেঞ্চন কেলকুলেটৰ"
}, {
    title: "বিত্তীয় জ্ঞান কেন্দ্ৰ",
    ctaBtn: "চাট আৰম্ভ কৰক"
});
const urT = makeLang({
    brand: "NPS معاون",
    home: "ہوم",
    getStarted: "شروع کریں"
}, {
    title: "NPS معاون کے ساتھ اپنا مستقبل محفوظ بنائیں",
    ctaChat: "AI ایجنٹ سے بات کریں",
    ctaBannerBtn: "چیٹ شروع کریں"
}, {}, {
    header: "NPS AI معاون",
    thinking: "سوچ رہا ہے..."
}, {
    title: "NPS پنشن کیلکولیٹر"
}, {
    title: "مالی علم مرکز",
    ctaBtn: "چیٹ شروع کریں"
});
const saT = makeLang({
    brand: "NPS सहायकः"
}, {
    title: "NPS सहायकेन सह भवतः भविष्यं सुरक्षितं कुर्वन्तु"
}, {}, {
    header: "NPS AI सहायकः"
}, {
    title: "NPS निवृत्तिवेतन गणकः"
}, {
    title: "आर्थिकज्ञानकेन्द्रम्"
});
const maiT = makeLang({
    brand: "NPS सहायक"
}, {
    title: "NPS सहायक संग अपन भविष्य सुरक्षित करू"
}, {}, {
    header: "NPS AI सहायक",
    thinking: "सोचि रहल अछि..."
}, {
    title: "NPS पेंशन कैलकुलेटर"
}, {
    title: "वित्तीय ज्ञान केंद्र"
});
const satT = makeLang({
    brand: "NPS ᱜᱚᱲᱚ"
}, {
    title: "NPS ᱜᱚᱲᱚ ᱥᱟᱶᱛᱮ ᱟᱢᱟᱜ ᱢᱟᱦᱟᱸ ᱥᱩᱨᱩᱠᱥᱤᱛ"
}, {}, {
    header: "NPS AI ᱜᱚᱲᱚ"
}, {}, {});
const ksT = makeLang({
    brand: "NPS معاون"
}, {
    title: "NPS معاون سٕتؠ پنُن مُستقبل محفوظ بناوٕو"
}, {}, {
    header: "NPS AI معاون"
}, {}, {});
const neT = makeLang({
    brand: "NPS सहायक",
    home: "गृहपृष्ठ",
    getStarted: "सुरु गर्नुहोस्"
}, {
    title: "NPS सहायक संग तपाईंको भविष्य सुरक्षित गर्नुहोस्",
    ctaChat: "AI एजेन्टसँग कुरा गर्नुहोस्",
    ctaBannerBtn: "च्याट सुरु गर्नुहोस्"
}, {}, {
    header: "NPS AI सहायक",
    thinking: "सोचिरहेको छ..."
}, {
    title: "NPS पेन्सन क्याल्कुलेटर"
}, {
    title: "वित्तीय ज्ञान केन्द्र",
    ctaBtn: "च्याट सुरु गर्नुहोस्"
});
const sdT = makeLang({
    brand: "NPS اسسٽنٽ"
}, {
    title: "NPS اسسٽنٽ سان پنهنجو مستقبل محفوظ بڻايو"
}, {}, {
    header: "NPS AI اسسٽنٽ"
}, {}, {});
const kokT = makeLang({
    brand: "NPS सहाय्यक"
}, {
    title: "NPS सहाय्यकासह तुमचे भविष्य सुरक्षित करा"
}, {}, {
    header: "NPS AI सहाय्यक"
}, {}, {});
const doiT = makeLang({
    brand: "NPS सहायक"
}, {
    title: "NPS सहायक दे कन्ने अपने भविष्य गी सुरक्षित करो"
}, {}, {
    header: "NPS AI सहायक"
}, {}, {});
const mniT = makeLang({
    brand: "NPS পাউবী"
}, {
    title: "NPS পাউবীগা নখোয়গী তুংগী থৌরাং চৎননবীরকউ"
}, {}, {
    header: "NPS AI পাউবী"
}, {}, {});
const brxT = makeLang({
    brand: "NPS गोहोयाव"
}, {
    title: "NPS गोहोयाव जों नोंथांनि बेसेन खुंग्रनाय जगायो"
}, {}, {
    header: "NPS AI गोहोयाव"
}, {}, {});
const translations = {
    en,
    hi,
    ta,
    te,
    bn,
    mr,
    gu,
    kn,
    ml,
    pa,
    or: orT,
    as: asT,
    ur: urT,
    sa: saT,
    mai: maiT,
    sat: satT,
    ks: ksT,
    ne: neT,
    sd: sdT,
    kok: kokT,
    doi: doiT,
    mni: mniT,
    brx: brxT
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/contexts/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const defaultContextValue = {
    language: 'en',
    setLanguage: ()=>{},
    t: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"].en,
    languageNames: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageNames"]
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultContextValue);
const validLanguages = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageNames"]);
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            try {
                const savedLang = localStorage.getItem('language');
                if (savedLang && validLanguages.includes(savedLang)) {
                    setLanguage(savedLang);
                }
            } catch  {}
        }
    }["LanguageProvider.useEffect"], []);
    const handleSetLanguage = (lang)=>{
        setLanguage(lang);
        try {
            localStorage.setItem('language', lang);
        } catch  {}
    };
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language] || __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"].en;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage: handleSetLanguage,
            t,
            languageNames: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageNames"]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/LanguageContext.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
_s(LanguageProvider, "W8orfgzKvvs5hVi8Wxnq8KXupyo=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const AshokChakra = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "1.5",
                className: "text-saffron"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                fill: "currentColor",
                className: "text-chakra-blue"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            [
                ...Array(24)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "2.5",
                    stroke: "currentColor",
                    strokeWidth: "0.8",
                    className: "text-navy",
                    transform: `rotate(${i * 15} 12 12)`
                }, i, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 18,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = AshokChakra;
function Navbar() {
    _s();
    const { t, language, setLanguage, languageNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [langDropdownOpen, setLangDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const langRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close language dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleClickOutside = {
                "Navbar.useEffect.handleClickOutside": (e)=>{
                    if (langRef.current && !langRef.current.contains(e.target)) {
                        setLangDropdownOpen(false);
                    }
                }
            }["Navbar.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navLinks = [
        {
            href: "/",
            label: t.nav.home,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
        },
        {
            href: "/chat",
            label: t.nav.ai,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
        },
        {
            href: "/calculator",
            label: t.nav.calc,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"]
        },
        {
            href: "/learn",
            label: t.nav.learn,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
        }
    ];
    const handleLanguageSelect = (lang)=>{
        setLanguage(lang);
        setLangDropdownOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-0 z-50 glass-strong border-b border-border/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[2px] w-full flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-saffron"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-white"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-india-green"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container flex h-14 items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2.5 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-gradient-to-br from-saffron to-saffron/80 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:shadow-saffron/20 transition-all",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AshokChakra, {}, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 74,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 73,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden sm:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold tracking-tight text-foreground",
                                                children: t.nav.brand
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 77,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[9px] text-muted-foreground font-medium -mt-0.5 tracking-wider uppercase",
                                                children: "Government of India"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 78,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-1",
                                children: navLinks.map(({ href, label, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: href,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200", pathname === href ? "bg-saffron/10 text-saffron" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 37
                                                }, this),
                                                label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 33
                                        }, this)
                                    }, href, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: langRef,
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setLangDropdownOpen(!langDropdownOpen),
                                                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all border border-border/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "max-w-[60px] truncate",
                                                        children: languageNames[language]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-3 w-3 transition-transform", langDropdownOpen && "rotate-180")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 105,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: langDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: -5,
                                                        scale: 0.95
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0,
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -5,
                                                        scale: 0.95
                                                    },
                                                    transition: {
                                                        duration: 0.15
                                                    },
                                                    className: "absolute right-0 top-full mt-1.5 w-56 max-h-80 overflow-y-auto rounded-xl glass-strong border border-border/60 shadow-2xl z-50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-1.5 grid grid-cols-2 gap-0.5",
                                                        children: Object.entries(languageNames).map(([code, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleLanguageSelect(code),
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2.5 py-2 rounded-lg text-xs font-medium transition-all text-left truncate", language === code ? "bg-saffron/10 text-saffron" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"),
                                                                children: name
                                                            }, code, false, {
                                                                fileName: "[project]/components/Navbar.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 114,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 104,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/chat",
                                        className: "hidden sm:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            className: "h-8 bg-gradient-to-r from-saffron to-saffron/90 hover:from-saffron/90 hover:to-saffron/80 text-white border-0 shadow-sm text-xs font-semibold",
                                            children: t.nav.getStarted
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 145,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 144,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMobileOpen(!mobileOpen),
                                        className: "md:hidden p-2 rounded-lg hover:bg-muted/50 text-muted-foreground",
                                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 155,
                                            columnNumber: 43
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 155,
                                            columnNumber: 71
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 151,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    className: "fixed inset-x-0 top-[calc(2px+3.5rem)] z-40 md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-strong border-b border-border/40 shadow-2xl mx-2 rounded-xl mt-1 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 space-y-1",
                            children: navLinks.map(({ href, label, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    onClick: ()=>setMobileOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all", pathname === href ? "bg-saffron/10 text-saffron" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 182,
                                                columnNumber: 45
                                            }, this),
                                            label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 174,
                                        columnNumber: 41
                                    }, this)
                                }, href, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 173,
                                    columnNumber: 37
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 171,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 170,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 164,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "+JZGPkJ8VekbORAZWJAf9j/Saps=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = Navbar;
var _c, _c1;
__turbopack_context__.k.register(_c, "AshokChakra");
__turbopack_context__.k.register(_c1, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/LanguageContext.tsx [app-client] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Providers.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_877d321c._.js.map
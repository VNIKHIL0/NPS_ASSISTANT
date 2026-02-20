import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/Providers";
import { ClientLayout } from "./ClientLayout";

export const metadata: Metadata = {
  title: "NPS AI Assistant | National Pension System",
  description: "Your AI-powered guide to the National Pension System of India. Get instant answers, calculate pension benefits, and plan your retirement.",
  keywords: "NPS, National Pension System, India, pension, retirement, PFRDA, Government of India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Providers>
          <ClientLayout>
            <Navbar />
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}

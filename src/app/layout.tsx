import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autohisab.pk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "AutoHisab — Vehicle Running Cost Calculator Pakistan", template: "%s | AutoHisab" },
  description: "Free, simple vehicle fuel and running-cost estimates for drivers in Pakistan. Calculate monthly and yearly petrol costs in PKR.",
  applicationName: "AutoHisab",
  keywords: ["fuel cost calculator Pakistan", "petrol cost calculator", "car fuel average calculator", "vehicle running cost Pakistan"],
  openGraph: { type: "website", locale: "en_PK", siteName: "AutoHisab", title: "AutoHisab — Understand your vehicle costs", description: "Estimate monthly and yearly fuel costs in PKR using your own distance, mileage, and fuel price.", url: siteUrl },
  twitter: { card: "summary_large_image", title: "AutoHisab", description: "A clear, free fuel cost calculator for Pakistan." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-PK" className={geist.variable}><body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased"><Header /><div className="flex-1">{children}</div><Footer /></body></html>;
}

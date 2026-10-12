import type { MetadataRoute } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autohisab.pk";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/fuel-cost-calculator-pakistan", "/about", "/contact", "/privacy", "/methodology"].map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: path === "" || path.includes("calculator") ? "monthly" : "yearly", priority: path === "" ? 1 : path.includes("calculator") ? 0.9 : 0.4 })); }

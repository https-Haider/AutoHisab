import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
const baseUrl = getSiteUrl();
const paths = ["", "/fuel-cost-calculator-pakistan", "/car-ownership-cost-calculator", "/guides/how-to-calculate-fuel-average", "/guides/monthly-petrol-expense-pakistan", "/guides/petrol-vs-hybrid-cost-pakistan", "/guides/total-car-ownership-cost-pakistan", "/about", "/contact", "/privacy", "/methodology"];
export default function sitemap(): MetadataRoute.Sitemap { return paths.map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: path === "" || path.includes("calculator") ? "monthly" : path.startsWith("/guides/") ? "yearly" : "yearly", priority: path === "" ? 1 : path.includes("calculator") ? 0.9 : path.startsWith("/guides/") ? 0.7 : 0.4 })); }

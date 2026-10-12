const DEFAULT_SITE_URL = "https://autohisab.vercel.app";

export function getSiteUrl(value = process.env.NEXT_PUBLIC_SITE_URL): string {
  const candidate = value?.trim() || DEFAULT_SITE_URL;

  try {
    const url = new URL(candidate);
    if (url.protocol !== "https:" && url.protocol !== "http:") return DEFAULT_SITE_URL;
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

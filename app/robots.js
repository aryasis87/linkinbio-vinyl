export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://linkinbio-vinyl.vercel.app/sitemap.xml",
    host: "https://linkinbio-vinyl.vercel.app",
  };
}

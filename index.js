import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/", createProxyMiddleware({
  target: "https://www.instagram.com", // Target Website to scrap
  changeOrigin: true,
  onProxyReq: (proxyReq, req) => {
    // optional: pretend to be a browser
    proxyReq.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)");
  }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Proxy running on port ${PORT}`));

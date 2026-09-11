import type { NextConfig } from 'next';

const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // GitHub Pages sunucusuz/statik hosting olduğu için build çıktısını tamamen statik üretir.
  output: 'export',
  // Proje bir GitHub repo alt yolunda (örn. /loto-sop-editor) yayınlandığında
  // Next.js tarafından üretilen JS/CSS yollarının doğru çalışmasını sağlar.
  basePath: githubPagesBasePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Next.js geliştirme modundaki sol alttaki `N` göstergesini/panelini gizler.
  devIndicators: false,
  // Proje kendi klasörünü Turbopack kökü olarak kullanır.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

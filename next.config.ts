import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Use standalone output only for Docker builds (Dokploy)
// Vercel automatically handles its own build optimization
const nextConfig: NextConfig = {
    ...(process.env.DOCKER_BUILD === "true" && { output: "standalone" }),
};

// Points next-intl at our request config file
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);

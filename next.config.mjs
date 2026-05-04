import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  env: {
    ERXES_ENDPOINT: process.env.ERXES_ENDPOINT,
    ERXES_APP_TOKEN: process.env.ERXES_APP_TOKEN,
    NEXT_PUBLIC_ERXES_ENDPOINT: process.env.NEXT_PUBLIC_ERXES_ENDPOINT,
    NEXT_PUBLIC_ERXES_APP_TOKEN: process.env.NEXT_PUBLIC_ERXES_APP_TOKEN,
    NEXT_PUBLIC_ERXES_CMS_ID: process.env.NEXT_PUBLIC_ERXES_CMS_ID,
  },
};

export default withNextIntl(nextConfig);

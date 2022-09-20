/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.prismic.io", "lemara.prismic.io"],
  },
  i18n: {
    locales: ["lt", "en-gb", "no"],
    defaultLocale: "lt",
    localeDetection: false,
  },
};

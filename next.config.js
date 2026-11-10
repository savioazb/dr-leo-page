/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Ano do build, usado no rodapé
    NEXT_PUBLIC_ANO_BUILD: String(new Date().getFullYear()),
  },
};

module.exports = nextConfig;

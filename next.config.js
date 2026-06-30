/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Informa ao Turbopack (o novo empacotador do Next.js) que a raiz do projeto
  // é o diretório atual ('.'), silenciando o aviso sobre múltiplos lockfiles.
  experimental: {
    turbopack: {
      rootDir: __dirname,
    },
  },
};

module.exports = nextConfig;

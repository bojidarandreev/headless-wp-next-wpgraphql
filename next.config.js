const nextConfig = {
    i18n: {
      locales: ["fr"],
      defaultLocale: "fr",
    },
    async rewrites() {
      return [
          {
              source: '/robots.txt',
              destination: '/api/robots'
          }
      ];
  }
  }
  
  module.exports = nextConfig
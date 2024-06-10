const nextConfig = {
    i18n: {
      locales: ["fr-FR"],
      defaultLocale: "fr-FR",
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
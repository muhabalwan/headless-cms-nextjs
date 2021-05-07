module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home-page',
          permanent: false,
        },
      ]
    },
  }
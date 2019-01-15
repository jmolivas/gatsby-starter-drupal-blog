module.exports = {
  __experimentalThemes: [
    { resolve: 'gatsby-theme-drupal-blog', options: { root: __dirname } }
  ],
  siteMetadata: {
    title: `${process.env.SITE_NAME}`,
    domain: `${process.env.PROJECT_URL}`
  }
};

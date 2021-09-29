module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "weronika-page",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    "gatsby-plugin-postcss",
  ],
};

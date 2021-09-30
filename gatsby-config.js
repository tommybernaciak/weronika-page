module.exports = {
  siteMetadata: {
    siteUrl: "https://www.weronikabern.com",
    title: "weronika-page",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: `${__dirname}/images`,
    //   },
    //   __key: "images",
    // },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    `gatsby-plugin-netlify-cms`,
  ],
};

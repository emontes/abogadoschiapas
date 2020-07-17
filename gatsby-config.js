/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Abogados Chiapas",
    description: "Servicios Integrales Monar, Abogados en Tuxtla Guitérrez, Chiapas",
    author: "@el_ade",
    twitterUsername: "@el_ade",
    image: "mainImg.png",
    twitterImage: "/twitter-img.png",
    siteUrl: "https://abogadoschiapas.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-react-leaflet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [ `faqs` ],
        singleTypes: [],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Servicios Integrales Monar`,
        short_name: `Monar`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#004867`,
        display: `standalone`,
        icon: `src/assets/apple-touch-icon.png`
      },
    },
  ],
}

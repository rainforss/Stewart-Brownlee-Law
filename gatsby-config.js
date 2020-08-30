/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Stewart Brownlee Law",
    author: "Jake Chen",
    description:
      "Alberta law office based in North Edmonton practicing litigations and law matters.",
    url: "https://dreamy-hawking-5cf65d.netlify.app",
    image: "/home.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
        key: process.env.GATSBY_GOOGLE_MAP_KEY,
        center:
          "Stewart Brownlee Law, Castle Downs Road Northwest, Edmonton, AB",
        zoom: 11,
        markers: [
          {
            location: "53.616142, -113.514819",
            color: "#418041",
            size: "medium",
            label: "S",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
}

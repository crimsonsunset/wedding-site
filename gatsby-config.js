const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const webpackUtils = require('./WebpackUtil');

module.exports = {
  siteMetadata: {
    title: `Jess and Joe`,
    description: `The official home for everything related to Jess & Joe's wedding`,
    siteUrl: 'https://www.jessandjoe.co', // full path to blog - no ending slash
    ...webpackUtils.buildInfo,
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@config': path.resolve(__dirname, 'src/config'),
          '@content': path.resolve(__dirname, 'src/content'),
          '@img': path.resolve(__dirname, 'src/content/img'),
          '@favicon': path.resolve(__dirname, 'src/content/img/favicon'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@styles-components': path.resolve(__dirname, 'src/styles/components'),
          '@styles-pages': path.resolve(__dirname, 'src/styles/pages'),
          '@util': path.resolve(__dirname, 'src/util'),
          '@root': path.resolve(__dirname, 'src/'),
        },
        extensions: [],
      },
    },

    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'src', 'content'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1170,
              quality: 100,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.jessandjoe.co',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-feed',
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'J&J Wedding',
        short_name: 'J&J Wedding',
        start_url: '/',
        background_color: '#2F496E',
        theme_color: '#2F496E',
        display: 'minimal-ui',
        icon: 'src/content/img/favicon/favicon-big.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/contact-us`,
          `/bridal-party`,
          `/about`,
          `/rsvp`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true,
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },

  ],
};

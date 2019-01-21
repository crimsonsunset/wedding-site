const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Joe & Jess Tie the Knot',
    description: `The official home for everything related to Joe & Jess' wedding` ,
    siteUrl: 'https://jj-wedding.netlify.com/', // full path to blog - no ending slash
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
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
        siteUrl: 'https://jj-wedding.netlify.com/',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jj-tie-the-knot',
        short_name: 'jj-wedding',
        start_url: '/',
        // todo: update these colors
        background_color: '#ffffff',
        theme_color: '#0000ff',
        display: 'minimal-ui',
        icon: 'src/content/img/knot.png', // This path is relative to the root of the site.
      },
    },
    // 'gatsby-plugin-offline',

  ],
};

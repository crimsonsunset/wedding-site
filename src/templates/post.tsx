import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import * as _ from 'lodash';
import { setLightness } from 'polished';
import * as React from 'react';
import styled, { css } from 'react-emotion';
import { Helmet } from 'react-helmet';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import PostContent from '../components/PostContent';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import { colors } from '@styles/variables';
import { inner, outer, SiteHeader, SiteMain } from '../styles/shared';
import config from '../website-config';

// import AuthorCard from '../components/AuthorCard';
// import PostCard from '../components/PostCard';
// import PostFullFooter from '../components/PostFullFooter';
// import PostFullFooterRight from '../components/PostFullFooterRight';
// import ReadNextCard from '../components/ReadNextCard';
// import Subscribe from '../components/subsribe/Subscribe';

const PostTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

export const PostFull = css`
  position: relative;
  z-index: 50;
`;

export const NoImage = css`
  .post-full-content {
    padding-top: 0;
  }

  .post-full-content:before,
  .post-full-content:after {
    display: none;
  }
`;

export const PostFullHeader = styled.header`
  margin: 0 auto;
  padding: 6vw 3vw 3vw;
  max-width: 1040px;
  text-align: center;

  @media (max-width: 500px) {
    padding: 14vw 3vw 10vw;
    
    
    .back-arrow{
    
    margin-top: -4vh;
    a {
          font-size: 18px !important;
    }
  }
    
  }
  
  .back-arrow{
    display: flex; 
    a {
      font-size: 22px;
    }
  }
  
`;

const PostFullMeta = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.midgrey};
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 1.2rem;
    line-height: 1.3em;
  }
`;

const PostFullMetaDate = styled.time`
  color: ${colors.blue};
`;

export const PostFullTitle = styled.h1`
  margin: 0;
  font-size: 8rem;
  color: ${colors.$blue};
  @media (max-width: 500px) {
    font-size: 2.9rem;
  }
`;

const PostFullImage = styled.figure`
  margin: 0 -10vw -165px;
  height: 800px;
  background: ${colors.lightgrey} center center;
  background-size: cover;
  border-radius: 5px;

  @media (max-width: 1170px) {
    margin: 0 -4vw -100px;
    height: 600px;
    border-radius: 0;
  }

  @media (max-width: 800px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    margin-bottom: 4vw;
    height: 350px;
  }
`;

const DateDivider = styled.span`
  display: inline-block;
  margin: 0 6px 1px;
`;

const ReadNextFeed = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 40px 0 0 0;
`;

interface PageTemplateProps {
  pathContext: {
    slug: string;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: any;
      };
    };
    markdownRemark: {
      html: string;
      htmlAst: any;
      excerpt: string;
      timeToRead: string;
      frontmatter: {
        title: string;
        date: string;
        userDate: string;
        image: {
          childImageSharp: {
            fluid: any;
          };
        };
        tags: string[];
        author: {
          id: string;
          bio: string;
          avatar: {
            children: {
              fixed: {
                src: string;
              };
            }[];
          };
        };
      };
    };
    relatedPosts: {
      totalCount: number;
      edges: {
        node: {
          timeToRead: number;
          frontmatter: {
            title: string;
          };
          fields: {
            slug: string;
          };
        };
      }[];
    };
  };
  pageContext: {
    prev: PageContext;
    next: PageContext;
  };
}

export interface PageContext {
  excerpt: string;
  timeToRead: number;
  fields: {
    slug: string;
  };
  frontmatter: {
    image: {
      childImageSharp: {
        fluid: any;
      };
    };
    title: string;
    date: string;
    tags: string[];
    author: {
      id: string;
      bio: string;
      avatar: {
        children: {
          fixed: {
            src: string;
          };
        }[];
      };
    };
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = props => {
  const post = props.data.markdownRemark;
  let width = '';
  let height = '';
  if (post.frontmatter.image) {
    width = post.frontmatter.image.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0];
    height = String(Number(width) / post.frontmatter.image.childImageSharp.fluid.aspectRatio);
  }

  return (
    <IndexLayout className="post-template">
      <Helmet>
        <title>{post.frontmatter.title}</title>

        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={config.siteUrl + props.pathContext.slug} />
        {post.frontmatter.image && (
          <meta property="og:image" content={post.frontmatter.image.childImageSharp.fluid.src} />
        )}
        <meta property="article:published_time" content={post.frontmatter.date} />
        {/* not sure if modified time possible */}
        {/* <meta property="article:modified_time" content="2018-08-20T15:12:00.000Z" /> */}
        {post.frontmatter.tags && (
          <meta property="article:tag" content={post.frontmatter.tags[0]} />
        )}

        <meta property="article:publisher" content={config.facebook} />
        <meta property="article:author" content={config.facebook} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:url" content={config.siteUrl + props.pathContext.slug} />
        {post.frontmatter.image && (
          <meta name="twitter:image" content={post.frontmatter.image.childImageSharp.fluid.src} />
        )}
        {/*<meta name="twitter:label1" content="Written by" />*/}
        {/*<meta name="twitter:data1" content={post.frontmatter.author} />*/}
        <meta name="twitter:label2" content="Filed under" />
        {post.frontmatter.tags && <meta name="twitter:data2" content={post.frontmatter.tags[0]} />}
        <meta name="twitter:site" content={`@${config.twitter.split('https://twitter.com/')[0]}`} />
        <meta
          name="twitter:creator"
          content={`@${config.twitter.split('https://twitter.com/')[0]}`}
        />
        {width && <meta property="og:image:width" content={width} />}
        {height && <meta property="og:image:height" content={height} />}
      </Helmet>
      <Wrapper className={`${PostTemplate}`}>
        <header className={`${SiteHeader} ${outer}`}>
          <div className={`${inner}`}>
            <SiteNav />
          </div>
        </header>
        <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
          <div className={`${inner}`}>
            {/* TODO: no-image css tag? */}
            <article className={`${PostFull} ${!post.frontmatter.image ? NoImage : ''}`}>
              <PostFullHeader>

                <div className={'back-arrow'}>
                  <Link to="/"> ⬅ Back</Link>
                </div>

                {/*<PostFullMeta>*/}
                  {/*<PostFullMetaDate dateTime={post.frontmatter.date}>*/}
                    {/*{post.frontmatter.userDate}*/}
                  {/*</PostFullMetaDate>*/}
                  {/*{post.frontmatter.tags &&*/}
                    {/*post.frontmatter.tags.length > 0 && (*/}
                      {/*<>*/}
                        {/*<DateDivider>/</DateDivider>*/}
                        {/*<Link to={`/tags/${_.kebabCase(post.frontmatter.tags[0])}/`}>*/}
                          {/*{post.frontmatter.tags[0]}*/}
                        {/*</Link>*/}
                      {/*</>*/}
                    {/*)}*/}
                {/*</PostFullMeta>*/}

                <PostFullTitle>{post.frontmatter.title}</PostFullTitle>
              </PostFullHeader>

              {post.frontmatter.image && (
                <PostFullImage>
                  <Img
                    style={{ height: '100%' }}
                    fluid={post.frontmatter.image.childImageSharp.fluid}
                  />
                </PostFullImage>
              )}
              <PostContent htmlAst={post.htmlAst} />

              {/* The big email subscribe modal content */}
              {/*{config.showSubscribe && <Subscribe title={config.title} />}*/}

              {/*<PostFullFooter>*/}
                {/*<AuthorCard author={post.frontmatter.author} />*/}
                {/*<PostFullFooterRight authorId={post.frontmatter.author.id} />*/}
              {/*</PostFullFooter>*/}


            </article>
          </div>
        </main>

        {/* Links to Previous/Next posts */}
        {/*<aside className={`read-next ${outer}`}>*/}
          {/*<div className={`${inner}`}>*/}
            {/*<ReadNextFeed>*/}
              {/*{props.data.relatedPosts && (*/}
                {/*<ReadNextCard tags={post.frontmatter.tags} relatedPosts={props.data.relatedPosts} />*/}
              {/*)}*/}

              {/*{props.pageContext.prev && <PostCard post={props.pageContext.prev} />}*/}
              {/*{props.pageContext.next && <PostCard post={props.pageContext.next} />}*/}
            {/*</ReadNextFeed>*/}
          {/*</div>*/}
        {/*</aside>*/}
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default PageTemplate;

export const query = graphql`
  query($slug: String, $primaryTag: String) {
    logo: file(relativePath: { eq: "img/favicon/favicon-big.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      excerpt
      timeToRead
      frontmatter {
        title
        userDate: date(formatString: "D MMMM YYYY")
        date
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 3720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        author {
          id
          bio
          avatar {
            children {
              ... on ImageSharp {
                fixed(quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    relatedPosts: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$primaryTag] }} }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

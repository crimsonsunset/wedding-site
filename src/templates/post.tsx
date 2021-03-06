// external
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import { Helmet } from 'react-helmet';

// components
import Footer from '@components/Footer';
import SiteNav from '@components/header/SiteNav';
import PostContent from '@components/PostContent';
import Wrapper from '@components/Wrapper';
import IndexLayout from '@layouts/index';

// services

// utils/constants/models
import config from '../website-config';

// styles
import { inner, outer, SiteHeader, SiteMain } from '@styles/shared';
import {
  NoImage,
  PostFull,
  PostTemplate,
  PostFullHeader,
  PostFullTitle,
  PostFullImage,
} from '@styles-components/post/post.style';
import { Transition } from 'react-spring/renderprops-universal';
import { animated, useSpring } from 'react-spring';


const PostHelmet: React.SFC = ({ postData }: any) => {

  const post = postData.data.markdownRemark;
  let width = '';
  let height = '';
  if (post.frontmatter.image) {
    width = post.frontmatter.image.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0];
    height = String(Number(width) / post.frontmatter.image.childImageSharp.fluid.aspectRatio);
  }

  return (
    <Helmet>
      <title>{`Jess & Joe | ${post.frontmatter.title}`}</title>

      <meta property="og:site_name" content={config.title}/>
      <meta property="og:type" content="article"/>
      <meta property="og:title" content={post.frontmatter.title}/>
      <meta property="og:description" content={post.excerpt}/>
      <meta property="og:url" content={config.siteUrl + postData.pathContext.slug}/>
      {post.frontmatter.image && (
        <meta property="og:image" content={post.frontmatter.image.childImageSharp.fluid.src}/>
      )}
      <meta property="article:published_time" content={post.frontmatter.date}/>
      {/* not sure if modified time possible */}
      {/* <meta property="article:modified_time" content="2018-08-20T15:12:00.000Z" /> */}
      {post.frontmatter.tags && (
        <meta property="article:tag" content={post.frontmatter.tags[0]}/>
      )}

      <meta property="article:publisher" content={config.facebook}/>
      <meta property="article:author" content={config.facebook}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={post.frontmatter.title}/>
      <meta name="twitter:description" content={post.excerpt}/>
      <meta name="twitter:url" content={config.siteUrl + postData.pathContext.slug}/>
      {post.frontmatter.image && (
        <meta name="twitter:image" content={post.frontmatter.image.childImageSharp.fluid.src}/>
      )}
      {/*<meta name="twitter:label1" content="Written by" />*/}
      {/*<meta name="twitter:data1" content={post.frontmatter.author} />*/}
      <meta name="twitter:label2" content="Filed under"/>
      {post.frontmatter.tags && <meta name="twitter:data2" content={post.frontmatter.tags[0]}/>}
      <meta name="twitter:site" content={`@${config.twitter.split('https://twitter.com/')[0]}`}/>
      <meta
        name="twitter:creator"
        content={`@${config.twitter.split('https://twitter.com/')[0]}`}
      />
      {width && <meta property="og:image:width" content={width}/>}
      {height && <meta property="og:image:height" content={height}/>}

      {/*todo: clean up meta tags*/}

      <meta name="title" content={post.frontmatter.title}/>
      <meta name="Description" content={post.excerpt}/>
      <meta name="description" content={post.excerpt}/>
      <meta name="keywords"
            content="wedding, jj-wedding, jess and joe, colorado, summit county, dillon, frisco, jess, joe, sangiorgio, laub"/>
      <meta name="robots" content="index, follow"/>
      <meta name="language" content="English"/>
      <meta name="revisit-after" content="2 days"/>
      <meta name="author" content="Joseph Sangiorgio"/>


    </Helmet>);
};


const PageTemplate: React.SFC<PageTemplateProps> = (props) => {
  const post = props.data.markdownRemark;
  let width = '';
  let height = '';
  if (post.frontmatter.image) {
    width = post.frontmatter.image.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0];
    height = String(Number(width) / post.frontmatter.image.childImageSharp.fluid.aspectRatio);
  }

  // const propz = useSpring({ opacity: true ? 1 : 0 });
  // debugger;
  return (
    <IndexLayout className="post-template">
      <PostHelmet postData={props}/>
      <Wrapper className={`${PostTemplate}`}>
        <header className={`${SiteHeader} ${outer}`}>

          <SiteNav
            isHome={false}
          />

        </header>
        (
        <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
          <div className={`${inner}`}>

            {/* TODO: no-image css tag? */}
            <article className={`${PostFull} ${!post.frontmatter.image ? NoImage : ''}`}>

              {/*todo: animate the title?*/}
              {/*<Demo title={post.frontmatter.title}/>*/}

              <PostFullHeader>
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

              <PostContent htmlAst={post.htmlAst}/>


            </article>
          </div>
        </main>


        <Footer/>
      </Wrapper>
    </IndexLayout>
  );
};


// todo: put these above footer for read next things
// (<aside className={`read-next ${outer}`}>
// <div className={`${inner}`}>
// <ReadNextFeed>
// {props.data.relatedPosts && (
//     <ReadNextCard tags={post.frontmatter.tags} relatedPosts={props.data.relatedPosts} />
//   )}
//
// {props.pageContext.prev && <PostCard post={props.pageContext.prev} />}
// {props.pageContext.next && <PostCard post={props.pageContext.next} />}
// </ReadNextFeed>
// </div>
// </aside>)


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



// const JoeTest = () => {
//
//   const FuncComp = ({ style, data }) => <h1 style={style}>{data}</h1>;
//
//   return (
//     <Transition
//       from={{
//         marginLeft: '0px',
//         marginTop: '100px',
//         position: 'absolute',
//         opacity: 0,
//       }}
//       enter={{
//         marginTop: '0px',
//         marginLeft: '100px',
//         opacity: 1,
//       }}>
//       {(props) => <FuncComp style={props} data={'JOE TEST ONE'}/>}
//     </Transition>
//   );
//
// };

// https://codesandbox.io/embed/88lmnl6w88
// function Demo(props: any) {
//   const [state, toggle] = React.useState(true);
//   const { y } = useSpring({
//     from: {
//       y: 0,
//     },
//     y: state ? 1 : 0,
//     config: {
//       duration: 5000,
//     },
//   });
//
//
//   return (
//     <div onClick={() => toggle(!state)}>
//       <animated.div
//         style={{
//           transform: y
//             .interpolate({
//               range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
//               output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
//             })
//             .interpolate((y) => `scale(${y})`),
//         }}>
//
//         <PostFullHeader>
//           <PostFullTitle>{props.title}</PostFullTitle>
//         </PostFullHeader>
//
//       </animated.div>
//     </div>
//   );
// }

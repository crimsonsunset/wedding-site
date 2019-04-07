import Gallery from 'react-grid-gallery';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { PureComponent } from 'react';
import { bindAll } from 'lodash';

import IndexLayout from '@layouts/index';
import Wrapper from '@components/Wrapper';
import SiteNav from '@components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '@styles/shared';
import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '@styles-components/post/post.style';
import Footer from '@components/Footer';
import Helmet from 'react-helmet';

// const IMG_GALLERY_QUERY = graphql`
//   query imgGalleryQuery {
//     allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
//       edges{
//         node{
//           childImageSharp {
//             fluid (maxWidth: 5000){
//               ...GatsbyImageSharpFluid_tracedSVG
//               presentationWidth
//
//             }
//           }
//         }
//       }
//     }
//   }`;

const IMG_GALLERY_QUERY = graphql`
  query imgGalleryQuery {
    allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      edges{
        node{
          size
          prettySize
          childImageSharp {
            fixed (width: 2000){
              width
              height
              src
              srcSet
              originalName
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }`;


const IMAGES =
  [{
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
    // thumbnailWidth: 320,
    // thumbnailHeight: 174,
    // caption: 'After Rain (Jeshu John - designerspics.com)',
  },
    {
      src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
      // tags: [{ value: 'Ocean', title: 'Ocean' }, { value: 'People', title: 'People' }],
    },

    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    }];


class About extends PureComponent {

  constructor(props: any) {
    super(props);
    bindAll(this, [
      'renderGallery',
    ]);
  };

  renderGallery(imgData:any){
    const { edges } = imgData.allFile;
    const images = edges.map((e, i) => {

      e.node.childImageSharp.fluid;
      console.log(e, i);
      // const { src,tracedSVG } = e.node.childImageSharp.fluid;
      const {
        width: thumbnailWidth,
        height: thumbnailHeight,
        src,
      } = e.node.childImageSharp.fixed;

      return {
        src,
        thumbnail: src,
        thumbnailWidth,
        thumbnailHeight,
      };

      return {
        // src,
        // thumbnail: tracedSVG,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
      }
    });
      return (
        <Gallery
          enableImageSelection={false}
          images={images}/>
      );
  }


  render() {
   return (
      <IndexLayout>
        <Helmet>
          <title>About</title>
        </Helmet>
        <Wrapper>
          <header className={`${SiteHeader} ${outer}`}>

            <SiteNav/>

          </header>
          <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
            <article className={`${PostFull} post page ${NoImage}`}>
              <PostFullHeader>
                <PostFullTitle>Story</PostFullTitle>
              </PostFullHeader>

              <StaticQuery
                query={IMG_GALLERY_QUERY}
                render={this.renderGallery}
              />
            </article>
          </main>
          <Footer/>
        </Wrapper>
      </IndexLayout>
    );
  }
};

export default About;

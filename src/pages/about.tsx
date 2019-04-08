import Gallery from 'react-grid-gallery';
import { graphql, StaticQuery } from 'gatsby';
import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import IndexLayout from '@layouts/index';
import Wrapper from '@components/Wrapper';
import SiteNav from '@components/header/SiteNav';
import Footer from '@components/Footer';

import { SiteHeader, outer, inner, SiteMain } from '@styles/shared';
import { PostFullHeader, PostFullTitle, NoImage, PostFull, PostTemplate, BottomPaddingPost } from '@styles-components/post/post.style';
import { fileNameToCaption } from '@util/helpers';

const IMG_GALLERY_QUERY = graphql`
  query imgGalleryQuery {
    allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      edges{
        node{
#          size
#          prettySize
          name
          childImageSharp {
            fixed (width: 2000){
              width
              height
              src
              #              srcSet
            }
          }
        }
      }
    }
  }`;


class About extends PureComponent {

  constructor(props: any) {
    super(props);
    // bindAll(this, [
    //   'renderGallery',
    // ]);
  };

  renderGallery(imgData: any) {
    const { edges } = imgData.allFile;
    const images = edges.map((e) => {
      const {
        width: thumbnailWidth,
        height: thumbnailHeight,
        src,
      } = e.node.childImageSharp.fixed;

      const caption = fileNameToCaption(e.node.name);
      return {
        // caption,
        src,
        thumbnail: src,
        thumbnailWidth,
        thumbnailHeight,
      };
    });

    const StyledGallery = styled.section`
      width: 100%;
      max-width: 1300px;
      margin: 0 auto; 
      
      img{
        margin: 0 auto !important;
      }
    
    `;


    return (
      <StyledGallery>
        <Gallery
          className={`${StyledGallery}`}
          enableImageSelection={false}
          showImageCount={false}
          showCloseButton={false}
          backdropClosesModal={true}
          preloadNextImage={true}
          showLightboxThumbnails={true}
          images={images}/>
      </StyledGallery>
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
            <article className={`${BottomPaddingPost} post page ${NoImage}`}>
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

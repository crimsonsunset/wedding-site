import IndexLayout from '@layouts/index';
import Wrapper from '@components/Wrapper';
import SiteNav from '@components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '@styles/shared';
import * as React from 'react';
import { css } from 'react-emotion';
import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '@styles-components/post/post.style';
import { PostFullContent } from '@components/PostContent';
import Footer from '@components/Footer';
import Helmet from 'react-helmet';
import Gallery from 'react-grid-gallery';
import { graphql } from 'gatsby';

const IMG_GALLERY_QUERY = graphql`
  query rsvpQuery {
    file(relativePath: { regex: "/gallery/" }) {
      childImageSharp {
        fluid (maxWidth: 5000){
          ...GatsbyImageSharpFluid_tracedSVG
          presentationWidth
        }

        #                fixed(width: 125, height: 125) {
        #                    ...GatsbyImageSharpFixed
        #                }

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



const About = () => {
  return (
    <IndexLayout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Wrapper >
        <header className={`${SiteHeader} ${outer}`}>

          <SiteNav/>

        </header>
        <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
          <article className={`${PostFull} post page ${NoImage}`}>
            <PostFullHeader>
              <PostFullTitle>sssss</PostFullTitle>
            </PostFullHeader>
            <Gallery
              enableImageSelection={false}
              images={IMAGES}/>,

          </article>
        </main>
        <Footer/>
      </Wrapper>
    </IndexLayout>
  );
};

export default About;

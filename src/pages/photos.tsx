import Gallery from 'react-grid-gallery';
import { graphql, StaticQuery } from 'gatsby';
import React, { PureComponent, Ref } from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { shuffle, bindAll, delay, get, defer } from 'lodash';

import IndexLayout from '@layouts/index';
import Wrapper from '@components/Wrapper';
import SiteNav from '@components/header/SiteNav';
import Footer from '@components/Footer';

import { SiteHeader, outer, inner, SiteMain, HEADER_PICTURE_WIDTH } from '@styles/shared';
import {
  PostFullHeader,
  PostFullTitle,
  NoImage,
  PostFull,
  PostTemplate,
  BottomPaddingPost,
} from '@styles-components/post/post.style';
import { fileNameToCaption } from '@util/helpers';
import { useSwipe } from '@util/component.hooks';


export const IMG_GALLERY_QUERY = graphql`
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


const StyledGallery = styled.section`
      width: 100%;
      max-width: ${HEADER_PICTURE_WIDTH};
      margin: 0 auto;
      margin-top: -3px;

      img{
        margin: 0 auto !important;
      }

    `;

class Photos extends PureComponent {

  private edges: Array<any> = [];
  private galleryRef: Ref<any> = React.createRef();
  // readonly state = {
  //   isOpen: false,
  // };

  constructor(props: any) {
    super(props);
    bindAll(this, [
      'renderGallery',
      'onGalleryLinkClicked',
    ]);
  };


  setUpSwipeListener() {
    const that = this;
    defer(() => {
      const lightbox = document && document.getElementById('lightboxBackdrop');
      let numImages = get(that, 'state.images.length');
      useSwipe({ current: lightbox },
        {
          left() {
            let currentImage = get(that, 'state.currentImage');
            let possImage = currentImage + 1;

            // loop back around if at end
            possImage = (possImage < numImages) ? possImage : 0;

            that.setState({
              currentImage: possImage,
            });
          },
          right() {
            let currentImage = get(that, 'state.currentImage');
            let possImage = currentImage - 1;

            // loop back around if at end
            possImage = (possImage < 0) ? numImages - 1 : possImage;

            that.setState({
              currentImage: possImage,
            });
          },
        },
      );
    });
  }


  onGalleryLinkClicked(fromPhotos) {
    const password = window.prompt('Please Enter a Password');
    if(!password) return;
    fetch(
      '../.netlify/functions/checkPassword',
      {
        method: 'post',
        body: JSON.stringify({ password }),
      },
    )
      .then((res) => {
        if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));
        return res.json(); // parse json body
      })
      .then(({ photos, videos }) => {
        const url = (fromPhotos) ? photos : videos;
        typeof window !== 'undefined' && window.location.replace(url);
      })
      .catch(() => {
        alert('Incorrect Password. Please Try Again');
      });
  }

  renderGallery(imgData?: any) {

    let edges = (!imgData) ? this.edges : imgData.allFile.edges;

    this.edges = edges;
    // edges = shuffle(edges);

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

    return (
      <StyledGallery
        innerRef={this.galleryRef}
      >
        <Gallery
          backdropClosesModal={true}
          lightboxWillOpen={this.setUpSwipeListener}
          className={`${StyledGallery}`}
          enableImageSelection={false}
          showImageCount={false}
          showCloseButton={false}
          preloadNextImage={true}
          showLightboxThumbnails={true}
          images={images}/>

        {/*<button*/}
        {/*  onClick={() => {*/}
        {/*    this.renderGallery();*/}
        {/*    this.forceUpdate();*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Shuffle*/}
        {/*</button>*/}
      </StyledGallery>
    );
  }


  render() {
    return (
      <IndexLayout>
        <Helmet>
          <title>Jess & Joe | Photos</title>
        </Helmet>
        <Wrapper>
          <header className={`${SiteHeader}`}>

            <SiteNav/>

          </header>
          <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
            <article className={`${BottomPaddingPost} post page ${NoImage}`}>
              <PostFullHeader>
                <PostFullTitle
                  style={{ marginTop: '26px' }}
                >Photos
                </PostFullTitle>
                <h2>Click to view:
                  <div>
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        this.onGalleryLinkClicked.bind(this)(true);
                      }}
                    >
                      Wedding Photos
                    </a>

                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        this.onGalleryLinkClicked.bind(this)(false);
                      }}
                    >
                      Wedding Video
                    </a>
                  </div>
                </h2>
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

export default Photos;

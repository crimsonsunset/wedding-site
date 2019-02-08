import IndexLayout from '../layouts';
import React, {PureComponent} from 'react';
import Helmet from 'react-helmet';
import {styles} from '../styles/rsvp.style';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'react-emotion';
// import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
// import { bindAll } from 'lodash';
// import Footer from '../components/Footer';
// const iFrameResize = require('iframe-resizer').iframeResizer;

const RSVP_QUERY = graphql`
  query rsvpQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    file(relativePath: { regex: "/mount/" }) {
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

class RSVPView extends PureComponent {

  private iframe: HTMLIFrameElement | null = null;

  constructor(props: any) {
    super(props);
  };

  render() {
    const sitePrefix = (process.env.IS_DEV) ? 'http' : 'https';
    return (
      <IndexLayout>

        <StaticQuery
          query={RSVP_QUERY}
          render={(data) => {
            const fluidImg = data.file.childImageSharp.fluid;
            const imgLocation = data.file.childImageSharp.fluid.src;

            const BgImage = styled(Img)`
    position: absolute;

    left: 0;
    top: 0;
    width: 100%;

     background-position: center center;
  background-repeat: no-repeat;
    background-size: cover;
    min-height: 40vh;
        height: 100vh;
        // background: url(${imgLocation}) no-repeat center center fixed;
`;
            return (
              <>

                <Helmet
                  title={data.site.siteMetadata.title}
                  meta={[
                    {
                      name: 'description',
                      content: data.site.siteMetadata.description,
                    },
                    {name: 'keywords', content: 'rsvp, wedding, jj-wedding'},
                  ]}
                >
                  <html lang="en"/>
                </Helmet>


                <main
                  id="rsvp"
                  className={`${styles}`}
                >
                  <section className={`rsvp-view`}>

                    {/*<PostFullHeader>*/}
                    {/*<PostFullTitle>RSVP</PostFullTitle>*/}
                    {/*</PostFullHeader>*/}

                    <BgImage fluid={fluidImg}/>

                    <iframe
                      id="RSVPifyIFrame"
                      ref={(iframe) => {
                        this.iframe = iframe;
                      }}
                      style={{
                        opacity: 0,
                      }}
                      onLoad={() => {
                        if (this.iframe) {
                          this.iframe.style.opacity = '1';
                        }
                      }}
                      src={`${sitePrefix}://jess-joe-wedding.app.rsvpify.com/?embed=1&js=1`}
                      frameBorder="0"
                      scrolling="no"
                    >

                    </iframe>

                    {/*todo: iframes are stupid*/}
                    {/*{this.resize = iFrameResize({*/}
                    {/*autoResize: false,*/}
                    {/*log: true,*/}
                    {/*checkOrigin: false,*/}
                    {/*heightCalculationMethod: 'lowestElement',*/}

                    {/*}, "#RSVPifyIFrame")}*/}

                  </section>
                </main>

                {/*<Footer/>*/}

              </>
            );
          }}
        />

      </IndexLayout>

    );
  }
};

export default RSVPView;


// const ImageWrapper = ({tag, children, ...props}) => {
//
//   const Container = styled(tag)`
//         background-color: orange;
//         border:5px solid blue;
//         height: 100vh;
//         background: url(${imgLocation}) no-repeat center center fixed;
//   background-size: cover;
//
// `;
//   return <Container {...props}>{children}</Container>;
// };

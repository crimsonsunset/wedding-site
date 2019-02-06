import IndexLayout from '../layouts';
import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { styles } from '../styles/rsvp.style';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
// import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
// import { bindAll } from 'lodash';
// import Footer from '../components/Footer';
// import { PostFullHeader, PostFullTitle } from '../templates/post';
// const iFrameResize = require('iframe-resizer').iframeResizer;


// export const RSVP_QUERY = graphql`
//     query rsvpQuery {
//         site {
//             siteMetadata {
//                 title
//                 description
//             }
//         }
//
//         allFile(filter: { absolutePath: { regex: "/us/" } }) {
//             edges{
//                 node{
//                     childImageSharp{
//                         fluid(maxWidth: 3720) {
//                             ...GatsbyImageSharpFluid_tracedSVG
//                         }
//                     }
//                 }
//             }
//
//
//
//         }}
//
// `;


export const RSVP_QUERY = graphql`
    query rsvpQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        file(relativePath: { regex: "/mount/" }) {
            childImageSharp {
                fluid (maxWidth: 3720){
                    ...GatsbyImageSharpFluid_tracedSVG
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
    // bindAll(this, [
    //   'getPartyMembers',
    // ]);
  };

  render() {

    return (
      <IndexLayout>

        <StaticQuery
          query={RSVP_QUERY}
          render={(data) => {
            return (
              <>

                <Helmet
                  title={data.site.siteMetadata.title}
                  meta={[
                    {
                      name: 'description',
                      content: data.site.siteMetadata.description,
                    },
                    { name: 'keywords', content: 'rsvp, wedding, jj-wedding' },
                  ]}
                >
                  <html lang="en"/>
                </Helmet>


                <main
                  id="rsvp"
                >
                  <section className={`rsvp-view ${styles}`}>

                    {/*<PostFullHeader>*/}
                    {/*<PostFullTitle>RSVP</PostFullTitle>*/}
                    {/*</PostFullHeader>*/}


                    <div className="image-wrapper">
                      <Img fluid={data.file.childImageSharp.fluid}/>

                      {/*<label>Jess & Joe</label>*/}

                    </div>
                    {/*<Img fixed={data.file.childImageSharp.fixed}/>*/}


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
                      src={`http://jess-joe-wedding.app.rsvpify.com/?embed=1&js=1`}
                      frameBorder="0"
                      scrolling="no">

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
import IndexLayout from '../layouts';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import React, { PureComponent } from 'react';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import { styles } from '../styles/bridal-party.style';
import { bindAll } from 'lodash';
import { PostFullHeader, PostFullTitle } from '../templates/post';
import { graphql, StaticQuery } from 'gatsby';


export const ALL_MEMBERS_QUERY = graphql`
    query allMembersQuery {
        site{
            siteMetadata {
                title
                description
            }
        }

    }`;

class BridalPartyView extends PureComponent {

  constructor(props: any) {
    super(props);
    bindAll(this, [
      'getPartyMembers',
    ]);
  }

;

  getPartyMembers() {
    // this.
  }

  render() {
    return (
      <IndexLayout>
        <Helmet>
          <title>Bridal Party</title>
        </Helmet>

        <header className={`${SiteHeader} ${outer}`}>
          <div className={`${inner}`}>
            <SiteNav/>
          </div>
        </header>

        <main
          id="site-main"
          className={`site-main ${SiteMain} ${outer}`}
        >
          <section className={`${styles} bridal-party`}>
            <PostFullHeader>
              <PostFullTitle>Bridal Party</PostFullTitle>
            </PostFullHeader>


            <StaticQuery
              query={ALL_MEMBERS_QUERY}
              render={({site}) => {
                // console.log('broo', data);
                return (
                  <>
                    <div>{site.siteMetadata.title}</div>
                  </>
                );
              }}
            />


          </section>
        </main>

        <Footer/>
      </IndexLayout>
    );
  }
};

export default BridalPartyView;


//     <Wrapper className={`${PageTemplate}`}>
// <header className={`${SiteHeader} ${outer}`}>
// <div className={`${inner}`}>
// <SiteNav />
//   </div>
//   </header>
//   <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
// <article className={`${PostFull} post page ${NoImage}`}>
// <PostFullHeader>
//   <PostFullTitle>Contact Us</PostFullTitle>
//   </PostFullHeader>
//
//   <PostFullContent className="post-full-content">
//     <div className="post-content">
//     <p>
//     Ghost is professional publishing platform designed for modern journalism. This is a
//   demo site of a basic Ghost install to give you a general sense of what a new Ghost
//   site looks like when set up for the first time.
// </p>
// <blockquote>
//   <p>
//   If you'd like to set up a site like this for yourself, head over to{' '}
//   <a href="https://ghost.org">Ghost.org</a> and start a free 14 day trial to give
//   Ghost a try!
// </p>
// </blockquote>
//   <p>
//   If you're a developer: Ghost is a completely open source (MIT) Node.js application
//   built on a JSON API with an Ember.js admin client. It works with MySQL and SQLite,
//     and is publicly available <a href="https://github.com/TryGhost/ghost">on Github</a>.
// </p>
// <p>
//   If you need help with using Ghost, you'll find a ton of useful articles on{' '}
//   <a href="https://help.ghost.org">our knowledgebase</a>, as well as extensive{' '}
//   <a href="https://docs.ghost.org">developer documentation</a>.
// </p>
// </div>
//   </PostFullContent>
//   </article>
//   </main>
//   <Footer />
//   </Wrapper>

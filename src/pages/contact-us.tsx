import IndexLayout from '@layouts/index';
import Wrapper from '@components/Wrapper';
import SiteNav from '@components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '@styles/shared';
import * as React from 'react';
import { css } from 'react-emotion';
import { PostFullTitle, NoImage, PostFull, PostFullHeader } from '@styles-components/post/post.style';
import { PostFullContent } from '@components/PostContent';
import Footer from '@components/Footer';
import Helmet from 'react-helmet';

import { useSpring, animated } from 'react-spring';
import styled from 'react-emotion';


import { useState, useEffect } from 'react';
import { interpolate } from 'react-spring';
import { Spring, Transition } from 'react-spring/renderprops';
import { springConfigs } from '@styles/variables';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }

  .calendar-container{

    margin: 0 auto;
    display: flex;

  }

`;


// const ContactUs = () => {
//   const props = useSpring({ opacity: 1, from: { opacity: 0 } });
//   return (
//     <IndexLayout>
//       <animated.h1
//         style={props}>I will fade in
//       </animated.h1>
//     </IndexLayout>
//   );
// };



// import { jsx, css } from "@emotion/core";
const svgLogo = require('@img/favicon/favicon.svg');


const Wrapperz = styled.div`
  padding: 50px;
  background-color: salmon;
  margin-bottom: 20px;
  border-radius: 20px;
  will-change: opacity;
`;

const ContactUs = () => {
  const props = useSpring(
    {
      config: { duration: 5000 },
      opacity: 1,
      from: {
        opacity: 0,
      },
    });

  return (
    <IndexLayout>

      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Wrapper className={`${PageTemplate}`}>
        <header className={`${SiteHeader} ${outer}`}>

          <SiteNav/>

        </header>

        {/*style={styles}*/}
        <Spring {...springConfigs.fadeAndPan}>
          {(styles) => {
            return (
              <main

                id="site-main" className={`site-main ${SiteMain} ${outer}`}>
                <article className={`${PostFull} post page ${NoImage}`}>


                  <PostFullHeader>
                    <PostFullTitle>Contact Us</PostFullTitle>
                  </PostFullHeader>


                  <PostFullContent className="post-full-content">
                    <div className="post-content">
                      <p>
                        Ghost is professional publishing platform designed for modern journalism. This is a
                        demo site of a basic Ghost install to give you a general sense of what a new Ghost
                        site looks like when set up for the first time.
                      </p>
                      <blockquote>
                        <p>
                          If you'd like to set up a site like this for yourself, head over to{' '}
                          <a href="https://ghost.org">Ghost.org</a> and start a free 14 day trial to give
                          Ghost a try!
                        </p>
                      </blockquote>
                      <p>
                        If you're a developer: Ghost is a completely open source (MIT) Node.js application
                        built on a JSON API with an Ember.js admin client. It works with MySQL and SQLite,
                        and is publicly available <a href="https://github.com/TryGhost/ghost">on Github</a>.
                      </p>
                      <p>
                        If you need help with using Ghost, you'll find a ton of useful articles on{' '}
                        <a href="https://help.ghost.org">our knowledgebase</a>, as well as extensive{' '}
                        <a href="https://docs.ghost.org">developer documentation</a>.
                      </p>
                    </div>

                    {/*<div*/}
                    {/*className={'calendar-container'}*/}
                    {/*>*/}
                    {/*<iframe*/}
                    {/*src="https://calendar.google.com/calendar/b/1/embed?title=J%20%26%20J%20Wedding%20Schedule&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=WEEK&amp;height=200&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=ujg8gtpcobb0tcmeh8qs5u4dp4%40group.calendar.google.com&amp;color=%23853104&amp;ctz=America%2FNew_York&dates=20190815%2F20190819"*/}
                    {/*width="800"*/}
                    {/*height="1200"*/}
                    {/*frameBorder="0" scrolling="no">*/}

                    {/*</iframe>*/}

                    {/*</div>*/}

                  </PostFullContent>


                </article>
              </main>
            );
          }}
        </Spring>


        <Footer/>
      </Wrapper>
    </IndexLayout>
  );
};


// class Parent extends React.Component {
//
//   render() {
//
//     const FuncComp = (({ style, data }) => <h1 style={style}>{data}</h1>);
//
//     return (
//       <Transition
//
//         from={{
//           marginLeft: '0px',
//           marginTop: '100px',
//           position: 'absolute',
//           opacity: 0
//         }}
//         enter={{
//           marginTop: '0px',
//           marginLeft: '100px',
//           opacity: 1
//         }}>
//         {props => <FuncComp style={props} data={'JOE TEST ONE'} />}
//       </Transition>
//     )
//   }
// }

export default ContactUs;


// import IndexLayout from '@layouts/index';
// import Wrapper from '@components/Wrapper';
// import SiteNav from '@components/header/SiteNav';
// import { SiteHeader, outer, inner, SiteMain } from '@styles/shared';
// import * as React from 'react';
// import { css } from 'react-emotion';
// import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '@styles-components/post/post.style';
// import { PostFullContent } from '@components/PostContent';
// import Footer from '@components/Footer';
// import Helmet from 'react-helmet';
//
// const PageTemplate = css`
//   .site-main {
//     background: #fff;
//     padding-bottom: 4vw;
//   }
//
//   .calendar-container{
//
//     margin: 0 auto;
//     display: flex;
//
//   }
//
// `;
//
//
// const ContactUs: React.SFC = () => {
//   return (
//     <IndexLayout>
//       <Helmet>
//         <title>Contact Us</title>
//       </Helmet>
//       <Wrapper className={`${PageTemplate}`}>
//         <header className={`${SiteHeader} ${outer}`}>
//
//           <SiteNav />
//
//         </header>
//         <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
//           <article className={`${PostFull} post page ${NoImage}`}>
//             <PostFullHeader>
//               <PostFullTitle>Contact Us</PostFullTitle>
//             </PostFullHeader>
//
//             <PostFullContent className="post-full-content">
//               <div className="post-content">
//                 <p>
//                   Ghost is professional publishing platform designed for modern journalism. This is a
//                   demo site of a basic Ghost install to give you a general sense of what a new Ghost
//                   site looks like when set up for the first time.
//                 </p>
//                 <blockquote>
//                   <p>
//                     If you'd like to set up a site like this for yourself, head over to{' '}
//                     <a href="https://ghost.org">Ghost.org</a> and start a free 14 day trial to give
//                     Ghost a try!
//                   </p>
//                 </blockquote>
//                 <p>
//                   If you're a developer: Ghost is a completely open source (MIT) Node.js application
//                   built on a JSON API with an Ember.js admin client. It works with MySQL and SQLite,
//                   and is publicly available <a href="https://github.com/TryGhost/ghost">on Github</a>.
//                 </p>
//                 <p>
//                   If you need help with using Ghost, you'll find a ton of useful articles on{' '}
//                   <a href="https://help.ghost.org">our knowledgebase</a>, as well as extensive{' '}
//                   <a href="https://docs.ghost.org">developer documentation</a>.
//                 </p>
//               </div>
//
//               <div
//                 className={'calendar-container'}
//               >
//                 <iframe
//                   src="https://calendar.google.com/calendar/b/1/embed?title=J%20%26%20J%20Wedding%20Schedule&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=WEEK&amp;height=200&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=ujg8gtpcobb0tcmeh8qs5u4dp4%40group.calendar.google.com&amp;color=%23853104&amp;ctz=America%2FNew_York&dates=20190815%2F20190819"
//                   width="800"
//                   height="1200"
//                   frameBorder="0" scrolling="no">
//
//                 </iframe>
//
//               </div>
//
//             </PostFullContent>
//
//
//           </article>
//         </main>
//         <Footer />
//       </Wrapper>
//     </IndexLayout>
//   )};
//
// export default ContactUs;


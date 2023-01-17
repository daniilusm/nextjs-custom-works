import React, { useEffect, useState } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/dist/ScrollSmoother';
import imgBase from 'assets/images/main-img/base.jpeg';
import imgFront from 'assets/images/main-img/witcher-front.png';
import imgMiddle1 from 'assets/images/main-img/witcher-middle-1.png';
import imgMiddle2 from 'assets/images/main-img/witcher-middle-2.png';
import imgBack from 'assets/images/main-img/witcher-back.png';

import * as S from './parallax.styled';
import { StaticImageData } from 'next/image';

const sections = ['first', 'second', 'third'];

const parallax = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const [windowScrollTop, setWindowScrollTop] = useState(0);
  // const [backgroundColor, setBackgroundColor] = useState<StaticImageData>(bg);

  useEffect(() => {
    // const smoother = ScrollSmoother.create({
    //   content: '.smooth-content',
    //   smooth: 3,
    //   effects: true,
    // });
    window.addEventListener('scroll', () => {
      // console.info(window.scrollY);
      setWindowScrollTop(window.scrollY);
      document.documentElement.style.setProperty(
        '--scrollTop',
        `${window.scrollY}px`
      );
    });

    const smoother = ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
    });

    smoother.effects('img', { speed: 'auto' });

    // sections.forEach((section) => {
    //   gsap.to(`#${section}`, {
    //     scrollTrigger: {
    //       trigger: `#${section}`,
    //       start: 'top center',
    //       end: 'bottom center',
    //       onEnter: () => setActiveSection(`${section}`),
    //       onEnterBack: () => setActiveSection(`${section}`),
    //     },
    //   });
    // });
  }, []);

  // useEffect(() => {
  //   switch (activeSection) {
  //     case 'first':
  //       setBackgroundColor(bg);
  //       break;
  //     case 'second':
  //       setBackgroundColor(bg);
  //       break;
  //     case 'third':
  //       setBackgroundColor(bg2);
  //       console.log('change');
  //       break;
  //     default:
  //       setBackgroundColor(bg);
  //   }
  // }, [activeSection]);

  return (
    <S.Root className="smooth-wrapper">
      <div className="smooth-content">
        <S.Layers>
          {/* <S.BaseLayer bckImg={imgBase} /> */}
          <S.FrontLayer bckImg={imgFront} />
          <S.MiddleLayer bckImg={imgMiddle1} />
          <S.MiddleLayer bckImg={imgMiddle2} />
          <S.BackLayer bckImg={imgBase} />
        </S.Layers>
        <S.Block>content</S.Block>
      </div>
    </S.Root>
  );
};

export default parallax;

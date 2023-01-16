import React, { useEffect, useState } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/dist/ScrollSmoother';
import bg from 'assets/images/photo_2022-12-27_14-23-01.jpg';
import bg2 from 'assets/images/photo_2022-12-27_14-23-11.jpg';
import bg3 from 'assets/images/photo_2022-12-27_14-23-04.jpg';

import * as S from './parallax.styled';
import { StaticImageData } from 'next/image';

const sections = ['first', 'second', 'third'];

const parallax = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const [activeSection, setActiveSection] = useState('first');
  const [backgroundColor, setBackgroundColor] = useState<StaticImageData>(bg);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      content: '.smooth-wrapper',
      smooth: 3,
      effects: true,
    });

    // const smoother = ScrollSmoother.create({
    //   wrapper: '.smooth-wrapper',
    //   content: '.smooth-content',
    // });

    smoother.effects('img', { speed: 'auto' });

    sections.forEach((section) => {
      gsap.to(`#${section}`, {
        scrollTrigger: {
          trigger: `#${section}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveSection(`${section}`),
          onEnterBack: () => setActiveSection(`${section}`),
        },
      });
    });
  }, []);

  useEffect(() => {
    switch (activeSection) {
      case 'first':
        setBackgroundColor(bg);
        break;
      case 'second':
        setBackgroundColor(bg);
        break;
      case 'third':
        setBackgroundColor(bg2);
        console.log('change');
        break;
      default:
        setBackgroundColor(bg);
    }
  }, [activeSection]);

  return (
    <S.Root bcg={backgroundColor} className="smooth-wrapper">
      <div className="smooth-content">
        <S.Block id="first">
          <div>1</div>
        </S.Block>
        <S.Block id="second">
          <div>2</div>
        </S.Block>
        <S.Block id="third">
          <div>3</div>
        </S.Block>
      </div>
    </S.Root>
  );
};

export default parallax;

import React, { useEffect, useState, useCallback } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/dist/ScrollSmoother';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import imgBase from 'images/parallax/main-img/base-background.jpeg';
import imgFront from 'images/parallax/main-img/front-background.png';
import imgMiddle1 from 'images/parallax/main-img/middle-background.png';
import secondBcgImage from 'images/parallax/second-bcg.jpeg';
import middleBcgImage from 'images/parallax/middle-bcg.jpeg';

import * as S from './parallax.styled';

const sections = ['first', 'second', 'third'];

const parallax = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const [windowScrollTop, setWindowScrollTop] = useState(0);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    // const smoother = ScrollSmoother.create({
    //   content: '.smooth-content',
    //   smooth: 3,
    //   effects: true,
    // });
    window.addEventListener('scroll', () => {
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
  }, []);

  return (
    <S.Root className="smooth-wrapper">
      <div className="smooth-content">
        <S.Layers>
          <S.BaseLayer bckImg={imgBase} />
          <S.MiddleLayer bckImg={imgMiddle1} />
          <S.FrontLayer bckImg={imgFront} />
        </S.Layers>
        <S.MiddlePath>
          <S.Title bckImg={middleBcgImage}>Last Of Us</S.Title>
        </S.MiddlePath>
        <S.SecondPath bckImg={secondBcgImage}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: 'push',
                  },
                  onHover: {
                    enable: false,
                    mode: 'repulse',
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                move: {
                  bounce: false,
                  direction: 'none',
                  enable: true,
                  outModes: 'out',
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: { density: { enable: true, area: 800 }, value: 100 },
                opacity: {
                  value: 0.5,
                },
                color: {
                  value: '#817e60',
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  value: { min: 1, max: 2 },
                },
              },
              detectRetina: true,
            }}
          />
        </S.SecondPath>
      </div>
    </S.Root>
  );
};

export default parallax;

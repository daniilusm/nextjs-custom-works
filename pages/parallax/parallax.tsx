import React, { useEffect, useState, useCallback } from 'react';
// import gsap from 'gsap-trial';
// import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
// import { ScrollSmoother } from 'gsap-trial/dist/ScrollSmoother';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import imgBase from 'images/parallax/main-img/base-background.jpeg';
import imgFront from 'images/parallax/main-img/front-background-min.png';
import imgMiddle from 'images/parallax/main-img/middle-background-min.png';
import secondBcgImage from 'images/parallax/second-bcg.jpeg';
import middleBcgImage from 'images/parallax/middle-bcg.jpeg';

import * as S from './parallax.styled';
import Head from 'next/head';

const parallax = () => {
  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
      document.documentElement.style.setProperty(
        '--scrollTop',
        `${window.scrollY}px`
      );
    });

    // const smoother = ScrollSmoother.create({
    //   wrapper: '.smooth-wrapper',
    //   content: '.smooth-content',
    // });

    // smoother.effects('img', { speed: 'auto' });
  }, []);

  return (
    <>
      <Head>
        <title>Parallax Effect</title>
      </Head>
      <S.Root className="smooth-wrapper">
        <div className="smooth-content">
          <S.Layers>
            <S.BaseLayer imgSrc={imgBase.src} />
            <S.MiddleLayer imgSrc={imgMiddle.src} />
            <S.FrontLayer imgSrc={imgFront.src} />
          </S.Layers>
          <S.MiddlePath>
            <S.Title imgSrc={middleBcgImage.src}>The Last Of Us</S.Title>
          </S.MiddlePath>
          <S.SecondPath imgSrc={secondBcgImage.src}>
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
    </>
  );
};

export default parallax;

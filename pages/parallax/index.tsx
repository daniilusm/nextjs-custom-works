import React, { useEffect, useState, useCallback } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import firstBackgroundBase from 'images/parallax/first/base-background.jpeg';
import firstBackgroundFront from 'images/parallax/first/front-background.png';
import firstBackgroundMiddle from 'images/parallax/first/middle-background.png';
import ground from 'images/parallax/first/ground.png';
import secondBackgroundBase from 'images/parallax/second/second-background-base.jpeg';
import secondBackgroundFront from 'images/parallax/second/second-background-front.png';

import * as S from 'styles/pages/parallax.styled';
import Head from 'next/head';

const parallax = () => {
  // gsap.registerPlugin(ScrollTrigger);

  const particlesInit = useCallback(async (engine) => {
    console.info(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.info(container);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty(
        '--scrollTop',
        `${window.scrollY}px`
      );
    });
  }, []);

  return (
    <>
      <Head>
        <title>Parallax Effect</title>
        <meta property="og:title" content="Parallax Effect" />
        <meta
          property="og:description"
          content="Parallax effect using only CSS and JS"
        />
      </Head>
      <S.Root>
        <S.FirstPath imgSrc={ground.src}>
          <S.Layers>
            <S.BaseLayer imgSrc={firstBackgroundBase.src} />
            <S.MainTitle>The Last of Us</S.MainTitle>
            <S.MiddleLayer imgSrc={firstBackgroundMiddle.src} />
            <S.FrontLayer imgSrc={firstBackgroundFront.src} />
          </S.Layers>
        </S.FirstPath>
        <S.SecondPath imgSrc={secondBackgroundBase.src}>
          <S.Front imgSrc={secondBackgroundFront.src} />
          <S.Wrapper>
            <S.SubTitle>
              In 2013, an outbreak of a mutant Cordyceps fungus ravages the
              United States, transforming its human hosts into aggressive
              creatures known as the Infected.
            </S.SubTitle>
            <S.Text>
              Twenty years later, civilization has been decimated by the
              infection. Survivors live in totalitarian quarantine zones,
              independent settlements, and nomadic groups, leaving buildings and
              houses deserted.
            </S.Text>
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
                    },
                    onHover: {
                      enable: false,
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
                  number: { density: { enable: true, area: 800 }, value: 250 },
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
          </S.Wrapper>
        </S.SecondPath>
      </S.Root>
    </>
  );
};

export default parallax;

import React, { useRef, useEffect } from 'react';
import * as S from './VerticalSlider.styled';
import gsap from 'gsap';

type Props = {
  children: any;
};

let xPos = 0;

const VerticalSlider = () => {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    console.info(refs);

    const imgs = refs.current.length > 0 && refs.current;
    gsap
      .timeline()
      .set('.ring', { rotationX: 180, cursor: 'grab' })
      .set('.img', {
        rotateX: (i) => i * -36,
        transformOrigin: '50% 50% 500px',
        z: -500,
        backgroundImage: (i) =>
          'url(https://picsum.photos/id/' + (i + 32) + '/400/600/)',
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: 'hidden',
        force3D: true,
      })
      .from('.img', {
        duration: 1.5,
        y: -200,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo',
        force3D: true,
      })
      .add(() => {
        imgs.forEach((image: HTMLDivElement) => {
          if (image) {
            image.addEventListener('mouseenter', (e) => {
              let current = e.currentTarget;
              gsap.to('.img', {
                opacity: (i, t) => (t == current ? 1 : 0.5),
                ease: 'power3',
              });
            });
            image.addEventListener('mouseleave', (e) => {
              gsap.to('.img', {
                opacity: 1,
                ease: 'power2.inOut',
              });
            });
          }
        });
      }, '-=0.5');
  }, []);

  const dragStart = (e) => {
    // console.info('drag start', e);
    if (e.touches) e.clientY = e.touches[0].clientY;
    xPos = Math.round(e.clientY);
    gsap.set('.ring', { cursor: 'grabbing' });
    document.addEventListener('mousemove', drag);
  };

  const drag = (e) => {
    console.info(e);
    if (e.touches) e.clientY = e.touches[0].clientY;

    gsap.to('.ring', {
      rotationX: '-=' + ((Math.round(e.clientY) - xPos) % 360),
      onUpdate: () => {
        gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) });
      },
    });

    xPos = Math.round(e.clientY);
  };

  const dragEnd = (e) => {
    document.removeEventListener('mousemove', drag);
    gsap.set('.ring', { cursor: 'grab' });
  };

  const getBgPos = (i) => {
    const rotX = gsap.getProperty('.ring', 'rotationX');
    return (
      '0px ' +
      (100 - (gsap.utils.wrap(0, 360, +rotX - 180 - i * 36) / 360) * 500) +
      'px'
    );
  };

  useEffect(() => {
    document.addEventListener('mousedown', dragStart);
    document.addEventListener('mouseup', dragEnd);
  }, []);

  return (
    <S.Stage>
      <S.Root>
        <div className="ring">
          {[...new Array(10)].map((item, index) => (
            <div
              className="img"
              key={index}
              ref={(element) => {
                refs.current[index] = element;
              }}
            ></div>
          ))}
        </div>
      </S.Root>
    </S.Stage>
  );
};

export default VerticalSlider;

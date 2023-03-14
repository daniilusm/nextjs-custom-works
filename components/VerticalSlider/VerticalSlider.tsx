import React, { useRef, useEffect } from 'react';
import * as S from './VerticalSlider.styled';
import gsap from 'gsap';

type Props = {
  children: any;
};

let xPos = 0;

const VerticalSlider = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgs = document.querySelectorAll('.img');
    gsap
      .timeline()
      .set('.ring', { rotationY: 180, cursor: 'grab' })
      .set('.img', {
        // apply transform rotations to each image
        rotateY: (i) => i * -36,
        transformOrigin: '50% 50% 500px',
        z: -500,
        backgroundImage: (i) =>
          'url(https://picsum.photos/id/' + (i + 32) + '/600/400/)',
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: 'hidden',
        force3D: true,
      })
      .from('.img', {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo',
        force3D: true,
      })
      .add(() => {
        imgs.forEach((image) =>
          image.addEventListener('mouseenter', (e) => {
            let current = e.currentTarget;
            gsap.to('.img', {
              opacity: (i, t) => (t == current ? 1 : 0.5),
              ease: 'power3',
            });
          })
        );
        imgs.forEach((image) =>
          image.addEventListener('mouseleave', (e) => {
            gsap.to('.img', {
              opacity: 1,
              ease: 'power2.inOut',
            });
          })
        );
      }, '-=0.5');
  });

  const dragStart = (e) => {
    console.info('drag start', e);
    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set('.ring', { cursor: 'grabbing' });
    document.addEventListener('mousemove', drag);
  };

  const drag = (e) => {
    console.info('drag');
    if (e.touches) e.clientX = e.touches[0].clientX;

    gsap.to('.ring', {
      rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
      onUpdate: () => {
        gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) });
      },
    });

    xPos = Math.round(e.clientX);
  };

  const dragEnd = (e) => {
    console.info('drag end');
    document.removeEventListener('mousemove', drag);
    gsap.set('.ring', { cursor: 'grab' });
  };

  const getBgPos = (i) => {
    const rotY = gsap.getProperty('.ring', 'rotationY');
    return (
      100 -
      (gsap.utils.wrap(0, 360, +rotY - 180 - i * 36) / 360) * 500 +
      'px 0px'
    );
  };

  useEffect(() => {
    document.addEventListener('mousedown', dragStart);
    document.addEventListener('mouseup', dragEnd);
  }, []);

  return (
    <S.Stage ref={ref}>
      <S.Root>
        <div className="ring">
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
        </div>
      </S.Root>
    </S.Stage>
  );
};

export default VerticalSlider;

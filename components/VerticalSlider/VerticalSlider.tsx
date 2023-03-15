import React, { useRef, useEffect } from 'react';
import * as S from './VerticalSlider.styled';
import gsap from 'gsap';

let yPos = 0;

const VerticalSlider = () => {
  const tl = useRef<ReturnType<typeof gsap.timeline>>();

  useEffect(() => {
    tl.current = gsap.timeline();

    const imgs = document.querySelectorAll('.img');
    tl.current
      .set('.ring', { rotationX: 180, cursor: 'grab' })
      .to('.img', {
        duration: 0,
        rotateX: (i) => i * -36,
        transformOrigin: '50% 50% 500px',
        z: -500,
        backgroundImage: (i) =>
          'url(https://picsum.photos/id/' + (i + 22) + '/400/600?grayscale)',
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
    if (e.touches) e.clientY = e.touches[0].clientY;
    yPos = Math.round(e.clientY);
    gsap.set('.ring', { cursor: 'grabbing' });
    document.addEventListener('mousemove', drag);
  };

  const drag = (e) => {
    if (e.touches) e.clientY = e.touches[0].clientY;

    gsap.to('.ring', {
      rotationX: '-=' + ((Math.round(e.clientY) - yPos) % 360),
      onUpdate: () => {
        gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) });
      },
    });

    yPos = Math.round(e.clientY);
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
        <S.Ring className="ring">
          {[...new Array(10)].map((item, index) => (
            <S.Ring className="img" key={index}></S.Ring>
          ))}
        </S.Ring>
      </S.Root>
    </S.Stage>
  );
};

export default VerticalSlider;

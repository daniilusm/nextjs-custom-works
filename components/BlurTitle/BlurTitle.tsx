import React, { useEffect } from 'react';
import * as S from './BlurTitle.styled';
import { createNoise3D } from 'simplex-noise';

const BlurTitle = () => {
  let canvas, ctx, cw, ch, t, delta;

  let vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
  let res = 3 * vmin;
  let simplex = createNoise3D();

  let mouse = {
    x: 0,
    y: 0,
    lagX: 0,
    lagY: 0,
  };

  let tSpeed = 5000;
  let sSpeed = 60;

  useEffect(() => {
    initCanvas();
    animate();
  }, []);

  const initCanvas = () => {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = cw = canvas.clientWidth * 2;
    canvas.height = ch = canvas.clientHeight * 2;

    document.addEventListener('mousemove', function (e) {
      mouse.x = (e.clientX / window.innerHeight - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    });
  };

  const setTime = () => {
    if (t == undefined) {
      t = Date.now();
      delta = 0;
    } else {
      delta = Date.now() - t;
      t += delta;
    }
  };

  const animate = () => {
    setTime();
    update();
    draw();
    requestAnimationFrame(animate);
  };

  const update = () => {
    mouse.lagX += (mouse.x - mouse.lagX) / 50;
    mouse.lagY += (mouse.y - mouse.lagY) / 50;
  };

  const draw = () => {
    ctx.clearRect(0, 0, cw, ch);

    const xOffset = mouse.lagX * -9 * vmin;
    const yOffset = mouse.lagY * -6 * vmin;

    let totalDepth = 0;

    for (let x = 0; x < cw / res; x++) {
      for (let y = 0; y < ch / res; y++) {
        const depth = simplex(
          (x + xOffset) / sSpeed,
          (y + yOffset) / sSpeed,
          t / tSpeed
        );
        const r = 0 + depth * 0;
        const g = 0 + depth * 0;
        const b = 0 + depth * 0;
        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        ctx.fillRect(x * res, y * res, (x + 1) * res, (y + 1) * res);
        totalDepth += Math.max(0, depth);
      }
    }

    canvas.style.transform =
      'translate3d(' + xOffset + 'px, ' + yOffset + 'px, 0)';
    document.getElementById('heading').style.transform =
      'translate3d(' + xOffset / -2 + 'px, ' + yOffset / -2 + 'px, 0)';
    document.getElementById('heading').style.filter =
      'blur(' + (1 + totalDepth / 50) + 'px)';
    document.documentElement.style.filter =
      'brightness(' + (2 + totalDepth / 1000) + ') hue-rotate(' + 180 + 'deg)';
  };

  return (
    <S.Root>
      <S.Canvas id="canvas"></S.Canvas>
      <S.Title id="heading">RAPHA BOLA</S.Title>
    </S.Root>
  );
};

export default BlurTitle;

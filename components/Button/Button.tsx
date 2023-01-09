import React, { useState, useRef, useEffect } from 'react';
import * as S from './Button.styled';

type Props = {
  children: any;
  withGradient?: boolean;
  isBubble?: boolean;
  color?: string;
  textColor?: string;
  hoverTextColor?: string;
  hoverColor?: string;
  isFilled?: boolean;
};

const Button = ({
  children,
  withGradient = false,
  isBubble = false,
  isFilled = false,
  color = 'white',
  textColor = 'white',
  hoverTextColor = 'white',
  hoverColor = 'white',
}: Props) => {
  const $button = useRef<HTMLDivElement>(null);
  const [mousePositionDeg, setMousePositionDeg] = useState<number>(132);

  useEffect(() => {
    const button = $button.current;
    if (withGradient) {
      button.addEventListener('mousemove', ({ clientX, clientY }) => {
        const { x, y, width, height } = button.getBoundingClientRect();
        const dx = clientX - (x + 0.5 * width);
        const dy = clientY - (y + 0.5 * height);
        const angle = Math.atan2(dy, dx);
        const deg = (angle * 180) / Math.PI;
        setMousePositionDeg(deg - 90);
      });
    }
  }, []);

  return (
    <S.Root
      ref={$button}
      gradientDeg={mousePositionDeg}
      withGradient={withGradient}
      color={color}
      hoverColor={hoverColor}
      isBubble={isBubble}
      isFilled={isFilled}
    >
      <S.Text textColor={textColor} hoverTextColor={hoverTextColor}>
        {children}
      </S.Text>
    </S.Root>
  );
};

export default Button;

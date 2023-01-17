import { ArrowIcon } from 'assets/icons/arrow_icon';
import React, { useState } from 'react';
import * as S from './Slider.styled';

type Props = {
  children: any;
};

const Slider = ({ children }: Props) => {
  const [active, setActive] = useState<number>(1);
  const count = React.Children.count(children);

  const MAX_VISIBILITY = 3;

  return (
    <S.Root>
      {active > 0 && (
        <S.LeftArrow onClick={() => setActive((i) => i - 1)}>
          <ArrowIcon />
        </S.LeftArrow>
      )}
      {React.Children.map(children, (child, i) => (
        <S.Container
          offset={(active - i) / 3}
          direction={Math.sign(active - i)}
          abs_offset={Math.abs(active - i) / 3}
          isActive={active === i}
          isViewMore={active - i > MAX_VISIBILITY}
          isView={active - i >= MAX_VISIBILITY}
        >
          {child}
        </S.Container>
      ))}
      {active < count - 1 && (
        <S.RightArrow onClick={() => setActive((i) => i + 1)}>
          <ArrowIcon />
        </S.RightArrow>
      )}
    </S.Root>
  );
};

export default Slider;

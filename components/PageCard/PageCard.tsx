import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import * as S from './PageCard.styled';
import useToggle from 'hooks/useToggle';
import Button from 'components/Button';

type Props = {
  item: {
    route: string;
    title: string;
    description: string;
  };
};

const PageCard = ({ item }: Props) => {
  const $card = useRef<HTMLDivElement>(null);
  //   const [mousePositionDeg, setMousePositionDeg] = useState<number>(132);
  const [isViewCard, toggleViewCard] = useToggle(false);

  //   useEffect(() => {
  //     const card = $card.current;
  //     card.addEventListener('mousemove', ({ clientX, clientY }) => {
  //       const { x, y, width, height } = card.getBoundingClientRect();
  //       const dx = clientX - (x + 0.5 * width);
  //       const dy = clientY - (y + 0.5 * height);
  //       const angle = Math.atan2(dy, dx);
  //       const deg = (angle * 180) / Math.PI;
  //       setMousePositionDeg(deg - 90);
  //     });
  //   }, []);

  return (
    <S.Root ref={$card} isViewCard={isViewCard} onClick={toggleViewCard}>
      <S.Title>{item.title}</S.Title>
      {isViewCard && (
        <>
          <S.Description>{item.description}</S.Description>
          <Link href={item.route}>
            <Button>view page</Button>
          </Link>
        </>
      )}
    </S.Root>
  );
};

export default PageCard;

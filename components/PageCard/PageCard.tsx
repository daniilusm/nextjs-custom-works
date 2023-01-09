import React from 'react';
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
  const [isViewCard, toggleViewCard] = useToggle(false);

  return (
    <S.Root isViewCard={isViewCard} onClick={toggleViewCard}>
      <S.Title>{item.title}</S.Title>
      {isViewCard && (
        <>
          <S.Description>{item.description}</S.Description>
          <S.ViewMore href={item.route}>
            <Button>view page</Button>
          </S.ViewMore>
        </>
      )}
    </S.Root>
  );
};

export default PageCard;

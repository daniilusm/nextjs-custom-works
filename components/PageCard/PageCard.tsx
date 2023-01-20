import React from 'react';

import * as S from './PageCard.styled';

type Props = {
  item: {
    route: string;
    title: string;
    description: string;
  };
};

const PageCard = ({ item }: Props) => {
  return (
    <S.Root href={item.route}>
      <S.Title>{item.title}</S.Title>
    </S.Root>
  );
};

export default PageCard;

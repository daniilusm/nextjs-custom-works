import React from 'react';
import Link from 'next/link';

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
    <Link href={item.route}>
      <S.Root>
        <S.Title>{item.title}</S.Title>
        <S.Description>{item.description}</S.Description>
      </S.Root>
    </Link>
  );
};

export default PageCard;

import { ArrowIcon } from 'assets/icons/arrow_icon';
import React, { useCallback } from 'react';
import * as S from './Header.styled';
import { useRouter } from 'next/router';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const router = useRouter();
  const { pathname } = router;

  const isHomePage = pathname === '/';

  const updateTitle = useCallback((text: string) => {
    const updateTitle = text
      .split('')
      .map((word, index) =>
        index === 3 ? (
          <S.TextFlicker key={index}>{word}</S.TextFlicker>
        ) : (
          <span key={index}>{word}</span>
        )
      );
    return updateTitle;
  }, []);

  return (
    <S.Root>
      {!isHomePage && (
        <S.LinkToHome href="/">
          <ArrowIcon />
        </S.LinkToHome>
      )}
      <S.Title>{updateTitle(title)}</S.Title>
    </S.Root>
  );
};

export default Header;

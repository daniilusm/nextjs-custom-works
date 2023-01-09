import React, { useCallback, useEffect, useState } from 'react';
import * as S from './Header.styled';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const [newTitle, setNewTitle] = useState('');

  const updateTitle = useCallback((text: string) => {
    const updateTitle = text
      .split('')
      .map((word, index) =>
        index === 3 ? <S.TextFlicker>{word}</S.TextFlicker> : word
      );
    return updateTitle;
  }, []);

  return <S.Title>{updateTitle(title)}</S.Title>;
};

export default Header;

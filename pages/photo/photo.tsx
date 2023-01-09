import InputText from 'components/InputText';
import BasicLayout from 'components/Layouts/Basic';
import usePostFormat from 'hooks/usePostFormat';
import React, { useCallback, useEffect, useState } from 'react';
import * as S from './photo.styled';

const photo = () => {
  const [value, setValue] = useState('');
  const [url, setUrl] = useState('');

  const handleChange = useCallback((val: string) => {
    console.log(val);
    setValue(val);
  }, []);

  const onKeyEvent = useCallback((e: any) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
      setUrl(e.target.value);
    }
  }, []);

  const imageData = usePostFormat(url && [url]);

  useEffect(() => {
    console.info(imageData);
  }, [imageData]);

  return (
    <BasicLayout title="Photo data">
      <S.Root>
        <InputText
          name="Write url"
          handleChange={handleChange}
          onKeyEvent={onKeyEvent}
          value={value}
        />
      </S.Root>
    </BasicLayout>
  );
};

export default photo;

import InputText from 'components/InputText';
import BasicLayout from 'components/Layouts/Basic';
import Head from 'next/head';
import React, { useCallback, useState } from 'react';

const inputs = () => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((val: string) => {
    console.log(val);
    setValue(val);
  }, []);

  const onKeyEvent = useCallback((e: any) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
      setValue('');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Inputs MF</title>
      </Head>
      <BasicLayout title="Inputs">
        <InputText
          name="Text"
          value={value}
          handleChange={handleChange}
          onKeyEvent={onKeyEvent}
        />
      </BasicLayout>
    </>
  );
};

export default inputs;

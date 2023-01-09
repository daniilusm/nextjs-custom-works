import InputText from 'components/InputText';
import BasicLayout from 'components/Layouts/Basic';
import React from 'react';

const inputs = () => {
  return (
    <BasicLayout title="Inputs">
      <InputText name="Text" />
    </BasicLayout>
  );
};

export default inputs;

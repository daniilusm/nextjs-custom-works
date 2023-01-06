import { useState, useCallback } from 'react';

const useInput = (initValue: string) => {
  const [value, setValue] = useState<string>(initValue);
  const [isDirty, setDirty] = useState<boolean>(false);

  const changeHandler = useCallback(
    e => {
      setValue(e.currentTarget.value);
    },
    [setValue]
  );

  const onBlurHandler = useCallback(
    (defaultValue: number) => {
      setDirty(true);
      if (value === '') {
        setValue(String(defaultValue));
      }
    },
    [value, setDirty, setValue]
  );

  const changeAutoCompleteHandler = useCallback(
    (e, values) => {
      setValue(values);
    },
    [setValue]
  );

  const setDefaultHandle = useCallback(defaultValue => {
    setValue(defaultValue);
  }, []);

  const reset = useCallback(() => setValue(''), [setValue]);

  return {
    value,
    isDirty,
    setValue: changeHandler,
    onBlur: onBlurHandler,
    setDefaultHandle,
    reset,
    changeAutoCompleteHandler,
  };
};

export default useInput;

import { useCallback, useState } from 'react';

type UseBooleanResult = [boolean, () => void, () => void, () => void];

export const useBoolean = (defaultValue = false): UseBooleanResult => {
  const [value, setValue] = useState(defaultValue);

  const handleSetTrue = useCallback(() => {
    setValue(true);
  }, []);

  const handleSetFalse = useCallback(() => {
    setValue(false);
  }, []);

  const handleToggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, handleSetTrue, handleSetFalse, handleToggle];
};

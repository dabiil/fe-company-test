import { useCallback, useState } from 'react';

type UseBooleanResult = [boolean, () => void, () => void];

export const useBoolean = (defaultValue = false): UseBooleanResult => {
  const [value, setValue] = useState(defaultValue);

  const handleSetTrue = useCallback(() => {
    setValue(true);
  }, []);

  const handleSetFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, handleSetTrue, handleSetFalse];
};

import { IBoard } from 'types';

import { defaultData } from './defaultData';

const dataKey = 'dataCashKey';

export const getDataHelper = (): IBoard => {
  const dataJson = localStorage.getItem(dataKey);

  if (!dataJson) {
    setDataHelper(defaultData);

    return defaultData;
  }

  const data = JSON.parse(dataJson) as IBoard;

  return data;
};

export const setDataHelper = (data: IBoard) => {
  localStorage.setItem(dataKey, JSON.stringify(data));
};

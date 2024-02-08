import { nanoid } from 'nanoid';

import { IBoard } from 'types';

export const defaultData: IBoard = {
  id: nanoid(),
  createdAt: Date.now(),
  columns: [],
};

import { createContext } from 'react';
import { noop } from 'lodash-es';

import { IBoard } from 'types';

export interface IData {
  board: IBoard;
  onChange(board: IBoard): void;
  onAddColumn(value: string): void;
  onAddItem(columnIndex: number, value: string): void;
}

export const dataContext = createContext<IData>({
  board: {
    columns: [],
    createdAt: -1,
    id: '0',
  },
  onChange: noop,
  onAddColumn: noop,
  onAddItem: noop,
});

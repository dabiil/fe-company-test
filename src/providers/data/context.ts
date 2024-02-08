import { createContext } from 'react';
import { noop } from 'lodash-es';

import { IBoard } from 'types';

import { defaultData } from 'src/consts';

export interface IData {
  board: IBoard;
  onChange(board: IBoard): void;
  onAddColumn(value: string): void;
  onAddItem(columnIndex: number, value: string): void;
  onRemoveColumn(columnIndex: number): void;
  onSortColumn(columnIndex: number): void;
}

export const dataContext = createContext<IData>({
  board: defaultData,
  onChange: noop,
  onAddColumn: noop,
  onAddItem: noop,
  onRemoveColumn: noop,
  onSortColumn: noop,
});

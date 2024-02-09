import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { cloneDeep, sortBy } from 'lodash-es';
import { nanoid } from 'nanoid';

import { IBoard } from 'types';

import { dataContext, IData } from './context';
import { getDataHelper, setDataHelper } from './helpers';

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<IBoard>(getDataHelper());

  const handleChange = useCallback((newBoard: IBoard) => {
    setData(newBoard);
    setDataHelper(newBoard);
  }, []);

  const handleAddNewColumn = useCallback((newColumn: string) => {
    setData((prev) => {
      const clone = cloneDeep(prev);

      clone.columns.push({
        cards: [],
        id: nanoid(),
        createdAt: Date.now(),
        title: newColumn,
      });

      setDataHelper(clone);

      return clone;
    });
  }, []);

  const handleAddNewItem = useCallback((columIndex: number, newItem: string) => {
    setData((prev) => {
      const clone = cloneDeep(prev);

      clone.columns[columIndex].cards.push({
        content: newItem,
        id: nanoid(),
        createdAt: Date.now(),
      });

      setDataHelper(clone);

      return clone;
    });
  }, []);

  const handleRemoveColumn = useCallback((columnIndex: number) => {
    setData((prev) => {
      const clone = cloneDeep(prev);

      clone.columns.splice(columnIndex, 1);

      setDataHelper(clone);

      return clone;
    });
  }, []);

  const handleSortColumn = useCallback((columnIndex: number) => {
    setData((prev) => {
      const clone = cloneDeep(prev);

      clone.columns[columnIndex].cards = sortBy(clone.columns[columnIndex].cards, (x) => x.createdAt);

      setDataHelper(clone);

      return clone;
    });
  }, []);

  const contextData = useMemo<IData>(
    () => ({
      board: data,
      onChange: handleChange,
      onAddColumn: handleAddNewColumn,
      onAddItem: handleAddNewItem,
      onRemoveColumn: handleRemoveColumn,
      onSortColumn: handleSortColumn,
    }),
    [data, handleChange, handleAddNewColumn, handleAddNewItem, handleRemoveColumn, handleSortColumn],
  );

  return <dataContext.Provider value={contextData}>{children}</dataContext.Provider>;
};

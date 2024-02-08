import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import { getDataHelper, setDataHelper } from 'helpers';
import { IBoard } from 'types';

import { dataContext, IData } from './context';

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<IBoard>(getDataHelper());

  const handleChange = useCallback((newBoard: IBoard) => {
    setData(newBoard);
    setDataHelper(newBoard);
  }, []);

  const handleAddNewColumn = useCallback((newColumn: string) => {
    setData((prev) => {
      const newBoard: IBoard = {
        ...prev,
        columns: [
          ...prev.columns,
          {
            cards: [],
            id: nanoid(),
            createdAt: Date.now(),
            title: newColumn,
          },
        ],
      };

      setDataHelper(newBoard);

      return newBoard;
    });
  }, []);

  const handleAddNewItem = useCallback((columId: number, newItem: string) => {
    setData((prev) => {
      const newColumns = [...prev.columns];

      newColumns[columId].cards.push({
        content: newItem,
        id: nanoid(),
        createdAt: Date.now(),
      });

      const newBoard: IBoard = {
        ...prev,
        columns: newColumns,
      };

      setDataHelper(newBoard);

      return newBoard;
    });
  }, []);
  const contextData = useMemo<IData>(
    () => ({
      board: data,
      onChange: handleChange,
      onAddColumn: handleAddNewColumn,
      onAddItem: handleAddNewItem,
    }),
    [data, handleChange, handleAddNewColumn, handleAddNewItem],
  );

  return <dataContext.Provider value={contextData}>{children}</dataContext.Provider>;
};

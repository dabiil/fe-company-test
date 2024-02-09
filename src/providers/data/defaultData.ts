import { nanoid } from 'nanoid';

import { IBoard } from 'types';

const now = Date.now();

export const defaultData: IBoard = {
  createdAt: now,
  id: nanoid(),
  columns: [
    {
      id: nanoid(),
      createdAt: now,
      title: 'First column',
      cards: [
        {
          id: nanoid(),
          createdAt: now,
          content: '1 Card',
        },
        {
          id: nanoid(),
          createdAt: now - 2000,
          content: '2 Card',
        },
        {
          id: nanoid(),
          createdAt: now - 6000,
          content: '3 Card',
        },
      ],
    },
    {
      id: nanoid(),
      createdAt: now,
      title: 'Second column',
      cards: [
        {
          id: nanoid(),
          createdAt: now,
          content: '4 Card',
        },
      ],
    },
  ],
};

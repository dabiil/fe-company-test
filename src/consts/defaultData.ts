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
          createdAt: now - 65,
          content: '1 Card',
        },
        {
          id: nanoid(),
          createdAt: now - 20,
          content: '2 Card',
        },
        {
          id: nanoid(),
          createdAt: now,
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

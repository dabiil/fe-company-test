import React, { useCallback, useEffect, useRef, useState } from 'react';
import { trim } from 'lodash-es';

import { useBoolean, useOutsideClick } from 'hooks';

import { AddIcon } from 'src/components/icons';
import { useDataContext } from 'src/providers';

interface INewCardProps {
  columnIndex: number;
}

export const NewCard: React.FC<INewCardProps> = ({ columnIndex }) => {
  const [isEditing, startEditing, stopEditing] = useBoolean(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { onAddItem } = useDataContext();

  const handleOutsideClick = useCallback(() => {
    setValue('');
    stopEditing();
  }, [stopEditing]);

  const containerRef = useOutsideClick(handleOutsideClick);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    const trimmedValue = trim(value);

    if (trimmedValue.length === 0) {
      inputRef.current?.focus();

      return;
    }

    setValue('');
    stopEditing();

    onAddItem(columnIndex, trimmedValue);
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <div className='w-full mt-4'>
      {isEditing ? (
        <div className='p-2 rounded-xl text-gray-800 justify-start' ref={containerRef}>
          <textarea
            className='rounded-xl w-full min-h-5 max-h-64 resize-none py-1 px-2 overflow-hidden wrap bg-white huge-shadow placeholder:text-gray-800'
            placeholder='Enter a title for this card…'
            ref={inputRef}
            value={value}
            onChange={handleChange}
            onKeyDown={handleEnter}
          />
          <button
            className='mt-3 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-700 sm:mt-0 sm:w-auto'
            type='button'
            onClick={handleAdd}
          >
            Add card
          </button>
        </div>
      ) : (
        <div
          className='p-2 flex rounded-xl text-gray-800 justify-start cursor-pointer hover:bg-gray-400/80'
          onClick={startEditing}
        >
          <AddIcon className='mr-2' />
          Add a card
        </div>
      )}
    </div>
  );
};

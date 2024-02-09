import React, { useCallback, useEffect, useRef, useState } from 'react';
import { trim } from 'lodash-es';

import { useBoolean, useOutsideClick } from 'hooks';

import { AddIcon } from 'src/components/icons';
import { useDataContext } from 'src/providers';

export const NewColumn: React.FC = () => {
  const [isEditing, startEditing, stopEditing] = useBoolean(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { onAddColumn } = useDataContext();

  const handleOutsideClick = useCallback(() => {
    setValue('');
    stopEditing();
  }, [stopEditing]);

  const containerRef = useOutsideClick(handleOutsideClick);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(trim(e.target.value));
  };

  const handleAdd = () => {
    const trimmedValue = trim(value);

    if (trimmedValue.length === 0) {
      inputRef.current?.focus();

      return;
    }

    setValue('');
    stopEditing();

    onAddColumn(trimmedValue);
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
    <div className='px-4 h-full'>
      {isEditing ? (
        <div className='p-3 w-72 rounded-xl bg-zinc-200 text-gray-800' ref={containerRef}>
          <textarea
            className='rounded-s w-full min-h-5 max-h-64 resize-none py-1 px-2 overflow-hidden wrap bg-transparent placeholder:text-gray-800'
            placeholder='Enter list title…'
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
            Add list
          </button>
        </div>
      ) : (
        <div
          className='flex p-3 w-72 rounded-xl bg-gray-500 text-white justify-start cursor-pointer'
          onClick={startEditing}
        >
          <AddIcon className='mr-2' />
          Add another list
        </div>
      )}
    </div>
  );
};

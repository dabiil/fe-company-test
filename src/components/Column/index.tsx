import { Draggable, Droppable } from 'react-beautiful-dnd';
import cx from 'classnames';

import { useBoolean, useOutsideClick } from 'hooks';
import { IColumn } from 'types';

import { Ellipsis } from 'src/components/icons';
import { useDataContext } from 'src/providers';

import { Card } from '../Card';
import { NewCard } from '../NewCard';

interface IColumnProps extends IColumn {
  index: number;
}

export const Column: React.FC<IColumnProps> = ({ title, id, index, cards }) => {
  const [isMenuOpen, , closeMenu, toggleMenu] = useBoolean(false);
  const ref = useOutsideClick(closeMenu);

  const { onRemoveColumn, onSortColumn } = useDataContext();

  const handleRemoveColumn = () => {
    onRemoveColumn(index);
  };

  const handleSortColumn = () => {
    onSortColumn(index);
    closeMenu();
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div className='px-4 h-full' ref={provided.innerRef} {...provided.draggableProps}>
          <div className='p-3 w-72 rounded-xl bg-zinc-200 text-gray-800 max-h-full flex flex-col'>
            <div className='relative flex justify-between items-start flex-wrap w-full'>
              <div className='grow shrink basis-min transition-all hover:bg-zinc-300' {...provided.dragHandleProps}>
                <h2 className='font-extrabold overflow-hidden py-2 pl-3 pr-2 break-words wrap-anywhere'>{title}</h2>
              </div>
              <div className='relative' ref={ref}>
                <Ellipsis className='m-1 cursor-pointer mt-2' onClick={toggleMenu} />
                <div
                  aria-labelledby='menu-button'
                  aria-orientation='vertical'
                  className={cx(
                    'absolute right-0 z-10 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
                    !isMenuOpen && 'hidden',
                  )}
                  role='menu'
                >
                  <div className='py-1 divide-y' role='none'>
                    <div
                      className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-zinc-100 transition-all'
                      onClick={handleSortColumn}
                    >
                      Sort
                    </div>
                    <div
                      className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-red-100 transition-all'
                      onClick={handleRemoveColumn}
                    >
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Droppable droppableId={id} type='CARD'>
              {(dropListProvider) => (
                <div className='min-h-6 py-4' ref={dropListProvider.innerRef} {...dropListProvider.droppableProps}>
                  {cards.map((card, cardIndex) => (
                    <Card index={cardIndex} key={card.id} {...card} />
                  ))}
                  {dropListProvider.placeholder}
                </div>
              )}
            </Droppable>
            <NewCard columnIndex={index} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

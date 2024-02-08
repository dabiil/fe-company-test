import { Draggable, Droppable } from 'react-beautiful-dnd';

import { IColumn } from 'types';

import { Ellipsis } from 'src/icons';

import { Card } from '../Card';
import { NewCard } from '../NewCard';

interface IColumnProps extends IColumn {
  index: number;
}

export const Column: React.FC<IColumnProps> = ({ title, id, index, cards }) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <div className='px-4 h-full' ref={provided.innerRef} {...provided.draggableProps}>
        <div className='p-3 w-72 rounded-xl bg-zinc-200 text-gray-800 max-h-full flex flex-col'>
          <div className='relative flex justify-between items-start flex-wrap w-full' {...provided.dragHandleProps}>
            <div className='grow shrink basis-min'>
              <h2 className='font-extrabold overflow-hidden py-2 pl-3 pr-2 break-words wrap-anywhere'>{title}</h2>
            </div>
            <Ellipsis className='m-1 cursor-pointer mt-2' />
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

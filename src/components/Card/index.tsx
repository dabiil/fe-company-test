import { Draggable } from 'react-beautiful-dnd';
import { format } from 'date-fns';

import { ICard } from 'types';

interface ICardProps extends ICard {
  index: number;
}

export const Card: React.FC<ICardProps> = ({ content, id, index, createdAt }) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <div className='w-full mt-4' ref={provided.innerRef} {...provided.draggableProps}>
        <div
          className='rounded-xl w-full flex flex-col py-2 px-3 overflow-hidden wrap bg-white huge-shadow '
          {...provided.dragHandleProps}
        >
          <div className='break-words wrap-anywhere'>{content}</div>
          <div className='text-right mt-2 text-sm'>{format(createdAt, 'M/d/y • H:m:ss')}</div>
        </div>
      </div>
    )}
  </Draggable>
);

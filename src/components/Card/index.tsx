import { Draggable } from 'react-beautiful-dnd';

import { ICard } from 'types';

interface ICardProps extends ICard {
  index: number;
}

export const Card: React.FC<ICardProps> = ({ content, id, index }) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <div className='w-full mt-4' ref={provided.innerRef} {...provided.draggableProps}>
        <div
          className='rounded-xl w-full  py-2 px-3 overflow-hidden wrap bg-white huge-shadow break-words wrap-anywhere'
          {...provided.dragHandleProps}
        >
          {content}
        </div>
      </div>
    )}
  </Draggable>
);

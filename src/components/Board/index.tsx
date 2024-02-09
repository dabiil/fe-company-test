import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { cloneDeep } from 'lodash-es';

import { useDataContext } from 'src/providers';

import { Column } from '../Column';
import { NewColumn } from '../NewColumn';

export const Board: React.FC = () => {
  const { board, onChange } = useDataContext();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const { source, destination, type } = result;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const clonedBoard = cloneDeep(board);

    // swap columns
    if (type === 'COLUMN') {
      const temp = clonedBoard.columns[source.index];

      clonedBoard.columns[source.index] = clonedBoard.columns[destination.index];
      clonedBoard.columns[destination.index] = temp;
    }

    // swap cards
    if (type === 'CARD') {
      // swap card in one column
      if (source.droppableId === destination.droppableId) {
        const columnIndex = clonedBoard.columns.findIndex((x) => x.id === source.droppableId);

        const temp = clonedBoard.columns[columnIndex].cards[source.index];

        const column = clonedBoard.columns[columnIndex];

        column.cards.splice(source.index, 1);

        column.cards.splice(destination.index, 0, temp);
      } else {
        // swap card in different columns
        const sourceColumnIndex = clonedBoard.columns.findIndex((x) => x.id === source.droppableId);
        const destinationColumnIndex = clonedBoard.columns.findIndex((x) => x.id === destination.droppableId);

        const card = clonedBoard.columns[sourceColumnIndex].cards[source.index];

        clonedBoard.columns[sourceColumnIndex].cards.splice(source.index, 1);
        clonedBoard.columns[destinationColumnIndex].cards.splice(destination.index, 0, card);
      }
    }

    onChange(clonedBoard);
  };

  return (
    <div className='relative flex-grow mt-3'>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable direction='horizontal' droppableId='board' type='COLUMN'>
          {(provided) => (
            <ol
              className='absolute inline-flex flex-row px-2 mb-1 overflow-x-auto overflow-y-hidden'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {board.columns.map((col, index) => (
                <Column index={index} key={col.id} {...col} />
              ))}
              {provided.placeholder}
              <NewColumn />
            </ol>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

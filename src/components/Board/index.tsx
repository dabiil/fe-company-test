import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { cloneDeep } from 'lodash-es';

import { useDataContext } from 'src/providers';

import { Column } from '../Column';
import { NewColumn } from '../NewColumn';

export const Board: React.FC = () => {
  const { board, onChange } = useDataContext();

  const handleDragEnd = (result: DropResult) => {
    console.log(result);

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const clonedBoard = cloneDeep(board);

    const { source, destination } = result;

    // did not move anywhere - can bail early
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // reordering column
    if (result.type === 'COLUMN') {
      const temp = clonedBoard.columns[source.index];

      clonedBoard.columns[source.index] = clonedBoard.columns[destination.index];
      clonedBoard.columns[destination.index] = temp;

      onChange(clonedBoard);

      return;
    }

    if (result.type === 'CARD') {
      // swap card in one column
      if (source.droppableId === destination.droppableId) {
        const columnIndex = clonedBoard.columns.findIndex((x) => x.id === source.droppableId);

        const temp = clonedBoard.columns[columnIndex].cards[source.index];

        const column = clonedBoard.columns[columnIndex];

        column.cards.splice(source.index, 1);

        column.cards.splice(destination.index, 0, temp);

        onChange(clonedBoard);
      } else {
        const sourceColumnIndex = clonedBoard.columns.findIndex((x) => x.id === source.droppableId);
        const destinationColumnIndex = clonedBoard.columns.findIndex((x) => x.id === destination.droppableId);
        const card = clonedBoard.columns[sourceColumnIndex].cards[source.index];

        clonedBoard.columns[sourceColumnIndex].cards.splice(source.index, 1);
        clonedBoard.columns[destinationColumnIndex].cards.splice(destination.index, 0, card);

        onChange(clonedBoard);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable direction='horizontal' droppableId='board' type='COLUMN'>
        {(provided) => (
          <ol
            className='absolute inline-flex flex-row px-2 mb-1 overflow-x-auto overflow-y-hidden'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {board.columns.map((col, index) => (
              <Column key={col.id} {...col} index={index} />
            ))}
            {provided.placeholder}
            <NewColumn />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};

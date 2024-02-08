import { IColumn } from './column';
import { IEntity } from './entity';

export interface IBoard extends IEntity {
  columns: IColumn[];
}

import { ICard } from './card';
import { IEntity } from './entity';

export interface IColumn extends IEntity {
  cards: ICard[];
  title: string;
}

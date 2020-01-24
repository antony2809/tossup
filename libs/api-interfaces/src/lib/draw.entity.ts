import { ID } from '@datorama/akita';
import { User } from './user.entity';

export class Draw {
  id!: ID;
  created!: Date;
  updated!: Date;
  // Fecha limite del usuario para apuntarse
  limitDate!: Date;
  // Fecha en la que se celebrar el sorteo;
  drawDate!: Date;
  cost!: number;
  name!: string;
  description!: string;
  participations: User[];
  winner!: User;
  status!: 'open' | 'closed' | 'done' | 'canceled';
}

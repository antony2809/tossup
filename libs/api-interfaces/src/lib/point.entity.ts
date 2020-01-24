import { ID } from '@datorama/akita';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Point {
  @PrimaryGeneratedColumn('uuid')
  id!: ID;

  @Column({ type: 'double' })
  price!: number;

  @Column({ type: 'int' })
  total!: number;

  @Column({ type: 'double', nullable: true })
  discount?: number;
}

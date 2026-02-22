import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'trnsaction' })
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true }) username: string;
  @Column({ nullable: true }) password: string;
}

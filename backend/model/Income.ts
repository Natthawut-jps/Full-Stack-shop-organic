import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'income' })
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  emp_name: string;
  @Column({ nullable: true })
  emp_salary: string;
  @Column({ nullable: true })
  order_name: string;
}

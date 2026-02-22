import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'order' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  reference: string;
  @Column({ nullable: true, unique: true })
  tracking_id: string;
  @Column({ nullable: true })
  payment_menthod: string;
  @Column('decimal', { precision: 32, scale: 2, nullable: true })
  amount_total: string;
  @Column({ default: 1 })
  status: number;
  @Column({ nullable: true })
  quantity: number;
  @Column({ nullable: true })
  customer_name: string;
  @Column({ nullable: true })
  user_id: string;
  @Column({ nullable: true })
  address_id: number;
}

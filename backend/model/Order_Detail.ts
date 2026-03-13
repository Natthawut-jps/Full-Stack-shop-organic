import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'order_detail' })
export class Order_Detail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;
  @Column({ nullable: true })
  categories: string;
  @Column({ nullable: true })
  imgURL: string;
  @Column({ nullable: true })
  price: number;
  @Column({ default: 1, nullable: true })
  quantity: number;
  @Column({ nullable: true })
  product_id: number;
  @Column()
  user_id: string;
  @Column()
  order_id: number;
}

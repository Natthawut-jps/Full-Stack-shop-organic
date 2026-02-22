import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'produst' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column('decimal', { precision: 32, scale: 2, nullable: true })
  price: string;

  @Column({ nullable: true })
  categories: string;

  @Column({ nullable: true })
  imgURL: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  quantity: number;

  @Column({ default: 0 })
  rating: number;

  @Column({ default: 0 })
  sold: number;

  @Column({ default: 1 })
  status: number;
}

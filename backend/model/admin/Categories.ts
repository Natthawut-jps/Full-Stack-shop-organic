import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, unique: true })
  category_name: string;
  @Column({ nullable: true })
  description: string;
  @Column({ nullable: true, default: 0 })
  quantity: number;
  @Column({ default: 0 })
  sold: number;
  @Column({ nullable: true })
  imgURL: string;
}

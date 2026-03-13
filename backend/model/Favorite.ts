import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'favorite' })
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;
  @Column({ nullable: true })
  price: number;
  @Column({ nullable: true })
  categories: string;
  @Column({ nullable: true })
  rating: number;
  @Column({ default: 1, nullable: true })
  quantity: number;
  @Column({ nullable: true })
  imgURL: string;
  @Column({ nullable: true })
  pid: number;
  @Column({ nullable: true })
  uid: number;
}

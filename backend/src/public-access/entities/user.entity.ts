import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'userinfo' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  accept: number;

  @Column({ nullable: true })
  imgURL: string;

  @Column({ default: 0 })
  gmail: number;
}

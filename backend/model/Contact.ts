import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contact' })
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  subject: string;
  @Column()
  description: string;
}

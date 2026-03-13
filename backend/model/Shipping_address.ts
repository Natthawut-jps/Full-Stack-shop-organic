import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'shipping_address' })
export class Shipping_address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true }) first_name: string;
  @Column({ nullable: true }) last_name: string;
  @Column({ nullable: true }) street: string;
  @Column({ nullable: true }) county: string;
  @Column({ nullable: true }) states: string;
  @Column({ nullable: true }) tambon: string;
  @Column({ nullable: true }) zipCode: number;
  @Column({ nullable: true }) email: string;
  @Column({ nullable: true }) phone: string;
  @Column() status: number;
}

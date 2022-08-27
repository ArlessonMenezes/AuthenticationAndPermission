import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/model/user.entity";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  road: string;

  @Column()
  number: string;

  @Column({ name: 'zip_code' })
  zipCode: string;

  @OneToOne(() => User, user => user.address)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
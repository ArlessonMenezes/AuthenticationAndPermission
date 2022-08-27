import { hash } from 'bcryptjs';
import { OneToOne } from 'typeorm';
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Address } from '../../address/model/address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async hashedPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToOne(() => Address, address => address.user)
  address: Address;
}
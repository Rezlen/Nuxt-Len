import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class BusinessProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  businessName: string;

  @Column()
  businessCategory: string;

  @Column()
  businessCountry: string;

  @Column()
  businessCity: string;

  @Column()
  businessRevenue: string;

  @Column()
  businessEmployees: string;

  @Column()
  businessEstablished: string;

  @Column()
  businessLogo: string;

  @Column()
  businessTwitter: string;

  @Column()
  businessGoogle: string;

  @Column()
  businessFacebook: string;

  @Column()
  businessLinkedIn: string;

  @ManyToOne(() => User, user => user.businessProfiles)
  user: User;
}

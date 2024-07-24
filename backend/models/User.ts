import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BusinessProfile } from './BusinessProfile';
import { PersonalProfile } from './PersonalProfile';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => BusinessProfile, profile => profile.user)
  businessProfiles: BusinessProfile[];

  @OneToMany(() => PersonalProfile, profile => profile.user)
  personalProfiles: PersonalProfile[];
}

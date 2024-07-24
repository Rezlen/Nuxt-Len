import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class PersonalProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  jobPosition: string;

  @Column()
  yearlySalary: string;

  @Column()
  age: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  facePhoto: string;

  @Column()
  personalLinkedIn: string;

  @Column()
  personalGoogle: string;

  @Column()
  personalFacebook: string;

  @Column()
  personalTwitter: string;

  @Column()
  summaryWhoWeAre: string;

  @Column()
  summaryWhatWeProvide: string;

  @Column()
  summaryWhatWeLookingFor: string;

  @ManyToOne(() => User, user => user.personalProfiles)
  user: User;
}

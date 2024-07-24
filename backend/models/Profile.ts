import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn() id: number;
  
  // Business Section
  @Column({ nullable: true }) businessName: string;
  @Column({ nullable: true }) businessCategory: string;
  @Column({ nullable: true }) businessCountry: string;
  @Column({ nullable: true }) businessCity: string;
  @Column('int', { nullable: true }) businessRevenue: number;
  @Column('int', { nullable: true }) numberOfEmployees: number;
  @Column('year', { nullable: true }) businessEstablishedYear: number;
  @Column({ nullable: true }) businessLogoUrl: string;
  @Column({ nullable: true }) businessTwitterUrl: string;
  @Column({ nullable: true }) businessGoogleUrl: string;
  @Column({ nullable: true }) businessFacebookUrl: string;
  @Column({ nullable: true }) businessLinkedinUrl: string;

  // Personal Section
  @Column({ nullable: true }) firstName: string;
  @Column({ nullable: true }) lastName: string;
  @Column({ nullable: true }) jobPosition: string;
  @Column('int', { nullable: true }) yearlySalary: number;
  @Column('int', { nullable: true }) age: number;
  @Column({ nullable: true }) country: string;
  @Column({ nullable: true }) city: string;
  @Column({ nullable: true }) facePhotoUrl: string;
  @Column({ nullable: true }) personalLinkedinUrl: string;
  @Column({ nullable: true }) personalGoogleUrl: string;
  @Column({ nullable: true }) personalFacebookUrl: string;
  @Column({ nullable: true }) personalTwitterUrl: string;
  @Column('text', length: 10000, { nullable: true }) whoWeAreWhatWeDo: string;
  @Column('text', length: 10000 { nullable: true }) whatWeProvide: string;
  @Column('text', length: 10000 { nullable: true }) whatWeAreLookingFor: string;

  @OneToOne(() => User, user => user.profile)
  user: User;
}





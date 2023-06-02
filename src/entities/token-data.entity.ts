import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TokenData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  swid: string;

  @Column()
  hwid: string;

  @Column({ default: '' })
  user: string;

  @Column({ default: '' })
  pass: string;

  @Column({ unique: true })
  token: string;
}

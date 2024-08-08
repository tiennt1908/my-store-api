import { Length, Matches } from 'class-validator';

export class LoginInput {
  @Matches(/^0[0-9]{9}$/, { message: 'Phone number invalid' })
  phoneNumber: string;

  @Length(6, 32)
  password: string;
}

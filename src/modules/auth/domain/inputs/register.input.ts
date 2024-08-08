import { IsString, Length, Matches } from 'class-validator';

export class RegisterInput {
  @IsString()
  @Length(3, 32)
  @Matches(
    /^(\s?[a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+)+$/,
    { message: 'Full name invalid' },
  )
  fullName: string;

  @Matches(/^0[0-9]{9}$/, { message: 'Phone number invalid' })
  phoneNumber: string;

  @Length(6, 32)
  password: string;
}

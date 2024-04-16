import { EmailLoginSchema } from './EmailLoginDto';
import { UserInfoSchema } from './UserInfo';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const EmailRegisterSchema = z
  .object({
    ...EmailLoginSchema.shape,
    ...UserInfoSchema.shape
  })
  .refine(info => info.fullname != null, { message: 'Full name must be provided!' });

class EmailRegisterDto extends createZodDto(EmailRegisterSchema) {}

export { EmailRegisterDto };

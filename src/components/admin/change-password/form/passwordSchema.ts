import * as z from 'zod';

const errorNewPassword =
  'Пароль має складатись з 8-30 знаків, латинських літер, мати 1 велику літеру, 1 маленьку літеру, 1 цифру та символу';

export const passwordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, errorNewPassword)
      .max(30, errorNewPassword)
      .regex(/[A-Z]/, errorNewPassword)
      .regex(/[a-z]/, errorNewPassword)
      .regex(/[0-9]/, errorNewPassword)
      .regex(/[-._!"`'#%&,:;<>=@{}~$()*+/?[\]^|]+/, errorNewPassword)
      .regex(
        /^[a-zA-Z0-9._!"`'#%&,:;<>=@{}~$()*+/?[\]^|-]+$/,
        errorNewPassword
      ),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Паролі не однакові, перевірте ще раз',
    path: ['confirmNewPassword'],
  });

import {z} from 'zod';

export const usernameValidation = z
  .string()
  .min(3, { message: 'Username must be at least 3 characters' })
  .max(20, { message: 'Username must be less than 20 characters' })
  .regex(/^[a-zA-Z0-9]+$/, { message: 'Username must not contain special characters' });

export const signUpSchema = z.object({
    username: usernameValidation,
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),

})
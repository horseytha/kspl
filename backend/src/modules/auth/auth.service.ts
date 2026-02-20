import bcrypt from 'bcrypt';
import prisma from '../../config/db';
import { generateToken } from '../../utils/generateToken';
import { sendEmail } from '../../utils/sendEmail';
import { createResetToken, validateResetToken, deleteResetToken } from './token.service';
// DTOs and interfaces can be defined here if needed

export const register = async (data: any) => {
  const { name, email, password } = data;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw { statusCode: 400, message: 'User already exists' };

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  const token = generateToken(user.id, user.role);
  return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, token };
};

export const login = async (data: any) => {
  const { email, password } = data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw { statusCode: 401, message: 'Invalid credentials' };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw { statusCode: 401, message: 'Invalid credentials' };

  const token = generateToken(user.id, user.role);
  return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, token };
};

export const forgotPassword = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw { statusCode: 404, message: 'User not found' };

  const token = await createResetToken(user.id);
  const resetLink = `http://localhost:3000/reset-password?token=${token}`; // Frontend URL

  await sendEmail(email, 'Password Reset', `Click here to reset your password: ${resetLink}`);
  return { message: 'Password reset link sent' };
};

export const resetPassword = async (token: string, newPassword: string) => {
  const resetToken = await validateResetToken(token);
  if (!resetToken) throw { statusCode: 400, message: 'Invalid or expired token' };

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: resetToken.userId },
    data: { password: hashedPassword },
  });

  await deleteResetToken(resetToken.userId);
  return { message: 'Password reset successfully' };
};

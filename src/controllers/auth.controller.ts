import { Request, Response } from 'express';
import { AccountModel } from '../models/account.model';
import bcrypt from 'bcrypt';
import { generateToken } from '../lib/jwt';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const account = await AccountModel.findOne({ email });
  if (!account) {
    return res.status(400).json({ message: 'Email không tồn tại' });
  }

  const isMatch = await bcrypt.compare(password, account.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Sai mật khẩu' });
  }

  const token = generateToken({ id: account._id, role: account.role });
  return res.status(200).json({ token });
};

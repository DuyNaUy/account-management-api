import { Request, Response } from 'express';
import { generateToken } from "../lib/jwt";
import { AccountModel } from "../models/account.model";
import bcrypt from "bcrypt";

// POST /login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Tìm tài khoản theo email
  const account = await AccountModel.findOne({ email });

  if (!account) {
    return res.status(400).json({ message: "Email không tồn tại" });
  }

  // So sánh mật khẩu
  const isMatch = await bcrypt.compare(password, account.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Sai mật khẩu" });
  }

  // Tạo JWT token
  const token = generateToken({ id: account._id, role: account.role });

  // Trả về token
  return res.status(200).json({ token });
};

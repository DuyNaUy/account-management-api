import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';
import ms from 'ms';  // Cài package ms nếu cần thiết

const JWT_SECRET: Secret = process.env.JWT_SECRET || 'your_secret_key';

// Hàm tạo token (Sign)
export const generateToken = (payload: object, expiresIn: string | number = '1h'): string => {
  const options: SignOptions = { expiresIn: expiresIn as SignOptions['expiresIn'] };
  return jwt.sign(payload, JWT_SECRET, options);
};

// Hàm verify token (Giải mã token)
export const verifyToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    return null;
  }
};

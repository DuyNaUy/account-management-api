import mongoose, { Schema, Document } from 'mongoose';

// Interface để TypeScript hiểu được kiểu dữ liệu Account
export interface IAccount extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin'; // Phân quyền
  createdAt: Date;
}

const AccountSchema: Schema = new Schema({
  name: {
    type: String,
    required: true, // Bắt buộc nhập
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Không cho phép trùng email
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Mật khẩu tối thiểu 6 ký tự
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Tạo model Account để tương tác với MongoDB
export const AccountModel = mongoose.model<IAccount>('Account', AccountSchema);

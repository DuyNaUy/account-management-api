import { IAccount } from "../types/account.type";
import { AccountModel } from "../models/account.model";

export class AccountService{

    //lay tat ca tai khoan
static async list(){
    return await AccountModel.find();
}

//lay tai khoan bang id
static async findByID(id: String){
    return await AccountModel.findById(id);
}

//tao tai khoan 
static async createAccount(payload: IAccount ){
return await new AccountModel(payload).save();
}

//sua tai khoan
static async updateByID(id: String, payload: Partial<IAccount>){
    return await AccountModel.findByIdAndUpdate(id, payload, {new: true});
}

//delete tai khoan
static async delete(id: String){
return await AccountModel.findByIdAndDelete(id);
}
}
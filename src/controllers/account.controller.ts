import { Request, Response } from 'express';
import { AccountService } from '../services/account.service';  



export const getAllAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await AccountService.list();  
    
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get accounts', error });
  }
};


export const getAccountById = async (req: Request, res: Response) => {
  try {
    const account = await AccountService.findByID(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get account', error });
  }
};

// POST create account
export const createAccount = async (req: Request, res: Response) => {
  try {
    const newAccount = await AccountService.createAccount(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create account', error });
  }
};


export const updateAccount = async (req: Request, res: Response) => {
  try {
    const updatedAccount = await AccountService.updateByID(req.params.id, req.body);
    if (!updatedAccount) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.status(200).json(updatedAccount);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update account', error });
  }
};


export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const deletedAccount = await AccountService.delete(req.params.id);
    if (!deletedAccount) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.status(200).json({ message: 'Account deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete account', error });
  }
};

import express from 'express';
import * as accountController from '../controllers/account.controller';
import { validateBody } from '../middleware/validate.middleware';
import { accountValidationSchema } from '../validation/account.validation';
import { authMiddleware, roleMiddleware } from '../middleware/auth.middleware';


const router = express.Router();

router.get('/', accountController.getAllAccounts);
router.post('/', validateBody(accountValidationSchema), accountController.createAccount);  
router.put('/:id', validateBody(accountValidationSchema), accountController.updateAccount);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), accountController.deleteAccount);


export default router;

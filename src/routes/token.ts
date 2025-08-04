import express from 'express';
import * as accountController from '../controllers/account.controller';
import { authMiddleware, roleMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", authMiddleware, accountController.getAllAccounts);
router.delete("/:id", authMiddleware, roleMiddleware(['admin']), accountController.deleteAccount);

export default router;

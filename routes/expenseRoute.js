import express from 'express';
import {
  createExpense,
  deleteExpense,
  getAllExpenses,
} from '../controllers/expenseController.js';

const router = express.Router();

router.route('/').get(getAllExpenses).post(createExpense);
router.route('/:id').delete(deleteExpense);

export default router;

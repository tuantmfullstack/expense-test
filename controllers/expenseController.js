import Expense from '../models/expenseModel.js';

export const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();

    res.status(200).json({
      status: 'success',
      length: expenses.length,
      data: {
        expenses,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const createExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        expense,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      message: 'Expense deleted.',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

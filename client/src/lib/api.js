import axios from 'axios';

const URL = 'http://localhost:5000/api/v1/expenses';

export const getAllExpenses = async () => {
  const { data } = await axios.get(URL);

  return data.data.expenses;
};

export const createExpense = async (expense) => {
  const { data } = await axios.post(URL, expense);

  return data.data.expense;
};

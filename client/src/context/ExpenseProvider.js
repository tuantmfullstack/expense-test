import { createContext, useEffect, useState } from 'react';
import useHttp from '../hook/useHttp.js';
import { getAllExpenses } from '../lib/api.js';

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [year, setYear] = useState('2019');
  const [expenses, setExpenses] = useState([]);
  const { isLoading, data, sendRequest } = useHttp(getAllExpenses, true);

  const expenseList = expenses.filter(
    (expense) => new Date(expense.date).getFullYear().toString() === year
  );

  useEffect(() => {
    sendRequest();
  }, []);

  useEffect(() => {
    setExpenses(data);
  }, [data]);

  const addNewExpense = (expense) => {
    setExpenses((preVal) => [...preVal, expense]);
  };

  const filterYear = (year) => {
    setYear(year);
  };

  const value = { isLoading, expenseList, addNewExpense, filterYear };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseProvider;

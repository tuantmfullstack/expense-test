import { useContext } from 'react';
import { ExpenseContext } from '../../context/ExpenseProvider.js';
import ExpenseColumns from './ExpenseColumns.js';

const ExpenseData = () => {
  const { expenseList } = useContext(ExpenseContext);

  let total = 0;

  const months = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 0 },
    { name: 'Mar', value: 0 },
    { name: 'Apr', value: 0 },
    { name: 'May', value: 0 },
    { name: 'Jun', value: 0 },
    { name: 'Jul', value: 0 },
    { name: 'Aug', value: 0 },
    { name: 'Sep', value: 0 },
    { name: 'Oct', value: 0 },
    { name: 'Nov', value: 0 },
    { name: 'Dec', value: 0 },
  ];

  expenseList.forEach((expense) => {
    months[new Date(expense.date).getMonth()].value += +expense.price;
    total += +expense.price;
  });

  return (
    <>
      {months.map((month) => (
        <ExpenseColumns
          key={month.name}
          name={month.name}
          value={Math.round((month.value / total) * 100)}
        />
      ))}
    </>
  );
};

export default ExpenseData;

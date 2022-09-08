import { Spinner, Flex } from '@chakra-ui/react';
import { useContext } from 'react';

import { ExpenseContext } from '../../context/ExpenseProvider.js';
import ExpenseItems from './ExpenseItems.js';

const ExpenseList = () => {
  const { isLoading, expenseList } = useContext(ExpenseContext);
  return (
    <>
      {isLoading ? (
        <Flex justify='center'>
          <Spinner />
        </Flex>
      ) : (
        expenseList.map((expense, idx) => (
          <ExpenseItems
            key={idx}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))
      )}
    </>
  );
};

export default ExpenseList;

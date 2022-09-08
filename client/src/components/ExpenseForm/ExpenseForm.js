import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { ExpenseContext } from '../../context/ExpenseProvider.js';
import useHttp from '../../hook/useHttp.js';
import { createExpense } from '../../lib/api.js';
import Card from '../UI/Card.js';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(1);
  const [date, setDate] = useState('2019-01-01');

  const { addNewExpense } = useContext(ExpenseContext);
  const { isLoading, sendRequest } = useHttp(createExpense);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const addNewExpenseHandler = () => {
    const newExpense = { title, price: +price, date };
    sendRequest(newExpense);
    addNewExpense(newExpense);

    setDate('2019-01-01');
    setPrice(1);
    setTitle('');
  };

  return (
    <Card
      width='700px'
      bg='#91a7ff'
      margin='0 auto 20px'
      p='24px 12px 16px'
      direction='column'
    >
      <Flex justify='space-between'>
        <Box>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input
            id='name'
            bg='#fff'
            width='220px'
            value={title}
            onChange={titleChangeHandler}
          />
        </Box>
        <Box>
          <FormLabel htmlFor='price'>Price</FormLabel>
          <Input
            id='price'
            bg='#fff'
            width='220px'
            type={'number'}
            min='1'
            step='0.01'
            value={price}
            onChange={priceChangeHandler}
          />
        </Box>
        <Box>
          <FormLabel htmlFor='date'>Date</FormLabel>
          <Input
            id='date'
            type='date'
            bg='#fff'
            width='220px'
            value={date}
            min={'2019-01-01'}
            max={'2022-12-31'}
            onChange={dateChangeHandler}
          />
        </Box>
      </Flex>
      <Flex marginTop='12px' justify='flex-end'>
        <Button
          colorScheme={'purple'}
          color='#fff'
          onClick={addNewExpenseHandler}
          isLoading={isLoading}
          loadingText='Sending...'
        >
          Add expense
        </Button>
      </Flex>
    </Card>
  );
};

export default ExpenseForm;

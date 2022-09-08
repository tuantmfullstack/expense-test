import { Flex, Select, Text } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { ExpenseContext } from '../../context/ExpenseProvider.js';
import useHttp from '../../hook/useHttp.js';
import Card from '../UI/Card.js';
import ExpenseChart from './ExpenseChart.js';
import ExpenseList from './ExpenseList.js';

const Expenses = () => {
  const { filterYear } = useContext(ExpenseContext);

  const filterYearHandler = (e) => {
    filterYear(e.target.value);
  };

  return (
    <Card
      width='700px'
      bg='gray.600'
      color='#fff'
      p='24px 20px'
      margin='0px auto'
      direction='column'
    >
      <Flex justify='space-between' align='center'>
        <Text>Filter by year</Text>
        <Select
          width='150px'
          bg='#fff'
          color='#000'
          onChange={filterYearHandler}
        >
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </Select>
      </Flex>
      <ExpenseChart />
      <ExpenseList />
    </Card>
  );
};

export default Expenses;

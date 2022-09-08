import { Text } from '@chakra-ui/react';
import Card from '../UI/Card.js';

const ExpenseItems = ({ title, price, date }) => {
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString('en-EN', { month: 'long' });
  const year = new Date(date).getFullYear();

  return (
    <Card
      width='100%'
      bg='gray.700'
      p='12px'
      align='center'
      justify='space-between'
      gap='12px'
      fontWeight='700'
      fontSize='20px'
      margin='0px 0px 12px'
    >
      <Card
        width='80px'
        height='80px'
        fontSize='14px'
        fontWeight='700'
        direction='column'
        align='center'
        justify='center'
        border='1px solid #ccc'
        bg='gray.800'
      >
        <Text>{month}</Text>
        <Text fontWeight='500'>{year}</Text>
        <Text fontSize='20px'>{day}</Text>
      </Card>
      <Text flex='1'>{title}</Text>
      <Text
        p='4px 12px'
        border='1px solid #ccc'
        bg='#7950f2'
        fontWeight='700'
        borderRadius='12px'
      >
        ${price}
      </Text>
    </Card>
  );
};

export default ExpenseItems;

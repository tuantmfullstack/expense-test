import Card from '../UI/Card.js';
import ExpenseColumns from './ExpenseColumns.js';
import ExpenseData from './ExpenseData.js';

const ExpenseChart = () => {
  return (
    <Card
      bg='#ffdeeb'
      width='100%'
      height='160px'
      margin='20px 0'
      p='20px'
      justify='space-between'
      borderRadius='12px'
    >
      <ExpenseData />
    </Card>
  );
};

export default ExpenseChart;

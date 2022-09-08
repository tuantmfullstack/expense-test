import { Box } from '@chakra-ui/react';
import ExpenseForm from './components/ExpenseForm/ExpenseForm.js';
import Expenses from './components/Expenses/Expenses.js';

function App() {
  return (
    <Box margin='36px 0'>
      <ExpenseForm />
      <Expenses />
    </Box>
  );
}

export default App;

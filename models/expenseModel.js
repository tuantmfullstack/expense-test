import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Expense must have a title'],
  },
  price: {
    type: String,
    required: [true, 'Expense must have price'],
  },
  date: {
    type: Date,
    required: [true, 'Expense must have date-time'],
  },
});

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;

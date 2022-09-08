import mongoose from 'mongoose';
import app from './app.js';

console.log(process.env.NODE_ENV);

const DB_URL = process.env.MONGODB_URL.replace(
  '<password>',
  process.env.MONGODB_PW
);

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true, // <-- no longer necessary
    useUnifiedTopology: true, // <-- no longer necessary
  })
  .then(console.log('Database connected!'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

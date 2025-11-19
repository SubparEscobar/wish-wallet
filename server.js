const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const incomeRouter = require('./routes/incomeRouter');
const expenseRouter = require('./routes/expenseRouter');
const wishRouter = require('./routes/wishRouter');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/incomes', incomeRouter);
app.use('/expenses', expenseRouter);
app.use('/wishes', wishRouter);

const port = 3002;
app.listen(port, () => console.log(`Server running on port ${port}`));

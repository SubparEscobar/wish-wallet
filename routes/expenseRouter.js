// Expense routes - placeholder for now
// TODO: Connect to database and implement actual CRUD operations

const express = require('express');
const expenseRouter = express.Router();

expenseRouter.route('/')
  .get((req, res) => res.send('Will send all expenses'))
  .post((req, res) => res.send('Will create a new expense entry'));

expenseRouter.route('/:expenseId')
  .get((req, res) => res.send(`Will send expense ${req.params.expenseId}`))
  .put((req, res) => res.send(`Will update expense ${req.params.expenseId}`))
  .delete((req, res) => res.send(`Will delete expense ${req.params.expenseId}`));

module.exports = expenseRouter;
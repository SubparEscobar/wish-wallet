const express = require('express');
const incomeRouter = express.Router();

incomeRouter.route('/')
  .get((req, res) => res.send('Will send all incomes'))
  .post((req, res) => res.send('Will create a new income entry'));

incomeRouter.route('/:incomeId')
  .get((req, res) => res.send(`Will send income ${req.params.incomeId}`))
  .put((req, res) => res.send(`Will update income ${req.params.incomeId}`))
  .delete((req, res) => res.send(`Will delete income ${req.params.incomeId}`));

module.exports = incomeRouter;

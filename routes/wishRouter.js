const express = require('express');
const wishRouter = express.Router();

wishRouter.route('/')
  .get((req, res) => res.send('Will send all wishes'))
  .post((req, res) => res.send('Will create a new wish entry'));

wishRouter.route('/:wishId')
  .get((req, res) => res.send(`Will send wish ${req.params.wishId}`))
  .put((req, res) => res.send(`Will update wish ${req.params.wishId}`))
  .delete((req, res) => res.send(`Will delete wish ${req.params.wishId}`));

module.exports = wishRouter;

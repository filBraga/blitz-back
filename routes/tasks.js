var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {id: 1, text: 'First task from routes/tasks.js in back',},
    {id: 2, text: 'Second task',},
    {id: 3, text: 'Third task',},
  ])
})

module.exports = router;
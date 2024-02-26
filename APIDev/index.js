const { run } = require('./generativeAi');
const express = require('express')
const app = express();

app.get('/', async (req, res) => {
  let prompt = req.query.query;

  try {
    let answer = await run(prompt);
    res.status(200).send(answer);
  } catch (err) {
    res.status(500).send('Error processing request');
  }
});

app.listen(8082, () => {
  console.log('Server listening on port 8082');
});
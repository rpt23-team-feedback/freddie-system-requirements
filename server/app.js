const express = require('express');
const app = express();
const path = require('path');
const port = 3201;
const db = require('../database/system_model.js');

app.use('/:id', express.static(path.join(__dirname, '../dist')));

app.get('/system-requirements/:bundleId', async (req, res) => {
  const bundleId = req.params.bundleId;
  if ((bundleId < 1 || bundleId > 100) || (bundleId === parseFloat(bundleId))) {
    res.status(400).send('Please enter a valid Bundle ID');
  }
  try {
    const bundleSystemRequirements = await db.getSystemRequirements(bundleId);
    res.status(200).send(bundleSystemRequirements);
  } catch (err) {
    res.status(500).send('Server Error, please wait while we work to fix it');
  }
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

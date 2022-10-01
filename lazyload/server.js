const express = require('express');
const path = require('path');
const app = express();
const _path = path.join(__dirname, './dist');
app.use('/', express.static(_path));
app.listen('5000', () => {
  console.log('lazy image server ★ listening server 5000 port.');
});

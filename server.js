const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/challenge-eldorado-ang'));

app.get('/*', (request, response) => {
  response.sendFile(__dirname + '/dist/challenge-eldorado-ang/index.html');
});

app.listen(PORT, () => {
  console.log(`PORT: ${PORT}`);
});
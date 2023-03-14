const express = require("express");
const app = express();
app.use((req, res) => { //(request, response)
  console.log('We got a new request!')
  res.send('<h1>Request received</h1> <p>Have a great day!</p>')
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

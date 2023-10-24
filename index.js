const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const emissionRoute = require('./src/route/route');

app.use(bodyParser.json());

// Define a simple endpoint
app.use("/emissions", emissionRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

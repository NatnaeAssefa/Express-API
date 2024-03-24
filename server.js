// Import required modules
const express = require('express');
const package = require('./package.json');


// Create an instance of Express
const app = express();
const port = 2727; // Port number

// Define a sample endpoint
app.get('/api/example', (req, res) => {
  // Respond with a JSON object
  res.json({ message: `This is an example API endpoint Created by ${package.author}!`});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

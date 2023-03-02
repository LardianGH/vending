const express = require('express');
//setting express-handlebars to a variable
const exphbs = require("express-handlebars");
//importing router.js
const routes = require('./routes');

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up the view engine
app.engine('handlebars', exphbs.engine({}));
app.set('view engine', 'handlebars');

PORT = 3000

// Use the router object for routes starting with /
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
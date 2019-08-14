const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

// Initialise middleware.
// This allows us to accept body data. Used to require BodyParser.
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Contact Keeper API' })
);

// Define our routes.
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

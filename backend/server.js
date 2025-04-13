const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config();
const User = require('./models/User')
const cookieParser = require('cookie-parser')

const app = express();
connectDB();

app.use(cors({ 
  origin: true,
  credentials : true
 }));

app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Server is running! good 🚀');
});

app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





















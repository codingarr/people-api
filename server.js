const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ananya:ananya@cluster0.7kbrzja.mongodb.net/peopleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/', require('./routes/personRoutes'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

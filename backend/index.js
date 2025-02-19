require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB подключен'))
  .catch(err => console.error('Ошибка подключения к MongoDB', err));

app.use('/', routes);

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));

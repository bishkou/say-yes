const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet')
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const middleswares = require('./middlewares')
const logs = require('./api/logs')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('everything in place');
})
    .catch(() => {
        console.log('connection failed');
});

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(express.json())

app.use('/api/logs', logs)


app.use(middleswares.notFound)
app.use(middleswares.errorHandler)

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log("listening !!")
})

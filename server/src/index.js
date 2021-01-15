const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet')
const cors = require('cors');

const middleswares = require('./middlewares')

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Hellp world'
    })
})

app.use(middleswares.notFound)
app.use(middleswares.errorHandler)

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log("listening !!")
})

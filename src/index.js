const express = require('express');
const app = express();
const port = 3003;
const path = require('path')
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        eq: (a, b) => a === b,
    },
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
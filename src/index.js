const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
var methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
// connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//HTTP logger
app.use(morgan('combined'));

app.use(methodOverride('_method'));

//Templete engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); //THử viện path trả về quản lí liên qan đường dẫn

// Chạy funtion route();
//Routes init : Khởi tạo về tuyến đường
route(app); //Làm gọn file index

//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

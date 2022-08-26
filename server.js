const path = require('path');

const { setStatics } = require('./utils/statics');
const sequelize = require('./utils/database');
const adminRouter = require('./routes/admin');
const indexRoutes = require('./routes/index');
const errorController = require('./controller/error');

const express = require('express');
const parser = require('body-parser');

const app = express()

// Middleware
app.use(parser.urlencoded({ extended: false }));

// End of Middleware

// EJS
app.set('view engine', 'ejs')
app.set('views', 'views');
// End of EJS


// Statics
setStatics(app);
// End of Statics

// Routes
app.use('/admin', adminRouter)
app.use(indexRoutes);
// End of routes

// 404
app.use(errorController.get404);
// End of 404

sequelize
    .sync()
    .then(result => {
        console.log(result);
        app.listen(3000, () => console.log('server is running.'))
    })
    .catch(err => {
        console.log(err);
    })
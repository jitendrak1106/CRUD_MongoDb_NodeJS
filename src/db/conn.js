const mongoose = require('mongoose');

//Connection string to mongodb
mongoose.connect("mongodb://localhost:27017/olympics").then(() => {
    console.log(`Connection to DB is successful`);
}).catch( (e) => {
    console.log(`Unable to connect to DB`);
});
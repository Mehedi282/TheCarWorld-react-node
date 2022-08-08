const express = require('express');
const mongoose = require('mongoose')
const env = require('dotenv');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const path = require('path');

const PORT = process.env.PORT || 5000;

const collectiontRoute = require('./routes/collection')
const contractRoute = require('./routes/contract')
const AdmintRoute = require('./routes/admin')
const productRoute = require('./routes/product')


const app = express()
env.config();

mongoose.connect(`mongodb+srv://${process.env.M_DB_User}:${process.env.M_DB_Password}@cluster0.oi8bs.mongodb.net/${process.env.M_DB_Database}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected Succesfully')
})

app.use(express.json())
app.use(cors())
app.use(cookieParser());

app.use('/api', collectiontRoute)
app.use('/api', contractRoute)
app.use('/api', AdmintRoute)
app.use('/api', productRoute)

if (process.env.Node_ENV = "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handles any requests that don't match the ones above
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
})
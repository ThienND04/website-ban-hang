const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://thien:thien2004@localhost:27017/db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: 'admin',
        });
        console.log('Database connected successfully');
    }
    catch (error) {
        console.error('Database connection error:', error);
    }
}

module.exports = {connect};
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');

(async () => {
    try {
        if (!process.env.MONGO_URI){
            console.error('MONGO_URI IS UNDEFINIED');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log('MONGO CONNECTION SUCCESS');

        const app = express();

        app.use(express.urlencoded({extended: true}));
        app.use(methodOverride('_method'));
        app.use(express.static(path.join(__dirname, 'public')));

        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, '/views'));

        app.get('/', (req, res) => {
            res.render('index');
        })

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`APP LISTENING ON PORT ${PORT}`));
    } catch (err) {
        console.error('MONGO CONNECTION ERROR', err);
        process.exit(1);
    }
})()
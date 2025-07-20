require('dotenv').config();
const mongoose = require('mongoose');
const postSchema = require('../models/post');

(async () => {
    try {
        if (!process.env.MONGO_URI){
            console.err('MONGO_URI IS UNDEFINIED');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log('MONGO CONNECTION SUCCESS');

        let post = {
            username: 'gsilvaepinto',
            comment: 'this is an example to test'
        }

        const postCreated = await postSchema.create(post);
        console.log('POST SUCCESS', postCreated);

    } catch (err) {
        console.error('MONGO CONNECTION ERROR', err);
        process.exit(1);
    } finally{
        console.log('MONGO CONNECTION CLOSE');
        mongoose.connection.close();
    }
})()
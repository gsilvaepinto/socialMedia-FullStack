require ('dotenv').config();
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

        const deletedPost = await postSchema.findOneAndDelete({username: 'gsilvaepinto'});
        console.log('POST DELETED', deletedPost);
    } catch (err) {
        console.log('MONGO CONNECTION ERROR', err);
        process.exit(1);
    } finally{
        console.log('MONGO CONNECTION CLOSE');
        mongoose.connection.close();
    }
})()
import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `mongodb://user:globalearthcitizen@blogweb-shard-00-00.zzfaz.mongodb.net:27017,blogweb-shard-00-01.zzfaz.mongodb.net:27017,blogweb-shard-00-02.zzfaz.mongodb.net:27017/BlogWeb?ssl=true&replicaSet=atlas-9x57tb-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
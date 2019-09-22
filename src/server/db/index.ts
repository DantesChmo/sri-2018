import mongoose from 'mongoose';

const dbConnectUrl = 'mongodb+srv://Doni-rio:11022011kk@sriproject-otv9c.mongodb.net/test?retryWrites=true&w=majority';

mongoose
    .connect(dbConnectUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .catch();

export const db = mongoose.connection;

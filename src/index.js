import { connect } from 'mongoose';
import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({
    path: './src/.env',
});

const PORT = process.env.PORT || 3000;

console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => { 
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the process with failure
});

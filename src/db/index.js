import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI;
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
   
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
}
export default connectDB;
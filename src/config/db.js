import mongoose from 'mongoose';

const connectDB = async(url) => {
    await mongoose.connect(url).then(() => console.log('database connect'))
}

export default connectDB
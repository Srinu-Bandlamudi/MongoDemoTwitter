import mongoose from 'mongoose';

export  const connect=async ()=>{
    await mongoose.connect('mongodb+srv://srinubandlamudi55:4blZBupXfvYf6Hwy@src-website.yaaavy9.mongodb.net/?retryWrites=true&w=majority&appName=SRC-Website');
}


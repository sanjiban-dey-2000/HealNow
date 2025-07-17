const mongoose=require('mongoose');

async function connectDB(MONGO_URI){
    return await mongoose.connect(MONGO_URI);
}

module.exports={
    connectDB
};
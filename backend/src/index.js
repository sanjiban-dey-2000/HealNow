const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const path=require('path');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const {connectDB}=require('./lib/connection');
const userRouter=require('./routes/authRoutes');
const contactRouter=require('./routes/contactusRoute');
const aiChatRouter=require('./routes/chatRoute');

const app=express();
const PORT=process.env.PORT;
const MONGO_URI=process.env.MONGO_URI;

//database connection
connectDB(MONGO_URI).then(()=>{
    console.log("Database connection established");
}).catch((err)=>{
    console.log(`Error occured in database connection due to ${err.message}`);
});

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use('/assets',express.static(path.resolve('public/assets')));

app.use('/api/user',userRouter);
app.use('/api/contact',contactRouter);
app.use('/api/aiChat',aiChatRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})
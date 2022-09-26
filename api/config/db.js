import mongoose from 'mongoose';


//Create a mongoose connection
const mongoDBConnect = async() => {


    try {
       
        const connection = await mongoose.connect(process.env.MONGO_STRING);
        console.log(`MongoDB connected successfully `.bgBlue.black);
    } catch (error) {
        
        console.log(error);
    }
}


//export mongo connection
export default mongoDBConnect;
import mongoose from 'mongoose'
import config from './config'

const connectDB = () =>{
   
    if(mongoose.connections[0].readyState){

        return;
    }
    mongoose.connect(config.mongo_url,{
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err =>{
        if(err) throw err;
        console.log('Connected to mongodb.')
    })
}
export default connectDB
const mongoose=require('mongoose');
const config=require('config');
const db=config.get('mongoURI');
//mongoose.connect(db)
const connectDB=async ()=>{
    try{
            await mongoose.connect(db,{
                useNewUrlParser:true
            });
            console.log('mongo db connected');
    }catch(err){
        console.error(err.message);
        //exit process with failer
        process.exit(1);
    }
};
module.exports =connectDB;
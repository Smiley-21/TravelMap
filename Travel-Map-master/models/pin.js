import  mongoose from  'mongoose';

const pinSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            min:3,max:20,
            required:true,
        },
        title:
        {
            type:String,
            required:true,
            min:2
        },
        desc:
        {
            type:String,
            required:true,
           min:6
        },
        rating:
        {
            type:Number,
            min:1,
            max:5
        },
        lat:
        {
            type:Number,
            required:true
        },
        long:
        {
            type:Number,
            required:true
        }


    },{timestamps:true}
);

export  const pinLocation = mongoose.model('pinLocations',pinSchema);

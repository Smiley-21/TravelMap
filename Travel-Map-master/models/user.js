import  mongoose from  'mongoose';

export const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            min:3,max:20,
            required:true,
            unique:true
        },
        email:
        {
            type:String,
            min:5,max:20,
            required:true,
            unique:true
        },
        password:
        {
            type:String,
            min:5,max:20,
            required:true
        }
    },{timestamps:true}
);

export const identity = mongoose.model('identities',userSchema);

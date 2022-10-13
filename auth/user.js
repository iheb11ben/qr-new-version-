const mongoose=require('mongoose');
const schemaUser=new mongoose.Schema(
    {
        username: {
            type:String,
            required:true, 
           
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,min:8,max:16
        },
        role:{
            type:String,
            default: 'user'
        },
    },
    {timestamps:true}
);
module.exports=mongoose.model('user',schemaUser);
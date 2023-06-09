const mongoose=require('mongoose');
const StudentSchema=new mongoose.Schema({
    regNum:{
        type:String,
        require:true,
    },
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        required:true,
    },
    phoneNum:{
        type:String,
        require:true,
    },        
    gender:{
        type:String,
        require:true,
    },
    DoB:{
        type:String,
        require:true,
    },
    bloodGroup:{
        type:String,
        require:true,
    },
    religion:{
        type:String,
        require:false,
    },
    section:{
        type:String,
        require:true,
    },
    class:{
        type:String,
        require:true,
    },
    // admissionId:{
    //     type:String,
    //     require:false,
    // },
    picture:{
        type:String,
        require:true,
        default:'',
    },
    role:{
        type:String,
        default:'student',
    },

})

{timestamp:true}

module.exports=mongoose.model("Student",StudentSchema)
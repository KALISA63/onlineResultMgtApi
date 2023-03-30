const mongoose = require("mongoose")
const SubjectSchema = new mongoose.Schema({

    subjectName:{
        type:String,
        required:true,
    },
    class:{
        type:String,
        required:true,
    },
    
},
{ timestamps: true}
);

module.exports = mongoose.model("Subject", SubjectSchema);
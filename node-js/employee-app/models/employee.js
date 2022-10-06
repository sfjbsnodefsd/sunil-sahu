const mongoose = require("mongoose")

const Employee = mongoose.Schema({
    empId:{
        type:String,
        require:true
    },
    empName:{
        type:String,
        require:true
    },
    empSalary:{
        type:Number,
        require:true
    },
    empDesignation:{
        type:Number,
        require:true
    },
    empEmail:{
        type:Number,
        require:true
    },
    empQualification:{
        type:Number,
        require:true
    },
    active:Boolean
})
module.exports=mongoose.model("employees",Employee)
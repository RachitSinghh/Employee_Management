const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId:{
        type:String,
        required:true,
        unique:true,
    },
    employeeName:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true
    },
    joiningDate:{
        type:String,
        required:true,
    },
    dateofBirth:{
        type:String,
        required:true,
    },
    salary:{
        type:Boolean,
        required:true,
    },
    phoneNumber: {
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    createdAt:{
    default:Date.now
    }
})

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;
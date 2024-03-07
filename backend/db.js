// npm install mongoose
// we do database stuff in this file
// we are just structuring the project into different files and using then when are where required


// try creating mongoose schema 

/* 
Todo {
    title:sting,
    description:string,
    completed:boolean
}
*/


const mongoose = require("mongoose");
// keep your mongodb url handy here
//mongodb+srv://atvarma:Gaurav2017@cluster0.6pm42zr.mongodb.net/todos
//.env in actual real applications

// we have to create Schema first. See the syntax

mongoose.connect("mongodb+srv://atvarma:Gaurav2017@cluster0.6pm42zr.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

// now we have to write model

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo:todo
}
/*
if key and value are same you can write above line in below way too
module.exports = {
    todo
}

*/

// write basic express biolerplate code
// with express.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// we have to validate what user is sending. in this example we expect some body like below
/* body {
    title:string,
    description:string
}

{
    id:string
}

So, we are creating type.js file. And do all the ZOD thing for validation.
For this we have to install zod library
npm install zod
*/

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    // Now the validation part
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    // else put it in mongo db
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({
        msg:"Todo Created"
    })

})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })

})

app.put("/completed",async function(req,res){
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    // update function takes 2 arguments. First argument selects the one which we want to update and 2nd argument is updated
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"Todo marked as completed"
    })

})

app.listen(3000);
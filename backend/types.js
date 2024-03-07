const zod = require("zod");

// for all three end points write types using zod

/* 
for post
{
    title:string,
    description:string
}
for put
{
    id:string
}
for get no validation is required, so we are not creating validation types using zod
*/

const createTodo = zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTodo = zod.object({
    id:zod.string()
})

module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}
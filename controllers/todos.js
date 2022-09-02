const Todo = require('../models/Todo')
const User = require('../models/User')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            const teamItems = await Todo.find({team:req.user.team})//gets all items that have the same team as the user, exluding user's todo list
            const teamMembers = await User.find({team:req.user.team})//gets all users from the User model
            
//             for (const item in teamItems){
//                 console.log(item.todo);
//                 for(const member in teamMembers){
//                     // if(item.userId == member._id){
//                     //     item.userName = member.userName;
//                     // }
//                 }
//             }

            let teamItemsFiltered = teamItems.filter( el=> el.userId != req.user.id);


            teamItemsFiltered.forEach(item=> { //Adds userName from User collection to team todo object array
                teamMembers.forEach(member=>{
                    if(member._id == item.userId){ 
                        item.userName = member.userName;
                        // console.log(true, item.userName, member.userName);
                    }
                })
            })

            // teamItems.forEach(item => {
            //     teamMembers.forEach(user => if(user._id == item.userId) item.userName = user.userName
            // })

            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user, team: teamItemsFiltered, teamMembers: teamMembers})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            let dueDate = req.body.dueDate
            console.log(`dueDate: ${dueDate}`)
            let dueDateSliced = dueDate.slice(0,11)
            console.log(`dueDateSliced: ${dueDateSliced}`)
            await Todo.create({todo: req.body.todoItem, completed: false, userId: req.body.teamMember, dueDate: dueDateSliced, team: req.user.team})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    
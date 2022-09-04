const Todo = require("../models/Todo");
const User = require("../models/User");

module.exports = {
<<<<<<< HEAD
    getTodos: async (req,res)=>{
        console.log("req.user")
        console.log(req.user)
        console.log(`Tom: ${req.user.userName}`)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            
            //selects all items that have the same team but do not have the same userId as the current user.
            const teamItems = await Todo.
                                        find().
                                        where('team').equals(req.user.team).
                                        where('userId').ne(req.user._id)
            //selects all users that have the same team as the current user
            const teamMembers = await User.
                                        find().
                                        where('team').equals(req.user.team)
                                        
            console.log("teamItems")
            console.log(teamItems)
            console.log("teamMembers")
            console.log(teamMembers)
            // teamItems.forEach(item => {
            //     teamMembers.forEach(user => if(user._id == item.userId) item.userName = user.userName
            // })
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user, team: teamItems, teamMembers: teamMembers})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false, userId: req.body.teamMember, dueDate: req.body.dueDate, team: req.user.team})
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
=======
  getTodos: async (req, res) => {
    // console.log(req.user);
    try {
        const todoItems = await Todo.find({ userId: req.user.id });


        // const itemsLeft = await Todo.countDocuments({
        //     userId: req.user.id,
        //     completed: false,
        // }); 
        

        // Counts all items in todo collection where status does not equal 'completed'
        const itemsLeft = await Todo.countDocuments().
            where('userId').equals(req.user.id).
            where('status').ne('completed');

            
        //selects all items that have the same team but do not have the same userId as the current user.
        const teamItems = await Todo.
            find().
            where('team').equals(req.user.team).
            where('userId').ne(req.user._id);
            
        //selects all users that have the same team as the current user
        const teamMembers = await User.
            find().
            where('team').equals(req.user.team);

      // console.log(todoItems);

      // const teamItems = await Todo.find({team:req.user.team})//gets all items that have the same team as the user, exluding user's todo list
      // const teamMembers = await User.find({team:req.user.team})//gets all users from the User model

        teamItems.forEach(item => { //Adds userName from User collection to team todo object array
            teamMembers.forEach(member => {
                if (member._id == item.userId) {
                    item.userName = member.userName;
                }
>>>>>>> 2e63ac377268cedce0b9cc9aaf0f241438c5a127
            })
        })

      //added for dropdown
    //   const todoStatus = await Todo.find()
    //     .where("status")
    //     .equals(req.user.status);
    //   teamItems.forEach((item) => {
    //     teamMembers.forEach((member) => {
    //       if (member._id == item.userId) {
    //         item.userName == member.status;
    //       }
    //     });
    //   });

      res.render("todos.ejs", {
        todos: todoItems,
        left: itemsLeft,
        user: req.user,
        team: teamItems,
        teamMembers: teamMembers,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createTodo: async (req, res) => {
    try {
      let dueDate = req.body.dueDate;
      console.log(`dueDate: ${dueDate}`);
      let dueDateSliced = dueDate.slice(0, 11);
      console.log(`dueDateSliced: ${dueDateSliced}`);
      await Todo.create({
        todo: req.body.todoItem,
        completed: false,
        userId: req.body.teamMember,
        dueDate: dueDateSliced,
        status: "not started",
        team: req.user.team,
      });
      console.log("Todo has been added!");
      res.redirect("/todos");
    } catch (err) {
      console.log(err);
    }
  },
  updateStatus: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          status: req.body.status,
        }
      );
      console.log(req.body, "Status Updated");
      res.json("Status Updated");
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};

# TeamTask - Task Managing Web App

A simple and collaborative fullstack Task managing App, built for Teams and Individuals to track and manage their tasks, keeping the workspace productive and organized.


**Link to project:** https://github.com/brandon003/todo-mvc-auth

![login](public/images/loginScreenShot.png)
![signup](public/images/signupScreenShot.png)
![dashboard page](public/images/team-task-gif.gif)

> Be sure to add that lovely star 😀 and fork it for your own copy

---

# How it's made

**Tech used:** EJS, CSS, JavaScript, Node, Express, MongoDB and passport.js.

**Notable Dependencies:**

* connect-mongo (https://www.npmjs.com/package/connect-mongo)
   - Used to save cookie in database that allowed for user's session to persist.
* dotenv (https://www.npmjs.com/package/dotenv)
   - Intergration of .env file that allows protection and processing of environment variables.
* express-session (https://www.npmjs.com/package/express-session)
   - Middleware that aids formating of user session cookie data. Used in cooperation with 'connect-mongo' to store the session in the database.
* mongoose (https://mongoosejs.com/)
   - Schema-based solution to model application data. Used to validate/organize database user and story entries.
* morgan (https://www.npmjs.com/package/morgan)
   - Node. js and Express middleware to log HTTP requests and errors. Used to simply process of testing/troubleshooting during development.
* passport (https://www.passportjs.org/)
   - Authentication middleware for Node.js. Used to modularize the authentication process with OAuth and Google login.
* passport-local (https://www.passportjs.org/packages/passport-local/)
   - The local authentication strategy authenticates users using a username and password.
* ejs- local (https://ejs.co/)
   - embeded javascript templating language for the frontend.
* bcrypt (https://www.npmjs.com/package/bcrypt)
   - A library to help you hash passwords.

---

# Lessons Learned:

In using the MVC Structure for our CRUD application, we learned how data flows from the model to the view to the controller. We learned to apply our data to let a user create a task, assign that task to themselves or another teamate, pick a due date for the task, and apply a dropdown for status updates. 

Our biggest challenge was showing the status updates for the team task views.  In the future We would like to implement administative roles, a team dashboard, and add a choice for Google Authentication for login.  

---

# How to Get it Working:

Add a .env file in the config folder with these two values:
* PORT = 2121 //or whatever you choose
* DB_STRING =  //MongoDB connection string

---

# Collaborators:

[Brandon Lobo](https://github.com/brandon003)

[Melvin Lucas](https://github.com/LucasMelvin15)

[Jamie Brolund](https://github.com/JamieLouBrolund)

[Christo Landry](https://github.com/christolandry)

[Frederico Chaves](https://github.com/fedechaves)

[Youness Tantaoui](https://github.com/yuness001)

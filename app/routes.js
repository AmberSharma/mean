// app/login.js

// grab the nerd model we just created
var Login = require('./models/login');
var Register = require('./models/register');
module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    // app.get('/api/login', function(req, res) {
    //     console.log("hiihii");
    //     // use mongoose to get all nerds in the database
    //     Login.find(function(err, login) {

    //         // if there is an error retrieving, send the error. 
    //                         // nothing after res.send(err) will execute
    //         if (err)
    //             res.send(err);

    //         res.json(login); // return all nerds in JSON format
    //     });
    // });

    app.post('/api/register', function(req, res) {
        var newRegister = new Register();
        //return "dsgsdgsdfgdf";
        //res.json(req.body);
        //console.log("fwegweger");
        //var newRegister = new Register();
        var registerData = { 
            emp_name: req.body.employee_name,
            emp_office_id: req.body.employee_id,
            emp_passwd: req.body.employee_passwd,
        };
        newRegister.create(registerData , function(err, register) {
            if (err)
                res.send(err)
            res.json(register);
        });
        
        //newRegister.create({req.body,res);

        // Register.create({
        //     text : req.body.text,
        //     done : false
        // }, function(err, todo) {
        //     if (err)
        //         res.send(err);

        //     // get and return all the todos after you create another
        //     Todo.find(function(err, todos) {
        //         if (err)
        //             res.send(err)
        //         res.json(todos);
        //     });
        // });
    });


    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};


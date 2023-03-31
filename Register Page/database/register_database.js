const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'migael.arendt@outlook.com',
    password: 'Saved1234',
    database: 'register'
});

connection.connect(function(err) {

    if (err){
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId); 

});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/register', function(req, res){
        const username = req.body.username;
        const email =  req.body.email;
        const password = req.body.password;

        const sql = `INSERT INTO users (name, email, password) VALUES ('${username}', '${email}', '${password}')`;
        connection.query(sql, function(err, result){
            if (err) {
                console.error(err);
                res.status(500).send('Error saving user details');
            }else{
                console.log('User details saved successfully');
                res.status(200).send('User details saved successfully');
            }
        }); 
});

app.listen(3000, function(){
    console.log('server started on port 3000');
});
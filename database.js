const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database:'practice' 
})

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected....');
})

module.exports = db;


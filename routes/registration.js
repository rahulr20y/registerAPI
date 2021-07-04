const express = require('express');
const router = express.Router();

const db = require('../database');

const {check ,validationResult} = require('express-validator');

//getting all
router.get('/',(req,res) => {
    let sql = 'SELECT * from users';
     db.query(sql, (err,data) => {
         if(err){
             throw err;
         }
         console.log(data);
         res.send(data);
     })
    //res.send("hello getALL");
})

//getting one
router.get('/:id',(req,res) => {
    console.log(req.params.id);
    let sql = `SELECT * from users where user_id = ${req.params.id} `;
     db.query(sql, (err,data) => {
         if(err){
             throw err;
         }
         console.log(data);
         res.send(data);
     })
  //res.send(`Hello getOne ${req.params.id}`);
})

//create one
router.post('/',[
    check('user_id').notEmpty(),
    check('pass').notEmpty().isLength({min:8}),
    check('confirmPass').notEmpty().withMessage("thsi cannot be empty"),
    check('email').isEmail(),
],(req,res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


  console.log(req.body);
  const {user_id, first_name, last_name, birth_date, sex, email, pass, confirmPass} = req.body;
 
  //let sql = "INSERT INTO users VALUES(2, 'David', 'Wallace', '1967-11-17', 'M', 'david@gmail.com', 'david@123', 'david@1123');";
  let sql = `INSERT INTO users VALUES('${user_id}', '${first_name}', '${last_name}', '${birth_date}', '${sex}', '${email}', '${pass}', '${confirmPass}')`;
  db.query(sql, (err,data) => {
    if(err){
        throw err;
    }
    console.log(data);
    res.send(data);
   })
  //res.send("created succesfully");
})

module.exports=router;
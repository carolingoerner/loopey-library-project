const express = require('express');
const bcryptjs = require("bcryptjs");

const router = express.Router();

const saltRounds = 10;


//GET /signup
router.get("/signup", (req, res, next) => {
    res.render("auth/signup");
});



//POST /signup
router.post("/signup", (req, res, next) => {

    const {email, password} = req.body;


    bcryptjs
        .genSalt(saltRounds)
        .then(salt => {
            return bcryptjs.hash(password, salt);
        })
        .then( (hash) => {
            U
        })
        .catch(error => {
            console.log("error creating account...", error);
            next(error)
        });

})


module.exports = router;
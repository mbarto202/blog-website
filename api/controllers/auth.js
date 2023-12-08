import {db} from "../db.js";

export const register = (req, res)=>{

//check existing user
const q = "SELECT * FROM users WHERE email = ? OR username = ?";

db.query(1,[req.body.email, req.body.username], (err,data)=>{
    if(err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");
});

}

export const login = (req, res)=>{
    
};

export const logout = (req, res)=>{
    
};
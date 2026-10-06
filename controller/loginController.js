import { register } from "../service/register.js";

const signUp = (req, res)=>{
    const {name, email, password, role} = req.body;
    
    register(name, email, password, role);

    
}
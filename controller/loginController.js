import { register } from "../service/register.js";
import asyncWrapper from "../utils/asyncWrapper.js";

export const signUp = (req, res)=>{
    const {name, email, password, role} = req.body;
    
    asyncWrapper(register(name, email, password, role));
}
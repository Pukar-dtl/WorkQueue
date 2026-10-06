import schema from "../utils/validatorSchema.js"
import response from "../utils/response.js";

const validate = (req, res, next)=>{
    const data = {
        username : req.body.name,
        email : req.body.email,
        password : req.body.password,
        role : req.body.role
    }

    const {error, value} = schema.validate(data);

    if(error){
        return response(res, 402, false, "Error validating data", error)
    }
    next();
}
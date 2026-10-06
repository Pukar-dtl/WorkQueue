import User from "../model/user.model";
import bcrypt from "bcrypt"
import response from "../utils/response";

export async function register(name, email, password, role){

    const pass = await bcrypt.hash(password, 10);

    const user = User.insertOne({
        name,
        email,
        password : pass,
        role
    })

    await user.save();

    response(response, 201, true, "user registered")
}


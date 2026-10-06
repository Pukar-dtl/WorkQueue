import CustomError from "./error.js"

const asyncWrapper = (controller)=>{
    try{
        controller()
    }catch(error){
        throw new CustomError(500, error)
    }
}

export default asyncWrapper;
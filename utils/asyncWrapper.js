import CustomError from "./error.js"

const asyncWrapper = async(controller)=>{
    try{
        await controller()
    }catch(error){
        throw new CustomError(500, error)
    }
}

export default asyncWrapper;
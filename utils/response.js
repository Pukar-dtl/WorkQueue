const response=(res, code, success, message = null, data = null)=>{
    return res.status(200).json({
        statusCode : code,
        success,
        message,
        data
    })
}

export default response;
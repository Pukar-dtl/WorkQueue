import logger from "../config/logger.js"

const loggerMiddleware = (req, res, next)=>{
    logger.info({
        method : req.method,
        url : req.url
    })
    next();
}

export default loggerMiddleware;
import pino from "pino"

const logger = pino(pino.transport({
    target : "pino-pretty",
    options : {
        colorized : true,
        translateTime : "SYS:standard",
        ignore : "pid"
    }
}))

export default logger;
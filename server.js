import loggerMiddleware from "./middleware/loggerMiddleware.js"
import userRouter from "./routes/userRoutes.js"
import express from "express"
import errorMiddleware from "./middleware/errorMiddleware.js";
import connectDb from "./config/mongo.js";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();
app.use(express.json());

connectDb();

app.use(loggerMiddleware);

app.use('/user', userRouter);

app.use(errorMiddleware);

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
})
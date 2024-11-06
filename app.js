import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import {rateLimit} from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";


import {
    MaxJSON_Size, MONGODB_URI,
    PORT,
    Request_Per_Time_Limit,
    Request_Time_Limit,
    URL_Encoded,
    Web_Cache
} from "./app/config/config.js";
import router from "./route/api.js";

const app = express()

app.use(cookieParser())
app.use(cors())
app.use(express.json({limit: MaxJSON_Size}))
app.use(express.urlencoded({ extended: URL_Encoded }))
app.use(express.static('storage'))
app.use(fileUpload({
    limit: {fileSize: 100 *  1024 * 1024},
}))
app.use(helmet())
app.use(hpp())

const limiter = rateLimit({windowMs: Request_Time_Limit, max:Request_Per_Time_Limit})
app.use(limiter)


app.use('/api',router)

app.set("etag", Web_Cache)

mongoose.connect(MONGODB_URI,{autoIndex: true}).then(()=>{
    console.log("MongoDB Connected");

}).catch((err)=>{
    console.log("Err : MongoDB Not Connected");
})

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})
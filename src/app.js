import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({origin: process.env.CORS_ORIGIN,credentials: true,}));

app.use(express.json({limit: "16kb",}));
app.use(express.urlencoded({extended: true,limit: "16kb",}));
app.use(express.static("public")); //Public assets - to store images,files,pdf on our server
app.use(cookieParser()); //to perform CRUD operations on users/clients browser using cookies


export default app;

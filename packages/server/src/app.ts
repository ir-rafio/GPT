import "dotenv/config";
import "@/config/supertokens";
import { corsConfig } from "@/config/cors";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import { commentRouter } from "./modules/comment/comment.route";
import { nicknameRouter } from "./modules/nickname/nickname.route";
import { studentRouter } from "./modules/student/student.route";
import { voteRouter } from "./modules/vote/vote.route";
import {
  errorHandler as supertokensErrorHandler,
  middleware as supertokensMiddleware
} from "supertokens-node/framework/express";
import { getDirname } from "./utils/dir";
import path from "path";
import { userRouter } from "./modules/user/user.route";

const app = express();

const inDev = process.env.NODE_ENV === "development";

if (inDev) {
  app.use(cors(corsConfig));
}

app.use(supertokensMiddleware());

// Configuration
app.set("port", Number(process.env.PORT) || 5001);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//Routes
app.use("/api/student", studentRouter);
app.use("/api/nickname", nicknameRouter);
app.use("/api/vote", voteRouter);
app.use("/api/comment", commentRouter);
app.use("/api/user", userRouter);

app.use(supertokensErrorHandler());

if (process.env.SERVE_CLIENT_FILES === "true") {
  app.use(express.static(path.join(getDirname(), "../../client/dist")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(getDirname(), "../../client/dist/index.html"));
  });
}

export default app;

import { Env } from "@/config/env";
import cors from "cors";
import supertokens from "supertokens-node";

export const corsConfig: cors.CorsOptions = {
  origin: Env.frontendUrl,
  allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
  credentials: true
};

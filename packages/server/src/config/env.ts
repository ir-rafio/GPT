import { z } from "zod";

const envSchema = z.object({
  frontendUrl: z.string().url(),
  backendUrl: z.string().url(),
  supertokens: z.object({
    appName: z.string(),
    uri: z.string().url(),
    key: z.string()
  }),
  google: z.object({
    clientId: z.string(),
    clientSecret: z.string()
  })
});

const env = {
  frontendUrl: process.env.FRONTEND_URL,
  backendUrl: process.env.BACKEND_URL,
  supertokens: {
    appName: process.env.SUPERTOKENS_APP_NAME,
    uri: process.env.SUPERTOKENS_URI,
    key: process.env.SUPERTOKENS_KEY
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }
};

export const Env = envSchema.parse(env);

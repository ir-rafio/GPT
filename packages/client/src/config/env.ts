import { z } from "zod";

const envSchema = z.object({
  supertokens: z.object({
    appName: z.string()
  }),
  backendUrl: z.string().url(),
  domain: z.string().url()
});
const backendUrl = import.meta.env.VITE_BACKEND_URL || import.meta.env.BASE_URL;

const env = {
  supertokens: {
    appName: import.meta.env.VITE_APP_NAME
  },
  backendUrl,
  domain: import.meta.env.VITE_DOMAIN
};

export const Env = envSchema.parse(env);

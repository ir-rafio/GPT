import axios from "axios";
import { Env } from "./env";

export const axiosClient = axios.create({
  baseURL: Env.backendUrl + "/api"
});

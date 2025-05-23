import axios from "axios";
import auth from "./store/auth";
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });
api.interceptors.request.use(cfg => { const t = auth.getState().token; if(t) cfg.headers.Authorization = `Bearer ${t}`; return cfg; });
export default api;

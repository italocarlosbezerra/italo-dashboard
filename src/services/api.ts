import axios from "axios";

const api = axios.create({
   baseURL: "https://json-server-node-60lq.onrender.com",
});

export default api;

// Servidor Local  - http://localhost:5000
// Servidor Render - https://json-server-node-60lq.onrender.com
// https://json-server-node-60lq.onrender.com/

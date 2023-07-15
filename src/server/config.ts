const env = process.env;
const PORT = env.PORT || 8080;
const HOST = env.host || "0.0.0.0";
const SERVER_URL = `http://${HOST}:${PORT}`;

export default {
  PORT,
  HOST,
  SERVER_URL,
};

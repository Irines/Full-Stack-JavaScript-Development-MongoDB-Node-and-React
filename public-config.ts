export const HOST = process.env.HOST ?? "localhost";
export const PORT = process.env.PORT ?? "8080";
export const SERVER_API_URL = `http://${HOST}:${PORT}/api`;
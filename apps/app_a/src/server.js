import { createServer } from "node:http";

const APP_NAME = "app_a";
const PORT = Number(process.env.PORT ?? 3001);

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  res.end(
    JSON.stringify({
      app: APP_NAME,
      message: "Hello from app_a",
      path: req.url,
      method: req.method,
    }),
  );
});

server.listen(PORT, () => {
  console.log(`[${APP_NAME}] listening on http://localhost:${PORT}`);
});

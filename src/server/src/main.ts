import express from "express";
import routes from "@/routes";

const PORT = 3000;

const app = express();

app.use(routes);

app.listen(PORT, (e) => {
  if (e) return console.error(e);
  console.log(`Server running on port ${PORT}`);
});

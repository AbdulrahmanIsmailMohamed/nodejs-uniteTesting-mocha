import express, { Application } from "express";

import bookRoutes from "./routes/book.routes";

export const app: Application = express();

app.use("/", bookRoutes)

app.listen(3000, () => console.log("Server Running!!"))
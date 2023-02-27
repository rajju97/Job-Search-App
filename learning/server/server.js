import express from "express";

import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js ";

import dotenv from "dotenv";
dotenv.config();

//db amd authenticdsuser
import connectDB from "./db/connect.js";

//routers
import AuthRoutes from "./routes/authRoutes.js";
import JobsRoutes from "./routes/jobsRouter.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello rajveer");
});

//Auth routes
app.use("/api/v1/auth", AuthRoutes);
//Jobs routes
app.use("/api/v1/jobs", JobsRoutes);

//middleware for if route not found
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

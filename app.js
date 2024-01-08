const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/route");
require("dotenv").config();
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
// const errorHandler = require("./middleware/errorHandler");

//middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1", router);
app.use(notFound);
// app.use(errorHandler);

const port = process.env.PORT || 5000;

const run = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log("server error", error);
  }
};
run();

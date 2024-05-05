import express from "express";
import morgan from "morgan";
// Import the version from the package.json
import packageInfo from "./package.json" assert { type: "json" };
import middleware from "./middleware.js";
import cors from "cors";

const app = express();

app.use(morgan("dev"));

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Serve the index page for all other requests
app.get("/api", (_, res) => {
  //send a json response with the api verison
  res.json({ version: packageInfo.version });
});

app.get("/api/user", middleware.jwtCheck, (req, res) => {
  res.json({
    user: "user test",
  });
});

// Listen on port 3000
app.listen(3000, () => console.log("Application running on port 3000"));

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const authRouter = require("./routes/auth.js");
const playerRouter = require("./routes/playerRouter.js");

dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port 3001`);
});

app.use("/auth", authRouter);
app.use("/player", playerRouter);

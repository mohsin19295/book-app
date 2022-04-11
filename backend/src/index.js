const express = require("express")
const connect = require("./configs/db")
const router = require("./routes/book.routes");
const app = express();

// Middlewares
app.use(express.json());
app.use("/books", router); // localhost:8000/books


app.listen(8000, async () => {
    try {
      await connect();
      console.log("listening on port 8000");
    } catch (e) {
      console.log(e.message);
    }
  });
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./database/conn.js";
import session from "express-session";
import multer from "multer";

import router from "./routers/router.js";

const app = express();

app.set("view engine", "ejs"); // Corrected line
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.static("public"));
// app.use('/appCon/', express.static('public'));
app.use(session({ secret: "Shh, its a secret!" }));

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});
app.use("/", router);
app.use('/images', express.static("images"))


const PORT = 5000;

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on : http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    res.status(200).json("File is Uploaded");
  } else {
    res.status(500).json("File is not Uploaded");
  }
});

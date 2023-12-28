import express from "express";
import connect from "./Database/dbConn.js";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import router from "./routers/router.js";
import bodyParser from "body-parser";

const app = express();


app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.use(express.static("public"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());

app.use("/", router);
app.use(session({
  secret: 'your-secret-key',
  resave: false, 
  saveUninitialized: true, 
}));





connect().then(() => {
    app.listen(5000, () => {
        console.log(`server is running on http://localhost:5000`);
    });
    }
);


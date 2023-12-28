import express from "express";
import connect from "./Database/dbConn.js";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import router from "./routers/router.js";

const app = express();

app.use("/", router);

app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ limit: "10mb", extended: false }));
app.use(express.json());

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


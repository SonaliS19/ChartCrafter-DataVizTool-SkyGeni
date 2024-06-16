import express from "express";
import routes from "./routes";

const app = express();
const port = 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow cross-origin requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});
app.use("/api", routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

import express from "express"
import bodyParser from "body-parser"
import usersRoutes from "./routes/users.js"

const app = express();

const PORT = 8080;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}))

app.use("/users", usersRoutes)

app.get('/', (req, res) =>{
        console.log('TEST!')

    res.send("Hello from hompage")
})

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT} `))
import express from "express";
import cors from "cors";
import businessRoutes from "./routes/businessRoutes.js";

const app = express();


app.use(cors());

app.use(express.json());

app.use("/api",businessRoutes);



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
});
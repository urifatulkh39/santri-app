require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());


// TEST ROUTE
app.get("/", (req, res) => {
    res.send("Backend jalan");
});


// ROUTES
const santriRoutes = require("./routes/santri");
const authRoutes = require("./routes/auth");

app.use("/santri", santriRoutes);
app.use("/auth", authRoutes);


// PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
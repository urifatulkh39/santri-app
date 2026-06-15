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
const kelasRoutes = require("./routes/kelas");
const riwayatRoutes = require("./routes/riwayat");

app.use("/santri", santriRoutes);
app.use("/auth", authRoutes);
app.use("/kelas", kelasRoutes);
app.use("/riwayat", riwayatRoutes);

// PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
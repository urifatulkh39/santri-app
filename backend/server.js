require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

/**
 * ==========================================
 * MIDDLEWARE
 * ==========================================
 */

app.use(
    cors({
        origin: process.env.FRONTEND_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"],
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * ==========================================
 * HEALTH CHECK
 * ==========================================
 */

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Santri Management System API",
        version: "1.0.0",
    });
});

/**
 * ==========================================
 * ROUTES
 * ==========================================
 */

app.use("/auth", require("./routes/auth"));
app.use("/santri", require("./routes/santri"));
app.use("/kelas", require("./routes/kelas"));
app.use("/riwayat", require("./routes/riwayat"));

/**
 * ==========================================
 * 404
 * ==========================================
 */

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route tidak ditemukan",
    });
});

/**
 * ==========================================
 * ERROR HANDLER
 * ==========================================
 */

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
});

/**
 * ==========================================
 * START SERVER
 * ==========================================
 */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("=================================");
    console.log(`🚀 Server Running`);
    console.log(`PORT : ${PORT}`);
    console.log(`NODE : ${process.env.NODE_ENV || "development"}`);
    console.log("=================================");
});
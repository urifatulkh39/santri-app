const mysql = require("mysql2");

/**
 * ==========================================
 * DATABASE CONFIG
 * ==========================================
 */

const db = mysql.createConnection({
    host: process.env.DB_HOST || process.env.MYSQLHOST,
    user: process.env.DB_USER || process.env.MYSQLUSER,
    password: process.env.DB_PASSWORD || process.env.MYSQLPASSWORD,
    database:
        process.env.DB_DATABASE ||
        process.env.DB_NAME ||
        process.env.MYSQLDATABASE,
    port: Number(
        process.env.DB_PORT ||
        process.env.MYSQLPORT ||
        3306
    ),
    charset: "utf8mb4",
});

/**
 * ==========================================
 * CONNECTION
 * ==========================================
 */

db.connect((err) => {

    if (err) {

        console.error("❌ Database Connection Failed");
        console.error(err);

        process.exit(1);

    }

    console.log("====================================");
    console.log("✅ Database Connected");
    console.log("HOST :", db.config.host);
    console.log("PORT :", db.config.port);
    console.log("USER :", db.config.user);
    console.log("DB   :", db.config.database);
    console.log("====================================");

});

module.exports = db;
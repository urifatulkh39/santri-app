const express = require("express");
const router = express.Router();
const db = require("../db");

/* =========================
   DATA SANTRI
========================= */

// GET semua santri
router.get("/", (req, res) => {

    db.query(
        "SELECT * FROM santri",
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json(result);

        }
    );

});

// TAMBAH SANTRI
router.post("/", (req, res) => {

    const { nama, status } = req.body;

    db.query(
        "INSERT INTO santri (nama, status) VALUES (?, ?)",
        [nama, status],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Santri berhasil ditambahkan"
            });

        }
    );

});

// UPDATE SANTRI
router.put("/:id", (req, res) => {

    const { id } = req.params;
    const { nama, status } = req.body;

    db.query(
        "UPDATE santri SET nama=?, status=? WHERE id=?",
        [nama, status, id],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Santri berhasil diupdate"
            });

        }
    );

});

// HAPUS SANTRI
router.delete("/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM santri WHERE id=?",
        [id],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Santri berhasil dihapus"
            });

        }
    );

});


/* =========================
   RIWAYAT
========================= */

// GET RIWAYAT
router.get("/riwayat", (req, res) => {

    db.query(
        "SELECT * FROM riwayat",
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json(result);

        }
    );

});

module.exports = router;
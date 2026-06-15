const express = require("express");
const router = express.Router();
const db = require("../db");

/* =========================
   DATA KELAS
========================= */

// GET semua kelas
router.get("/", (req, res) => {

    db.query(
        `
        SELECT
            k.id,
            k.nama,
            k.semester,
            k.created_at,
            k.updated_at,
            COUNT(s.id) AS jumlah_santri
        FROM kelas k
        LEFT JOIN santri s
            ON s.kelas_id = k.id
        GROUP BY k.id
        ORDER BY k.semester ASC, k.nama ASC
        `,
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json(result);

        }
    );

});

// GET detail kelas
router.get("/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        `
        SELECT
            k.id,
            k.nama,
            k.semester,
            k.created_at,
            k.updated_at,
            COUNT(s.id) AS jumlah_santri
        FROM kelas k
        LEFT JOIN santri s
            ON s.kelas_id = k.id
        WHERE k.id = ?
        GROUP BY k.id
        `,
        [id],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            if (result.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Kelas tidak ditemukan"
                });
            }

            res.json(result[0]);

        }
    );

});

// TAMBAH KELAS
router.post("/", (req, res) => {

    const {
        nama,
        semester
    } = req.body;

    if (!nama) {
        return res.status(400).json({
            success: false,
            message: "Nama kelas wajib diisi"
        });
    }

    if (!semester) {
        return res.status(400).json({
            success: false,
            message: "Semester wajib diisi"
        });
    }

    db.query(
        `
        INSERT INTO kelas
        (
            nama,
            semester
        )
        VALUES
        (
            ?, ?
        )
        `,
        [
            nama,
            semester
        ],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Kelas berhasil ditambahkan",
                id: result.insertId
            });

        }
    );

});

// UPDATE KELAS
router.put("/:id", (req, res) => {

    const { id } = req.params;

    const {
        nama,
        semester
    } = req.body;

    if (!nama) {
        return res.status(400).json({
            success: false,
            message: "Nama kelas wajib diisi"
        });
    }

    if (!semester) {
        return res.status(400).json({
            success: false,
            message: "Semester wajib diisi"
        });
    }

    db.query(
        `
        UPDATE kelas
        SET
            nama = ?,
            semester = ?
        WHERE id = ?
        `,
        [
            nama,
            semester,
            id
        ],
        (err) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Kelas berhasil diupdate"
            });

        }
    );

});

// HAPUS KELAS
router.delete("/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        `
        DELETE FROM kelas
        WHERE id = ?
        `,
        [id],
        (err) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Kelas berhasil dihapus"
            });

        }
    );

});

module.exports = router;
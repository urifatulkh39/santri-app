const express = require("express");
const router = express.Router();
const db = require("../db");

/* =========================
   GET ALL RIWAYAT
========================= */

router.get("/", (req, res) => {

    db.query(
        `
        SELECT
            r.id,
            r.aktivitas,
            r.keterangan,
            r.created_at,

            s.id AS santri_id,
            s.nama AS nama_santri,

            k.id AS kelas_id,
            k.nama AS nama_kelas,
            k.semester

        FROM riwayat r

        LEFT JOIN santri s
            ON r.santri_id = s.id

        LEFT JOIN kelas k
            ON r.kelas_id = k.id

        ORDER BY r.created_at DESC
        `,
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Gagal mengambil data riwayat"
                });

            }

            res.json(result);

        }
    );

});


/* =========================
   GET RIWAYAT BY SANTRI
========================= */

router.get("/santri/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        `
        SELECT
            r.id,
            r.aktivitas,
            r.keterangan,
            r.created_at,

            s.id AS santri_id,
            s.nama AS nama_santri,

            k.id AS kelas_id,
            k.nama AS nama_kelas,
            k.semester

        FROM riwayat r

        LEFT JOIN santri s
            ON r.santri_id = s.id

        LEFT JOIN kelas k
            ON r.kelas_id = k.id

        WHERE r.santri_id = ?

        ORDER BY r.created_at DESC
        `,
        [id],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Gagal mengambil riwayat santri"
                });

            }

            res.json(result);

        }
    );

});

module.exports = router;
const express = require("express");
const router = express.Router();
const db = require("../db");

/* =========================
   HELPER RIWAYAT
========================= */

function logRiwayat({
    santri_id,
    kelas_id = null,
    aktivitas,
    keterangan = null
}) {

    db.query(
        `
        INSERT INTO riwayat
        (
            santri_id,
            kelas_id,
            aktivitas,
            keterangan
        )
        VALUES
        (
            ?, ?, ?, ?
        )
        `,
        [
            santri_id,
            kelas_id,
            aktivitas,
            keterangan
        ],
        (err) => {

            if (err) {

                console.log("Riwayat Error:", err);

            }

        }
    );

}

/* =========================
   DATA SANTRI
========================= */

// GET semua santri
router.get("/", (req, res) => {

    db.query(
        `
        SELECT
            s.id,
            s.nama,
            s.kelas_id,
            s.domisili,
            s.status,
            s.created_at,
            s.updated_at,
            k.nama AS kelas,
            k.semester
        FROM santri s
        LEFT JOIN kelas k
            ON s.kelas_id = k.id
        ORDER BY s.nama ASC
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

// GET DETAIL SANTRI
router.get("/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        `
        SELECT
            s.id,
            s.nama,
            s.kelas_id,
            s.domisili,
            s.status,
            s.created_at,
            s.updated_at,
            k.nama AS kelas,
            k.semester
        FROM santri s
        LEFT JOIN kelas k
            ON s.kelas_id = k.id
        WHERE s.id = ?
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
                    message: "Santri tidak ditemukan"
                });

            }

            res.json(result[0]);

        }
    );

});

/* =========================
   TAMBAH SANTRI
========================= */

router.post("/", (req, res) => {

    const {
        nama,
        kelas_id,
        domisili,
        status
    } = req.body;

    if (!nama) {

        return res.status(400).json({
            success: false,
            message: "Nama santri wajib diisi"
        });

    }

    db.query(
        `
        INSERT INTO santri
        (
            nama,
            kelas_id,
            domisili,
            status
        )
        VALUES
        (
            ?, ?, ?, ?
        )
        `,
        [
            nama,
            kelas_id || null,
            domisili || null,
            status || "Aktif"
        ],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json(err);

            }

            logRiwayat({
                santri_id: result.insertId,
                kelas_id: kelas_id || null,
                aktivitas: "Tambah Santri",
                keterangan: `${nama} berhasil ditambahkan`
            });

            res.json({
                success: true,
                message: "Santri berhasil ditambahkan",
                id: result.insertId
            });

        }
    );

});

/* =========================
   UPDATE SANTRI
========================= */

router.put("/:id", (req, res) => {

    const { id } = req.params;

    const {
        nama,
        kelas_id,
        domisili,
        status
    } = req.body;

    if (!nama) {

        return res.status(400).json({
            success: false,
            message: "Nama santri wajib diisi"
        });

    }

    db.query(
        `
        SELECT
            kelas_id,
            status,
            nama
        FROM santri
        WHERE id = ?
        `,
        [id],
        (err, oldData) => {

            if (err) {

                console.log(err);

                return res.status(500).json(err);

            }

            if (oldData.length === 0) {

                return res.status(404).json({
                    success: false,
                    message: "Santri tidak ditemukan"
                });

            }

            const before = oldData[0];

            db.query(
                `
                UPDATE santri
                SET
                    nama = ?,
                    kelas_id = ?,
                    domisili = ?,
                    status = ?
                WHERE id = ?
                `,
                [
                    nama,
                    kelas_id || null,
                    domisili || null,
                    status,
                    id
                ],
                (err) => {

                    if (err) {

                        console.log(err);

                        return res.status(500).json(err);

                    }

                    logRiwayat({
                        santri_id: id,
                        kelas_id: kelas_id || null,
                        aktivitas: "Update Santri",
                        keterangan: `${nama} berhasil diperbarui`
                    });

                    if (
                        Number(before.kelas_id) !== Number(kelas_id)
                    ) {

                        logRiwayat({
                            santri_id: id,
                            kelas_id: kelas_id || null,
                            aktivitas: "Pindah Kelas",
                            keterangan:
                                `${before.nama} berpindah kelas`
                        });

                    }

                    if (
                        before.status !== status
                    ) {

                        let aktivitas = "Update Santri";

                        if (status === "Lulus") {

                            aktivitas = "Lulus";

                        } else if (status === "Nonaktif") {

                            aktivitas = "Nonaktif";

                        }

                        logRiwayat({
                            santri_id: id,
                            kelas_id: kelas_id || null,
                            aktivitas,
                            keterangan:
                                `${before.nama} berubah status menjadi ${status}`
                        });

                    }

                    res.json({
                        success: true,
                        message: "Santri berhasil diupdate"
                    });

                }
            );

        }
    );

});

router.delete("/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM santri WHERE id = ?",
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

module.exports = router;
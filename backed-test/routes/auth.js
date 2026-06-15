const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/login", (req, res) => {

    const { username, password } = req.body;

    db.query(
        "SELECT * FROM admin WHERE username=? AND password=?",
        [username, password],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.json({ success: false });
            }

            if (result.length > 0) {
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }

        }
    );

});

module.exports = router;
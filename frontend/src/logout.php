<?php 
session_start();

// Menghapus semua session
session_destroy();

// Mengalihkan halaman kembali ke login.php
header("location: login.php");
exit;
?>
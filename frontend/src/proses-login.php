<?php
// Mengaktifkan session PHP
session_start();

// Menghubungkan dengan file koneksi yang kamu miliki
include 'koneksi.php';

// Menangkap data yang dikirim dari form login
$username = mysqli_real_escape_string($koneksi, $_POST['username']);
$password = $_POST['password'];

// Menyeleksi data user dengan username yang sesuai
$query  = "SELECT * FROM users WHERE username='$username'";
$result = mysqli_query($koneksi, $query);

if (mysqli_num_rows($result) === 1) {
    // Ambil baris data dari database
    $row = mysqli_fetch_assoc($result);
    
    // Verifikasi password (mencocokkan inputan dengan password hash di database)
    if (password_verify($password, $row['password'])) {
        
        // Jika cocok, buat session login
        $_SESSION['username'] = $username;
        $_SESSION['status']   = "login";
        
        // Alihkan ke halaman utama dashboard aplikasi
        header("location: dashboard.php");
        exit;
    }
}

// Jika username tidak ditemukan atau password salah, lempar kembali ke login.php
header("location: login.php?pesan=gagal");
exit;
?>
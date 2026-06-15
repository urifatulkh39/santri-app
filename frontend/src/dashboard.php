<?php 
session_start();

// Memeriksa apakah user sudah login atau belum
if ($_SESSION['status'] != "login") {
    header("location: login.php?pesan=belum_login");
    exit;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dashboard - Santri App</title>
</head>
<body>

    <h2>Selamat Datang, <?php echo $_SESSION['username']; ?>!</h2>
    <p>Anda berhasil login ke sistem Santri App.</p>
    
    <br>
    <a href="logout.php" style="color: red; font-weight: bold;">Logout</a>

</body>
</html>
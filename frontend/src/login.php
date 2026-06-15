<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Login - Santri App</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .login-container { background: #fff; padding: 25px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); width: 300px; }
        h2 { text-align: center; margin-bottom: 20px; color: #333; }
        .input-group { margin-bottom: 15px; }
        .input-group label { display: block; margin-bottom: 5px; color: #666; }
        .input-group input { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; }
        button { width: 100%; padding: 10px; background-color: #28a745; border: none; color: white; border-radius: 4px; cursor: pointer; font-size: 16px; }
        button:hover { background-color: #218838; }
        .error-msg { color: red; font-size: 14px; text-align: center; margin-bottom: 15px; }
    </style>
</head>
<body>

<div class="login-container">
    <h2>Login Santri App</h2>
    
    <?php 
    // Menampilkan pesan error jika login gagal
    if (isset($_GET['pesan']) && $_GET['pesan'] == "gagal") {
        echo "<div class='error-msg'>Username atau Password salah!</div>";
    }
    ?>

    <form action="proses-login.php" method="POST">
        <div class="input-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required autocomplete="off">
        </div>
        <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit" name="login">Login</button>
    </form>
</div>

</body>
</html>
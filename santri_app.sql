-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 14 Jun 2026 pada 22.19
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `santri_app`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'admin', 'admin', '2026-06-14 14:19:42');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kelas`
--

CREATE TABLE `kelas` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `semester` tinyint(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kelas`
--

INSERT INTO `kelas` (`id`, `nama`, `semester`, `created_at`, `updated_at`) VALUES
(2, 'Kelas B', 4, '2026-06-14 19:33:54', '2026-06-14 19:33:54'),
(3, 'Kelas A', 1, '2026-06-14 19:51:46', '2026-06-14 19:51:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `riwayat`
--

CREATE TABLE `riwayat` (
  `id` int(11) NOT NULL,
  `santri_id` int(11) NOT NULL,
  `kelas_id` int(11) DEFAULT NULL,
  `aktivitas` enum('Tambah Santri','Update Santri','Hapus Santri','Masuk Kelas','Pindah Kelas','Keluar Kelas','Naik Semester','Turun Semester','Lulus','Nonaktif') NOT NULL,
  `keterangan` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `riwayat`
--

INSERT INTO `riwayat` (`id`, `santri_id`, `kelas_id`, `aktivitas`, `keterangan`, `created_at`) VALUES
(1, 5, 2, 'Update Santri', 'adsad berhasil diperbarui', '2026-06-14 20:14:58'),
(2, 5, 2, 'Pindah Kelas', 'adsad berpindah kelas', '2026-06-14 20:14:58'),
(3, 1, 3, 'Update Santri', 'Ahmad Fauzan berhasil diperbarui', '2026-06-14 20:15:48'),
(4, 1, 3, 'Pindah Kelas', 'Ahmad Fauzan berpindah kelas', '2026-06-14 20:15:48'),
(5, 9, 2, 'Tambah Santri', 'das berhasil ditambahkan', '2026-06-14 20:15:54');

-- --------------------------------------------------------

--
-- Struktur dari tabel `santri`
--

CREATE TABLE `santri` (
  `id` int(11) NOT NULL,
  `nama` varchar(150) NOT NULL,
  `kelas_id` int(11) DEFAULT NULL,
  `domisili` varchar(100) DEFAULT NULL,
  `status` enum('Aktif','Lulus','Keluar','Nonaktif') DEFAULT 'Aktif',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `santri`
--

INSERT INTO `santri` (`id`, `nama`, `kelas_id`, `domisili`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Ahmad Fauzan', 3, 'dsas', 'Aktif', '2026-06-14 14:17:31', '2026-06-14 20:15:48'),
(2, 'Muhammad Rizki', NULL, NULL, 'Lulus', '2026-06-14 14:17:31', '2026-06-14 14:17:31'),
(3, 'Abdul Aziz', 2, 'pasuruan', 'Aktif', '2026-06-14 14:17:31', '2026-06-14 19:51:15'),
(5, 'adsad', 2, 'asda', 'Aktif', '2026-06-14 14:25:31', '2026-06-14 20:14:58'),
(8, 'adsa', 3, 'asdasd', 'Lulus', '2026-06-14 19:52:28', '2026-06-14 19:52:28'),
(9, 'das', 2, 'asd', 'Nonaktif', '2026-06-14 20:15:54', '2026-06-14 20:15:54');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indeks untuk tabel `kelas`
--
ALTER TABLE `kelas`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `riwayat`
--
ALTER TABLE `riwayat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `santri_id` (`santri_id`),
  ADD KEY `kelas_id` (`kelas_id`);

--
-- Indeks untuk tabel `santri`
--
ALTER TABLE `santri`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_santri_kelas` (`kelas_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `kelas`
--
ALTER TABLE `kelas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `riwayat`
--
ALTER TABLE `riwayat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `santri`
--
ALTER TABLE `santri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `riwayat`
--
ALTER TABLE `riwayat`
  ADD CONSTRAINT `riwayat_ibfk_1` FOREIGN KEY (`santri_id`) REFERENCES `santri` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `riwayat_ibfk_2` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `santri`
--
ALTER TABLE `santri`
  ADD CONSTRAINT `fk_santri_kelas` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

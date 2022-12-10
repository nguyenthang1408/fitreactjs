-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 10, 2022 at 10:50 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tdh1`
--

-- --------------------------------------------------------

--
-- Table structure for table `congdoan`
--

CREATE TABLE `congdoan` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tiendo` int(11) NOT NULL,
  `ngaybatdau` date NOT NULL,
  `ngaydukien` date NOT NULL,
  `ngayhoanthanh` date NOT NULL,
  `tonggio` int(11) NOT NULL,
  `trongngay` int(11) NOT NULL,
  `thucte` int(11) NOT NULL,
  `hieusuat` int(11) NOT NULL,
  `tangca` int(11) NOT NULL,
  `thanhvien` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `congdoan`
--

INSERT INTO `congdoan` (`id`, `name`, `tiendo`, `ngaybatdau`, `ngaydukien`, `ngayhoanthanh`, `tonggio`, `trongngay`, `thucte`, `hieusuat`, `tangca`, `thanhvien`, `parent_id`) VALUES
(1, '3dto2d', 0, '2022-12-08', '2022-12-21', '0000-00-00', 312, 0, 0, 0, 0, 's', 2);

-- --------------------------------------------------------

--
-- Table structure for table `congdoan1`
--

CREATE TABLE `congdoan1` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tiendo` int(11) NOT NULL,
  `ngaybatdau` date NOT NULL,
  `ngaydukien` date NOT NULL,
  `ngayhoanthanh` date NOT NULL,
  `tonggio` int(11) NOT NULL,
  `trongngay` int(11) NOT NULL,
  `thucte` int(11) NOT NULL,
  `hieusuat` int(11) NOT NULL,
  `tangca` int(11) NOT NULL,
  `thanhvien` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `congdoan1`
--

INSERT INTO `congdoan1` (`id`, `name`, `tiendo`, `ngaybatdau`, `ngaydukien`, `ngayhoanthanh`, `tonggio`, `trongngay`, `thucte`, `hieusuat`, `tangca`, `thanhvien`, `parent_id`) VALUES
(1, 'AOI', 0, '2022-12-08', '2022-12-30', '0000-00-00', 528, 0, 0, 0, 0, 'v4324234', 1);

-- --------------------------------------------------------

--
-- Table structure for table `listuser`
--

CREATE TABLE `listuser` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `id_Card` varchar(255) NOT NULL,
  `salary` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `listuser`
--

INSERT INTO `listuser` (`id`, `username`, `id_Card`, `salary`) VALUES
(1, 'nguyen van anh', 'v0264133', 'AEC'),
(2, 'nguyen thi c', 'V02394822', 'TSC'),
(3, 'tran anh thu', 'V0343434', 'APS');

-- --------------------------------------------------------

--
-- Table structure for table `tiendomaymoc`
--

CREATE TABLE `tiendomaymoc` (
  `id` int(11) NOT NULL,
  `tenmay` varchar(255) NOT NULL,
  `tiendo` int(11) NOT NULL,
  `ngaybatdau` date NOT NULL,
  `ngaydukien` date NOT NULL,
  `nhomthuchien` varchar(255) NOT NULL,
  `bophan` varchar(255) NOT NULL,
  `mathe` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tiendomaymoc`
--

INSERT INTO `tiendomaymoc` (`id`, `tenmay`, `tiendo`, `ngaybatdau`, `ngaydukien`, `nhomthuchien`, `bophan`, `mathe`, `type`) VALUES
(2, 'hb', 0, '2022-12-08', '2022-12-16', 'nguyen thi c', 'AEC', 'V02394822', 'machine'),
(4, 'line 2', 0, '2022-12-14', '2022-12-30', 'nguyen thi c', 'AEC', 'V02394822', 'line');

-- --------------------------------------------------------

--
-- Table structure for table `tiendomaymoc1`
--

CREATE TABLE `tiendomaymoc1` (
  `id` int(11) NOT NULL,
  `tenmay` varchar(255) NOT NULL,
  `tiendo` int(11) NOT NULL,
  `ngaybatdau` date NOT NULL,
  `ngaydukien` date NOT NULL,
  `nhomthuchien` varchar(255) NOT NULL,
  `bophan` varchar(255) NOT NULL,
  `mathe` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tiendomaymoc1`
--

INSERT INTO `tiendomaymoc1` (`id`, `tenmay`, `tiendo`, `ngaybatdau`, `ngaydukien`, `nhomthuchien`, `bophan`, `mathe`, `type`) VALUES
(1, 'zcx', 0, '2022-12-07', '2022-12-14', '0', 'TSC', 'vbsdf', 'line'),
(2, 'hb', 0, '2022-12-06', '2022-12-22', 'nguyen thi c', 'TSC', 'V02394822', 'line');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'thang', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `congdoan`
--
ALTER TABLE `congdoan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `congdoan1`
--
ALTER TABLE `congdoan1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listuser`
--
ALTER TABLE `listuser`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tiendomaymoc`
--
ALTER TABLE `tiendomaymoc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tiendomaymoc1`
--
ALTER TABLE `tiendomaymoc1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `congdoan`
--
ALTER TABLE `congdoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `congdoan1`
--
ALTER TABLE `congdoan1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `listuser`
--
ALTER TABLE `listuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tiendomaymoc`
--
ALTER TABLE `tiendomaymoc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tiendomaymoc1`
--
ALTER TABLE `tiendomaymoc1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

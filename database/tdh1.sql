-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 19, 2022 at 10:54 AM
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
  `card` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `congdoan`
--

INSERT INTO `congdoan` (`id`, `name`, `tiendo`, `ngaybatdau`, `ngaydukien`, `ngayhoanthanh`, `tonggio`, `trongngay`, `thucte`, `hieusuat`, `tangca`, `thanhvien`, `card`, `parent_id`) VALUES
(16, '3d to 2d', 100, '2022-12-07', '2023-01-05', '2022-12-27', 696, 0, 487, 143, 0, 'Trần Thị Nhung', 'V0239482', 13),
(17, 'buyoff', 0, '2022-12-07', '2023-01-05', '0000-00-00', 696, 0, 0, 0, 0, 'Nguyễn Văn Thắng', 'V0264133', 7);

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
  `card` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `parent_id_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `congdoan1`
--

INSERT INTO `congdoan1` (`id`, `name`, `tiendo`, `ngaybatdau`, `ngaydukien`, `ngayhoanthanh`, `tonggio`, `trongngay`, `thucte`, `hieusuat`, `tangca`, `thanhvien`, `card`, `parent_id`, `parent_id_id`) VALUES
(8, 'buyoff', 100, '2022-12-09', '2023-01-05', '2022-12-29', 648, 0, 487, 133, 0, 'Trần Thị Nhung', 'V0239482', 10, 11),
(38, 'sd', 0, '2022-12-02', '2023-01-05', '0000-00-00', 816, 0, 0, 0, 0, 'Trần Thị Nhung', 'V0239482', 10, 11);

-- --------------------------------------------------------

--
-- Table structure for table `listuser`
--

CREATE TABLE `listuser` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `id_Card` varchar(255) NOT NULL,
  `salary` varchar(255) NOT NULL,
  `efficiency` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `listuser`
--

INSERT INTO `listuser` (`id`, `username`, `id_Card`, `salary`, `efficiency`) VALUES
(1, 'Nguyễn Văn Thắng', 'V0264133', 'AEC', 100),
(2, 'Trần Thị Nhung', 'V0239482', 'TSC', 100),
(3, 'Nguyễn Văn Thống', 'V0343434', 'APS', 100);

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
(7, 'AOI', 0, '2022-12-08', '2022-12-29', 'Nguyễn Văn Thắng', 'AEC', 'V0264133', 'machine'),
(8, 'HB', 0, '2022-12-15', '2022-12-29', 'Nguyễn Văn Thống', 'AEC', 'V0343434', 'machine'),
(11, 'line 2', 57, '2022-12-01', '2022-12-29', 'Trần Thị Nhung', 'AEC', 'V0239482', 'line'),
(12, 'Line 5', 0, '2022-12-14', '2023-01-04', 'Nguyễn Văn Thắng', 'TSC', 'V0264133', 'line'),
(13, 'HB', 100, '2022-12-07', '2023-01-06', 'Trần Thị Nhung', 'APS', 'V0239482', 'machine'),
(15, 'sdfs', 0, '2022-11-29', '2023-01-05', 'Trần Thị Nhung', 'APS', 'V0239482', 'machine');

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
  `type` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tiendomaymoc1`
--

INSERT INTO `tiendomaymoc1` (`id`, `tenmay`, `tiendo`, `ngaybatdau`, `ngaydukien`, `nhomthuchien`, `bophan`, `mathe`, `type`, `parent_id`) VALUES
(9, 'AOI', 100, '2022-12-08', '2023-01-05', 'Trần Thị Nhung', 'APS', 'V0239482', 'line', 11),
(10, 'HB', 13, '2022-12-08', '2023-01-05', 'Trần Thị Nhung', 'APS', 'V0239482', 'line', 11);

-- --------------------------------------------------------

--
-- Table structure for table `trongngay`
--

CREATE TABLE `trongngay` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `id_Card` varchar(255) NOT NULL,
  `salary` varchar(255) NOT NULL,
  `working` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
-- Indexes for table `trongngay`
--
ALTER TABLE `trongngay`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `congdoan1`
--
ALTER TABLE `congdoan1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `listuser`
--
ALTER TABLE `listuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tiendomaymoc`
--
ALTER TABLE `tiendomaymoc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tiendomaymoc1`
--
ALTER TABLE `tiendomaymoc1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `trongngay`
--
ALTER TABLE `trongngay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

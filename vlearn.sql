-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2017 at 04:52 AM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vlearn`
--

-- --------------------------------------------------------

--
-- Table structure for table `_activity`
--

CREATE TABLE `_activity` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `mode` varchar(128) NOT NULL,
  `level` varchar(64) NOT NULL,
  `comment` varchar(1024) NOT NULL,
  `time` varchar(10) NOT NULL,
  `adminNotification` tinyint(4) NOT NULL DEFAULT '0',
  `userNotification` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_activity`
--

INSERT INTO `_activity` (`id`, `userId`, `mode`, `level`, `comment`, `time`, `adminNotification`, `userNotification`) VALUES
(1, 1, 'login', 'admin', 'Windows 10, Firefox', '1497367942', 0, 0),
(2, 1, 'login', 'admin', 'Windows 10, Firefox', '1498283730', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `_config`
--

CREATE TABLE `_config` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `value` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_config`
--

INSERT INTO `_config` (`id`, `name`, `value`) VALUES
(1, 'qmeryToken', '0a694a8aa6c8');

-- --------------------------------------------------------

--
-- Table structure for table `_learn`
--

CREATE TABLE `_learn` (
  `id` int(11) NOT NULL,
  `name` varchar(1024) NOT NULL,
  `comment` mediumtext,
  `category` varchar(1024) NOT NULL,
  `point` mediumtext,
  `price` varchar(24) DEFAULT NULL,
  `insertTime` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_learn`
--

INSERT INTO `_learn` (`id`, `name`, `comment`, `category`, `point`, `price`, `insertTime`) VALUES
(3, 'استفاده صحیح از رنگ ها', 'در این دوره ای آموزش نحوه صحیح انتخاب رنگ در طراحی مورد بررسی قرار گرفته.\r\nویرایش شد.', '["8","9"]', 'استفاده صحیح از رنگ ها\r\nپروژه های بهتر با رنگ های جذابتر', '0', '1497349191');

-- --------------------------------------------------------

--
-- Table structure for table `_reset_password`
--

CREATE TABLE `_reset_password` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `token` varchar(64) NOT NULL,
  `insertTime` varchar(10) NOT NULL,
  `status` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `_users`
--

CREATE TABLE `_users` (
  `id` int(11) NOT NULL,
  `groupAccess` tinyint(4) NOT NULL DEFAULT '0',
  `firstName` varchar(128) NOT NULL,
  `lastName` varchar(128) NOT NULL,
  `mail` varchar(128) NOT NULL,
  `phone` varchar(24) NOT NULL,
  `password` varchar(32) NOT NULL,
  `lastLogin` varchar(10) NOT NULL DEFAULT '0',
  `active` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_users`
--

INSERT INTO `_users` (`id`, `groupAccess`, `firstName`, `lastName`, `mail`, `phone`, `password`, `lastLogin`, `active`) VALUES
(1, 2, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com', '09392909550', '934b535800b1cba8f96a5d72f72f1611', '1498283729', 1),
(7, 0, 'محبوبه', 'عاملی', 'mahbobe1372@gmail.com', '09301306757256', 'b75ec04a30f942b3cdbb84339caec72f', '0', 1),
(10, 1, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com1', '093929095501', 'bcbe3365e6ac95ea2c0343a2395834dd', '1486913134', 1),
(11, 0, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com2', '093929095502', '934b535800b1cba8f96a5d72f72f1611', '1486913134', 1),
(12, 2, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com3', '0939290955045', '934b535800b1cba8f96a5d72f72f1611', '1486913134', 0),
(13, 0, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com4', '093929095504', '934b535800b1cba8f96a5d72f72f1611', '1486913134', 0),
(14, 0, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com5', '093929095505', '934b535800b1cba8f96a5d72f72f1611', '1486913134', 0),
(15, 0, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com6', '093929095506', '934b535800b1cba8f96a5d72f72f1611', '1486913134', 1),
(16, 0, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com7', '093929095507', '934b535800b1cba8f96a5d72f72f1611', '1486913134', 1),
(17, 0, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com8', '093929095508', '934b535800b1cba8f96a5d72f72f1611', '1486913134', 1),
(18, 0, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com9', '093929095509', '934b535800b1cba8f96a5d72f72f1611', '1486913134', 1),
(19, 0, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com10', '0939290955010', '934b535800b1cba8f96a5d72f72f1611', '1486913134', 0),
(20, 0, 'امیر رضا', 'دلیر', 'dalirnet@gmail.com11', '0939290955011', '934b535800b1cba8f96a5d72f72f1611', '1486913134', 1);

-- --------------------------------------------------------

--
-- Table structure for table `_video`
--

CREATE TABLE `_video` (
  `id` int(11) NOT NULL,
  `learnId` int(11) NOT NULL DEFAULT '0',
  `name` varchar(512) NOT NULL,
  `title` varchar(1024) DEFAULT NULL,
  `comment` mediumtext,
  `QmeryId` varchar(10) NOT NULL,
  `QmeryHash` varchar(64) NOT NULL,
  `QmeryGroup` varchar(10) NOT NULL,
  `size` varchar(16) NOT NULL,
  `time` int(11) NOT NULL DEFAULT '0',
  `startUpload` varchar(10) NOT NULL,
  `endUpload` varchar(10) NOT NULL,
  `endEncode` varchar(10) NOT NULL DEFAULT '0',
  `free` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_video`
--

INSERT INTO `_video` (`id`, `learnId`, `name`, `title`, `comment`, `QmeryId`, `QmeryHash`, `QmeryGroup`, `size`, `time`, `startUpload`, `endUpload`, `endEncode`, `free`) VALUES
(1, 3, '@FarhadMomtazbaf-colorTheory.mp4', 'روانشناسی رنگ ها', 'استفاده صحیح از رنگ ها در طراحی', '131895', '2WXb5BD9AV', '32721', '52211301', 946, '1497340999', '1497341193', '1497342353', 1),
(2, 3, '@FarhadMomtazbaf-joosh.mp4', 'قسمت دوم', '', '132031', '1jvKk1YZvO', '32721', '21793214', 506, '1497349191', '1497349260', '1497349586', 1);

-- --------------------------------------------------------

--
-- Table structure for table `_video_link`
--

CREATE TABLE `_video_link` (
  `id` int(11) NOT NULL,
  `videoId` varchar(10) NOT NULL,
  `format` varchar(10) NOT NULL,
  `quality` varchar(64) NOT NULL,
  `link` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_video_link`
--

INSERT INTO `_video_link` (`id`, `videoId`, `format`, `quality`, `link`) VALUES
(1, '131895', 'mp4', '1280x720', 'http://storage.qmery.com/repository/2502/131895-1280x720.mp4'),
(2, '131895', 'mp4', '512x288', 'http://storage.qmery.com/repository/2502/131895-512x288.mp4'),
(3, '131895', 'mp4', '256x144', 'http://storage.qmery.com/repository/2502/131895-256x144.mp4'),
(4, '132031', 'mp4', '1280x720', 'http://storage.qmery.com/repository/2502/132031-1280x720.mp4'),
(5, '132031', 'mp4', '512x288', 'http://storage.qmery.com/repository/2502/132031-512x288.mp4'),
(6, '132031', 'mp4', '256x144', 'http://storage.qmery.com/repository/2502/132031-256x144.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `_video_screenshot`
--

CREATE TABLE `_video_screenshot` (
  `id` int(11) NOT NULL,
  `videoId` varchar(10) NOT NULL,
  `image` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_video_screenshot`
--

INSERT INTO `_video_screenshot` (`id`, `videoId`, `image`) VALUES
(1, '131895', 'http://storage.qmery.com/repository/2502/131895-593f9da734477e7d22009e15-01.jpg'),
(2, '131895', 'http://storage.qmery.com/repository/2502/131895-593f9da734477e7d22009e15-02.jpg'),
(3, '131895', 'http://storage.qmery.com/repository/2502/131895-593f9da734477e7d22009e15-03.jpg'),
(4, '131895', 'http://storage.qmery.com/repository/2502/131895-593f9da734477e7d22009e15-04.jpg'),
(5, '131895', 'http://storage.qmery.com/repository/2502/131895-593f9da734477e7d22009e15-05.jpg'),
(6, '132031', 'http://storage.qmery.com/repository/2502/132031-593fbd2c34477e7d22009ed8-01.jpg'),
(7, '132031', 'http://storage.qmery.com/repository/2502/132031-593fbd2c34477e7d22009ed8-02.jpg'),
(8, '132031', 'http://storage.qmery.com/repository/2502/132031-593fbd2c34477e7d22009ed8-03.jpg'),
(9, '132031', 'http://storage.qmery.com/repository/2502/132031-593fbd2c34477e7d22009ed8-04.jpg'),
(10, '132031', 'http://storage.qmery.com/repository/2502/132031-593fbd2c34477e7d22009ed8-05.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `__test`
--

CREATE TABLE `__test` (
  `id` int(11) NOT NULL,
  `value` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `_activity`
--
ALTER TABLE `_activity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_config`
--
ALTER TABLE `_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_learn`
--
ALTER TABLE `_learn`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_reset_password`
--
ALTER TABLE `_reset_password`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_users`
--
ALTER TABLE `_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `_video`
--
ALTER TABLE `_video`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_video_link`
--
ALTER TABLE `_video_link`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_video_screenshot`
--
ALTER TABLE `_video_screenshot`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `__test`
--
ALTER TABLE `__test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `_activity`
--
ALTER TABLE `_activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `_config`
--
ALTER TABLE `_config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `_learn`
--
ALTER TABLE `_learn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `_reset_password`
--
ALTER TABLE `_reset_password`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `_users`
--
ALTER TABLE `_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `_video`
--
ALTER TABLE `_video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `_video_link`
--
ALTER TABLE `_video_link`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `_video_screenshot`
--
ALTER TABLE `_video_screenshot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `__test`
--
ALTER TABLE `__test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

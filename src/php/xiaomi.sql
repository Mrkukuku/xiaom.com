-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-05-31 06:28:05
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chen`
--

-- --------------------------------------------------------

--
-- 表的结构 `xiaomi`
--

CREATE TABLE `xiaomi` (
  `id` int(20) NOT NULL COMMENT 'id',
  `username` varchar(50) NOT NULL,
  `password` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `xiaomi`
--

INSERT INTO `xiaomi` (`id`, `username`, `password`) VALUES
(10, 'kuku', 1111),
(9, 'chen', 0),
(6, '小霖子', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `xiaomi`
--
ALTER TABLE `xiaomi`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `xiaomi`
--
ALTER TABLE `xiaomi`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT 'id', AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

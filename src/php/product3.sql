-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-05-31 06:27:54
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
-- 表的结构 `product3`
--

CREATE TABLE `product3` (
  `id` int(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `pic` varchar(100) NOT NULL,
  `details` varchar(100) NOT NULL,
  `details1` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `product3`
--

INSERT INTO `product3` (`id`, `title`, `price`, `pic`, `details`, `details1`) VALUES
(1, '小米随身蓝牙音箱', '69元', '../image/yinx.jpg', '超级喜欢！小巧玲珑！音质完美！不知道为什么！只要是小米出的东西我都喜欢！那倒是因为那一句？？小米为发...', ' 来自于 田密 的评价 '),
(2, '小米插线板', '49元', '../image/yinx2.jpg', '东西真心不错，用过最好用的插线板，做工外观没得挑剔，3个USB接口很实用，充电快，建议不包邮的应该在...', ' 来自于 yinyin19891117 的评价 '),
(3, '米兔智能故事机', '199元', '../image/yinx3.jpg', '非常可爱，一拿到小宝宝还没享受，一帮大宝宝先high了一把，同事也想买，希望早点大卖', ' 来自于 秘密 的评价 '),
(4, '米家车载空气净化器（USB车充版） 灰色', '449元', '../image/yinx4.jpg', '外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价比高。附图，给客服妹子一个大...', ' 来自于 酸小妞～！ 的评价 ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product3`
--
ALTER TABLE `product3`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product3`
--
ALTER TABLE `product3`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

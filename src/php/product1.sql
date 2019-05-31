-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-05-31 06:27:44
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
-- 表的结构 `product1`
--

CREATE TABLE `product1` (
  `id` int(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `num` int(20) NOT NULL,
  `pic` varchar(100) NOT NULL,
  `details` varchar(100) NOT NULL,
  `details1` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `product1`
--

INSERT INTO `product1` (`id`, `title`, `price`, `num`, `pic`, `details`, `details1`) VALUES
(1, '米家互联网洗烘一体机10kg', '1999元', 2000, '../image/jiadian.jpg', '挺好的，洗的也干净，白色很简单，好看', ' 来自于 白羊董小姐 的评价 '),
(2, '米家互联网空调（一级能效）', '2199元', 2000, '../image/jiadian2.jpg', '空调很好，杠杠滴，颜值杠杠滴，帅呆了', ' 来自于 星月的辉歌 的评价 '),
(3, '15.6"笔记本 i5 4G MX110', '4199元', 2000, '../image/jiadian3.png', '物流很快的，笔记本很流畅，体验超级棒，显示屏很清晰', ' 来自于 小小快乐 的评价 '),
(4, '13.3"小米笔记本Air 四核i7 8G 256G MX150 银色', '5999元', 2000, '../image/jiadian4.jpg', '轻薄完美，深空灰超帅！', ' 来自于 1*215219 的评价 '),
(5, '米家空气净化器Pro', '1499元', 2000, '../image/jiadian5.png', '小小的 喜欢 希望可以用久一点 还是不错的', ' 来自于 2156774032 的评价 '),
(6, '米家电水壶', '99元', 2000, '../image/jiadian6.jpg', '变成忠实的米粉了，烧水很快声音也小，顺便晒几张小米8...', ' 来自于 针掉在路上 的评价 '),
(7, '米家LED吸顶灯', '399元', 2000, '../image/jiadian7.png', '灯光明亮，家里也用小米吸顶灯，店里也用，质量很好！手...', ' 来自于 余崇泰 的评价 '),
(8, '小米净水器（厨下式）', '1999元', 2000, '../image/jiadian8.jpg', '骨灰级米粉，不用解释了！安装师傅要重点夸一下，仔细认真负责。大爱小米！', ' 来自于 朱波羽 的评价 ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product1`
--
ALTER TABLE `product1`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product1`
--
ALTER TABLE `product1`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

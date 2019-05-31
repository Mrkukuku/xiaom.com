-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-05-31 06:26:54
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
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(20) NOT NULL COMMENT '商品id',
  `title` varchar(30) NOT NULL COMMENT '商品标题',
  `price` varchar(50) NOT NULL COMMENT '商品价格',
  `num` int(20) NOT NULL COMMENT '商品库存',
  `pic` varchar(200) NOT NULL COMMENT '商品图片',
  `details` varchar(100) NOT NULL COMMENT '商品描述'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`) VALUES
(1, '小米9 6GB+128GB', '2999元', 10000, '[{"src":"../image/rightimg1.jpg"},{"src":"../image/rightimg1.jpg"},{"src":"../image/rightimg1.jpg"},{"src":"../image/rightimg1.jpg"}]', '骁龙855，索尼4800万超广角微距三摄'),
(4, 'Redmi Note 7 3GB+32G', '999元', 222, '[{"src":"../image/rightimg3.jpg"},{"src":"../image/rightimg3.1.jpg"},{"src":"../image/rightimg3.2.jpg"},{"src":"../image/rightimg3.3.jpg"}]', '4800万拍照千元机，18个月超长质保'),
(5, '小米Play 4GB+64GB', '1099元', 1000, '[{"src":"../image/rightimg4.png"},{"src":"../image/rightimg4.1.png"},{"src":"../image/rightimg4.2.png"},{"src":"../image/rightimg4.3.png"}]', '5.84"小水滴全面屏，后置1200万 AI 双摄'),
(6, '小米8青春版6GB+64GB', '1499元', 2000, '[{"src":"../image/rightimg5.jpg"},{"src":"../image/rightimg5.1.jpg"},{"src":"../image/rightimg5.2.jpg"},{"src":"../image/rightimg5.3.jpg"}]', '潮流镜面渐变色，2400万自拍旗舰'),
(8, '小米6X 6GB+128GB', '1599元', 2000, '[{"src":"../image/rightimg.jpg"},{"src":"../image/rightimg.jpg"},{"src":"../image/rightimg.jpg"},{"src":"../image/rightimg.jpg"}]', '轻薄美观的拍照手机'),
(9, '红米6A 2GB+16GB', '549元', 2000, '[{"src":"../image/rightimg7.jpg"},{"src":"../image/rightimg7.1.jpg"},{"src":"../image/rightimg7.2.jpg"},{"src":"../image/rightimg7.3.jpg"}]', '12nm高性能处理器，1300万高清相机'),
(10, '小米8 SE 6GB+64GB', '1599元', 2000, '[{"src":"../image/rightimg6.jpg"},{"src":"../image/rightimg6.1.jpg"},{"src":"../image/rightimg6.2.jpg"},{"src":"../image/rightimg6.3.jpg"}]', '三星 AMOLED 全面屏，骁龙710'),
(12, '小米9 SE 6GB+64GB', '1999元', 2000, '[{"src":"../image/rightimg2.jpg"},{"src":"../image/rightimg2.1.jpg"},{"src":"../image/rightimg2.2.jpg"},{"src":"../image/rightimg2.3.jpg"}]', '索尼4800万超广角三摄，骁龙712');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

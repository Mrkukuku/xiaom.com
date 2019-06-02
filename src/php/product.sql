-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-02 06:48:02
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
  `details` varchar(100) NOT NULL COMMENT '商品描述',
  `type` varchar(20) NOT NULL COMMENT '类型',
  `details1` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`, `type`, `details1`) VALUES
(1, '小米9 6GB+128GB', '2999元', 10000, '[{"src":"../image/rightimg1.jpg"},{"src":"../image/rightimg1.jpg"},{"src":"../image/rightimg1.jpg"},{"src":"../image/rightimg1.jpg"}]', '骁龙855，索尼4800万超广角微距三摄', 'phone', ''),
(4, 'Redmi Note 7 3GB+32G', '999元', 222, '[{"src":"../image/rightimg3.jpg"},{"src":"../image/rightimg3.1.jpg"},{"src":"../image/rightimg3.2.jpg"},{"src":"../image/rightimg3.3.jpg"}]', '4800万拍照千元机，18个月超长质保', 'phone', ''),
(5, '小米Play 4GB+64GB', '1099元', 1000, '[{"src":"../image/rightimg4.png"},{"src":"../image/rightimg4.1.png"},{"src":"../image/rightimg4.2.png"},{"src":"../image/rightimg4.3.png"}]', '5.84"小水滴全面屏，后置1200万 AI 双摄', 'phone', ''),
(6, '小米8青春版6GB+64GB', '1499元', 2000, '[{"src":"../image/rightimg5.jpg"},{"src":"../image/rightimg5.1.jpg"},{"src":"../image/rightimg5.2.jpg"},{"src":"../image/rightimg5.3.jpg"}]', '潮流镜面渐变色，2400万自拍旗舰', 'phone', ''),
(8, '小米6X 6GB+128GB', '1599元', 2000, '[{"src":"../image/rightimg.jpg"},{"src":"../image/rightimg.jpg"},{"src":"../image/rightimg.jpg"},{"src":"../image/rightimg.jpg"}]', '轻薄美观的拍照手机', 'phone', ''),
(9, '红米6A 2GB+16GB', '549元', 2000, '[{"src":"../image/rightimg7.jpg"},{"src":"../image/rightimg7.1.jpg"},{"src":"../image/rightimg7.2.jpg"},{"src":"../image/rightimg7.3.jpg"}]', '12nm高性能处理器，1300万高清相机', 'phone', ''),
(10, '小米8 SE 6GB+64GB', '1599元', 2000, '[{"src":"../image/rightimg6.jpg"},{"src":"../image/rightimg6.1.jpg"},{"src":"../image/rightimg6.2.jpg"},{"src":"../image/rightimg6.3.jpg"}]', '三星 AMOLED 全面屏，骁龙710', 'phone', ''),
(12, '小米9 SE 6GB+64GB', '1999元', 2000, '[{"src":"../image/rightimg2.jpg"},{"src":"../image/rightimg2.1.jpg"},{"src":"../image/rightimg2.2.jpg"},{"src":"../image/rightimg2.3.jpg"}]', '索尼4800万超广角三摄，骁龙712', 'phone', ''),
(13, '米家互联网洗烘一体机10kg', '1999元', 2000, '../image/jiadian.jpg', '挺好的，洗的也干净，白色很简单，好看', 'jiadian', ' 来自于 白羊董小姐 的评价 '),
(14, '米家互联网空调（一级能效）', '2199元', 2000, '../image/jiadian2.jpg', '空调很好，杠杠滴，颜值杠杠滴，帅呆了', 'jiadian', ' 来自于 星月的辉歌 的评价 '),
(15, '15.6"笔记本 i5 4G MX110', '4199元', 2000, '../image/jiadian3.png', '物流很快的，笔记本很流畅，体验超级棒，显示屏很清晰', 'jiadian', ' 来自于 小小快乐 的评价 '),
(16, '13.3"小米笔记本Air 四核i7 8G 256G MX1', '5999元', 2000, '../image/jiadian4.jpg', '轻薄完美，深空灰超帅！', 'jiadian', ' 来自于 1*215219 的评价 '),
(17, '米家空气净化器Pro', '1499元', 2000, '../image/jiadian5.png', '小小的 喜欢 希望可以用久一点 还是不错的', 'jiadian', ' 来自于 2156774032 的评价 '),
(18, '米家电水壶', '99元', 2000, '../image/jiadian6.jpg', '变成忠实的米粉了，烧水很快声音也小，顺便晒几张小米8...', 'jiadian', ' 来自于 针掉在路上 的评价 '),
(19, '米家LED吸顶灯', '399元', 2000, '../image/jiadian7.png', '灯光明亮，家里也用小米吸顶灯，店里也用，质量很好！手...', 'jiadian', ' 来自于 余崇泰 的评价 '),
(20, '小米净水器（厨下式）', '1999元', 2000, '../image/jiadian8.jpg', '骨灰级米粉，不用解释了！安装师傅要重点夸一下，仔细认真负责。大爱小米！', 'jiadian', ' 来自于 朱波羽 的评价 ');

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
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

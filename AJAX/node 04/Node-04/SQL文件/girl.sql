/*
Navicat MySQL Data Transfer

Source Server         : asdf
Source Server Version : 50524
Source Host           : localhost:3306
Source Database       : yingxiong

Target Server Type    : MYSQL
Target Server Version : 50524
File Encoding         : 65001

Date: 2019-09-04 15:11:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for girl
-- ----------------------------
DROP TABLE IF EXISTS `girl`;
CREATE TABLE `girl` (
  `name` varchar(4) DEFAULT NULL,
  `flower` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of girl
-- ----------------------------
INSERT INTO `girl` VALUES ('凤姐', '仙人掌');
INSERT INTO `girl` VALUES ('林志玲', '荷花');
INSERT INTO `girl` VALUES ('大S', '梅花');
INSERT INTO `girl` VALUES ('西施', '桃花');
INSERT INTO `girl` VALUES ('芙蓉姐姐', '百合');

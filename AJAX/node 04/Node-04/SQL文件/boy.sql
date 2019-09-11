/*
Navicat MySQL Data Transfer

Source Server         : asdf
Source Server Version : 50524
Source Host           : localhost:3306
Source Database       : yingxiong

Target Server Type    : MYSQL
Target Server Version : 50524
File Encoding         : 65001

Date: 2019-09-04 15:11:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for boy
-- ----------------------------
DROP TABLE IF EXISTS `boy`;
CREATE TABLE `boy` (
  `name` varchar(3) DEFAULT NULL,
  `flower` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of boy
-- ----------------------------
INSERT INTO `boy` VALUES ('犀利哥', '百合');
INSERT INTO `boy` VALUES ('周杰伦', '桃花');
INSERT INTO `boy` VALUES ('小沈阳', '梅花');
INSERT INTO `boy` VALUES ('张三丰', '荷花');
INSERT INTO `boy` VALUES ('刘德华', '狗尾巴花');

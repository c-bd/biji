/*
Navicat MySQL Data Transfer

Source Server         : asdf
Source Server Version : 50524
Source Host           : localhost:3306
Source Database       : heroes

Target Server Type    : MYSQL
Target Server Version : 50524
File Encoding         : 65001

Date: 2019-09-04 15:05:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for heroes
-- ----------------------------
DROP TABLE IF EXISTS `heroes`;
CREATE TABLE `heroes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `file` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `skill` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` enum('男','女') CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of heroes
-- ----------------------------
INSERT INTO `heroes` VALUES ('1', '贾克斯', '武器大师', null, '反击风暴', '40', '男');
INSERT INTO `heroes` VALUES ('2', '蒙多', '祖安狂人', 'uploads\\6b88b65c0648c26dbf759304d08cfe7d', '扔菜刀', null, null);
INSERT INTO `heroes` VALUES ('3', '嘉文四世', '德玛西亚皇子', null, null, '22', '男');
INSERT INTO `heroes` VALUES ('4', '盖伦', '德玛西亚之力', null, null, '27', '男');
INSERT INTO `heroes` VALUES ('5', '菲奥娜', '无双剑姬', null, null, '20', '女');
INSERT INTO `heroes` VALUES ('6', '亚索', '疾风剑豪', null, null, '33', '男');
INSERT INTO `heroes` VALUES ('7', '易', '无极剑圣', null, null, '29', '男');
INSERT INTO `heroes` VALUES ('8', '德莱文', '荣耀行刑官', null, null, '37', '男');
INSERT INTO `heroes` VALUES ('9', '泰隆', '刀锋之影', null, null, '28', '男');
INSERT INTO `heroes` VALUES ('10', '锐雯', '放逐之刃', null, null, '19', '女');
INSERT INTO `heroes` VALUES ('11', '乐芙兰', '诡术妖姬', null, null, '46', '女');
INSERT INTO `heroes` VALUES ('12', '金克丝', '暴走萝莉', null, null, '17', '女');
INSERT INTO `heroes` VALUES ('13', '迦娜', '风暴之怒', null, null, '20', '女');
INSERT INTO `heroes` VALUES ('14', '吉格斯', '爆破鬼才', null, null, '67', '男');
INSERT INTO `heroes` VALUES ('15', '凯特琳', '皮城女警', null, null, '25', '女');
INSERT INTO `heroes` VALUES ('16', '卡莉斯塔', '复仇之矛', null, null, '34', '女');
INSERT INTO `heroes` VALUES ('17', '卡尔萨斯', '死亡颂唱者', null, null, '99', '男');
INSERT INTO `heroes` VALUES ('18', '潘森', '战争之王', null, null, '43', '男');
INSERT INTO `heroes` VALUES ('19', '拉莫斯', '披甲龙龟', null, null, '103', '女');
INSERT INTO `heroes` VALUES ('20', '内瑟斯', '沙漠死神', null, null, '38', '男');
INSERT INTO `heroes` VALUES ('21', '崔斯特', '卡牌大师', null, null, '57', '男');
INSERT INTO `heroes` VALUES ('22', '艾希', '寒冰射手', null, null, '27', '女');
INSERT INTO `heroes` VALUES ('23', '泰达米尔', '蛮族之王', null, null, '29', '男');
INSERT INTO `heroes` VALUES ('24', '崔斯塔娜', '麦林炮手', null, null, '18', '女');
INSERT INTO `heroes` VALUES ('25', '雷克塞', '虚空遁地兽', null, null, '40', '女');
INSERT INTO `heroes` VALUES ('26', '亚托克斯', '暗裔剑魔', null, null, '57', '男');
INSERT INTO `heroes` VALUES ('27', '孙悟空', '齐天大圣', null, '在空中转圈圈', null, null);
INSERT INTO `heroes` VALUES ('28', '卡特琳娜', '不祥之刃', null, '转圈圈和捡圈圈', '24', '女');
INSERT INTO `heroes` VALUES ('29', '希维尔', '战争女神', null, '扔圈圈', null, null);
INSERT INTO `heroes` VALUES ('31', '提莫', '迅捷斥候', null, null, null, null);
INSERT INTO `heroes` VALUES ('32', '拉克丝', '光辉女郎', null, '动感光波', '25', null);
INSERT INTO `heroes` VALUES ('33', '卡莎', '虚空之女', null, '虚化', '35', '女');
INSERT INTO `heroes` VALUES ('34', '妮蔻', '万花通灵', null, null, '30', null);

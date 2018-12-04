-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2018 at 10:35 PM
-- Server version: 5.7.17
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `objets`
--

-- --------------------------------------------------------

--
-- Table structure for table `objets`
--

CREATE TABLE `objets` (
  `id` int(11) NOT NULL,
  `Nom` text NOT NULL,
  `img` text NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `typeCond` int(11) NOT NULL,
  `parametre` text NOT NULL,
  `message` text NOT NULL,
  `indice` text NOT NULL,
  `taille` int(11) NOT NULL,
  `zoom` int(11) NOT NULL,
  `ancreX` int(11) NOT NULL,
  `ancreY` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `objets`
--

INSERT INTO `objets` (`id`, `Nom`, `img`, `latitude`, `longitude`, `typeCond`, `parametre`, `message`, `indice`, `taille`, `zoom`, `ancreX`, `ancreY`) VALUES
(1, 'code1', 'imageslock_t.png', 48.844, 2.36021, 0, '', 'Vous vous réveillez, entouré de végétations. \r\nVotre mal de crâne vous empêche de réfléchir clairement et vous vous demandez comment vous vous êtes retrouvé là. \r\nCependant, les bruits de la foule et des voitures vous font remarquer que vous êtes en plein milieu de Paris. \r\nVous reprenez vos esprits et sortez de cet endroit qui vous rappelle un parc floral sous les yeux intrigués des personnes autours, et vous tombez sur la Seine. \r\nVous apercevez également une gare pas loin de votre position. \r\nOù êtes-vous donc ?', 'un code sur un bout de papier', 20, 17, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

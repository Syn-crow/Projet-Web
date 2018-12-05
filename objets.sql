-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2018 at 12:12 AM
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
  `nom` text NOT NULL,
  `img` text NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `typeCond` int(11) NOT NULL,
  `parametre` text NOT NULL,
  `message` text NOT NULL,
  `indice` text NOT NULL,
  `taille` int(11) NOT NULL DEFAULT '100',
  `zoom` int(11) NOT NULL DEFAULT '17',
  `ancreX` int(11) NOT NULL DEFAULT '0',
  `ancreY` int(11) NOT NULL DEFAULT '0',
  `imagePNJ` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `objets`
--

INSERT INTO `objets` (`id`, `nom`, `img`, `latitude`, `longitude`, `typeCond`, `parametre`, `message`, `indice`, `taille`, `zoom`, `ancreX`, `ancreY`, `imagePNJ`) VALUES
(2, 'pendentif ancien', 'images\\Necklace_Moonstone_Green.png', 48.8531, 2.36916, 1, '\"\"', 'Vous trouvez un pendentif doré et ancien, incrusté de perles et d’une pierre verte et ovale qui semble briller depuis l’intérieur. Vous trouvé également une note qui l’accompagne : \r\n« Mille questions s’imposent, où mène donc cette étrange aventure ? Allez donc à l’Ile de la Cité, vous renseigner auprès d’Arthur.»', 'Mille questions s’imposent, où mène donc cette étrange aventure ? Allez donc à l’Ile de la Cité, vous renseigner auprès d’Arthur.', 100, 17, 0, 0, ''),
(3, 'Magasin', 'images\\plate_t.png', 48.8538, 2.35057, 1, '\"\"', 'Vous arrivez sur l’ile, et en observant autour de vous, vous remarquez un petit magasin d’antiquités dont l’enseigne est presque camouflée. \r\nA votre entrée, une petite cloche retentit, puis vous voyez un vieil homme sortir d’une porte et se diriger vers le comptoir. D’une voix bienveillante, il vous demande :\r\n- Bonjour bonjour et bienvenue jeune homme ! Que cherchez-vous donc ?\r\n- Bonjour monsieur, je viens me renseigner sur un objet que l’on m’a confié, pouvez-vous y jeter un coup d’œil ?\r\n- Bien sûr ! Appelez moi Arthur. Installez-vous donc.\r\nAprès avoir examiné l’objet en détail, Arthur vous dit :\r\n- Eh bien cet objet n’est autre qu’un pendentif que possédait une dame de la cour de Louis XIV. On raconte qu’il a été fabriqué par un artisan mystérieux qui a eu une relation avec ladite dame… Les pierres précieuses et l’or utilisés font que ce bijou est d’une grande valeur.\r\nCela m’étonne que vous l’ayez en possession car elle fait partie de la collection du Musée des Arts Décoratifs, qui a été récemment cambriolé… Mais bon, j’imagine que si vous étiez vraiment le voleur, vous ne seriez pas venu me le montrer comme cela !\r\nAvant même qu’il ait achevé cette dernière phrase, tout vous revient en mémoire. \r\nVous étiez policier, chargé d’enquêter sur les différents vols qui ont eu lieu la même nuit dans différents musées et banques de Paris. Des centaines de bijoux se sont volatilisés, et il était certain qu’il s’agissant d’un vol à grande échelle probablement orchestré par une organisation criminelle.\r\nDes traces du voleur vous avaient menés, vous et votre partenaire mais aussi meilleur ami Julien Cotte, vers une piste prometteuse. \r\nEffectivement, vous aviez trouvé un homme suspect rôder dans les parages avec une vieille valise. \r\nVous alliez l’arrêter pour l’interroger, mais avant de pouvoir réagir, il tira une balle vers Julien, et celui-ci fut foudroyé devant vos yeux. \r\nLe choc vous a pétrifié, ce qui a permis au tueur de s’échapper, mais il laissa derrière lui le pendentif que le vieil homme devant vous tient dans ces mains en ce moment même. \r\nLa police a, suite au traumatisme que vous avez subit, décidé de vous accorder une pause d’une durée indéfinie. Vous aviez donc lâché l’affaire, malgré l’amertume que la mort de votre ami vous a procuré. \r\nVos souvenirs commencent à devenir flous : comment vous êtes-vous donc retrouvé inconscient au beau milieu de la ville ?\r\nArthur vous ramena à la réalité en vous disant, d’un air pensif :\r\n- Si vous voulez en savoir plus, je vous conseille d’aller voir là où il a été volé, au Musée des Arts Décoratifs.\r\n', 'Si vous voulez en savoir plus, je vous conseille d’aller voir là où il a été volé, au Musée des Arts Décoratifs', 100, 17, 0, 0, 'images\\antiquaire.png'),
(1, 'code1', 'images\\Scroll_normal_empty.png', 48.8437, 2.36351, 1, '\"\"', 'A peine réorienté, vous vous faites bousculer par un passant. \r\nLégèrement irrité, vous vous retournez, mais n’arrivez pas à distinguer la personne parmi la foule.\r\nVous vérifiez que qu’elle ne vous a rien volé, mais à votre grande surprise, vous trouvez un bout de papier dans la poche droite de votre veste. \r\nVous l’ouvrez, et lisez ce qu’il y a écrit dessus :\r\n« Le temps s’écoule, mais l’histoire se répète. La révolution est proche, mon ami, rendez-vous à la forteresse. 7932»', 'Le temps s’écoule, mais l’histoire se répète. La révolution est proche, mon ami, rendez-vous à la forteresse. 7932', 100, 17, 0, 0, '\"\"'),
(4, 'code2', 'images\\scroll_t2.png', 48.8577, 2.3338, 1, '', 'En arrivant près du musée, vous remarquez sur la pelouse un bout de papier à moitié déchiré. \r\nVous le ramassez et lisez « Tour Eiffel, 2735(rouge) », mais il semble qu’une autre partie du message pourrait se trouver sur la partie déchirée.', '« Tour Eiffel, 2735(rouge) », mais il semble qu’une autre partie du message pourrait se trouver sur la partie déchirée.', 100, 17, 0, 0, ''),
(5, 'porte1', 'images\\scroll_t.png', 48.8584, 2.29448, 1, '', 'Vous trouvez, avec un peu de mal, une sorte de passage sous-terrain. Celui-ci passait inaperçu aux yeux des touristes car ils étaient trop occupés à vouloir monter sur la Tour Eiffel. \r\nVous trouvez au bout de ce passage une porte avec un trou de serrure. En regardant de plus près, vous trouvez un autre petit bout de papier froissé enfoncé dans le trou. \r\nVous l’extrayez et lisez « Jardin du Luxembourg, entrée Est, 3ème banc ».', 'Jardin du Luxembourg, entrée Est, 3ème banc ', 100, 17, 0, 0, ''),
(6, 'clé', 'images\\Key_Gold.png', 48.8469, 2.33717, 1, '', 'Vous fouillez un peu dans les parages, et trouvez finalement une clé coincée dans le bois du banc.', 'je devrais retourner à la Tour Eiffel', 100, 17, 0, 0, ''),
(7, 'porte2', 'images\\porte.png', 48.8584, 2.29448, 2, 'clé', 'Vous ouvrez la porte avec la clé, et vous arrivez dans une petite salle peu éclairée et poussiéreuse avec seulement une table et deux chaises. Mais ce qui attire votre attention est l’énorme coffre positionné au fond. \r\nIl y a deux cadenas qui ferment le coffre, un rouge et un bleu, chacun ayant un code de 4 caractères.', 'Il y a deux cadenas qui ferment le coffre, un rouge et un bleu, chacun ayant un code de 4 caractères.', 100, 17, 0, 0, ''),
(8, 'cadenas rouge', 'images\\lock_t2.png', 48.8469, 2.33717, 3, '2735', 'Il c\'est ouvert!', 'Au suivant', 100, 17, 0, 0, ''),
(9, 'cadenas bleu', 'images\\lock_t.png', 48.8469, 2.33717, 3, '7932', 'Au moment où le coffre s’ouvre devant vous, vous entendez des bruits de pas retentir. Vous vous retournez, et voyez des policiers en uniforme s’approcher de vous. \r\nVotre soulagement de voir des collègues est rapidement remplacé par de l’incompréhension quand ils commencent à vous passer des menottes. Vous voyez ensuite votre chef entrer dans la salle. \r\nIl vous sourit, puis commença à vous raconter, de son point de vue, cette aventure dont vous êtes le héros :\r\nVous étiez un policier qui travaillait en réalité pour une organisation criminelle X. En obtenant des informations directes sur les systèmes de sécurité dans les différents musées et banques grâce à vos relations au sein de la police, vous les avez aidés à organiser ce vol à grande échelle sur lequel vous avez enquêté. \r\nEn faisant semblant de chercher les coupables pour paraître crédible auprès de la police, vous finissez par tomber sur l’un de vos complices de X. Ne pouvant plus le cacher, vous arrivez sur un lieu suspect avec votre partenaire, mais celui-ci se fait tuer. \r\nVous connaissez la suite, vous avez eu quelques semaines de repos, mais pendant ce temps, la police a reçu une lettre anonyme ainsi que des preuves pour dénoncer vos crimes. Elle décide alors de vous utiliser pour résoudre l’enquête après vous avoir hypnotisé pour oublier votre passé criminel.\r\nVotre chef vous sourit, puis dit :\r\n- Merci pour toutes vos années de travail, mais je pense qu’une cellule serait une meilleure place pour quelqu’un comme vous.\r\n\r\nFIN\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nContexte :\r\nLe personnage principal est un policier mais qui bosse en fait pour une organisation criminelle (X). Il est envoyé en mission avec son partenaire pour retrouver plein d’artefacts et d’œuvres d’art qui ont été volé un peu partout dans Paris (principalement des musées mais aussi des héritages familiaux qui étaient protégés). Il s’agit clairement d’un vol organisé à grande échelle, et il se trouve que l’organisation derrière n’est autre que X. Le personnage principal y a d’ailleurs participé en obtenant des informations directes sur les systèmes de sécurité dans Paris, grâce à ses relations au sein de la police (flemme de trop détailler là dessus atm).\r\n\r\nEn faisant semblant d’enquêter (pour paraître crédible auprès de son chef) avec son partenaire, il finit par tomber sur l’un de ses complices de l’X. Ne pouvant plus le cacher, il est confronté à un dilemme, ne sachant choisir entre sa carrière de policier et son statut de criminel (qui lui rapporte quand même énormément d’argent). Pendant ce temps, son partenaire se fait tuer et le complice s’enfuit. Il se fait assommer par derrière.\r\nIl se réveille peu après, mais la police a reçu une lettre anonyme entre temps : celle-ci dénonce les crimes du personnage principal en donnant des preuves concrètes. La police décide donc de l’utiliser pour résoudre l’enquête. Elle l’a hypnotisé pour qu’il oublie son passé criminel, mais garde des souvenirs de sa carrière policière. Il est donc amené à enquêter sur la mort de son partenaire et des objets volés. \r\n\r\nIl découvre que c’est lui le coupable et la police l’a utilisé pour trouver ce qu’elle voulait : le voleur et les objets. \r\n', '', 100, 17, 0, 0, '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

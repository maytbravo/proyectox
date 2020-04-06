-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-04-2020 a las 01:51:10
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectox`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulo`
--

CREATE TABLE `articulo` (
  `id_a` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `imagen` text COLLATE utf8_spanish_ci DEFAULT NULL,
  `precio` int(10) NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `id_c` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `articulo`
--

INSERT INTO `articulo` (`id_a`, `nombre`, `imagen`, `precio`, `descripcion`, `id_c`) VALUES
(9, 'Vestido Polkareal', '4ce32505-04fd-4a19-9737-8bd99d5503a7.jpeg', 1500, 'Vestido beige estampado polka. Tiene detalles con cinta razo y mangas frizadas.', 4),
(10, 'Poncho Kitty', 'a557b64b-48b6-497c-bc6a-f98ac83b6592.jpeg', 1500, 'Poncho gatito color blanco y detalles en beige y negro. Tiene capucha ajustable con tiras negras', 2),
(11, 'Buzo Angel/Devil', 'db65a10f-55cb-4744-817e-aea8e3851475.jpeg', 1650, 'Buzo mitad blanco y mitad negro con detalles en razo.', 2),
(12, 'Buzo And Love', '6dd56a6e-737a-4e05-81df-bdaff97c2ba4.jpeg', 1300, 'Buzo blanco y negro con detalles en rojo. Viene en 2 colores.', 2),
(13, 'Panda Hoodie', '7b92e84f-92e9-4f50-bca7-6ba5362cbe42.jpeg', 1800, 'Buzo panda con orejitas y bolsillos frontales.', 2),
(14, 'Buzo Usagi', '7dcd5f8f-69f7-4f2c-bd58-1b536071b678.jpeg', 1500, 'Buzo color rosa pastel con bordes y capucha blanca.', 2),
(15, 'Doggo Hoodie', '6a933fac-e8ba-4126-a259-56e27b3d992b.jpeg', 1350, 'Buzo color blanco/negro, tiene detalles en amarillo y capucha ajustable.', 2),
(16, 'Arnés Aria', '0aca5679-b2ba-4e27-87de-16c7dfd80a8d.jpeg', 900, 'Arnés ajustable. Viene en blanco, negro y rosa pastel.', 6),
(17, 'Shoes Trippink', '3a916218-0f61-490f-bf45-f8256d414efa.jpeg', 2300, 'Zapatilla blanca con detalles en negro y rosa. Tiene tachas en la parte trasera.', 8),
(18, 'Plataformas Basical', '35668aa8-3f68-4019-b30a-f70ea1de51c1.jpeg', 1800, 'Shoes con plataformas color negro.', 8),
(20, 'Short Jean Lasso', '108e3815-3d91-4c67-98d2-c97f10e4fdaf.jpeg', 1100, 'Short de jean tiro alto ajustable, con cierre y detalles con cinta razo en los costados. ', 3),
(21, 'Short Pollera Cuadrille', '1e19644c-64aa-4fc0-beef-ff21ff9cd01f.jpeg', 1350, 'Short pollera con abertura inferior. (No incluye cadenas/cinturones/arneses)', 3),
(22, 'Short Cherry', 'a7f2fa09-4863-48b9-ac5a-5eafd7611e05.jpeg', 850, 'Short de jean clarito con detalles en rojo.', 3),
(23, 'Campera Checkered', '04479d52-034c-4cfd-b121-d487d5e505dc.jpeg', 1800, 'Campera  oversize blanco y negro a cuadritos.', 7),
(24, 'Campera Jean Lasso', '15bfe852-3805-463a-a60b-932ecc378bd1.jpeg', 2700, 'Campera de jean oversized con detalles en cinta razo.', 7),
(25, 'Campera Sailor Lolita', '4910476c-a710-40d4-a082-009f7a7f8926.jpeg', 900, 'Campera corta de tela color gris.', 7),
(26, 'Remera Catgirl', '82d01b2e-b2b9-42dd-a1de-8f6e83b3ab9f.jpeg', 600, 'Remera negra con estampado de anime catgirl.', 1),
(27, 'Remera KoiCat', 'dac00341-cbd5-4fb2-933e-593b05e7330f.jpeg', 700, 'Remera oversize con estampado de kois y cats. Ergo: koikat', 1),
(28, 'Lace set x3', '1e390926-8357-482c-8967-2882a39a5a23.jpeg', 350, 'Set de panties en 3 colores de algodón con encaje.', 5),
(29, 'Soft Pink Set', 'b07535a8-d90d-428d-8579-2dffece92e3e.jpeg', 800, 'Conjunto de ropa intima en gasa semi-transparente color rosa.', 5),
(30, 'Strawberry Wink Set x2', '3b0bb845-ebd6-409f-ba8f-a58df1ad0479.jpeg', 1200, 'Set de conjuntos blanco y rosa con motivo de frutillas.', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_producto` int(11) NOT NULL,
  `transaccion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `cantidad` int(100) NOT NULL,
  `precio_unitario` int(10) NOT NULL,
  `total` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_c` int(11) NOT NULL,
  `categorias` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_c`, `categorias`) VALUES
(1, 'remeras'),
(2, 'buzos'),
(3, 'shorts'),
(4, 'vestidos'),
(5, 'interior'),
(6, 'accesorios'),
(7, 'abrigos'),
(8, 'shoes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `color`
--

CREATE TABLE `color` (
  `id` int(11) NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `foto` text COLLATE utf8_spanish_ci NOT NULL,
  `color` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id_usuario` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `gender` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `usuario` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `permisos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id_usuario`, `name`, `surname`, `gender`, `telefono`, `email`, `usuario`, `password`, `permisos`) VALUES
(1, 'Mayra', 'Bravo', '', '1161901612', 'mayratbravo@gmail.com', 'venettia', 'mayt0709', 1),
(3, 'Gabriel', 'Moyano', 'Hombre transgénero', '1134001636', 'Gabi.moyano@gmail.com', 'GabiMoy', '9276c8f4510a90aa4186', 0),
(4, 'Maria', 'Lopez', 'Mujer transgénero', '1161901636', 'marilopez@gmail.com', 'marilopez', '08a8abe7989d83370e50', 0),
(5, 'Maria', 'Lopez', 'Mujer transgénero', '1134001636', 'marilopez@gmail.com', 'marilopez', 'e932ef96f84c481c712a', 0),
(6, 'Ernesto', 'Primo', 'No binario', '1134001636', 'ernesto.primo@gmail.com', 'Ernestito', '65cced662f658e552bb4', 0),
(7, 'Ernesto', 'Primo', 'Hombre transgénero', '1134001636', 'ernesto.primo@gmail.com', 'ernestito', 'eaa086960ecb7da37cd3', 0),
(8, 'Wendy', 'Smith', 'Mujer', '1161901655', 'wendy.smith@gmail.com', 'Wendy25', '001439978f523cff7e91', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `talles`
--

CREATE TABLE `talles` (
  `id` int(11) NOT NULL,
  `letra` varchar(5) COLLATE utf8_spanish_ci NOT NULL,
  `medida` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_comentario` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `contacto` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulo`
--
ALTER TABLE `articulo`
  ADD PRIMARY KEY (`id_a`);

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_c`);

--
-- Indices de la tabla `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `talles`
--
ALTER TABLE `talles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_comentario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulo`
--
ALTER TABLE `articulo`
  MODIFY `id_a` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_c` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `color`
--
ALTER TABLE `color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `talles`
--
ALTER TABLE `talles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

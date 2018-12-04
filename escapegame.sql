--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.5

-- Started on 2018-12-04 13:20:36

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12355)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2108 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 181 (class 1259 OID 24586)
-- Name: objets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE objets (
    id oid NOT NULL,
    nom text,
    image bytea,
    latitude double precision,
    longitude double precision,
    type_condition integer,
    parametre "char",
    message text,
    indice text,
    image_pnj bytea
);


ALTER TABLE objets OWNER TO postgres;

--
-- TOC entry 182 (class 1259 OID 24589)
-- Name: objets_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE objets_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE objets_id_seq OWNER TO postgres;

--
-- TOC entry 2109 (class 0 OID 0)
-- Dependencies: 182
-- Name: objets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE objets_id_seq OWNED BY objets.id;


--
-- TOC entry 1982 (class 2604 OID 24598)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY objets ALTER COLUMN id SET DEFAULT nextval('objets_id_seq'::regclass);


--
-- TOC entry 2099 (class 0 OID 24586)
-- Dependencies: 181
-- Data for Name: objets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY objets (id, nom, image, latitude, longitude, type_condition, parametre, message, indice, image_pnj) FROM stdin;
0	Premier Message	\\x433a2f55736572732f7079616e7a2f446f63756d656e74732f32412f5765622f50726f6a65742d5765622f696d616765732f7363726f6c6c5f742e706e67	50.946199999999997	1.8594999999999999	1		Vous vous réveillez, entouré de végétations. \r\nVotre mal de crâne vous empêche de réfléchir clairement et vous vous demandez comment vous vous êtes retrouvé là. \r\nCependant, les bruits de la foule et des voitures vous font remarquer que vous êtes en plein milieu de Paris. \r\nVous reprenez vos esprits et sortez de cet endroit qui vous rappelle un parc floral sous les yeux intrigués des personnes autours, et vous tombez sur la Seine. \r\nVous apercevez également une gare pas loin de votre position. \r\nOù êtes-vous donc ?	Vous êtes dans un endroit entouré de végétations en plein milieu de Paris dans un parc floral. Vous voyez la Seine et une grande gare.	\\x
\.


--
-- TOC entry 2110 (class 0 OID 0)
-- Dependencies: 182
-- Name: objets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('objets_id_seq', 1, false);


--
-- TOC entry 1984 (class 2606 OID 32778)
-- Name: id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY objets
    ADD CONSTRAINT id PRIMARY KEY (id);


--
-- TOC entry 2107 (class 0 OID 0)
-- Dependencies: 6
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2018-12-04 13:20:36

--
-- PostgreSQL database dump complete
--


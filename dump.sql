-- MySQL dump 10.13  Distrib 8.1.0, for macos14.0 (arm64)
--
-- Host: localhost    Database: lms
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lms_doctor`
--

DROP TABLE IF EXISTS `lms_doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_doctor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `surname` varchar(255) DEFAULT NULL,
  `givenName` varchar(255) DEFAULT NULL,
  `middleName` varchar(255) DEFAULT NULL,
  `specialization` varchar(255) DEFAULT NULL,
  `prc_no` varchar(255) DEFAULT NULL,
  `philhealth_no` varchar(255) DEFAULT NULL,
  `tin_no` varchar(255) DEFAULT NULL,
  `room_no` int DEFAULT NULL,
  `schedule` varchar(255) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_doctor`
--

LOCK TABLES `lms_doctor` WRITE;
/*!40000 ALTER TABLE `lms_doctor` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_field`
--

DROP TABLE IF EXISTS `lms_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_field` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `maleRefRange` varchar(255) DEFAULT NULL,
  `femaleRefRange` varchar(255) DEFAULT NULL,
  `refRange` varchar(255) DEFAULT NULL,
  `desirableRefRange` varchar(255) DEFAULT NULL,
  `borderlineRefRange` varchar(255) DEFAULT NULL,
  `highRiskRefRange` varchar(255) DEFAULT NULL,
  `other` varchar(45) DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_field`
--

LOCK TABLES `lms_field` WRITE;
/*!40000 ALTER TABLE `lms_field` DISABLE KEYS */;
INSERT INTO `lms_field` VALUES (1,'wbc','x 10^9/L','4-10','4-11','4-12','','','','/HPF',0,'2024-01-01 05:42:22',NULL),(2,'rbc','x 10^12/L','4.00-5.50','3.50-5.00','3.50-5.20','','','','/HPF',0,'2024-01-01 05:42:22',NULL),(3,'hgb','g/L','120-160','110-150','120-160','','','',NULL,0,'2024-01-01 05:42:22',NULL),(4,'hct','%','40-54','37-47','35-49','','','',NULL,0,'2024-01-01 05:42:22',NULL),(5,'plt','x 10^9/L','','','100-300','','','',NULL,0,'2024-01-01 05:42:22',NULL),(6,'neu','%','','','50-70','','','',NULL,0,'2024-01-01 05:42:22',NULL),(7,'lym','%','','','20-40','','','',NULL,0,'2024-01-01 05:42:22',NULL),(8,'mon','%','','','10-15','','','',NULL,0,'2024-01-01 05:42:22',NULL),(9,'eos','%','','','1-5','','','',NULL,0,'2024-01-01 05:42:22',NULL),(10,'bas','%','','','0-1','','','',NULL,0,'2024-01-01 05:42:22',NULL),(11,'total','%','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(12,'MCV','fL','','','80-100','','','',NULL,0,'2024-01-01 05:42:22',NULL),(13,'MCH','pg','','','27-32','','','',NULL,0,'2024-01-01 05:42:22',NULL),(14,'MCHC','g/L','','','320-360','','','',NULL,0,'2024-01-01 05:42:22',NULL),(15,'Color','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(16,'Transparency','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(17,'Leukocyte','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(18,'Nitrite','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(19,'Urobilinogen','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(20,'Protein','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(21,'pH','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(22,'Blood','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(23,'Sp. Gravity','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(24,'Ketone','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(25,'Bilirubin','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(26,'Glucose','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(27,'Bacteria','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(28,'Epithelial Cells','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(29,'Amorphous Urate','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(30,'Mucus threads','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(31,'Consistency','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(32,'Fat Globules','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(33,'Ascaris L.	','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(34,'Trichuris trichuria	','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(35,'Hookworm	','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(36,'Schistosoma	','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(37,'Entamoeba histolytica: Troph.	','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(38,'Entamoeba histolytica: Cyst	','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(39,'entamoeba Coli','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(40,'Cholesterol	','mg/dL','','','','< 200','200 - 239','> 240',NULL,0,'2024-01-01 05:42:22',NULL),(41,'Triglycerides	','mg/dL','40 - 160','35 - 145','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(42,'HDL Cholesterol	','mg/dL','35-50','45-60','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(43,'LDL Cholesterol	','mg/dL','','','','< 114','115 - 150','> 151',NULL,0,'2024-01-01 05:42:22',NULL),(44,'Fasting Blood Sugar (Glucose)	\r\n	','mg/dL','','','70-110','','','',NULL,0,'2024-01-01 05:42:22',NULL),(45,'Creatinine	','mg/dL','','','0.5-1.3	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(46,'BUN (PRE HEMODIALISYS)	','mg/dL','','','15-45	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(47,'BUN (POST HEMODIALISYS)	','mg/dL','','(NULL)','15-45	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(48,'INORGANIC PHOSPHORUS','mg/dL','','','2.7-4.5	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(49,'ALBUMIN 	','g/L','','','35-55	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(50,'POTASSIUM (K+)	','mmol/L','','','3.5 - 5.0	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(51,'TOTAL CALCIUM','mmol/L','','','2.30-2.70	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(52,'SGPT (ALT)','U/L','','','0 - 41	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(53,'SODIUM (Na+)','mmol/L','','','135.0 - 145.0	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(54,'CHLORIDE (Cl)','mmol/L','','','97.0-107.0	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(55,'IONIZED CALCIUM (iCa)','mmol/L','','','1.15-1.35	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(56,'HBsAg Screening','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(57,'HIV Screening (Quali)','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(58,'Syphilis Screening','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(59,'SGOT (AST)	','U/L','','','0-41	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(60,'Blood Uric Acid (BUA)','mg/dL','','','2.3-8.2	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(61,'HCV Screening','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(62,'HAV Screening','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(63,'Pregnancy Test (Serum)','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(64,'RPR Titer With Dilution','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(65,'Fecal Occult Blood Test (FOBT)','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(66,'CARDIAC TROPONIN I (cTn I)	','ng/mL','','','< 0.30 ng/mL','','','',NULL,0,'2024-01-01 05:42:22',NULL),(67,'Prostate-Specific Antigen (PSA)','ng/mL','','','< 4 ng/mL','','','',NULL,0,'2024-01-01 05:42:22',NULL),(68,'Hemoglobin A1C (HbA1C)','%','','','<6.5%','','','',NULL,0,'2024-01-01 05:42:22',NULL),(69,'Blood Type','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(70,'Rh','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(71,'NS1','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(72,'IgM','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(73,'IgG','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(74,'FASTING','mg/dL','','','70-100	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(75,'1st HOUR	','mg/dL','','','<180	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(76,'2nd HOUR	','mg/dL','','','<155	','','','',NULL,0,'2024-01-01 05:42:22',NULL),(77,'BLEEDING TIME','','','','2-7 mins','','','',NULL,0,'2024-01-01 05:42:22',NULL),(78,'CLOTTING TIME','','','','5-15 mins','','','',NULL,0,'2024-01-01 05:42:22',NULL),(79,'remarks','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(80,'others','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(94,'RPR','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(95,'XRAY','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL),(96,'result','','','','','','','',NULL,0,'2024-01-01 05:42:22',NULL);
/*!40000 ALTER TABLE `lms_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_hmo`
--

DROP TABLE IF EXISTS `lms_hmo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_hmo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `contact_person` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `contact_number` varchar(45) DEFAULT NULL,
  `link_to_rates` varchar(255) DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_hmo`
--

LOCK TABLES `lms_hmo` WRITE;
/*!40000 ALTER TABLE `lms_hmo` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_hmo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_labTest`
--

DROP TABLE IF EXISTS `lms_labTest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_labTest` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` longtext,
  `type` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_labTest`
--

LOCK TABLES `lms_labTest` WRITE;
/*!40000 ALTER TABLE `lms_labTest` DISABLE KEYS */;
INSERT INTO `lms_labTest` VALUES (1,'CBC','Blood Count','HEMATOLOGY RESULT',200,0,'2023-12-31 06:35:40',NULL),(2,'Urinalysis','Urine Testing','URINALYSIS RESULT',75,0,'2023-12-31 11:17:04',NULL),(3,'Stool Exam','Stool Exam','STOOL EXAM RESULT',75,0,'2023-12-31 11:20:41',NULL),(4,'Blood Typing','Blood Typing','IMMUNO-SEROLOGY RESULT',150,0,'2023-12-31 11:22:37',NULL),(5,'Creatinine','Creatinine','CLINICAL CHEMISTRY RESULT',200,0,'2023-12-31 15:19:43',NULL),(6,'FBS','Fasting Blood Sugar','CLINICAL CHEMISTRY RESULT',175,0,'2024-01-10 09:55:06',NULL),(7,'BUN','Blood Urea Nitrogen','CLINICAL CHEMISTRY RESULT',250,0,'2024-01-10 09:58:25',NULL),(8,'BUA','Blood Uric Acid','CLINICAL CHEMISTRY RESULT',250,0,'2024-01-10 10:00:17',NULL),(9,'Lipid Profile','Lipid Profile','CLINICAL CHEMISTRY RESULT',700,0,'2024-01-10 10:01:42',NULL),(10,'HBsAg Screening','HBsAg Screening','IMMUNO-SEROLOGY RESULT',250,0,'2024-01-11 08:16:18',NULL),(11,'Baseline','Baseline','CLINICAL CHEMISTRY RESULT',250,0,'2024-01-11 08:17:58',NULL),(12,'HBsAg Screening','HBsAg Screening','IMMUNO-SEROLOGY RESULT',250,0,'2024-01-14 12:02:09',NULL);
/*!40000 ALTER TABLE `lms_labTest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_labTest_field`
--

DROP TABLE IF EXISTS `lms_labTest_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_labTest_field` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lms_labTest_id` int NOT NULL,
  `lms_field_id` int NOT NULL,
  `orderNum` int DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_labTest_field`
--

LOCK TABLES `lms_labTest_field` WRITE;
/*!40000 ALTER TABLE `lms_labTest_field` DISABLE KEYS */;
INSERT INTO `lms_labTest_field` VALUES (1,1,1,1,0,'2023-12-31 06:35:40',NULL),(2,1,6,6,0,'2023-12-31 06:35:40',NULL),(3,1,8,8,0,'2023-12-31 06:35:40',NULL),(4,1,9,9,0,'2023-12-31 06:35:40',NULL),(5,1,10,10,0,'2023-12-31 06:35:40',NULL),(6,1,11,11,0,'2023-12-31 06:35:40',NULL),(7,1,4,4,0,'2023-12-31 06:35:40',NULL),(8,1,7,7,0,'2023-12-31 06:35:40',NULL),(9,1,12,12,0,'2023-12-31 06:35:40',NULL),(10,1,5,5,0,'2023-12-31 06:35:40',NULL),(11,1,3,3,0,'2023-12-31 06:35:40',NULL),(12,1,2,2,0,'2023-12-31 06:35:40',NULL),(13,1,13,13,0,'2023-12-31 06:35:40',NULL),(14,1,14,14,0,'2023-12-31 06:35:40',NULL),(15,2,15,1,0,'2023-12-31 11:17:04',NULL),(16,2,28,16,0,'2023-12-31 11:17:04',NULL),(17,2,16,2,0,'2023-12-31 11:17:04',NULL),(18,2,21,7,0,'2023-12-31 11:17:04',NULL),(19,2,30,18,0,'2023-12-31 11:17:04',NULL),(20,2,29,17,0,'2023-12-31 11:17:04',NULL),(21,2,23,9,0,'2023-12-31 11:17:04',NULL),(22,2,17,3,0,'2023-12-31 11:17:04',NULL),(23,2,80,19,0,'2023-12-31 11:17:04',NULL),(24,2,22,8,0,'2023-12-31 11:17:04',NULL),(25,2,18,4,0,'2023-12-31 11:17:04',NULL),(26,2,25,11,0,'2023-12-31 11:17:04',NULL),(27,2,26,12,0,'2023-12-31 11:17:04',NULL),(28,2,1,13,0,'2023-12-31 11:17:04',NULL),(29,2,24,10,0,'2023-12-31 11:17:04',NULL),(30,2,19,5,0,'2023-12-31 11:17:04',NULL),(31,2,2,14,0,'2023-12-31 11:17:04',NULL),(32,2,27,15,0,'2023-12-31 11:17:04',NULL),(33,2,20,6,0,'2023-12-31 11:17:04',NULL),(34,3,37,12,0,'2023-12-31 11:20:41',NULL),(35,3,15,1,0,'2023-12-31 11:20:41',NULL),(36,3,36,11,0,'2023-12-31 11:20:41',NULL),(37,3,38,13,0,'2023-12-31 11:20:41',NULL),(38,3,39,14,0,'2023-12-31 11:20:41',NULL),(39,3,31,2,0,'2023-12-31 11:20:41',NULL),(40,3,1,3,0,'2023-12-31 11:20:41',NULL),(41,3,2,4,0,'2023-12-31 11:20:41',NULL),(42,3,32,5,0,'2023-12-31 11:20:41',NULL),(43,3,27,6,0,'2023-12-31 11:20:41',NULL),(44,3,33,8,0,'2023-12-31 11:20:41',NULL),(45,3,34,9,0,'2023-12-31 11:20:41',NULL),(46,3,35,10,0,'2023-12-31 11:20:41',NULL),(47,3,80,7,0,'2023-12-31 11:20:41',NULL),(48,4,69,1,0,'2023-12-31 11:22:37',NULL),(49,4,70,2,0,'2023-12-31 11:22:37',NULL),(50,5,51,3,0,'2023-12-31 15:19:43',NULL),(51,5,45,1,0,'2023-12-31 15:19:43',NULL),(52,5,50,2,0,'2023-12-31 15:19:43',NULL),(53,6,40,1,0,'2024-01-10 09:55:07',NULL),(54,6,41,2,0,'2024-01-10 09:55:07',NULL),(55,6,43,4,0,'2024-01-10 09:55:07',NULL),(56,6,42,3,0,'2024-01-10 09:55:07',NULL),(57,7,45,1,0,'2024-01-10 09:58:26',NULL),(58,7,47,2,0,'2024-01-10 09:58:26',NULL),(59,8,60,1,0,'2024-01-10 10:00:18',NULL),(60,9,40,1,0,'2024-01-10 10:01:43',NULL),(61,9,41,2,0,'2024-01-10 10:01:43',NULL),(62,9,42,3,0,'2024-01-10 10:01:43',NULL),(63,9,43,4,0,'2024-01-10 10:01:43',NULL),(64,10,96,1,0,'2024-01-11 08:16:19',NULL),(65,11,52,2,0,'2024-01-11 08:17:59',NULL),(66,11,59,3,0,'2024-01-11 08:17:59',NULL),(67,11,45,1,0,'2024-01-11 08:17:59',NULL),(68,12,96,1,0,'2024-01-14 12:02:10',NULL);
/*!40000 ALTER TABLE `lms_labTest_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_labTest_package`
--

DROP TABLE IF EXISTS `lms_labTest_package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_labTest_package` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lms_labTest_package_id` int DEFAULT NULL,
  `lms_labTest_id` int DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_labTest_package`
--

LOCK TABLES `lms_labTest_package` WRITE;
/*!40000 ALTER TABLE `lms_labTest_package` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_labTest_package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_package`
--

DROP TABLE IF EXISTS `lms_package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_package` (
  `id` int NOT NULL AUTO_INCREMENT,
  `packageName` varchar(255) DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_package`
--

LOCK TABLES `lms_package` WRITE;
/*!40000 ALTER TABLE `lms_package` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_patient`
--

DROP TABLE IF EXISTS `lms_patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_patient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `age` int DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `dateOfVisit` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `company` varchar(45) DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_patient`
--

LOCK TABLES `lms_patient` WRITE;
/*!40000 ALTER TABLE `lms_patient` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_patient_labTest`
--

DROP TABLE IF EXISTS `lms_patient_labTest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_patient_labTest` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lms_patient_id` int NOT NULL,
  `lms_labTest_id` int NOT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_patient_labTest`
--

LOCK TABLES `lms_patient_labTest` WRITE;
/*!40000 ALTER TABLE `lms_patient_labTest` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_patient_labTest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_patient_labTest_field`
--

DROP TABLE IF EXISTS `lms_patient_labTest_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_patient_labTest_field` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lms_patient_labTest_id` int NOT NULL,
  `lms_labTest_field_id` int NOT NULL,
  `result` varchar(255) DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_patient_labTest_field`
--

LOCK TABLES `lms_patient_labTest_field` WRITE;
/*!40000 ALTER TABLE `lms_patient_labTest_field` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_patient_labTest_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_patient_labTest_field_result`
--

DROP TABLE IF EXISTS `lms_patient_labTest_field_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_patient_labTest_field_result` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lms_patient_labTest_field_id` int NOT NULL,
  `result` varchar(255) NOT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_patient_labTest_field_result`
--

LOCK TABLES `lms_patient_labTest_field_result` WRITE;
/*!40000 ALTER TABLE `lms_patient_labTest_field_result` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_patient_labTest_field_result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_patient_xrayTest`
--

DROP TABLE IF EXISTS `lms_patient_xrayTest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_patient_xrayTest` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lms_patient_id` int DEFAULT NULL,
  `lms_xrayTest_id` int DEFAULT NULL,
  `result` varchar(255) DEFAULT 'NORMAL CHEST',
  `description` longtext,
  `idNum` varchar(45) DEFAULT NULL,
  `testDate` date DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_patient_xrayTest`
--

LOCK TABLES `lms_patient_xrayTest` WRITE;
/*!40000 ALTER TABLE `lms_patient_xrayTest` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_patient_xrayTest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_xrayTest`
--

DROP TABLE IF EXISTS `lms_xrayTest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_xrayTest` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT 'NORMAL',
  `description` longtext,
  `price` int DEFAULT NULL,
  `type` varchar(255) DEFAULT 'IMAGING',
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_xrayTest`
--

LOCK TABLES `lms_xrayTest` WRITE;
/*!40000 ALTER TABLE `lms_xrayTest` DISABLE KEYS */;
INSERT INTO `lms_xrayTest` VALUES (1,'ECG','ECG',400,'IMAGING',0,'2024-01-13 07:25:43',NULL),(2,'CHEST PA (PEDIA/ADULT)','CHEST PA (PEDIA/ADULT)',200,'IMAGING',0,'2024-01-13 07:25:43',NULL),(3,'CHEST PAL (PEDIA 0-8 y.o)','CHEST PAL (PEDIA 0-8 y.o)',400,'IMAGING',0,'2024-01-13 07:25:43',NULL);
/*!40000 ALTER TABLE `lms_xrayTest` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-14 20:34:44

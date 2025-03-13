USE `lingo_bot`;

DROP TABLE IF EXISTS `languages`;

DROP TABLE IF EXISTS `settings`;

DROP TABLE IF EXISTS `phrases`;

CREATE TABLE `languages` (`id` SERIAL, `name` VARCHAR(255) NOT NULL);
CREATE TABLE `settings` (`id` SERIAL, `name` VARCHAR(255) NOT NULL);

CREATE TABLE `phrases` (
  `id` SERIAL,
  `english_text` VARCHAR(255) NOT NULL,
  `translated_text` VARCHAR(255) NOT NULL,
  `language_id` BIGINT UNSIGNED NOT NULL,
  `setting_id` BIGINT UNSIGNED NOT NULL,
  `speaker` INT NOT NULL ,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`) 
  	ON UPDATE CASCADE 
  	ON DELETE CASCADE,
  FOREIGN KEY (`setting_id`) REFERENCES `settings` (`id`) 
  	ON UPDATE CASCADE 
  	ON DELETE CASCADE
);


-- Insert into Language table
INSERT INTO languages (id, name) VALUES
(1, 'German'),
(2, 'Spanish'),
(3, 'French');

-- Insert into Setting table
INSERT INTO settings (id, name) VALUES
(1, 'Cafe'),
(2, 'Restaurant'),
(3, 'Airport');

-- Insert into Phrase table (Mixing up languages and settings)
INSERT INTO phrases (id, english_text, translated_text, language_id, setting_id, speaker) VALUES
(1, 'Hello, can I have a coffee?', 'Hola, ¿puedo tomar un café?', 2, 1, 1),
(2, 'Where is the restroom?', 'Où sont les toilettes?', 3, 2, 1),
(3, 'I need a ticket to Berlin.', 'Ich brauche ein Ticket nach Berlin.', 1, 3, 2),
(4, 'How much does this cost?', '¿Cuánto cuesta esto?', 2, 1, 1),
(5, 'I have a reservation.', 'J’ai une réservation.', 3, 2, 2),
(6, 'Can you help me?', 'Kannst du mir helfen?', 1, 3, 1),
(7, 'Do you speak English?', '¿Hablas inglés?', 2, 1, 2),
(8, 'I would like to order a meal.', 'Je voudrais commander un repas.', 3, 2, 1),
(9, 'Can I exchange money here?', 'Kann ich hier Geld wechseln?', 1, 3, 2),
(10, 'What time does the café open?', '¿A qué hora abre la cafetería?', 2, 1, 1),
(11, 'Can I have the menu?', 'Puis-je voir le menu?', 3, 2, 2),
(12, 'Where is my gate?', 'Wo ist mein Gate?', 1, 3, 1),
(13, 'Do you have fresh pastries?', '¿Tienen pasteles frescos?', 2, 1, 2),
(14, 'I lost my passport.', 'J’ai perdu mon passeport.', 3, 3, 1),
(15, 'I would like a table for two.', 'Ich hätte gerne einen Tisch für zwei.', 1, 2, 2),
(16, 'Can I pay with a credit card?', '¿Puedo pagar con tarjeta de crédito?', 2, 1, 1),
(17, 'What is the WiFi password?', 'Quel est le mot de passe WiFi?', 3, 2, 2),
(18, 'I need a taxi to the airport.', 'Ich brauche ein Taxi zum Flughafen.', 1, 3, 1),
(19, 'Please bring me some water.', 'Tráigame agua, por favor.', 2, 2, 2),
(20, 'Where is the baggage claim?', 'Où est la récupération des bagages?', 3, 3, 1),
(21, 'Do you have vegetarian options?', 'Haben Sie vegetarische Optionen?', 1, 2, 2),
(22, 'Can I sit by the window?', '¿Puedo sentarme junto a la ventana?', 2, 1, 1),
(23, 'Excuse me, I need assistance.', 'Excusez-moi, j’ai besoin d’aide.', 3, 3, 2),
(24, 'Is this seat taken?', 'Ist dieser Platz besetzt?', 1, 1, 1),
(25, 'I would like a coffee with milk.', 'Quisiera un café con leche.', 2, 1, 2),
(26, 'How long is the flight delayed?', 'Combien de temps le vol est-il retardé?', 3, 3, 1),
(27, 'Can I get an extra napkin?', 'Kann ich eine zusätzliche Serviette bekommen?', 1, 2, 2),
(28, 'Do you have decaf coffee?', '¿Tienen café descafeinado?', 2, 1, 1),
(29, 'What are today’s specials?', 'Quels sont les plats du jour?', 3, 2, 2),
(30, 'Where can I charge my phone?', 'Wo kann ich mein Handy aufladen?', 1, 3, 1);

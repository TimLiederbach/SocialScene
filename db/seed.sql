\c socialScene_db

--Seeding users table
INSERT INTO users (name, email, phone, password)
VALUES ('Stefan Merkel', 'slm59@gmail.com', '918-230-4859', '123');
INSERT INTO users (name, email, phone, password)
VALUES ('Nivaan Linhares', 'ndl29@gmail.com', '918-456-1398', '123');
INSERT INTO users (name, email, phone, password)
VALUES ('Evan Johnson', 'enj@gmail.com', '918-342-1740', '123');
INSERT INTO users (name, email, phone, password)
VALUES ('Allison Roberts', 'aor69@gmail.com', '918-390-1289', '123');

--Seeding events table
INSERT INTO events (host_id, calendar_date, date_time, location, description)
VALUES ('1', '4 July 2018', '9:00pm', 'W-burg Apartment in Brooklyn', 'Im having everyone over for drinks and food. Im getting the grill started at 900pm, fire works start at midnight');
INSERT INTO events (host_id, calendar_date, date_time, location, description)
VALUES ('3', '25 May 2018', '12:00pm', 'New Orleans', 'Hosting a bachelor party in New Orleans during memorial day weekend');
INSERT INTO events (host_id, calendar_date, date_time, location, description)
VALUES ('2', '28 April 2018', '7:00pm', 'UES at Ines Cafe', 'Im having some friends over to celebrate a record sales month at my new cafe Ines. Please roll through, we will have several bottles of wine and a couple cases of beer to celebrate.');

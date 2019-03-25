export default function poshs() {
  let names;
  let rnd;
  let rnd3;
  let rnd;
  let rnd3;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abbington', 'Adam', 'Alastair', 'Albert', 'Alden', 'Alexander', 'Alfie', 'Algerone', 'Alistair', 'Andreas', 'Andres', 'Andrew', 'Angus', 'Anthony', 'Antoine', 'Antony', 'Archie', 'Arlington', 'Arthur', 'Ashby', 'Asher', 'Ashfield', 'Ashley', 'August', 'Augustus', 'Austen', 'Barnabus', 'Barnaby', 'Bartholomew', 'Bartolmew', 'Benedict', 'Benjamin', 'Bishop', 'Blaine', 'Bradley', 'Brock', 'Brody', 'Bruno', 'Callum', 'Carl', 'Carter', 'Caspian', 'Cecil', 'Chandler', 'Charles', 'Charlie', 'Chester', 'Christian', 'Christopher', 'Clarence', 'Clark', 'Claus', 'Clayton', 'Colin', 'Cornelius', 'Cosmo', 'Crawford', 'Crawforde', 'Curtis', 'Daniel', 'Darby', 'David', 'Davis', 'Dexter', 'Dixon', 'Dorian', 'Earl', 'Edgar', 'Edmund', 'Edward', 'Elijah', 'Elliot', 'Elliott', 'Ellis', 'Emerson', 'Ernest', 'Felix', 'Fergus', 'Fox', 'Frances', 'Francis', 'Franklin', 'Freddie', 'Frederick', 'Gabriel', 'Geoffrey', 'George', 'Gerard', 'Gideon', 'Giles', 'Graham', 'Gregory', 'Hamilton', 'Harley', 'Harold', 'Harris', 'Harrison', 'Harry', 'Heath', 'Hector', 'Henry', 'Horace', 'Horatio', 'Howard', 'Hugh', 'Hugo', 'Humphrey', 'Hunter', 'Ian', 'Isaac', 'Isadore', 'Issac', 'Jack', 'Jackson', 'Jacob', 'James', 'Jameson', 'Jasper', 'Jeremy', 'Joel', 'Johnathon', 'Jonah', 'Jonathan', 'Joseph', 'Jude', 'Julius', 'Justin', 'Kenneth', 'Kent', 'Landon', 'Laurence', 'Lawrence', 'Lawson', 'Leander', 'Leighton', 'Leo', 'Leonardo', 'Levi', 'Lewis', 'Liam', 'Logan', 'Lorcan', 'Luca', 'Lucas', 'Lucius', 'Lysander', 'Mansfeild', 'Marcus', 'Marshall', 'Matthias', 'Maximilian', 'Maximillian', 'Maximus', 'Maxwell', 'Michael', 'Miles', 'Montgomery', 'Nathaniel', 'Nicholas', 'Nicolas', 'Noah', 'Oliver', 'Orson', 'Oscar', 'Otto', 'Parker', 'Percival', 'Percy', 'Peregrine', 'Philip', 'Phillip', 'Pierce', 'Pierre', 'Piers', 'Porter', 'Preston', 'Quentin', 'Quincy', 'Quinn', 'Quinten', 'Rafferty', 'Ralph', 'Reginald', 'Remington', 'Richard', 'Robert', 'Roman', 'Ronald', 'Roscoe', 'Royce', 'Rufus', 'Rupert', 'Samuel', 'Sanders', 'Sebastian', 'Shamus', 'Silas', 'Spence', 'Spencer', 'Stephen', 'Sterling', 'Tarquin', 'Ted', 'Terence', 'Theodore', 'Thomas', 'Timothy', 'Tobias', 'Tristan', 'Tybalt', 'Valentine', 'Victor', 'Vincent', 'Wallace', 'Walter', 'Watson', 'Wentworth', 'William', 'Winston', 'Xavier', 'Zacharias', 'Zachary'];
  const nm2 = ['Priscilla', 'Halynn', 'Adelia', 'Kathlyn', 'Ethalind', 'Marianne', 'Dianna', 'Addison', 'Adelaide', 'Adele', 'Adeline', 'Alessandra', 'Alexandra', 'Alexandria', 'Alice', 'Amelda', 'Amelia', 'Amelie', 'Anastasia', 'Angelina', 'Anna', 'Annabella', 'Annabelle', 'Anne', 'Anneliese', 'Annette', 'Antoinette', 'Arabella', 'Arabelle', 'Araminta', 'Arrabella', 'Audrey', 'Beatrice', 'Belinda', 'Bernice', 'Bianca', 'Blair', 'Blaire', 'Blanche', 'Bree', 'Bridgette', 'Brittany', 'Calliope', 'Camilla', 'Camille', 'Carolina', 'Caroline', 'Cassandra', 'Catherine', 'Cathleen', 'Ceanna', 'Cecelia', 'Cecile', 'Cecilia', 'Chanel', 'Chantal', 'Chantelle', 'Charlene', 'Charlotte', 'Christiana', 'Claire', 'Clara', 'Clarice', 'Clarissa', 'Claudette', 'Claudia', 'Clementine', 'Colleen', 'Constance', 'Cordelia', 'Cosmina', 'Courtney', 'Cynthia', 'Daisy', 'Dana', 'Daniella', 'Danielle', 'Daphne', 'Devina', 'Diana', 'Diane', 'Edith', 'Edwina', 'Eglantine', 'Elaine', 'Eleanor', 'Eleanora', 'Eleanore', 'Eliza', 'Elizabeth', 'Ellis', 'Eloise', 'Elsie', 'Emeline', 'Emma', 'Eugenie', 'Evangeline', 'Evelyn', 'Evelynne', 'Evie', 'Felicity', 'Fiona', 'Fleur', 'Florence', 'Frances', 'Francesca', 'Francine', 'Francis', 'Freya', 'Gabriella', 'Gabrielle', 'Genevieve', 'Genivive', 'Georgette', 'Georgia', 'Georgiana', 'Georgina', 'Geraldine', 'Gianna', 'Gloria', 'Grace', 'Gwendoline', 'Gwendolyn', 'Haraya', 'Harper', 'Harriet', 'Heather', 'Helena', 'Helene', 'Henrieta', 'Henrietta', 'Hermione', 'Imogen', 'Ingrid', 'Isabella', 'Isadora', 'Isla', 'Isobel', 'Ivy', 'Jacqueline', 'Jane', 'Jeanette', 'Jemima', 'Jessalyn', 'Johanna', 'Josephina', 'Josephine', 'Juliet', 'Justine', 'Kate', 'Katherine', 'Kathrynne', 'Kylie', 'Laurel', 'Lauren', 'Layla', 'Leah', 'Lila', 'Lillian', 'Lilliana', 'Lily', 'Lola', 'Lorelai', 'Lorelei', 'Lorena', 'Loretta', 'Louisa', 'Luciana', 'Lucienne', 'Lucille', 'Lucretia', 'Lucy', 'Lydia', 'Mackayla', 'Madeline', 'Maisie', 'Marcella', 'Margaret', 'Margaretta', 'Martha', 'Mary', 'Matilda', 'Maude', 'Meredith', 'Mirabelle', 'Miranda', 'Miriam', 'Muriel', 'Natalia', 'Nicolette', 'Nora', 'Octavia', 'Olivette', 'Olympia', 'Ophelia', 'Patience', 'Paulette', 'Penelope', 'Persephone', 'Phillipa', 'Phoebe', 'Poppy', 'Portia', 'Priscilla', 'Prudence', 'Rebeckah', 'Rochelle', 'Rosabella', 'Rosalie', 'Rosalind', 'Rose', 'Rosemary', 'Rowena', 'Ruby', 'Ruth', 'Sabrina', 'Samantha', 'Sara', 'Saskia', 'Scarlett', 'Selena', 'Serafina', 'Seraphina', 'Serena', 'Simone', 'Sophia', 'Sophie', 'Stella', 'Susannah', 'Sylvia', 'Tabitha', 'Theodora', 'Tiffany', 'Vanessa', 'Verity', 'Veronica', 'Victoria', 'Viola', 'Violet', 'Vivian', 'Vivien', 'Vivienne', 'Wilmaette', 'Yasmina', 'Zara'];
  const nm3 = ['Anworth', 'Brimsey', 'Charmant', 'Tannenbay', 'Fairisles', 'Stoneshire', 'Marfont', 'Abel', 'Addison', 'Alden', 'Allencourt', 'Alnwick', 'Altman', 'Ambrose', 'Angelo', 'Archer', 'Ashbridge', 'Ashburnum', 'Ashdown', 'Ashleigh', 'Ashton', 'Asquith', 'Astor', 'Atkins', 'Atwood', 'Avington', 'Bailey', 'Bainbridge', 'Barnes', 'Barrington', 'Baxter', 'Beaumont', 'Beckett', 'Belleville', 'Belmont', 'Bennet', 'Benson', 'Bentley', 'Bexley', 'Blackburn', 'Blackwood', 'Blakesley', 'Blythe', 'Bradford', 'Branigan', 'Breckenridge', 'Brent', 'Brentwood', 'Brewer', 'Brighton', 'Bristol', 'Brock', 'Bronson', 'Bryton', 'Buckingham', 'Burton', 'Calder', 'Calliwell', 'Camden', 'Campbell', 'Carlton', 'Carlyle', 'Chamberlain', 'Chins-Ranton', 'Christenson', 'Chudwell', 'Clarkin', 'Claymoore', 'Coleman', 'Colfield', 'Conwyn', 'Cook', 'Coombes', 'Covington', 'Crawford', 'Cummings', 'Cunningham', 'Curnow', 'Da Ville', 'Damon-Cowles', 'Dandridge', 'Danvers', 'Darcey', 'Darlington-Whit', 'Darrington', 'Davenport', 'De Clare', 'Decker', 'Delafontaine', 'Dennison', 'Dewitt', 'Digby', 'Dixon', 'Dolloway', 'Down', 'Durchville', 'Edison', 'Erickson', 'Evans', 'Exeter', 'Farbridge', 'Farewell', 'Farraday', 'Farrell', 'Farrington', 'Federline', 'Findlay', 'Finn', 'Fitzcharles', 'Fitzgerald', 'Fitzgerald ', 'Forbes', 'Forge', 'Forrest', 'Frasier', 'Frinton-Smith', 'Gainsborough', 'Galashiels', 'Garbert-Smithe', 'Garrington', 'Gedge', 'Gilkes', 'Godfrey', 'Greaves', 'Griffin', 'Griggs', 'Hagan', 'Hamilton', 'Hampton', 'Hanover', 'Hargreave', 'Harridan', 'Harrington', 'Harrods', 'Harvey-Lottway', 'Herington', 'Hillingham', 'Hillington', 'Holloway', 'Holt', 'Humphries', 'Hunton-Blather', 'Izzard-Crew', 'Jeffries', 'Jenkings', 'Jenson', 'Kahler', 'Kaylock', 'Keaton', 'Kendall', 'Kensington', 'Keswick', 'Kingsley', 'Kirkland', 'La-Minnings', 'Lamonia', 'Landon', 'Langston', 'Larson', 'Lawson', 'Leighton', 'Lennon', 'Lennox', 'Lincoln', 'Lockhart', 'Lockridge', 'Lockwood', 'Lovell', 'Lovett', 'Lupton', 'Lynch', 'Lyndon', 'Lytton', 'Maguire', 'Malone', 'Markinswell', 'Marple', 'Mast', 'Mavis', 'May-Porter', 'Mayer', 'McAllister', 'McKormick', 'McLeod', 'Mediean', 'Mercer', 'Merriweather', 'Meyer', 'Meyers', 'Milbourne', 'Millington', 'Montcroix', 'Montgomery', 'Morgan', 'Mortcombe', 'Mumford', 'Musgrave', 'Nelson ', 'Newfield', 'Newmont', 'O\' Keefe', 'Omond', 'Pattinson', 'Paxton', 'Peirce', 'Pennington', 'Pierpont', 'Pierson', 'Ponsonby', 'Quentin', 'Rafferty', 'Ravenswood', 'Redmond', 'Reed', 'Remington', 'Renaud', 'Richfield', 'Richmond', 'Riverty', 'Robshaw', 'Rogers', 'Ross', 'Rothchester', 'Rothschild', 'Rowan', 'Rowe', 'Rowley', 'Royale', 'Rutherford', 'Ryder', 'Sambridge', 'Saville', 'Savoy', 'Seaton', 'Selfridges', 'Shawcross', 'Shellford', 'Sheridan', 'Sherington', 'Sherriden', 'Sinnett', 'Slater', 'Smithe', 'Smythe', 'Spencer', 'St.Clair', 'St.Claire', 'Stenham', 'Stone', 'Strain', 'Stuart-Lane', 'Sutcliffe', 'Tate', 'Tennesley', 'Thompkins', 'Topwells', 'Travers', 'Tucker', 'Tudor', 'Twitter', 'Upperton', 'Valentina-Smith', 'Vanderbilt', 'Wakefield', 'Watson', 'Wellington', 'Wells', 'Weston', 'Westwood', 'Whitehall', 'Whitely', 'Whittaker', 'Wickes', 'Wilde', 'Wildingham', 'Wilson', 'Winchester', 'Windsor', 'Winfield', 'Winstanley', 'Winston', 'Winthrope', 'Wraith', 'Younger']; {
    rnd3 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd3]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd3]}`;
    }
    return names;
  }
}

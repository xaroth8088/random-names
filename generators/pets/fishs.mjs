export default function fishs() {
  let names;
  let rnd;
  let rnd;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ace', 'Achilles', 'Agate', 'Aladdin', 'Andro', 'Andy', 'Apollo', 'Archibald', 'Archie', 'Art', 'Artemis', 'Artemus', 'Arthur', 'Artie', 'Astor', 'Azmus', 'Azzurro', 'Badge', 'Barnabey', 'Barney', 'Bart', 'Bartholomew', 'Basil', 'Beau', 'Beaufinkle', 'Beaumont', 'Belasy', 'Benji', 'Bennie', 'Bernie', 'Berto', 'Bester', 'Bevis', 'Bigglesworth', 'Biru', 'Blaze', 'Blu', 'Blue', 'Bo', 'Bone', 'Bones', 'Bosco', 'Boy', 'Boyd', 'Bozo', 'Brad', 'Bradley', 'Bratt', 'Bronco', 'Bronzite', 'Broseph', 'Brownie', 'Bub', 'Bubba', 'Bubble', 'Bubblegum', 'Bubbles', 'Bubster', 'Bud', 'Buddy', 'Bumba', 'Bungee', 'Burns', 'Buster', 'Cal', 'Caramel', 'Carlo', 'Carlos', 'Carlton', 'Carnelian', 'Celestite', 'Charlie', 'Cheescake', 'Chester', 'Chocolate', 'Chronos', 'Clauss', 'Cleetus', 'Cliff', 'Clifford', 'Clint', 'Clinton', 'Cocopop', 'Codzilla', 'Colburn', 'Comet', 'Cookie', 'Cosmo ', 'Craig', 'Curt', 'Cuzko', 'DaFishy', 'DaVinci', 'Dan', 'Daniel', 'Danny', 'Dave', 'Davis', 'Davy Jones', 'Davy', 'Decker', 'Denzel', 'Dexter', 'Diddley', 'Dilbert', 'Dingo', 'Dirk', 'Dixon', 'Drago', 'Dragon', 'Droid', 'Duke', 'Eddy', 'Edgar', 'Edmund', 'Einstein', 'Elmo', 'Enigma', 'Eustace', 'Even Steven', 'Ewen', 'Fav', 'Favo', 'Fellini', 'Fillett', 'Fin Al', 'Fin', 'Finegan', 'Finnigan', 'Finny', 'Finster', 'Firedragon', 'Flick', 'Flicker', 'Flipper', 'Flourite', 'Floyd', 'Fonzie', 'Forsythe', 'Foxy', 'Franco', 'Frank', 'Franky', 'Fred', 'Freddy', 'Fries', 'Fudge', 'Fury', 'Fyvish', 'Gadget', 'Gale', 'Gandalf', 'Garnet', 'Gavin', 'Gazer', 'Gene', 'George', 'Gerald', 'Gilligan', 'Gilliver', 'Gillson', 'Gilly', 'Gin T', 'Gin', 'Gladiator', 'Gordon', 'Greg', 'Grouch', 'Guildie', 'Guillermo', 'Gunther', 'Hagar', 'Haggard', 'Hal', 'Hamburger', 'Harley', 'Harpo', 'Harpoon', 'Henry', 'Hermie', 'Hernando', 'Hodor', 'Homer', 'Horatio', 'Houdini', 'Howard', 'Hyde', 'Iccarus', 'Iceblock', 'Iggy', 'Ignatius', 'Igor', 'Isaac', 'Ivan', 'Izzy', 'Jack', 'Jackle', 'Jackson', 'Jacky', 'Jade', 'Jaeger', 'Jafar', 'James', 'Jarvis', 'Jazz', 'Jerry', 'Jessy James', 'Jim', 'Jimbo', 'Jimmy', 'Johnny', 'Jughead', 'Jumbo', 'Kelvin', 'Ken', 'Kennedy', 'Kenny', 'Kent', 'Kepler', 'Kermit', 'Kevin', 'Kevlar', 'Killer', 'King', 'Kirk', 'Kisser', 'Kissinger', 'Klinger', 'Kobe', 'Kraken', 'Kronos', 'Larry', 'Lee', 'Lenny', 'Leo', 'Leon', 'Leonardo', 'Levon', 'Little', 'Littlebit', 'Loki', 'Lollipop', 'Lonesome', 'Long-John', 'Lou', 'Lucifer', 'MacDaddy', 'Mach', 'Machine', 'Mack', 'Maestro', 'Mako', 'Mangler', 'Maple', 'Marmaduke', 'Marshmellow', 'Marvin', 'Maurice', 'Mavi', 'Max', 'Maximus', 'Maxwell', 'Mel', 'Melvin', 'Mesmerize', 'Mesmo', 'Michaelangelo', 'Mickey', 'Mighty', 'Mike', 'Mikey', 'Missle', 'Mister', 'Modra', 'Modravy', 'Modry', 'Mondo', 'Monstro', 'Monty', 'Mordecai', 'Morris', 'Mozart', 'Munchie', 'Mundo', 'Murray', 'Murrey', 'Nadyr', 'Ned', 'Neddy', 'Neil', 'Nemo', 'Nemor', 'Nero', 'Nester', 'Nestor', 'Nexus', 'Nicholas', 'Nick', 'Nicolas', 'Nile', 'Niles', 'Noodles', 'Norton', 'Nugget', 'Obie', 'Obsidian', 'Odie', 'Odin', 'Oliver', 'Ollie', 'Onyx', 'Opal', 'Oscar', 'Othello', 'Pablo', 'Pabo', 'Pal', 'Pancake', 'Parker', 'Parsley', 'Parson', 'Parsons', 'Paul', 'Paulie', 'Pebble', 'PeeWee', 'Peeta', 'Pele', 'Pendragon', 'Pepper', 'Pete', 'Peter', 'Petey', 'Phantom', 'Phillipe', 'Pogo', 'Pointdexter', 'Pongo', 'Ponyo', 'Poppy', 'Popsicle', 'Presley', 'Pretzel', 'Prodigy', 'Putin', 'Quaker', 'Quartz', 'Quazimodo', 'Quest', 'Quimby', 'Quincey', 'Quinn', 'Quint', 'Quinton', 'Quito', 'Rad', 'Raddy', 'Ralph', 'Ralphie', 'Ramses', 'Ramsey', 'Raz', 'Razer', 'Reboot', 'Rex', 'Rick', 'Ricky', 'Ringo', 'Ripper', 'Rippy', 'Rixo', 'Robot', 'Rocko', 'Rocky', 'Rod', 'Rodney', 'Roland', 'Rollo', 'Ron', 'Ronco', 'Ronnie', 'Roosevelt', 'Rooster', 'Rosco', 'Rosevelt', 'Roy', 'Ruby', 'Sam', 'Sammy', 'Samuel', 'Santa', 'Sapphire', 'Scorpion', 'Scott', 'Scotty', 'Sedih', 'Severus', 'Sharky', 'Sifa', 'Sinbad', 'Skippy', 'Skittles', 'Sky', 'Skylar', 'Sly', 'Spagetti', 'Sparrow', 'Spike', 'Splash', 'Spud', 'Spudnik', 'Squint', 'Squisher', 'Stalker', 'Stallion', 'Stalone', 'Stanley', 'Stargazer', 'Stephan', 'Steve', 'Steven', 'Stew', 'Stewie', 'Stick', 'Stig', 'Strauss', 'Striker', 'Stud', 'Studly', 'Sugar', 'Sweets', 'Sylvester', 'T-Bone', 'Tatoo', 'Tattoo', 'Taz', 'Ted', 'Teddy', 'Thanos', 'Theo', 'Theodore', 'Thomas', 'Thor', 'Tim', 'Timmy', 'Tipsy', 'Titan', 'Tito', 'Toffee', 'Tom', 'Tommy', 'Tony', 'Topaz', 'Torpedo', 'Tricks', 'Tricky', 'Trouble', 'Tucker', 'Twerp', 'Ungo', 'Vader', 'VanGogh', 'Vanilla', 'Vanilli', 'Vanuchi', 'Vice', 'Victor', 'Vince', 'Vinny', 'Vivaldi', 'Waggy', 'Wagner', 'Walter', 'Whipper', 'Whistler', 'Wiggle', 'Wiggles', 'Wiggum', 'Wiggums', 'Wilfred', 'William', 'Willie', 'Willy', 'Yaffar', 'Yaz', 'Yazz', 'Yogi', 'Yoko', 'Yuri', 'Zandor', 'Zanuchi', 'Zero', 'Zeus', 'Zoltan', 'Zoran', 'Zoro', 'Zorro', 'Zultan', 'Zydras'];
  const nm2 = ['Afifa', 'Agate ', 'Aggie', 'Alfira', 'Allie', 'Amanda', 'Amy', 'Andrea', 'Andy', 'Angel', 'Angela', 'Annie', 'Apple', 'Apricot', 'Arial', 'Ariel', 'Athena', 'Autumn', 'Babe', 'Babs', 'Babsy', 'Baby', 'Bamboo', 'Banana', 'Barbie', 'Basil', 'Bess', 'Bessie', 'Betty', 'Blizz', 'Blizzey', 'Blueberry', 'Bonnie', 'Brea', 'Brook', 'Brooke', 'Bubble', 'Bubblegum', 'Bubbles', 'Bubbly', 'Buffy', 'Callie', 'Candy', 'Caramel', 'Caramelle', 'Carly', 'Carrie', 'Cassandra', 'Cassie', 'Cathy', 'Celeste', 'Cheescake', 'Cherie', 'Cherry', 'Chocolate', 'Chrissy', 'Cindy', 'Cleo', 'Cleopatra', 'Cocopop', 'Colbie', 'Cookie', 'Cotton', 'Cottonball', 'Crocus', 'Crystal', 'Daffodil', 'Daisy', 'Dallilah', 'Dandelion', 'Danielle', 'Dawn', 'Debbie', 'Delila', 'Destiny', 'Devine', 'Dew', 'Dewdrop', 'Dianna', 'Diva	', 'Dody', 'Donna', 'Doris', 'Dorry', 'Dory', 'Edith', 'Elisa', 'Elizabeth', 'Emily', 'Emma', 'Esmeralda', 'Esmirelda', 'Evelyn', 'Evina', 'Felicity', 'Fenna', 'Fern', 'Finny', 'Fishy', 'Flo', 'Florence', 'Flourite', 'Flower', 'Flowers', 'Foila', 'Folina', 'Francey', 'Frannie', 'Freida', 'Fudge', 'Gaile', 'Garnet', 'Gazella', 'Gille', 'Gilley', 'Gillian', 'Gilly', 'Gina', 'Ginger', 'Ginney', 'Giselle', 'Goldie', 'Grace', 'Gracey', 'Gracie', 'Greta', 'Gwen', 'Gwendolyn', 'Gweneth', 'Hailey', 'Harmony', 'Hazel', 'Hazy', 'Heather', 'Heidi', 'Helen', 'Helga', 'Hera', 'Hessie', 'Hilda', 'Holly', 'Honey', 'Hope', 'Hydra', 'Ibis', 'Icicle', 'Incognita', 'Indy', 'Irene', 'Iris', 'Isis', 'Issabelle', 'Iza', 'Izzy', 'Jade', 'Jamie', 'Jasmine', 'Jazzy', 'Jenny', 'Jessie', 'Jewel', 'Jezebel', 'Jillian', 'Julia', 'Julie', 'Katherine', 'Katie', 'Kellia', 'Kelly', 'Kelpie', 'Kendra', 'Kiana', 'Kylie', 'Kyra', 'Lady', 'Laura', 'Laurel', 'Lavender', 'Libby', 'Lili', 'Lilly', 'Lily', 'Lioness', 'Lisa', 'Lizz', 'Lois', 'Lollipop', 'Lorraine', 'Lotta', 'Lottey', 'Lucinda', 'Lucy', 'Lulu', 'Lynn', 'Macy', 'Madonna', 'Maggie', 'Magnolia', 'Mango', 'Maple', 'Marie', 'Marissa', 'Marshmellow', 'Meave', 'Melanie', 'Melinda', 'Melissa', 'Melody', 'Mila', 'Minnie', 'Miranda', 'Missy', 'Misty', 'Mona', 'Monsoon', 'Monsoone', 'Muriel', 'Murielle', 'Nadine', 'Naina', 'Nelle', 'Nelly', 'Nessie', 'Nicky', 'Nicole', 'Nilina', 'Nina', 'Nobia', 'Noodle', 'Noodles', 'Nugget', 'Odessey', 'Olga', 'Olina', 'Olive', 'Olivia', 'Ollie', 'Omy', 'Opal', 'Ophelia', 'Orchid', 'Pancake', 'Parisa', 'Parsley', 'Patty', 'Paula', 'Peach', 'Pear', 'Pearl', 'Pebble', 'Pebbles', 'Peggy', 'Penelope', 'Penny', 'Pepper', 'Persephone', 'Petal', 'Petunia', 'Phoebe', 'Pineapple', 'Piscea', 'Pollu', 'Polly', 'Pretzel', 'Priscilla', 'Prissy', 'Puddle', 'Puddles', 'Quala', 'Queen', 'Queenie', 'Quera', 'Quil', 'Quilla', 'Quinella', 'Rachel		', 'Rachel', 'Raine', 'Rebeca', 'Romy', 'Rosalinde', 'Rose', 'Rosey', 'Rosy', 'Roxanne', 'Roxy', 'Rozey', 'Ruby ', 'Ruby', 'Rudy', 'Sabrina', 'Sammy', 'Sapphire', 'Sara', 'Sarah', 'Sasha', 'Sassy', 'Savanah', 'Shamoo', 'Shanna', 'Shelly', 'Sheryl', 'Siren', 'Skittles', 'Snow White', 'Snowball', 'Snowflake', 'Snowy', 'Sonya', 'Sophia', 'Spring', 'Star', 'Stella', 'Straw', 'Strawberry', 'Sue', 'Sugar', 'Summer', 'Sunflower', 'Sunshine', 'Susan', 'Suzanne', 'Suzie', 'Svetlana', 'Sweets', 'Sydney', 'Tammy', 'Tamra', 'Tangerine', 'Tanya', 'Tasmine', 'Teby', 'Tee', 'Tessie', 'Tharma', 'Theresa', 'Tilly', 'Tina', 'Toffee', 'Tofu', 'Tulip', 'Ulie', 'Uma', 'Umaria', 'Una', 'Unity', 'Ursula', 'Velma', 'Venessa', 'Venus', 'Veronica', 'Vickie', 'Victoria', 'Vinnie', 'Vivian', 'Voilet', 'Volly', 'Wallie', 'Wanda', 'Wavey', 'Wendy', 'Wiggle', 'Wiggles', 'Willow', 'Windy', 'Winter', 'Wolla', 'Wonton', 'Wyona', 'Xact', 'Xanda', 'Xena', 'Xenia', 'Yale', 'Yardy', 'Yashi', 'Yellow', 'Yolanda', 'Yvette', 'Zeba', 'Zelda', 'Zena', 'Zinnia']; {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}

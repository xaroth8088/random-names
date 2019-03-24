export default function mouses() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abel', 'Ace', 'Acorn', 'Africa', 'Al', 'Alfie', 'Alfred', 'Almond', 'Ambrose', 'Angus', 'Ankti', 'Apollo', 'Apple', 'Apricot', 'Aqua', 'Archibald', 'Archie', 'Aristotle', 'Arnold', 'Ash', 'Asia', 'Astro', 'Augustus', 'Austin', 'Autumn', 'Avis', 'Azure', 'Baby', 'Bailey', 'Bambi', 'Barnaby', 'Barney', 'Bart', 'Basil', 'Batter', 'Bean', 'Beau', 'Bede', 'Ben', 'Benedict', 'Benjy', 'Bert', 'Billie', 'Billy', 'Birch', 'Biscuit', 'Blackberry', 'Blacky', 'Blitz', 'Blue', 'Blueberry', 'Bo', 'Bob', 'Bobby', 'Boo', 'Boots', 'Boris', 'Boss', 'Bracken', 'Bramble', 'Brandy', 'Brownie', 'Bubble', 'Buster', 'Butter', 'Butternut', 'Button', 'Buzz', 'Caesar', 'Cain', 'Calypso', 'Carnation', 'Carson', 'Casey', 'Casino', 'Caspar', 'Chalky', 'Charles', 'Charlie', 'Charm', 'Checkers', 'Cheddar', 'Chester', 'Chip', 'Chubbs', 'Cinder', 'Cinnamon', 'Cirrus', 'Coco', 'Coconut', 'Cody', 'Comet', 'Cookie', 'Cosmo', 'Cotton', 'Cream', 'Cupid', 'Curry', 'Custard', 'Dale', 'Damian', 'Dandy', 'Danny', 'Dante', 'Dash', 'Dave', 'Dede', 'Demeter', 'Demetrius', 'Demon', 'Denzil', 'Derryl', 'Devon', 'Dexter', 'Diamond', 'Dibble', 'Dilbert', 'Domino', 'Donner', 'Dougal', 'Doughnut', 'Duke', 'Dumpling', 'Dusty', 'Dynamite', 'Ebb', 'Ebony', 'Echo', 'Eden', 'Elf', 'Elmo', 'Elvis', 'Eric', 'Ernie', 'Eugene', 'Fabio', 'Feather', 'Felix', 'Fido', 'Fievel', 'Flash', 'Fly', 'Flynt', 'Fox', 'Frankie', 'Freddie', 'Friday', 'Frodo', 'Fudge', 'Galileo', 'Genesis', 'George', 'Georgie', 'Ginger', 'Goldie', 'Goliath', 'Google', 'Gunner', 'Gus', 'Haggis', 'Hamish', 'Hank', 'Harris', 'Harrison', 'Harry', 'Harvey', 'Hedgehog', 'Heinz', 'Henry', 'Hero', 'Hippie', 'Hobbs', 'Holiday', 'Hopper', 'Huey', 'Hughie', 'Ice', 'Iku', 'Imp', 'India', 'Ink', 'Issac', 'Ivan', 'Ivor', 'Jack', 'Jackson', 'Jacob', 'Jaffa', 'Jared', 'Jasper', 'Jelly', 'Jeremy', 'Jerry', 'Jester', 'Jewel', 'Jingles', 'Jules', 'Julio', 'Jupitar', 'Karma', 'Keiko', 'Kestral', 'Kevin', 'Kinder', 'King', 'Kitkat', 'Speedy', 'Ku-jo', 'Kurt', 'Kyle', 'Lance', 'Larry', 'Lassie', 'Lemon', 'Lenny', 'Leo', 'Lester', 'Levi', 'Lion', 'Lonnie', 'Lou', 'Lucky', 'Ludo', 'Lugzy', 'Lychee', 'Magic', 'Maple', 'March', 'Mario', 'Marmaduke', 'Mars', 'Marshmallow', 'Martin', 'Matty', 'Maverick', 'Max', 'Maynard', 'Melba', 'Melvin', 'Mercedes', 'Merlin', 'Mickey', 'Miller', 'Milo', 'Milton', 'Montey', 'Moris', 'Moses', 'Mouse', 'Mr. Jingles', 'Muffin', 'Nathaniel', 'Nemo', 'Neptune', 'Nero', 'Newton', 'Nibbles', 'Nimbus', 'Noel', 'Noodles', 'Norbert', 'Norman', 'Nutella', 'Nutmeg', 'Nutsy', 'Oak', 'Oatmeal', 'Ollie', 'Omega', 'Oracle', 'Orange', 'Orion', 'Oscar', 'Otis', 'Pan', 'Parsley', 'Patrick', 'Peanut', 'Pepi', 'Pepper', 'Perry', 'Pete', 'Peter', 'Pheonix', 'Pickle', 'Pigeon', 'Piglet', 'Pip', 'Pluto', 'Polo', 'Popcorn', 'Poppet', 'Prince', 'Pumpkin', 'Quasimoto', 'Quentin', 'Quincy', 'Quinlan', 'Quinn', 'Rain', 'Rainbow', 'Ralph', 'Ramses', 'Ramsy', 'Raspberry', 'Rasputin', 'Ratchett', 'Raven', 'Razz', 'Red', 'Reece', 'Reggie', 'Remy', 'Rex', 'Rhubarb', 'Rincewind', 'Rio', 'River', 'Robin', 'Rocky', 'Rodney', 'Rolo', 'Rome', 'Roo', 'Rudi', 'Rudolf', 'Rupert', 'Rusty', 'Ryan', 'Sage', 'Sam', 'Sammy', 'Samson', 'Santa', 'Scorpio', 'Scruffy', 'Sebastian', 'Shadow', 'Sid', 'Silver', 'Simba', 'Simon', 'Sirius', 'Skip', 'Skyller', 'Slappy', 'Sleepy', 'Snowball', 'Snowflake', 'Solomon', 'Sonny', 'Speckle', 'Spencer', 'Spice', 'Spike', 'Spirit', 'Spot', 'Sprite', 'Squeak', 'Squeaky', 'Stan', 'Stanley', 'Star', 'Stewie', 'Stroodle', 'Sugar', 'Sunny', 'Sylvester', 'Taffy', 'Tailor', 'Tanner', 'Tanni', 'Tarm', 'Taz', 'Teddy', 'Templeton', 'Theo', 'Thornton', 'Tigger', 'Timmy', 'Toast', 'Toby', 'Toffee', 'Tom', 'Treacle', 'Trevor', 'Twilight', 'Twix', 'Ulysses', 'Uri', 'Valentine', 'Valley', 'Venice', 'Vermont', 'Victor', 'Vinnie', 'Wallace', 'Walnut', 'Walter', 'Webster', 'Wednesday', 'Weenie', 'Whiskers', 'Wilbur', 'Willow', 'Wind', 'Winky', 'Wolf', 'Woody', 'Wren', 'Xander', 'Xandy', 'Xuan', 'Yale', 'Yates', 'Yew', 'Yogi', 'York', 'Yoshi', 'Yoyo', 'Yves', 'Zane', 'Zebediah', 'Zebra', 'Zeus', 'Maple'];
  const nm2 = ['Abby', 'Acorn', 'Adele', 'Africa', 'Agatha', 'Aggie', 'Aisha', 'Alexandria', 'Alexia', 'Alexis', 'Alice', 'Almond', 'Amber', 'Amelia', 'Amy', 'Angel', 'Angle', 'Anita', 'Ankti', 'Annabelle', 'Annie', 'Anya', 'Aphrodite', 'Apple', 'Apricot', 'Aqua', 'Ash', 'Asia', 'Athena', 'Aunna', 'Aurelia', 'Aurora', 'Aussie', 'Autumn', 'Ava', 'Avis', 'Azure', 'Baby', 'Bailey', 'Bambi', 'Banana', 'Bean', 'Beauty', 'Bella', 'Belle', 'Berrie', 'Bess', 'Bessie', 'Bethan', 'Bethany', 'Betsy', 'Betty', 'Beyonce', 'Bianca', 'Bijou', 'Billie', 'Bimbo', 'Biscuit', 'Bitsy', 'Blackberry', 'Blitz', 'Blossom', 'Blue', 'Blueberry', 'Bo', 'Boo', 'Boots', 'Bracken', 'Bramble', 'Brittany', 'Brookie', 'Brownie', 'Bryony', 'Bubble', 'Bunny', 'Butter', 'Buttercup', 'Butternut', 'Button', 'Buzz', 'Callie', 'Cally', 'Calypso', 'Candie', 'Cappuccino', 'Caramel', 'Carmen', 'Carnation', 'Casey', 'Charlene', 'Charlotte', 'Charm', 'Checkers', 'Cheddar', 'Chilli', 'Chimney', 'Chloe', 'Gemini', 'Choc Chip', 'Chutney', 'Cinder', 'Cindy', 'Cinnamon', 'Cleo', 'Coco', 'Cocoa', 'Coconut', 'Cody', 'Coffee', 'Collie', 'Comet', 'Cookie', 'Coral', 'Coralie', 'Cordelia', 'Cotton', 'Cream', 'Crumble', 'Crystal', 'Curry', 'Custard', 'Cutie', 'Cyienna', 'DEe', 'Daffodil', 'Daisy', 'Dale', 'Daphne', 'Dawn', 'Dee', 'Delilah', 'Devon', 'Diamond', 'Dibble', 'Dinah', 'Dixie', 'Dolly', 'Domino', 'Dora', 'Dori', 'DorothY', 'Dorothy', 'Dory', 'Dot', 'Dotty', 'Doughnut', 'Dove', 'Dragon', 'Dumpling', 'Dusty', 'Ebb', 'Ebony', 'Echo', 'Eden', 'Elf', 'Ella', 'Ellen', 'Ellie', 'Emma', 'Erica', 'Erin', 'Ester', 'Eva', 'Evangeline', 'Eve', 'Evie', 'Faith', 'Fawn', 'Faye', 'Feather', 'Fern', 'Fibi', 'Fizz', 'Flo', 'Flower', 'Fly', 'Fox', 'Frankie', 'Freda', 'Fudge', 'Gertie', 'Gianna', 'Gigi', 'Ginger', 'Gladiola', 'Goldie', 'Google', 'Gretel', 'Gypsy', 'Haggis', 'Hannah', 'Harmony', 'Harriet', 'Hatty', 'Hazel', 'Heather', 'Heaven', 'Hedgehog', 'Heidi', 'Heinz', 'Hershey', 'Hetty', 'Hippie', 'Holiday', 'Holly', 'Honey', 'Hope', 'Hopper', 'Iku', 'Imogen', 'Imp', 'India', 'Indigo', 'Iris', 'Isabelle', 'Isla', 'Izzy', 'Jade', 'Jaffa', 'Jaime', 'Jasmine', 'Jazz', 'Jelly', 'Jenny', 'Jess', 'Jesse', 'Jester', 'Jewel', 'Jezabelle', 'Jody', 'Josie', 'Joy', 'Judy', 'Jules', 'Julie', 'Jupitar', 'Kanata', 'Kara', 'Karma', 'Kate', 'Keiko', 'Kestral', 'Kinder', 'Kitkat', 'Kitty', 'Laila', 'Lainey', 'Lainie', 'Lara', 'Lark', 'Lassie', 'Laura', 'Laurel', 'Lauren', 'Lavendar', 'Lavender', 'Leela', 'Lemon', 'Lila', 'Lilac', 'Lilo', 'Lily', 'Lima Bean', 'Linda', 'Lisa', 'Lizzie', 'Lois', 'Lola', 'Lora', 'Lou', 'Louise', 'Lucky', 'Lucy', 'Lulu', 'Lychee', 'Maggie', 'Magic', 'Maia', 'Maisy', 'Mandy', 'March', 'Marshmallow', 'Mary', 'Matilda', 'May', 'Meg', 'Megan', 'Melba', 'Melody', 'Michelle', 'Miley', 'Miller', 'Millie', 'Milly', 'Mimi', 'Minnie', 'Minny', 'Mione', 'Mionie', 'Molly', 'Momo', 'Monica', 'Mouse', 'Muffin', 'Muriel', 'Nadia', 'Nectar', 'Nellie', 'Neve', 'Nia', 'Nibbles', 'Nina', 'Noel', 'Norah', 'Nutella', 'Nutmeg', 'Nutsy', 'Oatmeal', 'Odelia', 'Olivia', 'Omega', 'Opal', 'Oracle', 'Orange', 'Oreo', 'Paige', 'Pan', 'Parsley', 'Pashmina', 'Pat', 'Peach', 'Peachy', 'Peanut', 'Pearl', 'Penelope', 'Penny', 'Pepi', 'Peppa', 'Pepper', 'Persephone', 'Petal', 'Petunia', 'Pheonix', 'Phoebe', 'Pickle', 'Pigeon', 'Piglet', 'Pip', 'Piper', 'Pippa', 'Pipsqueak', 'Pixie', 'Polly', 'Pop', 'Popcorn', 'Poppet', 'Poppy', 'Pumpkin', 'Quasimoto', 'Queenie', 'Quinn', 'Rachel', 'Rae', 'Rain', 'Rainbow', 'Ramona', 'Raspberry', 'Raven', 'Red', 'Rhubarb', 'River', 'Robin', 'Rolo', 'Roma', 'Roo', 'Rose', 'Rosie', 'Roxy', 'Ruby', 'Rudi', 'Rusty', 'Ruth', 'Saffron', 'Sage', 'Sally', 'Salt', 'Sam', 'Sammy', 'Sandy', 'Santa', 'Sapphire', 'Sarah', 'Savannah', 'Scruffy', 'Silver', 'Skip', 'Skye', 'Skyller', 'Slappy', 'Smartie', 'Snowball', 'Snowbell', 'Snowflake', 'Souris', 'Sparkles', 'Spec', 'Speckle', 'Spice', 'Spirit', 'Splash', 'Spot', 'Spotty', 'Sprite', 'Squeak', 'Squeakers', 'Star', 'Sugar', 'Summer', 'Sundae', 'Sunny', 'Susie', 'Suzy', 'Sweetie', 'Tabitha', 'Tailor', 'Talitha', 'Talula', 'Tammy', 'Tanni', 'Tarm', 'Teddy', 'Teeny', 'Tess', 'Tiffany', 'Tigger', 'Tilly', 'Tinker', 'Tinker Bell', 'Tinkerbelle', 'Tinkles', 'Toast', 'Toffee', 'Treacle', 'Trixie', 'Tubby', 'Tulip', 'Twilight', 'Twinkle', 'Twitters', 'Uma', 'Unity', 'Ursula', 'Valentine', 'Valley', 'Vanna', 'Venice', 'Vesper', 'Violet', 'Vixen', 'Walnut', 'Wanda', 'Wednesday', 'Wendy', 'Willow', 'Wilma', 'Wimma', 'Winky', 'Winnie', 'Winona', 'Wren', 'Xandy', 'Xena', 'Xia', 'Yale', 'Yeva', 'Yew', 'Yogi', 'Yoshi', 'Yoyo', 'Zane', 'Zanthe', 'Zara', 'Zebra', 'Zoe', 'Zoey', 'Zooey', 'Zwido', 'Fizz'];


  i = Math.floor(Math.random() * 10);
  {
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

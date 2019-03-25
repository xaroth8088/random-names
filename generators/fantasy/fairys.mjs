export default function fairys() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd;
  let rnd2;
  let
    rnd3;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const namesMale = ['Acorn', 'Aed', 'Aeden', 'Alaneo', 'Albedo', 'Ali', 'Almond', 'Aloha', 'Anthurium', 'Aodh', 'Aphid', 'Apogee', 'Aqua', 'Ash', 'Astro', 'Aven', 'Avo', 'Axis', 'Badger', 'Barley', 'Basil', 'Bear', 'Berry', 'Bim', 'Birch', 'Blathnat', 'Blaze', 'Bracken', 'Bramble', 'Briar', 'Brock', 'Bud', 'Bumble', 'Calico', 'Canyon', 'Caraway', 'Carpus', 'Carrot', 'Cedar', 'Christopher', 'Cinnamon', 'Cirro', 'Cirrus', 'Citron', 'Cloud', 'Coconut', 'Comet', 'Cookie', 'Cosmo', 'Crator', 'Cricket', 'Daybreak', 'Dew', 'Dewdrop', 'Diaspor', 'Dragonfly', 'Drake', 'Dune', 'Dusk', 'Earth', 'Echo', 'Elliot', 'Elm', 'Finch', 'Firo', 'Flame', 'Flamo', 'Flare', 'Flax', 'Flint', 'Flix', 'Florian', 'Fox', 'Foxglove', 'Freddie', 'Frost', 'Frostbite', 'Ginko', 'Happy', 'Harbor', 'Harley', 'Helio', 'Herb', 'Indi', 'Indigo', 'Jamie', 'Jarrah', 'Jeremy', 'Karma', 'Koko', 'Lake', 'Lapis', 'Lark', 'Laurel', 'Lazuli', 'Lemony', 'Light', 'Lightning', 'Liri', 'Lucky', 'Luke', 'Magpie', 'Mahogany', 'Mango', 'Marlie', 'Meadow', 'Mercury', 'Midnight', 'Miles', 'Mitah', 'Moon', 'Moonbeam', 'Moonbean', 'Moptop', 'Morel', 'Mountain', 'Mulberry', 'Nebula', 'Nelly', 'Newt', 'Nightfall', 'Nightshade', 'Nimbus', 'North', 'Nova', 'Novus', 'Nutmeg', 'Nyx', 'Oak', 'Ocean', 'Oleander', 'Oliver', 'Onyx', 'Oregano', 'Pandora', 'Peanut', 'Pecan', 'Pepper', 'Peridot', 'Persimmon', 'Petal', 'Pine', 'Pinecone', 'Pistachio', 'Plume', 'Poppy', 'Pyro', 'Quicksilver', 'Quinn', 'Rain', 'Raine', 'Reef', 'Rhubarb', 'Ridge', 'Robbie', 'Robin', 'Rock', 'Rocky', 'Saffron', 'Scorpia', 'Shade', 'Silver', 'Sky', 'Skylark', 'Smokey', 'Sneezy', 'Snow', 'Snowdrop', 'Snowflake', 'Spark', 'Spice', 'Spring', 'Sprinkle', 'Sprinkles', 'Stardust', 'Starfish', 'Stargazer', 'Stone', 'Storm', 'Stormy', 'Strombo', 'Sunbeam', 'Sundew', 'Sunrise', 'Sunset', 'Tadpole', 'Tangy', 'Tarragon', 'Thicket', 'Thistle', 'Tidal', 'Tiger', 'Timber', 'Timothy', 'Tiny', 'Tori', 'Trevan', 'Trumpet', 'Turnip', 'Twig', 'Walnut', 'Willow', 'Winnie', 'Wolf', 'Woods', 'Zephyr'];
  const namesFemale = ['Pervinca', 'Hiedra', 'Vinca', 'Dandelia', 'Dandelion', 'Clavelina', 'Clavellina', 'Vulparia', 'Luparia', 'Belladonna', 'Passiflora', 'Pimpinella', 'Eupherbia', 'Poinsetia', 'Rafflesia', 'Phyre', 'Abeyance', 'Abigail', 'Abyss', 'Acacia', 'Adriata', 'Alcyone', 'Alexa', 'Alexandra', 'Alexi', 'Alexia', 'Ali', 'Alina', 'Allium', 'Almond', 'Aloha', 'Alyssum', 'Amaltheia', 'Amantha', 'Amaryllis', 'Amber', 'Amethyst', 'Amode', 'Amy', 'Anastasia', 'Anemone', 'Angel', 'Annie', 'Apple', 'Apricot', 'April', 'Aqua', 'Aria', 'Arianna', 'Arlette', 'Ashley', 'Aspen', 'Asphodel', 'Aurora', 'Autumn', 'Ayanna', 'Azalea', 'Azore', 'Badger', 'Barbara', 'Bayberry', 'Bedra', 'Begonia', 'Bellflower', 'Berline', 'Beryl', 'Bethany', 'Betsy', 'Betty', 'Bianca', 'Bim', 'Birch', 'Birdy', 'Blodwen', 'Blooma', 'Blossom', 'Bluebell', 'Bonnie', 'Breeze', 'Breezy', 'Briar', 'Briny', 'Bryla', 'Bumble', 'Buttercup', 'Cadmi', 'Calico', 'Caliphe', 'Calla', 'Camelia', 'Camellia', 'Camie', 'Camille', 'Candala', 'Canyon', 'Caraway', 'Carnelia', 'Carrie', 'Carrot', 'Cassia', 'Cassie', 'Cayenne', 'Cecil', 'Cecile', 'Celeste', 'Celestia', 'Chaldera', 'Chante', 'Charity', 'Charlotte', 'Chasma', 'Cherry', 'Chert', 'Chestnut', 'Chickadee', 'Chipmunk', 'Chloe', 'Chlora', 'Christal', 'Cinder', 'Cinnamon', 'Cintrine', 'Citron', 'Cleo', 'Cloud', 'Clove', 'Clover', 'Coconut', 'Confiance', 'Cookie', 'Coral', 'Coriander', 'Cornflower', 'Corona', 'Cowrie', 'Coyote', 'Crabapple', 'Cranberry', 'Cricket', 'Crystal', 'Cupcake', 'Cypress', 'Daffodil', 'Dahlia', 'Daisy', 'Dalila', 'Dandelion', 'Daphne', 'Darla', 'Dawn', 'Daybreak', 'Daylily', 'Delia', 'Desily', 'Dew', 'Dewdrop', 'Dey', 'Diamond', 'Didi', 'Dill', 'Dilys', 'Dina', 'Dolly', 'Dragonfly', 'Earth', 'Ebbie', 'Ebony', 'Elaina', 'Eli', 'Ella', 'Elle', 'Elliot', 'Elm', 'Elma', 'Elva', 'Ember', 'Emerald', 'Emily', 'Emma', 'Erissa', 'Estrella', 'Evangeline', 'Eve', 'Evening', 'Evie', 'Ezra', 'Faith', 'Fantasia', 'Fauna', 'Faye', 'Fee', 'Fern', 'Feu', 'Fiery', 'Fifi', 'Flame', 'Flamo', 'Flare', 'Flax', 'Flora', 'Floura', 'Forsythia', 'Frances', 'Frangi', 'Freesia', 'Frost', 'Galaxa', 'Galaxy', 'Gardenia', 'Garnet', 'Gem', 'Genevieve', 'Gerania', 'Gerbera', 'Ginger', 'Ginny', 'Gloria', 'Gloriosa', 'Grace', 'Grevillea', 'Grove', 'Gullie', 'Gypsum', 'Happy', 'Harbor', 'Harley', 'Harmony', 'Hazel', 'Heather', 'Heaven', 'Heidi', 'Helen', 'Helia', 'Helio', 'Heliodor', 'Herb', 'Hibiscus', 'Hickoy', 'Holly', 'Hollyann', 'Hollyhock', 'Honey', 'Hope', 'Horizon', 'Hurricane', 'Hyacinth', 'Hydrangea', 'Ignea', 'Igni', 'Indigo', 'Infinity', 'Ionia', 'Iridia', 'Iris', 'Isabel', 'Isabelle', 'Island', 'Isle', 'Ivory', 'Ivy', 'Jada', 'Jade', 'Jamie', 'Jane', 'Jasmine', 'Jayla', 'Jeanie', 'Jenny', 'Jessamine', 'Jewel', 'Jewels', 'Jillian', 'Joanna', 'Johanna', 'Joy', 'Julianne', 'Julie', 'June', 'Juniper', 'Karina', 'Karma', 'Kate', 'Kayleighe', 'Kaylor', 'Kelly', 'Kenzie', 'Kesiray', 'Kiki', 'Kiwi', 'Kobi', 'Koko', 'Kyanne', 'Kylee', 'Kyra', 'Labivia', 'Labyrinth', 'Lake', 'Lala', 'Lantana', 'Lapis', 'Laura', 'Laurelai', 'Lauren', 'Lavender', 'Layla', 'Lazuli', 'Leaf', 'Leeta', 'Lella', 'Lemony', 'Lenora', 'Levia', 'Liatris', 'Libby', 'Lichen', 'Light', 'Lila', 'Lilac', 'Lilah', 'Lily', 'Liri', 'Little', 'Liza', 'Lizzy', 'Lorella', 'Lori', 'Loue', 'Lucia', 'Lucky', 'Lucy', 'Lula', 'Lulu', 'Lumiona', 'Luna', 'Lynn', 'Lynne', 'Maddie', 'Maeve', 'Maga', 'Magenta', 'Magna', 'Magnola', 'Magnolia', 'Magpie', 'Mahogany', 'Maie', 'Manga', 'Mango', 'Maple', 'Marcasite', 'Marceline', 'Margo', 'Marigold', 'Marin', 'Marina', 'Marlie', 'Mary', 'May', 'Meadow', 'Meer', 'Melanie', 'Melody', 'Meri', 'Meridian', 'Mia', 'Midnight', 'Mildread', 'Milkweed', 'Minerva', 'Miranda', 'Misha', 'Misty', 'Mivian', 'Molly', 'Moon', 'Moonbeam', 'Moonbean', 'Mora', 'Mossy', 'Mudpie', 'Mulberry', 'Muriel', 'Mythia', 'Nastur', 'Nature', 'Nautila', 'Nebula', 'Nectarine', 'Nelly', 'Newt', 'Nightfall', 'Nightshade', 'Nimbus', 'Nina', 'Nissa', 'Nora', 'Nutmeg', 'Nyphadora', 'Nyra', 'Oceana', 'Octavia', 'Olive', 'Olivia', 'Opal', 'Ora', 'Orange', 'Orchid', 'Oreal', 'Oregano', 'Oriole', 'Palmera', 'Pandora', 'Paprika', 'Parsley', 'Peach', 'Peachy', 'Peanut', 'Pearl', 'Pecan', 'Penelope', 'Peoni', 'Pepper', 'Percula', 'Peridot', 'Petal', 'Petunia', 'Phira', 'Phoebe', 'Pine', 'Pineapple', 'Pinecone', 'Pluma', 'Plume', 'Plumeria', 'Poison', 'Polly', 'Poplar', 'Poppy', 'Posey', 'Posy', 'Prairie', 'Primrose', 'Prinna', 'Prise', 'Prudence', 'Pumpkin', 'Purple', 'Pyro', 'Rachel', 'Rain', 'Rainbow', 'Raine', 'Rainy', 'Raven', 'Rebutia', 'Relle', 'Rhoda', 'Rhodie', 'Rhonda', 'Rhubarb', 'Rill', 'River', 'Robin', 'Rola', 'Rore', 'Rosa', 'Rosalind', 'Rose', 'Rosemary', 'Rosepetal', 'Rosie', 'Ruby', 'Sadie', 'Saffron', 'Sage', 'Sahara', 'Saira', 'Salle', 'Sally', 'Sandy', 'Sapphire', 'Sassafras', 'Savannah', 'Scarlet', 'Scorpia', 'Sea', 'Seaweed', 'Sela', 'Selene', 'Selenia', 'Sequoia', 'Serena', 'Serendipity', 'Shade', 'Shanna', 'Shayleigh', 'Shelly', 'Shiny', 'Shyla', 'Sienna', 'Silhouette', 'Silver', 'Sivelle', 'Sky', 'Skyler', 'Sneezy', 'Snow', 'Snowdrop', 'Snowflake', 'Solara', 'Soleil', 'Sophie', 'Sorrell', 'Spark', 'Sparkla', 'Spectra', 'Spice', 'Spirala', 'Spore', 'Spring', 'Sprinkle', 'Sprinkles', 'Spruce', 'Star', 'Stardust', 'Starfish', 'Stargazer', 'Stella', 'Stormy', 'Strawberri', 'Strawberry', 'Sue', 'Sugar', 'Sulcore', 'Summer', 'Sun', 'Sunbeam', 'Sundew', 'Sunflower', 'Sunlight', 'Sunny', 'Sunrise', 'Sunset', 'Sunshine', 'Swan', 'Tamara', 'Tangy', 'Tansy', 'Tara', 'Tasi', 'Tempest', 'Tess', 'Tessa', 'Thallia', 'Thistle', 'Tidal', 'Tiger', 'Tinder', 'Tinkerbell', 'Tiny', 'Topaz', 'Topiary', 'Tori', 'Tourmaline', 'Tournant', 'Treva', 'Trinity', 'Trish', 'Tulip', 'Turnip', 'Turquoise', 'Twig', 'Twilight', 'Tyra', 'Urchin', 'Valorie', 'Vanessa', 'Velocity', 'Venus', 'Verey', 'Vickie', 'Victoria', 'Vilotta', 'Viola', 'Violet', 'Vivi', 'Wallflower', 'Walnut', 'Waterfall', 'Wave', 'West', 'Whirl', 'Willow', 'Wind', 'Windy', 'Winnie', 'Winter', 'Wispa', 'Woods', 'Wrassey', 'Wren', 'Xenops', 'Yasmine', 'Yavia', 'Yitri', 'Yucca'];
  const namesFamily = ['Air', 'Almond', 'Amber', 'Apple', 'Aspen', 'Beauty', 'Beech', 'Better', 'Bird', 'Bitter', 'Black', 'Blue', 'Bramble', 'Briar', 'Bright', 'Broom', 'Bubble', 'Bumble', 'Candle', 'Carrot', 'Cat', 'Cedar', 'Chilly', 'Cinnamon', 'Citrus', 'Cloud', 'Cloudy', 'Cocoa', 'Copper', 'Cotton', 'Cozy', 'Cricket', 'Crystal', 'Cute', 'Daisy', 'Dapple', 'Dark', 'Day', 'Dazzle', 'Diamond', 'Dimple', 'Drift', 'Elm', 'Evening', 'Falcon', 'Fancy', 'Fern', 'Fig', 'Fire', 'Flatter', 'Flicker', 'Flirty', 'Flutter', 'Foggy', 'Fox', 'Frost', 'Frosty', 'Frozen', 'Funny', 'Garlic', 'Gem', 'Giggle', 'Glitter', 'Golden', 'Grassy', 'Gray', 'Green', 'Grey', 'Hazel', 'Holly', 'Honey', 'Ice', 'Island', 'Isle', 'Jelly', 'Jester', 'Jingle', 'Jumpy', 'Leaf', 'Lemon', 'Light', 'Lightning', 'Lilly', 'Lily', 'Lime', 'Little', 'Lotus', 'Lovely', 'Magic', 'Mango', 'Maple', 'Meadow', 'Merry', 'Misty', 'Moon', 'Morning', 'Moss', 'Mossy', 'Mountain', 'Muddy', 'Never', 'Night', 'Oak', 'Olive', 'Orange', 'Palm', 'Parsley', 'Peach', 'Pear', 'Pepper', 'Petal', 'Pine', 'Plum', 'Pollen', 'Poplar', 'Pretty', 'Pumpkin', 'Purple', 'Quick', 'Rain', 'Rainbow', 'Rainy', 'Red', 'Rose', 'Rumple', 'Sandy', 'Sea', 'Shadow', 'Shimmer', 'Shiny', 'Silk', 'Silver', 'Snow', 'Sour', 'Sparkle', 'Speedy', 'Spider', 'Star', 'Sugar', 'Sun', 'Sweet', 'Swift', 'Tangle', 'Thunder', 'Tiger', 'Toad', 'Tree', 'Tulip', 'Tumble', 'Twinkle', 'Twisty', 'Vanilla', 'Water', 'Turtle', 'Whiffle', 'White', 'Wild', 'Willow', 'Windy', 'Winter', 'Wonder', 'Wood', 'Wrinkle'];
  const namesFamily2 = ['bead', 'beam', 'bee', 'bay', 'bees', 'bell', 'belle', 'berry', 'bird', 'dove', 'bite', 'bloom', 'blossom', 'boots', 'bottom', 'breath', 'breeze', 'briar', 'bud', 'bug', 'bush', 'butter', 'button', 'cliff', 'cloud', 'clove', 'clover', 'cone', 'creek', 'crystal', 'cup', 'curl', 'dale', 'dance', 'dash', 'dew', 'drop', 'dust', 'feather', 'fall', 'falls', 'feet', 'field', 'fig', 'flame', 'flash', 'fleck', 'flight', 'flip', 'flower', 'fluff', 'fly', 'foam', 'fog', 'foot', 'forest', 'freeze', 'frost', 'fruit', 'jacket', 'fur', 'garden', 'gem', 'glade', 'glimmer', 'glow', 'gourd', 'grace', 'grass', 'griddle', 'grove', 'gust', 'heart', 'hill', 'hop', 'horn', 'jewel', 'lace', 'lake', 'lashes', 'leaf', 'light', 'lily', 'locks', 'loop', 'meadow', 'mello', 'mint', 'mist', 'moon', 'muddle', 'muse', 'newt', 'noodles', 'nut', 'pearl', 'pebbles', 'petal', 'plume', 'pond', 'pool', 'puff', 'ray', 'ripple', 'river', 'rock', 'root', 'rose', 'sage', 'sand', 'shadow', 'shimmer', 'spice', 'shine', 'shore', 'sky', 'socks', 'song', 'spark', 'sparkle', 'speck', 'spirit', 'splash', 'spring', 'sprite', 'sprout', 'stem', 'stone', 'storm', 'twig', 'stream', 'stripe', 'swamp', 'swirls', 'tail', 'thistle', 'thorn', 'toad', 'toes', 'tree', 'twill', 'twinkle', 'twirl', 'twirls', 'twist', 'vale', 'valley', 'vine', 'wax', 'weather', 'web', 'whirl', 'whisk', 'whisper', 'whistle', 'white', 'willow', 'wind', 'wing', 'wings', 'wink', 'wish', 'wood', 'wort'];
  const names1 = type === 1 ? namesFemale : namesMale; {
    rnd = Math.floor(Math.random() * names1.length);
    rnd2 = Math.floor(Math.random() * namesFamily.length);
    rnd3 = Math.floor(Math.random() * namesFamily2.length);
    names = `${names1[rnd]} ${namesFamily[rnd2]}${namesFamily2[rnd3]}`;
    return names;
  }
}

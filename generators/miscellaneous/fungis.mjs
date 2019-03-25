export default function fungis() {
  let names;
  let rnd;
  let rnd2;
  let rnd;
  let rnd2;
  let names;
  const nm1 = ['Aborted', 'Acute', 'Alder', 'Almond', 'Alpine', 'Amethyst', 'Amethyst', 'Amethyst', 'Amethyst', 'Anemone', 'Aniseed', 'Appressed', 'Apricot', 'Apricot', 'Apricot', 'Armored', 'Artillery', 'Artist’s', 'Artist', 'Artist\'s', 'Artist\'s', 'Artists', 'Ashy', 'Ashy', 'Ashy', 'Asian', 'Aspen', 'Baccharis', 'Banded', 'Bare-toothed', 'Barometer', 'Bay-brown', 'Bear', 'Bear\'s', 'Bear\'s', 'Bearded', 'Beautiful', 'Beech', 'Beech', 'Beefsteak', 'Bell', 'Belted', 'Berkeley\'s', 'Big', 'Birch', 'Birch', 'Birch', 'Bird\'s', 'Bird\'s', 'Bird\'s', 'Bird\'s-nest', 'Birds', 'Bitter', 'Bitter', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black-eyed', 'Black-eyed', 'Black-foot', 'Black-leg', 'Blackcurly', 'Blackening', 'Bleeding', 'Bleeding', 'Bleeding', 'Blood-foot', 'Blood-spattered', 'Blotched', 'Blotched', 'Blue', 'Blue', 'Blue', 'Blue-black', 'Blue-green', 'Blue-staining', 'Bluish', 'Blushing', 'Blushing', 'Blushing', 'Blushing', 'Blushing', 'Bog', 'Bogus', 'Bonnet', 'Bootlace', 'Bootlace', 'Boring', 'Bouquet', 'Bouquet', 'Bracket', 'Bracket', 'Bracket', 'Bracket', 'Brain', 'Brain', 'Branched', 'Branched', 'Branched', 'British', 'British', 'Brittle', 'Brittle', 'Brown', 'Brown', 'Brown', 'Brown', 'Brown', 'Brown', 'Blushing', 'Blushing', 'Blushing', 'Bog', 'Bogus', 'Bonnet', 'Bootlace', 'Bootlace', 'Boring', 'Bouquet', 'Bouquet', 'Bracket', 'Bracket', 'Bracket', 'Bracket', 'Brain', 'Brain', 'Branched', 'Branched', 'Branched', 'Brittle', 'Brittle', 'Brown', 'Brown', 'Brown', 'Brown', 'Brown', 'Brown', 'Amethyst', 'Agaricus', 'Artist\'s', 'Beech', 'Beef-steak', 'Birch', 'Birch', 'Birch', 'Bird\'s', 'Black', 'Blood-Foot', 'Blue', 'Blue-Green', 'Butter', 'Bovine', 'Candlesnuff', 'Carbon', 'Clavulinopsis', 'Club', 'Clustered', 'Clustered', 'Collard', 'Common', 'Common', 'Common', 'Coral', 'Crab', 'Crystal', 'Dead', 'Deer', 'Dog', 'Dog\'s', 'Dryad\'s', 'Dyer\'s', 'Emetic', 'Eyelash', 'Fairy', 'False', 'Fly', 'Fringed', 'Giant', 'Giant', 'Grey', 'Horse', 'Hypoxylon', 'Hypoxylon', 'Jelly', 'Jew\'s', 'King', 'Lacquered', 'Lactarius', 'Larch', 'Leccinum', 'Lion\'s', 'Meadow', 'Oakbug', 'Orange', 'Orange', 'Ob', 'Panther', 'Peck', 'Pestle', 'Plums', 'Pluteus', 'Porcelain', 'Potato', 'Pterula', 'Purple', 'Red', 'Rooting', 'Rosy', 'Scarlet', 'Scurfy', 'Scurfy', 'Shaggy', 'Shaggy', 'Shaggy', 'Silverleaf', 'Small', 'Smoky', 'Spectacular', 'Straight-Branched', 'Sulphur', 'Sulphur', 'Tarzetta', 'Thelephora', 'Turkey', 'Weeping', 'White', 'White', 'Witch\'s', 'Wolf\'s', 'Wood', 'Wrinkled', 'Yellow', 'Yellow', 'Brown', 'Brown', 'Brown-eyed', 'Bruised', 'Bulbous', 'Bullseye', 'Bushing', 'Butter', 'Calcareous', 'California', 'Candleflame', 'Candleflame', 'Candlesnuff', 'Candy', 'Candy', 'Candy', 'Candy', 'Cannon', 'Carbon', 'Carbon', 'Carbon', 'Carnival Candy', 'Caterpillar', 'Cauliflower', 'Cauliflower', 'Chestnut', 'Chocolate', 'Chocolate', 'Chocolate', 'Cinnabar-red', 'Cinnamon', 'Clinker', 'Cloudy', 'Club', 'Club', 'Club', 'Club-footed', 'Club-like', 'Clublike', 'Clustered', 'Clustered', 'Clustered', 'Clustered', 'Coal', 'Cobalt', 'Coccoli', 'Coccoli', 'Coccoli', 'Collared', 'Comb', 'Comb', 'Comb', 'Comb', 'Common', 'Common', 'Common', 'Compressed', 'Conch', 'Conic', 'Conical', 'Conidial', 'Conifer', 'Conifer-base', 'Copper', 'Coral', 'Coral', 'Coral', 'Corn', 'Corn', 'Corral', 'Cowboy\'s', 'Cracked-cap', 'Craked-Cap', 'Cramp', 'Cramp', 'Crested', 'Crested', 'Crimped', 'Crimson', 'Crowded', 'Crown', 'Crown', 'Crumble', 'Cryptic', 'Cup', 'Cup', 'Darwin\'s', 'Dead', 'Dead', 'Deadly', 'Deadly', 'Death', 'Death', 'Deer', 'Delicious', 'Delicious', 'Desert', 'Desert', 'Destroying', 'Destroying', 'Devil\'s', 'Devil\'s', 'Devil\'s', 'Dimple', 'Dimple', 'Dog', 'Dog', 'Douglas', 'Douglas', 'Douglas-fir', 'Dryad\'s', 'Dung', 'Dung', 'Dung-loving', 'Dye', 'Dye', 'Dyemaker\'s', 'Dyer\'s', 'Early', 'Earpick', 'Earthy', 'Egg-yolk', 'Elegant', 'Elegant', 'Elegant', 'Elephant', 'Elfin', 'Elfin\'s', 'Emetic', 'Eyelash', 'Eyelash', 'Fabby', 'Fairy', 'Fairy', 'Fairy', 'False', 'False', 'Fan', 'Fan-shaped', 'Fawn', 'Felt', 'Felt-Ringed', 'Fetid', 'Field', 'Finger', 'Flabby', 'Flaky', 'Flaky', 'Flame', 'Flat', 'Flat', 'Flat-topped', 'Fleecy', 'Fluted', 'Fluted', 'Fly', 'Fly', 'Fly', 'Fly-agaric', 'Fog', 'Foliose', 'Foliose', 'Forked', 'Fragile', 'Fragile', 'Fringed', 'Fringed', 'Frosted', 'Fruiticose', 'Funnel', 'Funnel', 'Fuzzy', 'Gabled', 'Garlic', 'Garlic', 'Gastroid', 'Gem-studded', 'Gemmed', 'Giant', 'Giant', 'Gilled', 'Glistening', 'Glistening', 'Globe', 'Globe', 'Glutinous', 'Glutinous', 'Goblet', 'Gold', 'Gold', 'Golden', 'Golden', 'Gomphus', 'Gooseberry', 'Grassblade', 'Gray', 'Great', 'Green', 'Green-spored', 'Grey', 'Grey', 'Grooved', 'Hadrian\'s', 'Hairy', 'Hairy', 'Hare\'s', 'Harefoot', 'Haymaker\'s', 'Hazel', 'Head', 'Head', 'Heath', 'Hedgehod', 'Hedgehog', 'Hemlock', 'Hexagonal-pored', 'Hideous', 'Honey', 'Hongo', 'Hooded', 'Hoof', 'Horn', 'Horn', 'Horse', 'Hydrothyria', 'Hygrophorus', 'Hygroscopic', 'Indigo', 'Inky', 'Insect-egg', 'Insidious', 'Iodine', 'Ivory', 'Ivory', 'Jack-O-Lantern', 'Umbrella', 'Jelly', 'Jelly', 'Jersey', 'Kidney', 'Kidney', 'King', 'King', 'Lackluster', 'Lady', 'Larch', 'Late', 'Latticed', 'Lawyer\'s', 'Leafy', 'Leafy', 'Lemon', 'Lemon', 'Lilac', 'Ling', 'Lion\'s', 'Lion\'s', 'Lion\'s', 'Lipstick', 'Lipstick', 'Little', 'Llao', 'Lobster', 'Luminescent', 'Lumpy', 'Lung', 'Lung', 'Lurid', 'Man', 'Many-forked', 'Many-headed', 'Map', 'Maple', 'Marasmiellus', 'Maritime', 'Meadow', 'Meadowsweet', 'Mealy', 'Membranous', 'Mica', 'Mica', 'Midnight', 'Midnight', 'Miniature', 'Mock', 'Mossy', 'Mossy', 'Mottled', 'Multi-branched', 'Multicolor', 'Mushroom', 'Mustard', 'Mustard-yellow', 'Nail', 'Noble', 'Fuzzy', 'Oak', 'Oak-loving', 'Ochre', 'Ocre', 'Old', 'Orange', 'Orange', 'Orange-latex', 'Orange-peel', 'Orangeroter', 'Oregon', 'Oyster', 'Oyster-type', 'Pacific', 'Palamino', 'Pale', 'Paltry', 'Pan', 'Panther', 'Panther', 'Parasitic', 'Parasol', 'Parrot', 'Pea', 'Pear-shaped', 'Pear-shaped', 'Peeling', 'Pepper-spore', 'Peppermint', 'Pestle', 'Pestle', 'Petaled', 'Petite', 'Phaecollybia', 'Pheasant\'s', 'Pig\'s', 'Pin', 'Pin-cushion', 'Pine', 'Pine', 'Pinecone', 'Pink', 'Pink-Fleshed', 'Pink-Tipped', 'Pinkish', 'Pipecleaner', 'Pixie', 'Pixie-cup', 'Pleated', 'Pleated', 'Poached', 'Poison', 'Poison', 'Poor', 'Poplar', 'Porcelain', 'Powdered', 'Powdery', 'Pretzel', 'Prunes', 'Puffball', 'Puffball', 'Pulvinate', 'Purple', 'Purple-Spored', 'Pyxie', 'Queen', 'Questionable', 'Quilted', 'Ragged', 'Ramularia', 'Raspberry', 'Recurved', 'Red', 'Red-belted', 'Red-belted', 'Red-cracking', 'Red-juice', 'Redwood', 'Righteous', 'Rim', 'Ringed', 'Rock', 'Rockmoss', 'Rooting', 'Rosy', 'Rosy-Brown', 'Ruffle', 'Rufous', 'Russet', 'Rusty', 'Rusty', 'Sagebrush', 'Sagebrush', 'Salmon', 'Satan\'s', 'Satyr\'s', 'Saucered', 'Sauthern', 'Scaly', 'Scaly', 'Scarlet', 'Scarlet', 'Scrambled', 'Sculptured', 'Scum', 'Sessile', 'Sessile', 'Shaggy', 'Shaggy', 'Shaggy-mane', 'Shaggy-stalked', 'Shaggy-stalked', 'Shaly', 'Sheathed', 'Short-Stemmed', 'Shotgun', 'Shotgun', 'Shrimp', 'Sierran', 'Sierran', 'Silver-leaf', 'Silverleaf', 'Silvery-violet', 'Slime', 'Slimy', 'Slippery', 'Slippery', 'Small', 'Small', 'Smith\'s', 'Smoky', 'Smoky', 'Smooth', 'Snow', 'Snow-white', 'Snowbank', 'Snowy', 'Soft', 'Soil-living', 'Solid-stemmed', 'Sphere', 'Spiny', 'Splash', 'Splendid', 'Split', 'Split-pore', 'Spongy', 'Spotted', 'Spraypaint', 'Spring', 'Spring', 'Springtime', 'Spruce', 'Staghorn', 'Stag’s', 'Stalked', 'Stalked', 'Steel-blue', 'Stipplescale', 'Stonewall', 'Straight-branched', 'Strap', 'Strawberries', 'Strict', 'Strobilurus', 'Stump', 'Suburban', 'Sukver-Violet', 'Sulphur', 'Sulphur', 'Swamp', 'Sweet', 'Sweetbread', 'Tamarack', 'Tawny', 'Telephora', 'Thick', 'Thimble', 'Thin', 'Tigar', 'Tiger', 'Tile', 'Tinder', 'Tinder', 'Tippler\'s', 'Toothed', 'Toothpaste', 'Toy', 'Trametes', 'Trembling', 'Tripe', 'Triple', 'Trompeta', 'Truffle', 'Trumpet', 'Trumpet', 'Truncate', 'Tube', 'Tuckerman\'s', 'Tuckerman\'s', 'Tufted', 'Tumble', 'Tumbling', 'Turkey-tail', 'Turkey-tail', 'Two-colored', 'Umbrella', 'Unbranched', 'Unidentified', 'Urban', 'Varied', 'Variegated', 'Varnished', 'Varying', 'Veiled', 'Veiled', 'Veined', 'Velvet', 'Velvet', 'Velvet-cap', 'Velvet-cap', 'Velvety', 'Velvety', 'Verdigris', 'Vermicelli', 'Vinter', 'Violet', 'Violet', 'Viscid', 'Viscid', 'Walnut', 'Waxy', 'Weeping', 'Weeping', 'Western', 'Whiches', 'White', 'White', 'White-egg', 'White-footed', 'Whiteworm', 'Whitish', 'Wine', 'Winter', 'Winter', 'Winter', 'Witch\'s', 'Witch\'s', 'Wolf', 'Wolf\'s', 'Wolf’s', 'Wood', 'Wood', 'Woolly', 'Woolly', 'Wooly', 'Wooly', 'Wrinkled', 'Wrinkled', 'Wrinkled', 'Yellow', 'Yellow-Cracking', 'Yellow-Footed', 'Yellow-Fuzz', 'Yellow-Staining', 'Yellow-Stalked', 'Yellow-Stemmed', 'Yellow-Tipped', 'Yellow-Veiled', 'Yellowing', 'Yesquero', 'Zeller\'s', 'Ziza', 'Zoned'];
  const nm2 = ['Agareicus', 'Agaric', 'Agaric Mushroom', 'Agaricus', 'Agaricus', 'Agaricus', 'Agaricus ', 'Alfred\'s Cake', 'Amanita', 'Amanita', 'Amanita', 'Amanita', 'Amethyst Laccaria', 'Amoeba Slime Mold', 'And Cream ', 'And Custard', 'And Yellow Russula ', 'Angel', 'Angel ', 'Antlers', 'Azure', 'Babies', 'Baby', 'Back Mushroom ', 'Ball Lichen', 'Banded Polypore ', 'Bane', 'Barf', 'Bark Spot', 'Beacon', 'Beacon ', 'Beacon ', 'Beard', 'Beard', 'Beech Caps', 'Bellies ', 'Belly', 'Birch Bolete', 'Bird\'s Nest', 'Bird\'s Nest Fungus', 'Bird\'s Nest Fungus', 'Black Earth Tongue', 'Black Earth Tongue', 'Black Elfin Saddle', 'Black Helvella', 'Blewit', 'Blewit', 'Blewitt', 'Blue Entoloma', 'Blue Entoloma', 'Blusher', 'Blusher', 'Bolbitius ', 'Bolete', 'Bolete', 'Boletus', 'Bone Lichen', 'Bonnet', 'Bonnet', 'Bottle', 'Bracket', 'Bracket', 'Bradley ', 'Brain', 'Brain', 'Brain Jelly ', 'Brittlegill', 'Brittlegill', 'Brittlegill', 'Broadleaf Crust', 'Brown Elfin Saddle ', 'Bulgar', 'Bushy Beard Lichen', 'Butter', 'Butter', 'Butter Fungus', 'Butter Fungus ', 'Candy Cap', 'Canker Polypore', 'Cap', 'Cap', 'Cap', 'Cap Mushroom', 'Cap Mushroom', 'Caps ', 'Cardoncello', 'Cardoon', 'Caterpillarclub', 'Cavlier', 'Cep ', 'Cepe', 'Chalice Lichen', 'Champignon', 'Chanterelle', 'Chanterelle', 'Cheese Polypore', 'Chih', 'Chip Lichen', 'Cladonia', 'Cladonia ', 'Clitocybe', 'Club', 'Club Coral', 'Club Coral ', 'Clustered Ear Cup', 'Cobblestone Lichen', 'Coccora', 'Coccora', 'Collybia', 'Collybia', 'Colored Agaricus ', 'Cone Amanita', 'Cone Head ', 'Cone Slime', 'Conic Waxy Cap', 'Conifer Cortinarius', 'Conifer Cystoderma ', 'Conk', 'Conk', 'Conk Fungus', 'Conk Mushroom ', 'Conocybe', 'Conocybe', 'Coral', 'Coral', 'Coral', 'Coral Fungus', 'Coral Fungus', 'Coral Mushroom', 'Coral Mushroom', 'Cort', 'Cort', 'Cortinarius', 'Cortinarius', 'Cow Mushroom', 'Cracked Bolete', 'Crep', 'Crep', 'Crepidotus', 'Crepidotus', 'Crust', 'Crust', 'Cup', 'Cup', 'Cup', 'Cup Fungus', 'Cup Fungus', 'Cup Fungus', 'Cup Lichen', 'Cups', 'Curtain Crust', 'Curtain Crust', 'Cushion', 'Cushion Hypoxylon', 'Custard', 'De Indio', 'Death Cap', 'Deathcap', 'Deathcap', 'Deceiver', 'Deceiver', 'Destroyer Fungi ', 'Destroyer Fungus', 'Disco', 'Discus Mushroom', 'Dog-lichen', 'Dog-lichen ', 'Domecap', 'Drop Lichen', 'Dung Cup', 'Dyeball', 'Dyeball', 'Ear', 'Ear', 'Ear Fungus', 'Ears ', 'Ears Mushroom', 'Ears Mushroom', 'Earth Tongue', 'Earth Tongue ', 'Earthball', 'Earthball', 'Earthstar', 'Earthstar', 'Eater', 'Egg Bird\'s Nest Fungus ', 'Egg Fungus', 'Egg Slime', 'Elf Cup', 'Elfcup', 'Elfin Cup', 'Elfin Saddle', 'Elfin Saddle', 'Enokitake', 'Entoloma', 'Entoloma', 'Eye Lichen', 'Fairy Club', 'Fairy Club Mushroom', 'Fairy Cups', 'Fairy Cups Lemon Disco', 'Fairy Helmet', 'Fall Oyster', 'False Coral Mushroom ', 'False Morel', 'False Morel', 'Felt Lichen', 'Felt Lichen', 'Fern', 'Fingers', 'Fir Collybia', 'Fir Cone Mushroom', 'Firedot Lichen', 'Firedot Lichen ', 'Fishscale Lichen', 'Fishscale Lichen', 'Fishscale Lichen ', 'Flat-top Agaricus', 'Fog Lichen', 'Fog Lichen', 'Foot', 'Foot', 'Foot Coprinus', 'Fott', 'Freckle Pelt', 'Fungi', 'Fungi', 'Fungus', 'Fungus', 'Fungus', 'Honey Fungus  ', 'Honey Fungus  ', 'Funnel Cap', 'Funnel Cap', 'Funnel Cap ', 'Galerina ', 'Gel Bird\'s Nest', 'Giant Puffball', 'Gill', 'Gill ', 'Gill Polypore', 'Gilled Polypore', 'Globe Fungus', 'Gold Fleece Mushroom', 'Goldspeck Lichen ', 'Gomphidius', 'Gomphidius', 'Gomphus', 'Gray Disco', 'Gray Saddle ', 'Green Russula', 'Green-algae Coral', 'Greenshied Lichen', 'Greenshield Lichen', 'Grisette', 'Grisette', 'Gymnopilus ', 'Hair', 'Hair Lichen', 'Hair Lichen', 'Hairy Fairy Cup', 'Hallimasch ', 'Handkerchief', 'Hat', 'Hat ', 'Head', 'Head Fungus ', 'Heart Mushroom', 'Hedgehog', 'Helmling', 'Hericium', 'Hericium', 'Hobnail Canker', 'Horn', 'Hydnellum', 'Inkcap', 'Inkcap', 'Inkcap ', 'Inky Cap', 'Inky Cap', 'Jack', 'Jack', 'Jelly', 'Jelly', 'Jelly Club', 'Jelly Cone', 'Jelly Cone ', 'Jelly Cones', 'Jelly Drop', 'Jelly Drops', 'Jelly Drops ', 'Jelly Fungus', 'Jelly Fungus', 'Jelly Fungus', 'Jelly Lichen', 'Jelly Mushroom ', 'Jelly Roll', 'Jelly Spot', 'Jelly Disc', 'Jelly Disc', 'Jelly Disc', 'Jewel Lichen ', 'Knight', 'Knight Gas Agaric', 'Laccaria', 'Laccaria', 'Lactarius ', 'Laughing Gym', 'Leaf ', 'Leaf Spot', 'Lentinellus', 'Lepiota', 'Leptonia', 'Leptonia', 'Lichen', 'Lichen', 'Lichen', 'Lichen', 'Lichen', 'Licorice', 'Lilly Fungus', 'Lion ', 'Lishen', 'Lizard\'s Claw', 'Lover', 'Lung Lichen', 'Lungwort', 'Lungwort ', 'Man\'s Beard', 'Man\'s Fingers ', 'Man\'s Foot', 'Man\'s Foot', 'Man\'s Licorice', 'Mane', 'Mane', 'Mane Hericium', 'Mane Mushroom', 'Mane Mushroom ', 'Mans Fingers', 'Map Lichen', 'Marasmius', 'Marasmius', 'Maze Conk', 'Maze Flat Polypore', 'Maze Oak Polypore', 'Maze Polypore ', 'Mazegill', 'Mazegill Bracket ', 'Merulius', 'Mildew', 'Mildew ', 'Milk', 'Milk', 'Milk Cap', 'Milk Cap ', 'Milk Cup Mushroom', 'Milk Slime', 'Milk-cap', 'Milkcap', 'Milkcap ', 'Milky', 'Milky ', 'Mirasmius ', 'Mlushroom ', 'Mold', 'Mold ', 'Morel', 'Morel', 'Morel', 'Mould', 'Mould', 'Mushroom ', 'Mushroom ', 'Mushrooms', 'Mushrooms', 'Mycena', 'Mycena', 'Mycena', 'Navel ', 'Nest Fungi', 'Nest Fungus', 'Nest Fungus', 'Orange Elf-cup ', 'Orange Lichen', 'Orange Peel Fungus', 'Orange Peel Fungus ', 'Ori ', 'Oyster', 'Oyster', 'Oyster Fungus', 'Oysterling ', 'Oysterling ', 'Painted Suillus', 'Panaeolus', 'Panellus', 'Panus', 'Panus', 'Parasol', 'Parasol', 'Parchment', 'Peel', 'Peel Fungus', 'Peel Fungus ', 'Phellodon', 'Phlebia', 'Phlebia', 'Pholiota', 'Pholiota', 'Pine Spike', 'Pixie Cup', 'Pixie Cup', 'Pixie Cups', 'Pluteous', 'Pluteus', 'Poisonpie', 'Polvera Bejin ', 'Polypore', 'Polypore', 'Polypore', 'Porcini', 'Pored Bolete', 'Poria', 'Powdercap ', 'Powderhorn', 'Powderhorn Lichen', 'Prince', 'Prince ', 'Psalthyrella ', 'Psathyrella', 'Puff Ball', 'Puffball', 'Puffball', 'Puffball', 'Puffball Fungus ', 'Puffballs', 'Purple Cortinarius', 'Rag Lichen', 'Rebozuelo', 'Red Waxy Cap', 'Red Waxy Cap', 'Redwood Collybia', 'Redwood Mushroom', 'Ribbed Elfin Cup', 'Ribbed Elfin Cup', 'Rim Lichen', 'Rim-lichen', 'Rimmed Lichen', 'Ring Mushroom ', 'Rock Tripe', 'Rock Tripe', 'Rooter ', 'Rooter ', 'Rosette Lichen', 'Rosette Lichen ', 'Rot Fungus', 'Roundhead', 'Russula', 'Russula', 'Rust', 'Rust Gall', 'Rust Gall Fungus', 'Saddle', 'Saddle', 'Salad', 'Sandozi', 'Saw-toothed', 'Sawgill', 'Sawgill ', 'Scaber Stalk ', 'Scale', 'Scale', 'Scalycap', 'Script Lichen ', 'Seaver', 'Shank', 'Shanklet ', 'Shanklet ', 'Shanklet Branched Collybia', 'Shanklet Branched Collybia  ', 'Shelf', 'Shelf', 'Shelf Mushroom', 'Shelf Mushroom', 'Shelf Mushroom', 'Shelf Mushrooms', 'Shield', 'Shield Lichen', 'Shingle Lichen', 'Sickener', 'Sickener ', 'Silk Inocybe ', 'Slime', 'Slime ', 'Slime Milk ', 'Slime Mold', 'Slime Mold', 'Slimy Cortinarius', 'Slipper', 'Smooth', 'Smooth Host', 'Snuff-box', 'Snuffbox ', 'Soldier Lichen', 'Soldiers', 'Soldiers ', 'Spike', 'Spike', 'Spindle Coral', 'Spindles', 'Spindles ', 'Spot Fungus', 'Staghorn Fungus', 'Staghorn Jelly Fungus', 'Stagshorn', 'Stagshorn', 'Stagshorn Fungus', 'Stain', 'Stainer', 'Staining Mushroom', 'Steinpilz', 'Stem', 'Stereum', 'Stinkhorn', 'Stinkhorn', 'Stippleback Lichen', 'Strap', 'Stropharia', 'Stropharia', 'Sunburst Lichen', 'Sunburst Lichen', 'Sunshine Lichen', 'Sunshine Lichen', 'Swamp Russula ', 'Tar Spot ', 'Thimble-cap', 'Thrower ', 'Tile Lichen', 'Tile Lichen ', 'Toadskin Lichen', 'Toadstool', 'Toadstool ', 'Tooth', 'Tooth', 'Tooth Mushroom', 'Tooth Mushroom', 'Tooth Mushroom', 'Toothed Polypore', 'Top', 'Tough-shank', 'Toughshank', 'Trotter', 'Trumpet ', 'Tub', 'Tubaria', 'Tube Lichen', 'Tube Slime ', 'Tube Slime Mold', 'Tuft', 'Tuft', 'Tuft Mushroom', 'Tuft Mushrooms', 'Tuning Fork Mushroom', 'Tuning Fork Mushroom', 'Tuning Fork Mushrooms', 'Turkey Tail', 'Turkey Tail', 'Turkey Tails', 'Twiglet', 'Urn', 'Varnish Shelf', 'Vase Chanterelle', 'Vermilion Slender Caesar', 'Versicolor ', 'Vomit Slime ', 'Vomit Slime Mold', 'Vomit Slime Mold', 'Warted Mountain Puffball', 'Water Lichen', 'Waxcap', 'Waxcap', 'Waxy Cap', 'Waxy Cap', 'Waxycap ', 'Webcap', 'Webcap', 'Webcap ', 'White Coral Mushroom', 'White Elfin Saddle', 'White Russula', 'White Russula', 'Widow', 'Wig ', 'Wood Cup', 'Wood Stain ', 'Woodland Grisette ', 'Woodlove', 'Woodtuft', 'Woodwart', 'Woodwart', 'Woodwax', 'Woodwax', 'Worm Coral', 'Wrinkle-Lichen ', 'Yellow Jelly', 'Yellow Morel', 'Yellow Polypore', 'Yellow Slime', 'Yellow Slime Mold ', 'Yellow-veiled Amanita', 'de los Muertos ', 'False Truffel', 'Fungus', 'Helveola', 'Hortensis', 'Hydnum', 'Leoninus', 'Mane', 'Multifida', 'Oyster', 'Penicillata', 'Powderpuff', 'Ringless Amanita', 'Rustgill ', 'Rutilum', 'Serpens', 'Slime ', 'Spot Fungus', 'Tails', 'Trumpets', 'Veil Amanita']; {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    names = `${nm1[rnd]} ${nm2[rnd2]}`;
    return names;
  }
}

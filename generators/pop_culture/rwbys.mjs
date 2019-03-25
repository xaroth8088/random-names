export default function rwbys() {
  let names;
  let rnd;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aera (Aero Blue)', 'Aero (Aero Blue)', 'Alex (Electric Blue)', 'Amas (Amazon)', 'Amaz (Amazon)', 'Ame (Amethyst)', 'Amra (Amaranth)', 'Amranth (Amaranth)', 'Angel (Tangelo)', 'Angelo (Tangelo)', 'Anza (Nyanza)', 'Ape (Apricot)', 'App (Apricot)', 'Aryl (Arylide Yellow)', 'B.B. (Baby Blue)', 'Bae (Baby Blue)', 'Bana (Banana Yellow)', 'Banan (Banana Yellow)', 'Bann (Banana Yellow)', 'Barney (Barn Red)', 'Barry (Raspberry)', 'Baza (Bazaar)', 'Bazz (Bazaar)', 'Bean (Black Bean)', 'Bei (Beige)', 'Berg (Iceberg)', 'Berry (Raspberry)', 'Black (Black)', 'Blake (Black)', 'Blizz (Blizzard Blue)', 'Blues (Blue)', 'Bole (Bole)', 'Bones (Bone)', 'Bran (Bronze)', 'Brann (Brown)', 'Brans (Bronze)', 'Brawn (Brown)', 'Bress (Brass)', 'Brock (Brick Red)', 'Bron (Brown)', 'Bross (Brass)', 'Brown (Brown)', 'Bubba (Bubble Gum)', 'Bubble (Bubbles)', 'Bubbles (Bubbles)', 'Burgundy (Burgundy)', 'Byzz (Byzantium)', 'Cap (Capri)', 'Cappie (Capri)', 'Carl (Coral)', 'Carnel (Carnelian)', 'Carr (Carmine)', 'Cedric (Cedar Chest)', 'Cerry (Cerulean)', 'Cerule (Cerulean)', 'Cerulean (Cerulean)', 'Chad (Cedar Chest)', 'Champ (Champagne)', 'Charles (Charcoal)', 'Charlie (Charcoal)', 'Charrie (Charcoal)', 'Cho (Chocolate)', 'Choco (Chocolate)', 'Chro (Chrome)', 'Ciane (Cyan)', 'Cobe (Cobalt Blue)', 'Coby (Cobalt Blue)', 'Coco (Cocoa Brown)', 'Cole (Charcoal)', 'Coop (Copper)', 'Cooper (Copper)', 'Cop (Copper)', 'Cornel (Cornell Red)', 'Crim (Crimson)', 'Cye (Cyan)', 'Daff (Daffodil)', 'Daffy (Daffodil)', 'Dan (Dandelion)', 'Dandee (Dandelion)', 'Dandelion (Dandelion)', 'Dango (Fandango)', 'Danny (Dandelion)', 'Dazz (Razzle Dazzle)', 'Den (Denim)', 'Dennie (Denim)', 'Desmond (Desert)', 'Dew (Honeydew)', 'Diam (Diamond)', 'Diamond (Diamond)', 'Dodger (Dodger Blue)', 'Duke (Duke Blue)', 'Dusty (Dust Storm)', 'Earl (Pearl)', 'Ebon (Ebony)', 'Elec (Electric Blue)', 'Em (Emerald)', 'Emeric (Emerald)', 'Emert (Emerald)', 'Fall (Fallow)', 'Fiye (Firebrick)', 'Flae (Flame)', 'Forest (Forest Green)', 'Forrest (Forest Green)', 'Frost (Frost)', 'Ghost (Ghost White)', 'Gole (Gold)', 'Grall (Grullo)', 'Gran (Granite Gray)', 'Gray (Gray)', 'Graz (Grizzly)', 'Greene (Green)', 'Grey (Grey)', 'Grizz (Grizzly)', 'Grull (Grullo)', 'Gundy (Burgundy)', 'Haley (Harlequin)', 'Han (Han Blue)', 'Hans (Han Blue)', 'Harl (Harlequin)', 'Harley (Harlequin)', 'Hog (Mahogany)', 'Honeydew (Honeydew)', 'Hunter (Hunter Green)', 'Ice (Iceberg)', 'Ickle (Tickle Me Pink)', 'Imp (Imperial)', 'Indi (Indigo)', 'Indie (Indigo)', 'Jae (Jade)', 'Jas (Jasmine)', 'Jasper (Jasper)', 'Jay (Jade)', 'Jazz (Jasmine)', 'Jet (Jet)', 'Kha (Khaki)', 'Koa (Deep Koamaru)', 'Kobe (Kobe)', 'Kobi (Kobi)', 'Krim (Crimson)', 'Laffa (Lava)', 'Lapis (Lapis Lazuli)', 'Lav (Lavender)', 'Lave (Lavender)', 'Lavi (Lava)', 'Lazu (Lapis Lazuli)', 'Lec (Electric Blue)', 'Lennie (Linen)', 'Levi (Lava)', 'Liam (Lemon/Lime)', 'Lilo (Lilac)', 'Linnie (Linen)', 'Lion (Lion)', 'Lionel (Lion)', 'Liv (Livid)', 'Livi (Livid)', 'Lum (Lumber)', 'Lye (Lion)', 'Mach (Magenta)', 'Mag (Magnolia)', 'Mahog (Mahogany)', 'Mahogany (Mahogany)', 'Mahony (Mahogany)', 'Mai (Maize)', 'Malach (Malachite)', 'Malachite (Malachite)', 'Maron (Maroon)', 'Maru (Deep Koamaru)', 'Mason (Amazon)', 'Maze (Maize)', 'Mazon (Amazon)', 'Mell (Melon)', 'Mello (Mellow Apricot)', 'Melo (Melon)', 'Melone (Melon)', 'Meral (Emerald)', 'Merry (Marigold)', 'Mika (Mikado Yellow)', 'Ming (Ming)', 'Mul (Mulberry)', 'Myst (Mystic)', 'Nav (Navy Blue)', 'Nava (Navajo White)', 'Nave (Navy Blue)', 'Nean (Nyanza)', 'Nell (Carnelian)', 'Nick (Nickel)', 'Nix (Onyx)', 'Nyan (Nyanza)', 'Ocean (Ocean Blue)', 'Ollie (Olive)', 'Onyx (Onyx)', 'Orchie (Orchid)', 'Pal (Pale)', 'Pastel (Pastel)', 'Percy (Persimmon)', 'Perry (Pear)', 'Persimon (Persimmon)', 'Pewter (Pewter Blue)', 'Pico (Picton Blue)', 'Picto (Picton Blue)', 'Pinkie (Pink)', 'Psy (Psychedelic Purple)', 'Quicksilver (Quick Silver)', 'Quinn (Harlequin)', 'Rad (Radical Red)', 'Raj (Rajah)', 'Rajah (Rajah)', 'Raldo (Emerald)', 'Ranger (Orange)', 'Ray (Sunray)', 'Raye (Sunray)', 'Razz (Razzmatazz)', 'Red (Red)', 'Reg (Regalia)', 'Reggie (Regalia)', 'Reo (Aureolin)', 'Reolin (Aureolin)', 'Rhyt (Rhythm)', 'Rick (Limerick)', 'Rob (Robin)', 'Robin (Robin)', 'Rom (Roman Silver)', 'Roman (Roman Silver)', 'Ross (Rose)', 'Roy (Royal Blue)', 'Rube (Ruby)', 'Rud (Ruddy)', 'Ruddy (Ruddy)', 'Ruffle (Rufous)', 'Ruffus (Rufous)', 'Rufus (Rufous)', 'Russ (Russet)', 'Russet (Russet)', 'Rusty (Rusty Red)', 'Saff (Saffron)', 'Sal (Red Salsa)', 'Sall (Salmon)', 'Sas (Sasquatch Socks)', 'Scar (Scarlet)', 'Seal (Seal Brown)', 'Sean (Sienna)', 'Sep (Sepia)', 'Shad (Shadow)', 'Shane (Sheen Green)', 'Shean (Sienna)', 'Sheen (Sheen Green)', 'Sheldon (Seashell)', 'Shelly (Seashell)', 'Sill (Silver)', 'Silver (Silver)', 'Sinn (Sinopia)', 'Sinna (Cinnamon)', 'Sino (Sinopia)', 'Sizz (Sizzling Red)', 'Sky (Sky Blue)', 'Skyler (Sky Blue)', 'Slate (Slate Blue)', 'Slater (Slate Blue)', 'Smo (Smoke)', 'Smokey (Smokey)', 'Sno (Snow)', 'Snow (Snow)', 'Sonic (Sonic Silver)', 'Steele (Steel Blue)', 'Steff (Saffron)', 'Stephon (Saffron)', 'Storm (Stormcloud)', 'Sugg (Sugar)', 'Sun (Sunny)', 'Sunny (Sunny)', 'Sweets (Sweet Brown)', 'Tanner (Tan)', 'Taupher (Taupe)', 'Teal (Teal)', 'Tealle (Teal)', 'Tenn (Tenne)', 'Tenne (Tenne)', 'Thomas (Tomato)', 'Tiger (Tiger\'s Eye)', 'Titus (Titanium Yellow)', 'Tom (Tomato)', 'Tommie (Tomato)', 'Turk (Turquoise)', 'Tyrian (Tyrian Purple)', 'Ube (Ube)', 'Vajo (Navajo White)', 'Van (Vanilla)', 'Vance (Vanilla)', 'Vender (Lavender)', 'Verm (Vermilion)', 'Vest (Harvest Gold)', 'Vester (Harvest Gold)', 'Vi (Violet)', 'Vio (Violet)', 'Xan (Xanadu)', 'Xana (Xanadu)', 'Xander (Xanadu)', 'Zaff (Zaffre)', 'Zar (Bazaar)', 'Zure (Azure)'];
  const nm2 = ['Aera (Aero Blue)', 'Aero (Aero Blue)', 'Alex (Electric Blue)', 'Amara (Amaranth)', 'Amaranth (Amaranth)', 'Amas (Amazon)', 'Amaz (Amazon)', 'Amber (Amber)', 'Ame (Amethyst)', 'Amethyst (Amethyst)', 'Amra (Amaranth)', 'Amranth (Amaranth)', 'Angel (Tangelo)', 'Anza (Nyanza)', 'App (Apricot)', 'Aryl (Arylide Yellow)', 'Aryle (Arylide Yellow)', 'Aub (Auburn)', 'Aube (Auburn)', 'Aureo (Aureolin)', 'Azula (Lapis Lazuli)', 'Azuli (Lapis Lazuli)', 'Azure (Azure)', 'B.B. (Baby Blue)', 'Babe (Baby Blue)', 'Bae (Baby Blue)', 'Bana (Banana Yellow)', 'Banan (Banana Yellow)', 'Baza (Bazaar)', 'Bazz (Bazaar)', 'Bei (Beige)', 'Bella (Isabelline)', 'Black (Black)', 'Blake (Black)', 'Blizz (Blizzard Blue)', 'Blizzy (Blizzard Blue)', 'Blues (Blue)', 'Bole (Bole)', 'Bonbon (Rose Bonbon)', 'Bones (Bone)', 'Bonnie (Rose Bonbon)', 'Bonny (Bone)', 'Bress (Brass)', 'Bubble (Bubbles)', 'Bubbles (Bubbles)', 'Byzz (Byzantium)', 'Byzzi (Byzantium)', 'Calli (Eucalyptus)', 'Cap (Capri)', 'Cappie (Capri)', 'Capri (Capri)', 'Carmen (Carmine)', 'Carmine (Carmine)', 'Carmon (Carmine)', 'Carol (Coral)', 'Carr (Carmine)', 'Cat (Catalina Blue)', 'Catalina (Catalina Blue)', 'Catelin (Cataline Blue)', 'Catlyn (Catalina Blue)', 'Ceila (Celadon Blue)', 'Celese (Celeste)', 'Celeste (Celeste)', 'Cella (Celadon Blue)', 'Cenna (Cinnamon)', 'Cerise (Cerise)', 'Cerry (Cerulean)', 'Cerule (Cerulean)', 'Cerulean (Cerulean)', 'Charlie (Charcoal)', 'Charrie (Charcoal)', 'Cherry (Cherry)', 'Cho (Chocolate)', 'Choco (Chocolate)', 'Chro (Chrome)', 'Ciane (Cyan)', 'Clair (Claret)', 'Clare (Claret)', 'Cobe (Cobalt Blue)', 'Coby (Cobalt Blue)', 'Coco (Cocoa Brown)', 'Coleen (Charcoal)', 'Cye (Cyan)', 'Daff (Daffodil)', 'Daffy (Daffodil)', 'Dandee (Dandelion)', 'Dandelion (Dandelion)', 'Dango (Fandango)', 'Danny (Dandelion)', 'Dazz (Razzle Dazzle)', 'Den (Denim)', 'Dennie (Denim)', 'Desire (Desire)', 'Desiree (Desire)', 'Dew (Honeydew)', 'Diam (Diamond)', 'Diamond (Diamond)', 'Dodger (Dodger Blue)', 'Ebon (Ebony)', 'Ebony (Ebony)', 'Elec (Electric Blue)', 'Elisa (Liseran Purple)', 'Elise (Liseran Purple)', 'Em (Emerald)', 'Emerald (Emerald)', 'Emi (Eminence)', 'Emie (Eminence)', 'Fall (Fallow)', 'Fandy (Fandango)', 'Faune (Fawn)', 'Fawn (Fawn)', 'Fiye (Firebrick)', 'Flae (Flame)', 'Flaye (Flame)', 'Fleur (Floral White/Flower)', 'Flora (Floral White)', 'Flore (Floral White)', 'Fusia (Fuchsia)', 'Ginger (Ginger)', 'Goldie (Gold)', 'Gole (Gold)', 'Gran (Granite Gray)', 'Gray (Gray)', 'Graz (Grizzly)', 'Greene (Green)', 'Grey (Grey)', 'Gundy (Burgundy)', 'Haley (Harlequin)', 'Harl (Harlequin)', 'Harlequin (Harlequin)', 'Holly (Hollywood Cerise)', 'Honeydew (Honeydew)', 'Hunter (Hunter Green)', 'Ice (Iceberg)', 'Ickle (Tickle Me Pink)', 'Imp (Imperial)', 'Indi (Indigo)', 'Indie (Indigo)', 'Indigo (Indigo)', 'Iris (Iris)', 'Isa (Isabelline)', 'Isabella (Isabelline)', 'Ivo (Ivory)', 'Ivory (Ivory)', 'Jade (Jade)', 'Jae (Jade)', 'Jas (Jasmine)', 'Jasmine (Jasmine)', 'Jay (Jade)', 'Jazz (Jasmine)', 'June (June Bud)', 'Kha (Khaki)', 'Koa (Deep Koamaru)', 'Kobe (Kobe)', 'Kobi (Kobi)', 'Lacey (Old Lace)', 'Laffa (Lava)', 'Lapis (Lapis Lazuli)', 'Lav (Lavender)', 'Lave (Lavender)', 'Lavi (Lava)', 'Lazu (Lapis Lazuli)', 'Lec (Electric Blue)', 'Lectrie (Electric Blue)', 'Lennie (Linen)', 'Levi (Lava)', 'Lilly (Lilac)', 'Lilo (Lilac)', 'Lilu (Lilac)', 'Linnie (Linen)', 'Lisa (Liseran Purple)', 'Liv (Livid)', 'Livi (Livid)', 'Lum (Lumber)', 'Lye (Lion)', 'Mae (Maize)', 'Mag (Magnolia)', 'Maggy (Magenta)', 'Magnolia (Magnolia)', 'Mai (Maize)', 'Maria (Marigold)', 'Marigold (Marigold)', 'Marion (Maroon)', 'Maron (Maroon)', 'Maru (Deep Koamaru)', 'Mauve (Mauve)', 'Maze (Maize)', 'Mazon (Amazon)', 'Meg (Magenta)', 'Mell (Melon)', 'Mello (Mellow Apricot)', 'Melo (Melon)', 'Melone (Melon)', 'Meral (Emerald)', 'Merry (Marigold)', 'Methy (Amethyst)', 'Mika (Mikado Yellow)', 'Mindy (Mindaro)', 'Ming (Ming)', 'Misty (Azure Mist)', 'Mul (Mulberry)', 'Myst (Mystic)', 'Mysti (Mystic)', 'Nav (Navy Blue)', 'Nava (Navajo White)', 'Nave (Navy Blue)', 'Nean (Nyanza)', 'Nell (Carnelian)', 'Nella (Vanille)', 'Neo (Neon Green)', 'Nilla (Vanilla)', 'Nix (Onyx)', 'Nyan (Nyanza)', 'Ocean (Ocean Blue)', 'Olive (Olive)', 'Ollie (Olive)', 'Onyxia (Onyx)', 'Orchid (Orchid)', 'Orchie (Orchid)', 'Pal (Pale)', 'Pastel (Pastel)', 'Peach (Peach)', 'Pearl (Pearl)', 'Persia (Persian Blue)', 'Phusia (Fuchsia)', 'Pico (Picton Blue)', 'Picto (Picton Blue)', 'Pinkie (Pink)', 'Pixi (Pixie Powder)', 'Pixie (Pixie Powder)', 'Princess (Princess Perfume)', 'Quicksilver (Quick Silver)', 'Quinn (Harlequin)', 'Raj (Rajah)', 'Rajah (Rajah)', 'Ray (Sunray)', 'Raye (Sunray)', 'Razma (Razzmatazz)', 'Razz (Razzmatazz)', 'Reg (Regalia)', 'Reggie (Regalia)', 'Rhythm (Rhythm)', 'Robin (Robin)', 'Rom (Roman Silver)', 'Rose (Rose)', 'Rube (Ruby)', 'Ruby (Ruby)', 'Saff (Saffron)', 'Saffron (Saffron)', 'Sage (Sage)', 'Sal (Red Salsa)', 'Sall (Salmon)', 'Samone (Salmon)', 'Sangie (Sangria)', 'Sangria (Sangria)', 'Sapphire (Sapphire)', 'Sas (Sasquatch Socks)', 'Scarlet (Scarlet)', 'Senna (Sienna)', 'Sep (Sepia)', 'Sepi (Sepia)', 'Sepia (Sepia)', 'Shae (Shadow)', 'Shelly (Seashell)', 'Sia (Sienna)', 'Sienna (Sienna)', 'Sienne (Cyan)', 'Sill (Silver)', 'Silver (Silver)', 'Sinn (Sinopia)', 'Sinna (Cinnamon)', 'Sino (Sinopia)', 'Sizz (Sizzling Red)', 'Sky (Sky Blue)', 'Skye (Sky Blue)', 'Skyler (Sky Blue)', 'Smo (Smoke)', 'Sno (Snow)', 'Snow (Snow)', 'Steff (Saffron)', 'Sugg (Sugar)', 'Sun (Sunny)', 'Sunny (Sunny)', 'Sweets (Sweet Brown)', 'Tanner (Tan)', 'Tara (Terra Cotta)', 'Teal (Teal)', 'Tealle (Teal)', 'Tenn (Tenne)', 'Tenne (Tenne)', 'Tera (Terra Cotta)', 'Thara (Terra Cotta)', 'Tickle (Tickle Me Pink)', 'Tiger (Tiger\'s Eye)', 'Tina (Platinum)', 'Tulip (Tulip)', 'Tyra (Tyrian Purple)', 'Ube (Ube)', 'Umber (Umber)', 'Vajo (Navajo White)', 'Van (Vanilla)', 'Vera (Veronica)', 'Veronica (Veronica)', 'Vest (Harvest Gold)', 'Vi (Violet)', 'Vio (Violet)', 'Viole (Violet)', 'Violet (Violet)', 'Viri (Viridian)', 'Winter (Winter Wizard)', 'Wisteria (Wisteria)', 'Xan (Xanadu)', 'Xana (Xanadu)', 'Xanadu (Xanadu)', 'Yenna (Sienna)', 'Zaff (Zaffre)', 'Zar (Bazaar)', 'Zure (Azure)'];
  const nm3 = ['Aera (Aero Blue)', 'Aero (Aero Blue)', 'Alex (Electric Blue)', 'Amas (Amazon)', 'Amaz (Amazon)', 'Ame (Amethyst)', 'Amra (Amaranth)', 'Amranth (Amaranth)', 'Angel (Tangelo)', 'Anza (Nyanza)', 'App (Apricot)', 'Aryl (Arylide Yellow)', 'B.B. (Baby Blue)', 'Bae (Baby Blue)', 'Bana (Banana Yellow)', 'Banan (Banana Yellow)', 'Baza (Bazaar)', 'Bazz (Bazaar)', 'Bei (Beige)', 'Black (Black)', 'Blake (Black)', 'Blizz (Blizzard Blue)', 'Blues (Blue)', 'Bole (Bole)', 'Bones (Bone)', 'Bress (Brass)', 'Bubble (Bubbles)', 'Bubbles (Bubbles)', 'Byzz (Byzantium)', 'Cap (Capri)', 'Cappie (Capri)', 'Carr (Carmine)', 'Cerry (Cerulean)', 'Cerule (Cerulean)', 'Cerulean (Cerulean)', 'Charlie (Charcoal)', 'Charrie (Charcoal)', 'Cho (Chocolate)', 'Choco (Chocolate)', 'Chro (Chrome)', 'Ciane (Cyan)', 'Cobe (Cobalt Blue)', 'Coby (Cobalt Blue)', 'Coco (Cocoa Brown)', 'Cye (Cyan)', 'Daff (Daffodil)', 'Daffy (Daffodil)', 'Dandee (Dandelion)', 'Dandelion (Dandelion)', 'Dango (Fandango)', 'Danny (Dandelion)', 'Dazz (Razzle Dazzle)', 'Den (Denim)', 'Dennie (Denim)', 'Dew (Honeydew)', 'Diam (Diamond)', 'Diamond (Diamond)', 'Dodger (Dodger Blue)', 'Ebon (Ebony)', 'Elec (Electric Blue)', 'Em (Emerald)', 'Fall (Fallow)', 'Fiye (Firebrick)', 'Flae (Flame)', 'Gole (Gold)', 'Gran (Granite Gray)', 'Gray (Gray)', 'Graz (Grizzly)', 'Greene (Green)', 'Grey (Grey)', 'Gundy (Burgundy)', 'Haley (Harlequin)', 'Harl (Harlequin)', 'Honeydew (Honeydew)', 'Hunter (Hunter Green)', 'Ice (Iceberg)', 'Ickle (Tickle Me Pink)', 'Imp (Imperial)', 'Indi (Indigo)', 'Indie (Indigo)', 'Jae (Jade)', 'Jas (Jasmine)', 'Jay (Jade)', 'Jazz (Jasmine)', 'Kha (Khaki)', 'Koa (Deep Koamaru)', 'Kobe (Kobe)', 'Kobi (Kobi)', 'Laffa (Lava)', 'Lapis (Lapis Lazuli)', 'Lav (Lavender)', 'Lave (Lavender)', 'Lavi (Lava)', 'Lazu (Lapis Lazuli)', 'Lec (Electric Blue)', 'Lennie (Linen)', 'Levi (Lava)', 'Lilo (Lilac)', 'Linnie (Linen)', 'Liv (Livid)', 'Livi (Livid)', 'Lum (Lumber)', 'Lye (Lion)', 'Mag (Magnolia)', 'Mai (Maize)', 'Maron (Maroon)', 'Maru (Deep Koamaru)', 'Maze (Maize)', 'Mazon (Amazon)', 'Mell (Melon)', 'Mello (Mellow Apricot)', 'Melo (Melon)', 'Melone (Melon)', 'Meral (Emerald)', 'Merry (Marigold)', 'Mika (Mikado Yellow)', 'Ming (Ming)', 'Mul (Mulberry)', 'Myst (Mystic)', 'Nav (Navy Blue)', 'Nava (Navajo White)', 'Nave (Navy Blue)', 'Nean (Nyanza)', 'Nell (Carnelian)', 'Nix (Onyx)', 'Nyan (Nyanza)', 'Ocean (Ocean Blue)', 'Ollie (Olive)', 'Orchie (Orchid)', 'Pal (Pale)', 'Pastel (Pastel)', 'Pico (Picton Blue)', 'Picto (Picton Blue)', 'Pinkie (Pink)', 'Quicksilver (Quick Silver)', 'Quinn (Harlequin)', 'Raj (Rajah)', 'Rajah (Rajah)', 'Ray (Sunray)', 'Raye (Sunray)', 'Razz (Razzmatazz)', 'Reg (Regalia)', 'Reggie (Regalia)', 'Robin (Robin)', 'Rom (Roman Silver)', 'Rube (Ruby)', 'Saff (Saffron)', 'Sal (Red Salsa)', 'Sall (Salmon)', 'Sas (Sasquatch Socks)', 'Sep (Sepia)', 'Shelly (Seashell)', 'Sill (Silver)', 'Silver (Silver)', 'Sinn (Sinopia)', 'Sinna (Cinnamon)', 'Sino (Sinopia)', 'Sizz (Sizzling Red)', 'Sky (Sky Blue)', 'Skyler (Sky Blue)', 'Smo (Smoke)', 'Sno (Snow)', 'Snow (Snow)', 'Steff (Saffron)', 'Sugg (Sugar)', 'Sun (Sunny)', 'Sunny (Sunny)', 'Sweets (Sweet Brown)', 'Tanner (Tan)', 'Teal (Teal)', 'Tealle (Teal)', 'Tenn (Tenne)', 'Tenne (Tenne)', 'Ube (Ube)', 'Vajo (Navajo White)', 'Van (Vanilla)', 'Vest (Harvest Gold)', 'Vi (Violet)', 'Vio (Violet)', 'Xan (Xanadu)', 'Xana (Xanadu)', 'Zaff (Zaffre)', 'Zar (Bazaar)', 'Zure (Azure)'];
  const nm4 = ['ABRN (Auburn)', 'ACID (Acid)', 'AERO (Aero Blue)', 'AICE (Ice)', 'AMBR (Amber)', 'AMZN (Amazon)', 'APLE (Apple)', 'APLL (Apple)', 'AQMR (Aquamarine)', 'AQUA (Aquamarine)', 'ARMY (Army Green)', 'ASID (Acid)', 'ASRE (Azure)', 'ASSH (Ash Grey)', 'ASUR (Azure)', 'AZID (Acid)', 'AZRE (Azure)', 'AZTC (Aztec Gold)', 'AZUR (Azure)', 'BANN (Banana Yellow)', 'BARB (Barbie Pink)', 'BARN (Barn Red)', 'BBBL (Baby Blue)', 'BBGM (Bubble Gum)', 'BBLE (Bubbles)', 'BBLS (Bubbles)', 'BBLU (Baby Blue)', 'BBNT (Bluebonnet)', 'BBPK (Baby Pink)', 'BBRY (Blue Berry)', 'BCRL (Black Coral)', 'BEGE (Beige)', 'BEIG (Beige)', 'BGND (Burgundy)', 'BGRN (Blue-Green)', 'BISQ (Bisque)', 'BLBN (Black Bean)', 'BLGR (Blue-Green)', 'BLJN (Blue Jeans)', 'BLND (Blond)', 'BLSH (Blush)', 'BLSM (Cherry Blossom)', 'BLZZ (Blizzard Blue)', 'BNBN (Rose Bonbon)', 'BNNA (Banana Yellow)', 'BONE (Bone)', 'BOTL (Bottle Green)', 'BPNK (Baby Pink)', 'BRAS (Brass)', 'BRAZ (Brass)', 'BRBI (Barbie Pink)', 'BRBY (Barbie Pink)', 'BRGN (Burgundy)', 'BRNZ (Bronze)', 'BRSS (Brass)', 'BRWN (Brown)', 'BRZZ (Brass)', 'BSDN (Obsidian)', 'BSQE (Bisque)', 'BSTR (Bistre)', 'BSTR (French Bistre)', 'BTLE (Bottle Green)', 'BVER (Beaver Brown)', 'BZAR (Bazaar)', 'BZNT (Byzantium)', 'BZTM (Byzantium)', 'CAML (Camel)', 'CBLT (Cobalt)', 'CBRG (Iceberg)', 'CCBR (Cocoa Brown)', 'CCNT (Coconut)', 'CDAR (Cedar Chest)', 'CDMM (Cadmium Red)', 'CDNL (Cardinal)', 'CEDR (Cedar Chest)', 'CFLT (Cafe Au Lait)', 'CFNR (Cafe Noir)', 'CHLC (Silver Chalice)', 'CHLT (Chocolate)', 'CHMP (Champagne)', 'CHRE (Ochre)', 'CHRM (Chrome)', 'CHRY (Cherry)', 'CLDN (Celadon Blue)', 'CLPT (Eucalyptus)', 'CLRT (Claret)', 'CLST (Celeste)', 'CMEL (Camel)', 'CMPN (Champagne)', 'CMSN (Crimson)', 'CMZN (Crimson)', 'CNBR (Cinnabar)', 'CNDY (Candycane White)', 'CNMN (Cinnamon)', 'CNRS (China Rose)', 'COCO (Cocoa Brown)', 'CORL (Coral)', 'CPPR (Copper)', 'CRAL (Coral)', 'CRCL (Charcoal)', 'CRDV (Cordovan)', 'CREM (Cream)', 'CRIS (Cerise)', 'CRLN (Carnelian)', 'CRLN (Cerulean)', 'CRME (Chrome)', 'CRML (Caramel)', 'CRMN (Carmine Pink)', 'CRMN (Carmine Red)', 'CRMN (Carmine)', 'CRMS (Crimson)', 'CRMZ (Crimson)', 'CRRT (Carrot Orange)', 'CRSN (Crimson)', 'CSNT (Chestnut)', 'CTCD (Cotton Candy)', 'CTRN (Citrine)', 'CTSL (Celestial Blue)', 'CTTN (Cotton)', 'CTWB (Catawba)', 'CYAN (Cyan)', 'DDLN (Dandelion)', 'DFDL (Daffodil)', 'DGWD (Dogwood Rose)', 'DIRT (Dirt)', 'DMND (Diamond)', 'DNDL (Dandelion)', 'DNIM (Denim)', 'DRAB (Drab)', 'DSRE (Desire)', 'DSRT (Desert)', 'DUST (Dust Storm)', 'EMRL (Emerald)', 'FAWN (Fawn)', 'FBRK (Firebrick)', 'FCHS (Fuchsia)', 'FDNG (Fandango)', 'FLAM (Flame)', 'FLAX (Flax)', 'FLLW (Fallow)', 'FLME (Flame)', 'FLMG (Flamingo Pink)', 'FLRL (Floral White)', 'FLRL (Floral)', 'FLRS (Fluorescent)', 'FMGO (Flamingo Pink)', 'FMNG (Flamingo Pink)', 'FRRI (Ferrari Red)', 'FRST (Forest Green)', 'FRST (Frost Blue)', 'FSBT (Frostbite)', 'FSIA (Fuchsia)', 'GHST (Ghost White)', 'GLTR (Glitter)', 'GMTL (Gunmetal)', 'GNDY (Burgundy)', 'GNMT (Dark Gunmetal)', 'GOLD (Gold)', 'GRAY (Gray)', 'GREY (Grey)', 'GRNT (Granite Grey)', 'GRPE (Grape)', 'GRZL (Grizzly)', 'GRZY (Grizzly)', 'GSHL (Eggshell)', 'HNDW (Honeydew)', 'HNTR (Hunter Green)', 'HRQN (Harlequin)', 'HRVS (Harvest Gold)', 'HVST (Harvest Gold)', 'IDGO (Indigo)', 'INDG (Indigo)', 'IRIS (Iris)', 'IVOR (Ivory)', 'IVRY (Ivory)', 'IYCE (Ice)', 'JADE (Jade)', 'JETT (Jet)', 'JNGL (Jungle Green)', 'JSMN (Jasmine)', 'JSPR (Jasper)', 'KAKI (Khaki)', 'KHKI (Khaki)', 'KMRU (Deep Koamaru)', 'KOBE (Kobe)', 'KOBI (Kobi)', 'KYLM (Key Lime)', 'LAGN (Lagoon)', 'LARL (Laurel Green)', 'LAVA (Lava)', 'LCRC (Licorice)', 'LCTC (Electric Blue)', 'LCTR (Electric Blue)', 'LEMN (Lemon)', 'LETR (Leather)', 'LGOO (Lagoon)', 'LILC (Lilac)', 'LIME (Lime)', 'LINN (Linen)', 'LIVD (Livid)', 'LIVR (Dark Liver)', 'LLAC (Lilac)', 'LMBR (Lumber)', 'LMON (Lemon)', 'LMRK (Limerick)', 'LPIS (Lapis Lazuli)', 'LTER (Leather)', 'LTHR (Leather)', 'LTRA (Ultramarine)', 'LUST (Lust Red)', 'LVDR (Lavender)', 'LVER (Dark Liver)', 'LVID (Livid)', 'LVND (Lavender)', 'LZLI (Lapis Lazuli)', 'LZRD (Green Lizard)', 'MARN (Maroon)', 'MAUV (Mauve)', 'MAZE (Maize)', 'MAZN (Amazon)', 'MBER (Amber)', 'MDDR (Rose Madder)', 'MDNT (Midnight Blue)', 'MDRN (Mandarin)', 'METL (Metal Grey)', 'MGNL (Magnolia)', 'MGNO (Magnolia)', 'MGNT (Magenta)', 'MGNY (Mahogany)', 'MGTA (Magenta)', 'MHGN (Mahogany)', 'MINT (Mint)', 'MIZE (Maize)', 'MLGT (Malachite)', 'MLTE (Malachite)', 'MNGO (Mango)', 'MNTE (Manatee)', 'MOSS (Moss Green)', 'MOVE (Mauve)', 'MPRD (Imperial Red)', 'MPRL (Imperial Blue)', 'MRLD (Emerald)', 'MRNT (Amaranth)', 'MROO (Maroon)', 'MSTC (Mystic)', 'MSTN (Moonstone Blue)', 'MTLL (Metal Grey)', 'MTST (Amethyst)', 'MYZE (Maize)', 'NAVY (Navy Blue)', 'NCKL (Nickel)', 'NDGO (Indigo)', 'NEON (Neon)', 'NVBL (Navy Blue)', 'NVJO (Navajo White)', 'OCHR (Ochre)', 'OLIV (Olive)', 'OLVE (Olive)', 'ONYX (Onyx)', 'ORNG (Orange)', 'PALE (Pale)', 'PCFC (Pacific Blue)', 'PEAR (Pear)', 'PECH (Peach)', 'PERL (Pearl)', 'PGMN (Pigment)', 'PHLX (Phlox)', 'PINE (Pine Green)', 'PIXI (Pixie Powder)', 'PLTM (Platinum)', 'PLTN (Platinum)', 'PLUM (Plum)', 'PMKN (Pumpkin)', 'PNPL (Pineapple)', 'PPYA (Papaya)', 'PRCT (Apricot)', 'PRDT (Peridot)', 'PRKT (Apricot)', 'PRNE (Prune)', 'PRPL (Purple)', 'PSTC (Pistachio)', 'PSTL (Pastel)', 'PUCE (Deep Puce)', 'PUFF (Peach Puff)', 'PWDR (Baby Powder)', 'QMRN (Aquamarine)', 'QRTZ (Quartz)', 'RCHD (Orchid)', 'RHTM (Rhythm)', 'RLQN (Harlequin)', 'RNGE (Orange)', 'ROSE (Rose)', 'ROSS (Rose)', 'ROZE (Rose)', 'ROZZ (Rose)', 'RRSS (Rose)', 'RSBR (Raspberry)', 'RSNC (Arsenic)', 'RSNK (Arsenic)', 'RSST (Russet)', 'RUST (Rust)', 'RWSE (Rose)', 'RZMC (Razzmic)', 'SADE (Shade)', 'SAFR (Sapphire)', 'SAGE (Sage)', 'SAND (Sand)', 'SCLT (Scarlet)', 'SDOW (Shadow)', 'SEPI (Sepia)', 'SEWD (Seaweed)', 'SFRE (Sapphire)', 'SFRN (Saffron)', 'SGAR (Sugar White)', 'SHDE (Shade)', 'SHDW (Shadow)', 'SHMP (Shampoo)', 'SHMR (Shimmering Blush)', 'SKBL (Sky Blue)', 'SLME (Slimy Green)', 'SLMN (Salmon)', 'SLMY (Slimy Green)', 'SLTE (Slate Grey)', 'SLVR (Silver)', 'SMOK (Smoke)', 'SMRK (Shamrock Green)', 'SMTN (Smitten)', 'SMWK (Smoke)', 'SNGL (Sunglow)', 'SNGR (Sangria)', 'SNIC (Sonic Silver)', 'SNNA (Sienna)', 'SNOW (Snow)', 'SOAP (Soap)', 'SPHR (Sapphire)', 'SPIA (Sepia)', 'SSHL (Seashell)', 'STRW (Straw)', 'SUGR (Sugar White)', 'TAUP (Taupe)', 'TEAL (Teal)', 'TGRN (Tangerine)', 'THSL (Thistle)', 'TLBL (Teal Blue)', 'TLIP (Tulip)', 'TMBR (Timber)', 'TMTO (Tomato)', 'TNGR (Tangerine)', 'TOPE (Taupe)', 'TPAZ (Topaz)', 'TRCT (Terra Cotta)', 'TRQS (Turqoise)', 'TRSE (Tea Rose)', 'TSCN (Tuscan)', 'TSTL (Thistle)', 'VIOL (Violet)', 'VNLA (Vanilla)', 'VOLT (Volt)', 'VRDN (Veridian)', 'VRDN (Viridian)', 'VRML (Vermilion)', 'VRML (Vermillion)', 'VRNC (Veronica)', 'WEAT (Wheat)', 'WHIT (White)', 'WINE (Wine)', 'WITE (White)', 'WNGE (Wenge)', 'WTER (Watersprout)', 'WZRD (Winter Wizard)', 'XNDU (Xanadu)', 'YLLW (Yellow)', 'YNDR (Blue Yonder)', 'ZFFR (Zaffre)', 'ZOMP (Zomp', 'ZTEC (Aztec Gold)'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else if (type === 2) {
      rnd = Math.floor(Math.random() * nm3.length);
      names = nm3[rnd];
    } else if (type === 3) {
      rnd = Math.floor(Math.random() * nm4.length);
      names = nm4[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}

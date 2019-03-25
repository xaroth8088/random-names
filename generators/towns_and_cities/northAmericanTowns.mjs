export default function northAmericanTowns() {
  let names;
  let rnd;
  let rnd2;
  /* Canada */
  const nm1 = ['Al', 'Ala', 'Alber', 'Am', 'Anti', 'Ar', 'Arbor', 'Arn', 'As',
    'Atha', 'Ati', 'Avon', 'Bal', 'Ban', 'Bark', 'Barr', 'Bas', 'Battle',
    'Bay', 'Beacon', 'Beau', 'Beaver', 'Bed', 'Bell', 'Belle', 'Ben', 'Bent',
    'Ber', 'Beres', 'Berthier', 'Bien', 'Big', 'Bir', 'Black', 'Blain',
    'Bois', 'Bona', 'Bord', 'Boucher', 'Brace', 'Breden', 'Bri', 'Bridge',
    'Brigh', 'Bro', 'Broad', 'Bros', 'Brown', 'Bruder', 'Buch', 'Bur', 'Burs',
    'Cal', 'Cale', 'Camp', 'Can', 'Cano', 'Car', 'Cara', 'Carbo', 'Card',
    'Carig', 'Carle', 'Carn', 'Cart', 'Cas', 'Cau', 'Causa', 'Cha', 'Cham',
    'Chan', 'Chi', 'Chibou', 'Church', 'Clare', 'Claren', 'Cler', 'Co',
    'Coal', 'Coati', 'Coch', 'Col', 'Coli', 'Com', 'Con', 'Cor', 'Corn',
    'Coro', 'Cottle', 'Cowan', 'Cres', 'Cross', 'Cud', 'Dal', 'Dan', 'Davel',
    'Day', 'Del', 'Delis', 'Delor', 'Dig', 'Dis', 'Do', 'Dol', 'Donna', 'Dor',
    'Dray', 'Drum', 'Dun', 'Dupar', 'East', 'Eato', 'Eck', 'El', 'Ellis',
    'Em', 'Emer', 'Engle', 'Ester', 'Fair', 'Fal', 'Farn', 'Fer', 'Flat',
    'Flem', 'For', 'Fran', 'Gal', 'Gallan', 'Gam', 'Gan', 'Gana', 'Gar',
    'Gati', 'Gaul', 'Gib', 'Gil', 'Glad', 'Glen', 'Glover', 'Go', 'Gode',
    'Gol', 'Grace', 'Gran', 'Grand', 'Gravel', 'Graven', 'Green', 'Gren',
    'Gret', 'Grim', 'Hal', 'Ham', 'Hamp', 'Han', 'Har', 'Hart', 'Hep',
    'Hermi', 'Hf', 'Hin', 'Holy', 'Hud', 'Hum', 'Hunt', 'Inger', 'Innis',
    'Iro', 'Irri', 'Itu', 'Jol', 'Kam', 'Kapus', 'Kear', 'Keel', 'Kerro',
    'Kinder', 'Kings', 'Kini', 'Kip', 'Kirk', 'La', 'Lam', 'Lama', 'Lang',
    'Lani', 'Lash', 'Latch', 'Laval', 'Le', 'Lea', 'Lem', 'Lin', 'Locke',
    'Lour', 'Lum', 'Lunen', 'Luse', 'Maca', 'Mag', 'Maho', 'Malar', 'Man',
    'Mani', 'Mara', 'Mata', 'Meli', 'Mid', 'Mida', 'Middle', 'Mil', 'Mill',
    'Miller', 'Mini', 'Minne', 'Mont', 'Moo', 'Morin', 'Mul', 'Mun', 'Mus',
    'Nai', 'Nan', 'Nee', 'Neu', 'Nia', 'Nico', 'Nipa', 'Niver', 'Noko', 'Nor',
    'Oak', 'Oge', 'Oko', 'Ono', 'Oro', 'Oso', 'Otter', 'Out', 'Ox', 'Pac',
    'Par', 'Para', 'Parr', 'Pas', 'Pel', 'Pen', 'Pene', 'Peta', 'Petro',
    'Pic', 'Pil', 'Pin', 'Pla', 'Plym', 'Pohe', 'Pon', 'Pono', 'Port', 'Pres',
    'Pro', 'Ra', 'Rad', 'Ray', 'Reid', 'Repen', 'Rim', 'Rimou', 'River',
    'Rob', 'Ros', 'Rose', 'Ross', 'Rothe', 'Sag', 'Sal', 'San', 'Sau', 'Sava',
    'Sedge', 'Senne', 'Shau', 'Shaw', 'She', 'Shel', 'Shell', 'Sher', 'Ship',
    'Sin', 'Smi', 'Spring', 'Stan', 'Stel', 'Stet', 'Stone', 'Stough',
    'Strat', 'Summer', 'Sun', 'Tecum', 'Temis', 'Ter', 'Terre', 'Terren',
    'Thes', 'Thessa', 'Thet', 'Thur', 'Till', 'Tray', 'Tre', 'Tren', 'Tri',
    'Tro', 'Tur', 'Twil', 'Val', 'Varen', 'Vaux', 'Vegre', 'Ver', 'Vir',
    'Von', 'Vot', 'Wa', 'Wade', 'Waka', 'Wal', 'Wape', 'War', 'Wasa', 'Whit',
    'White', 'Wil', 'Wind', 'Winter', 'Wit', 'Wolf', 'Wood', 'Wyn', 'Yar'];
  const nm2 = ['balt', 'bel', 'berg', 'berry', 'biens', 'bo', 'boia', 'bonear',
    'borg', 'bour', 'bourg', 'briand', 'bridge', 'burg', 'burns', 'bury',
    'by', 'cam', 'cana', 'carres', 'chill', 'cier', 'cola', 'coln', 'cona',
    'cook', 'couche', 'cour', 'croft', 'dale', 'dare', 'deen', 'den', 'der',
    'des', 'diac', 'don', 'dosa', 'dows', 'duff', 'durn', 'fail', 'fait',
    'fell', 'field', 'fil', 'ford', 'forte', 'gamau', 'gami', 'gan', 'gar',
    'geo', 'gonie', 'gough', 'grave', 'guay', 'gue', 'gueuil', 'gus', 'ham',
    'hazy', 'head', 'heim', 'heller', 'her', 'holm', 'hurst', 'jour',
    'kasing', 'lam', 'lams', 'lan', 'land', 'lants', 'leche', 'let', 'ley',
    'liers', 'lin', 'line', 'linet', 'ling', 'lis', 'lisle', 'lita', 'lodge',
    'mack', 'magne', 'man', 'mar', 'meda', 'meny', 'mer', 'mere', 'meuse',
    'ming', 'miota', 'mis', 'mont', 'more', 'na', 'nach', 'nan', 'near',
    'neau', 'ney', 'nia', 'nigan', 'ning', 'nola', 'noque', 'nora', 'par',
    'pawa', 'pids', 'pond', 'port', 'quet', 'raine', 'ram', 'rane', 'rath',
    'ree', 'rial', 'rich', 'rior', 'ris', 'rock', 'ronto', 'rood', 'rose',
    'roy', 'sack', 'sano', 'sard', 'say', 'sby', 'sevain', 'shall', 'shaw',
    'side', 'soll', 'somin', 'son', 'sonee', 'sons', 'stall', 'stead',
    'stino', 'ston', 'stone', 'tague', 'tane', 'tara', 'tawa', 'terel',
    'terre', 'thon', 'to', 'tois', 'ton', 'tona', 'tonas', 'tos', 'tou',
    'town', 'trie', 'val', 'ver', 'view', 'ville', 'vista', 'vons', 'waki',
    'wall', 'wick', 'win', 'wood', 'worth'];
  /* Greenland */
  const nm3 = ['Aappi', 'Aappilat', 'Aas', 'Akun', 'Alluit', 'Ammas', 'Ar',
    'Atam', 'Eqalu', 'Eqalugaar', 'Havig', 'Hiura', 'Hiurapa', 'Igali',
    'Iginniar', 'Ika', 'Ikera', 'Ili', 'Ilima', 'Illor', 'Ilu', 'Ilulis',
    'Iser', 'Itil', 'Itto', 'Ittoqqor', 'Kangaa', 'Kangaat', 'Kanger',
    'Kangersuat', 'Kangi', 'Kangilinn', 'Kapi', 'Kapisil', 'Kitsi',
    'Kitsisuar', 'Kullor', 'Kulu', 'Kuum', 'Manii', 'Maniit', 'Naa', 'Nanor',
    'Napa', 'Nar', 'Narsar', 'Nia', 'Niaqor', 'Nutaar', 'Nuugaat', 'Nuus',
    'Oqaat', 'Paa', 'Qa', 'Qaa', 'Qaar', 'Qaqor', 'Qasi', 'Qasigian',
    'Qasigiann', 'Qassi', 'Qassiar', 'Qeqer', 'Qeqertar', 'Saar', 'Saat',
    'Saq', 'Sar', 'Sarfann', 'Savi', 'Savissi', 'Si', 'Sio', 'Siora',
    'Siorapa', 'Sisi', 'Tasii', 'Tasiu', 'Uper', 'Uperna', 'Uumma', 'Uumman'];
  const nm4 = ['dal', 'fik', 'gaamiut', 'gaarsuit', 'guit', 'hivik', 'jaat',
    'laq', 'lattoq', 'leq', 'lik', 'liku', 'linnguit', 'loq', 'luitsup',
    'luk', 'lussuaq', 'manaq', 'mannaq', 'miit', 'mijit', 'mik', 'miut',
    'naaq', 'naarsuk', 'naq', 'navik', 'nes', 'niarfik', 'paluk', 'palul',
    'qaq', 'qornat', 'qortoq', 'rapaluk', 'rasak', 'saarsuk', 'sak', 'saq',
    'sat', 'siaat', 'siaq', 'siarsuk', 'sillit', 'simiut', 'sivik', 'soq',
    'suaq', 'suarsuit', 'suatsiaat', 'suatsiaq', 'suit', 'suk', 'sup', 'sut',
    'talik', 'taq', 'tat', 'thal', 'toormiit', 'toq', 'tu', 'tut', 'vik'];
  /* Mexico */
  const nm5 = ['Aca', 'Acam', 'Agua', 'Allen', 'Almo', 'Alta', 'Amo', 'Apat',
    'Apo', 'Ati', 'Atiza', 'Atli', 'Beni', 'Buena', 'Ca', 'Caje', 'Cam',
    'Can', 'Car', 'Cauh', 'Cela', 'Cen', 'Chal', 'Che', 'Chetu', 'Chi',
    'Chico', 'Chil', 'Chila', 'Chilpan', 'Chimal', 'Co', 'Coa', 'Coatza',
    'Coli', 'Comal', 'Comi', 'Cordo', 'Corre', 'Coso', 'Cosolea', 'Cuauh',
    'Cuautit', 'Cuer', 'Cuerna', 'Culia', 'Cun', 'Cundua', 'Deli', 'Dolo',
    'Du', 'Dura', 'Eca', 'Ecate', 'Ense', 'Fres', 'Gar', 'Gua', 'Guada',
    'Guadala', 'Guana', 'Guasa', 'Guay', 'Hida', 'Hidal', 'Hue', 'Huehue',
    'Hui', 'Huiman', 'Huix', 'Igua', 'Ira', 'Irapua', 'Ixta', 'Ixtapa',
    'Ixtla', 'Jiu', 'Jiute', 'Jua', 'Ler', 'Macus', 'Made', 'Man', 'Manza',
    'Mar', 'Mata', 'Maza', 'Meri', 'Mete', 'Mina', 'Mira', 'Mon', 'More',
    'Naca', 'Nau', 'Naucal', 'Navo', 'Neza', 'Nezahual', 'Noga', 'Oaxa',
    'Obre', 'Oco', 'Ori', 'Oriza', 'Pachu', 'Palen', 'Papan', 'Pen', 'Penja',
    'Pue', 'Quere', 'Rey', 'Sal', 'Sala', 'Si', 'Sole', 'Soli', 'Tan',
    'Tanto', 'Tapa', 'Teca', 'Teco', 'Tehua', 'Tema', 'Temix', 'Tepa',
    'Tepex', 'Tex', 'Ti', 'Tijua', 'Tkaque', 'Tolu', 'Tona', 'Tor', 'Tul',
    'Tulan', 'Urua', 'Vera', 'Villa', 'Xala', 'Zaca', 'Zamo', 'Zapo', 'Zihua',
    'Zina', 'Zita', 'Zum'];
  const nm6 = ['baro', 'calco', 'cali', 'calpan', 'camac', 'can', 'caque',
    'cate', 'chuca', 'chula', 'cingo', 'clova', 'co', 'coalcos', 'coco',
    'coman', 'coyotl', 'cruz', 'cuaro', 'cun', 'daca', 'dalgo', 'denas',
    'doba', 'dora', 'duacan', 'gales', 'gidora', 'guillo', 'hua', 'huacan',
    'huahua', 'jamo', 'jara', 'joa', 'juana', 'juato', 'juca', 'lajara',
    'lao', 'lapa', 'lato', 'laya', 'lende', 'lia', 'licias', 'lientes',
    'lima', 'loapan', 'lon', 'loya', 'lucan', 'lupe', 'mal', 'man', 'manca',
    'mas', 'mira', 'mora', 'moros', 'mosa', 'nada', 'nala', 'nas', 'navaca',
    'nillo', 'nito', 'nosa', 'pache', 'paluca', 'pan', 'pango', 'pantla',
    'paque', 'peche', 'pico', 'popan', 'puato', 'pulco', 'ques', 'quilucan',
    'ramar', 'range', 'reon', 'rida', 'ridad', 'save', 'sillo', 'singo',
    'tanejo', 'taro', 'tecas', 'temoc', 'tepec', 'titlan', 'tla', 'toca',
    'toyuca', 'tro', 'tumal', 'yuca', 'zanillo', 'zapan', 'zava', 'zingan',
    'zoc'];
  /* United States */
  const nm7 = ['Ab', 'Al', 'Aller', 'Ames', 'An', 'Apple', 'Arling', 'As',
    'Ash', 'Attle', 'Autumn', 'Bain', 'Bal', 'Bar', 'Barn', 'Barring', 'Bax',
    'Bed', 'Bedding', 'Ber', 'Berk', 'Bever', 'Bex', 'Birming', 'Bloom',
    'Blooms', 'Blythe', 'Bol', 'Booth', 'Bos', 'Box', 'Brad', 'Brent',
    'Bridge', 'Brigh', 'Bright', 'Brim', 'Bris', 'Brom', 'Brook', 'Bucking',
    'Bux', 'Cam', 'Can', 'Canter', 'Carl', 'Chat', 'Chats', 'Chel', 'Chelms',
    'Ches', 'Chester', 'Chil', 'Clif', 'Cliff', 'Clin', 'Coal', 'Col', 'Cole',
    'Con', 'Corn', 'Coven', 'Croy', 'Cumber', 'Dan', 'Dar', 'Dart', 'De',
    'Dead', 'Ded', 'Del', 'Der', 'Do', 'Dor', 'Dun', 'Dur', 'Effing',
    'Elling', 'Elm', 'Ems', 'En', 'Ep', 'Es', 'Ever', 'Ex', 'Fair', 'Fal',
    'Fall', 'Farm', 'Farming', 'Ford', 'Framing', 'Free', 'Glas', 'Glou',
    'Graf', 'Gran', 'Grand', 'Grave', 'Green', 'Gro', 'Guil', 'Had', 'Hali',
    'Ham', 'Hamp', 'Har', 'Harp', 'Hart', 'Has', 'Hast', 'Hat', 'Haver',
    'Heb', 'Here', 'Hil', 'Hill', 'Hills', 'Hing', 'Hors', 'Hul', 'Hunt',
    'Hunting', 'Isling', 'Kensing', 'Killing', 'Kings', 'Kir', 'Lan',
    'Leaming', 'Lee', 'Lei', 'Leo', 'Liming', 'Litch', 'Liver', 'Lon', 'Maid',
    'Mal', 'Man', 'Mans', 'Mar', 'Marl', 'May', 'Men', 'Mens', 'Meri',
    'Middle', 'Middles', 'Mil', 'Mill', 'Monk', 'New', 'Newing', 'Nor',
    'North', 'Not', 'Notting', 'Oak', 'Ox', 'Plai', 'Plain', 'Ply', 'Port',
    'Ports', 'Pres', 'Put', 'Read', 'Rich', 'Ridge', 'Ring', 'River', 'Ro',
    'Roch', 'Rock', 'Rocking', 'Rom', 'Row', 'Rox', 'Rug', 'Rut', 'Salis',
    'San', 'Sand', 'Scar', 'Scars', 'Shef', 'Shrew', 'Shrews', 'Smith',
    'Smiths', 'Somer', 'South', 'Spring', 'Staf', 'Stam', 'Stock', 'Stoke',
    'Stone', 'Straf', 'Strat', 'Sud', 'Suf', 'Summer', 'Sunder', 'Sur', 'Sus',
    'Sut', 'Tam', 'Taun', 'Temple', 'Tis', 'Tiver', 'Tol', 'Tor', 'Torring',
    'Tun', 'Ven', 'Vent', 'Wake', 'Wal', 'Wall', 'Walling', 'Wals', 'War',
    'Ware', 'Water', 'Way', 'Welling', 'Wes', 'West', 'Wey', 'Whit', 'White',
    'Wick', 'Wil', 'Willing', 'Win', 'Wind', 'Winder', 'Winter', 'Wood',
    'Wor', 'Wrent', 'Yar', 'York'];
  const nm8 = ['boro', 'borough', 'bridge', 'bron', 'brook', 'burn', 'bury',
    'by', 'caster', 'castle', 'cester', 'chester', 'coln', 'cord', 'dale',
    'de', 'den', 'ding', 'don', 'dover', 'down', 'dwell', 'fair', 'field',
    'folk', 'ford', 'gate', 'ham', 'hampton', 'hampton', 'hill', 'hurst',
    'isle', 'lem', 'ley', 'low', 'ly', 'mark', 'mere', 'minster', 'mond',
    'more', 'mouth', 'net', 'ney', 'pon', 'pool', 'port', 'rey', 'riden',
    'ry', 'sea', 'send', 'set', 'shire', 'son', 'sor', 'stable', 'stead',
    'ster', 'stone', 'swell', 'ter', 'tham', 'ton', 'try', 'vern', 'ville',
    'wall', 'ware', 'water', 'way', 'we', 'well', 'wich', 'wick', 'win',
    'wood', 'worth'];
  const i = Math.floor(Math.random() * 12); {
    if (i < 3) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      names = nm1[rnd] + nm2[rnd2];
    } else if (i < 6) {
      rnd = Math.floor(Math.random() * nm3.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = nm3[rnd] + nm4[rnd2];
    } else if (i < 9) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      names = nm5[rnd] + nm6[rnd2];
    } else {
      rnd = Math.floor(Math.random() * nm7.length);
      rnd2 = Math.floor(Math.random() * nm8.length);
      names = nm7[rnd] + nm8[rnd2];
    }
    return names;
  }
}
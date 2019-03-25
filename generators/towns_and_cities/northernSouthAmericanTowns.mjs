import sample from 'lodash/sample';

export default function northernSouthAmericanTowns() {
  let names;
  /* Colombia */
  const nm1 = ['Aca', 'Agua', 'Agu', 'Anda', 'Anse', 'Anser', 'Apa', 'Apar', 'Ara', 'Araca', 'Arau', 'Ari', 'Aya', 'Ba', 'Bara', 'Bar', 'Barra', 'Barran', 'Bela', 'Bo', 'Bogo', 'Buca', 'Buena', 'Bu', 'Cucu', 'Cai', 'Cúcu', 'Ca', 'Cahi', 'Cala', 'Cal', 'Can', 'Cande', 'Care', 'Carta', 'Cau', 'Cauca', 'Ce', 'Cere', 'Cha', 'Chapa', 'Chi', 'Chigo', 'Cié', 'Ciéna', 'Chiqui', 'Coro', 'Curu', 'Dui', 'El Ba', 'El Ca', 'El Car', 'El Ce', 'El Cer', 'El Cha', 'El Char', 'Envi', 'Espi', 'Fa', 'Faca', 'Fla', 'Flan', 'Flo', 'Fon', 'Fre', 'Fres', 'Fu', 'Fun', 'Fusa', 'Gala', 'Gar', 'Gi', 'Gira', 'Gra', 'Grana', 'Gua', 'Hon', 'Iba', 'Ipia', 'Ita', 'Ja', 'Jamu', 'Léri', 'Lé', 'La Ce', 'La Do', 'La Dira', 'La Me', 'La Pla', 'Leti', 'Lori', 'Mála', 'Maga', 'Mai', 'Mala', 'Malam', 'Mani', 'Mari', 'Mede', 'Medel', 'Mel', 'Mo', 'Mom', 'Mora', 'Mos', 'Muni', 'Nei', 'Oca', 'Pal', 'Pam', 'Pa', 'Perei', 'Piede', 'Pita', 'Pivi', 'Popa', 'Pra', 'Qui', 'Quim', 'Rio', 'Rol', 'Sa', 'Saba', 'Saha', 'Sala', 'Sam', 'Sego', 'Sevi', 'Siba', 'Sin', 'Soa', 'Soco', 'Soga', 'Sole', 'Son', 'Túque', 'Tierra', 'To', 'Tuma', 'Tun', 'Tur', 'Uba', 'Yaru', 'Yopa', 'Yum', 'Zara', 'Zar', 'Zipa'];
  const nm2 = ['bano', 'baya', 'bosa', 'cá', 'cías', 'ca', 'cao', 'carí', 'cas', 'casia', 'cazar', 'chica', 'chiná', 'ción', 'co', 'coa', 'cuta', 'dó', 'da', 'das', 'dera', 'donia', 'dot', 'ga', 'gado', 'gar', 'gena', 'gotá', 'gre', 'gué', 'guaní', 'jicá', 'jona', 'kesquera', 'laga', 'lapa', 'larcá', 'laria', 'les', 'li', 'lito', 'lona', 'ma', 'maní', 'manga', 'mar', 'meja', 'men', 'menia', 'mina', 'mira', 'ná', 'ní', 'nada', 'naga', 'nal', 'neta', 'nilla', 'no', 'noa', 'pel', 'quilla', 'quirá', 'quite', 'rá', 'ría', 'rón', 'ral', 'ranoa', 'repa', 'reté', 'rida', 'rito', 'rodó', 'seca', 'suga', 'tá', 'té', 'tín', 'taca', 'tadó', 'tago', 'tivá', 'vá', 'va', 'zón', 'zal', 'zales'];
  /* Ecuador */
  const nm3 = ['Al', 'Alau', 'Alfre', 'Am', 'Amba', 'Archi', 'Atu', 'Atun', 'Azo', 'Ba', 'Bal', 'Bo', 'Ca', 'Cal', 'Caria', 'Cata', 'Caya', 'Ce', 'Celi', 'Cho', 'Co', 'Coli', 'Coro', 'Cota', 'Cue', 'Cuen', 'Es', 'Esme', 'Gua', 'Guala', 'Guara', 'Guaran', 'Guaya', 'Hua', 'Huaqui', 'Iba', 'Jipi', 'Lata', 'Lla', 'Lo', 'Loma', 'Ma', 'Maca', 'Macha', 'Man', 'Mon', 'Monta', 'Monte', 'Mui', 'Muis', 'Na', 'Nara', 'Naran', 'Nul', 'Ota', 'Otava', 'Pí', 'Píl', 'Pi', 'Pima', 'Pimam', 'Pla', 'Por', 'Pu', 'Puji', 'Que', 'Qui', 'Rio', 'Roca', 'Sa', 'Sali', 'Sam', 'Sambo', 'Sango', 'Saqui', 'Su', 'Te', 'Tosa', 'Tul', 'Tuta', 'Tutama', 'Val', 'Vela', 'Ven', 'Venta', 'Vin', 'Ya', 'Yagua', 'Yan', 'Za', 'Zamo', 'Zaru'];
  const nm4 = ['ñar', 'ños', 'bamba', 'bato', 'cúa', 'cachi', 'cao', 'cará', 'ceo', 'ces', 'ceta', 'chachi', 'chala', 'chi', 'co', 'cocha', 'cristi', 'cunga', 'dez', 'dona', 'fuerte', 'gua', 'gues', 'hía', 'hoyo', 'jal', 'jan', 'japa', 'jito', 'láo', 'laceo', 'laro', 'las', 'leo', 'lica', 'limes', 'linas', 'lora', 'manga', 'mayo', 'mora', 'na', 'nales', 'nas', 'ne', 'nel', 'no', 'piro', 'que', 'qui', 'quil', 'quillas', 'quiza', 'ra', 'rama', 'randa', 'rate', 'riel', 'ruma', 'sí', 'saje', 'sti', 'ta', 'tanas', 'taqui', 'tina', 'to', 'valo', 'vedo', 'velo', 'viejo', 'yo', 'zaza'];
  /* French Guiana */
  const nm5 = ['Akou', 'Ali', 'Apa', 'Awa', 'Bé', 'Béli', 'Be', 'Ca', 'Camo', 'Cau', 'Caye', 'Ci', 'Clé', 'Cor', 'Cormo', 'Cormon', 'Cou', 'Dé', 'Déli', 'Gui', 'Guisa', 'Guisan', 'Ira', 'Iracou', 'Ja', 'Javou', 'Ka', 'Kou', 'Ma', 'Macou', 'Mal', 'Malma', 'Mari', 'Matou', 'Mon', 'Os', 'Oua', 'Ouana', 'Ré', 'Régi', 'Rémi', 'Ro', 'Rocha', 'Rocham', 'Sau', 'Si', 'Sin', 'Sinna', 'To', 'Tona', 'Tonné'];
  const nm6 = ['beau', 'bo', 'cao', 'car', 'ces', 'coto', 'coubo', 'gina', 'hey', 'la', 'lices', 'lor', 'mary', 'ment', 'mire', 'mopi', 'néry', 'na', 'nary', 'nate', 'naye', 'ne', 'noury', 'nue', 'pi', 'qui', 'ra', 're', 'ria', 'ron', 'rou', 'ry', 'sinéry', 'soula', 'te', 'tière', 'ti', 'tibo', 'to', 'tou', 'toury', 'venue', 'w', 'x', 'ye', 'zon'];
  /* Guyana */
  const nm7 = ['Ai', 'Aisha', 'Aishal', 'An', 'Apo', 'Ara', 'Araka', 'Ari', 'Ba', 'Bara', 'Bi', 'Bilo', 'Bu', 'Bur', 'Bux', 'En', 'Enmo', 'He', 'Hele', 'Ho', 'Hol', 'Hoso', 'Im', 'Imbai', 'Is', 'Ish', 'Ishe', 'Isher', 'Issa', 'Isse', 'Itha', 'Ka', 'Kal', 'Kama', 'Kami', 'Kan', 'Kanga', 'Kar', 'Kewei', 'Ko', 'Koria', 'Ku', 'Kuru', 'Kwa', 'Leo', 'Li', 'Lu', 'Lusi', 'Ma', 'Maba', 'Mabu', 'Mah', 'Mahai', 'Makou', 'Mo', 'Mora', 'Moru', 'Orea', 'Ori', 'Orin', 'Re', 'Save', 'Su', 'Sura', 'Ta', 'Taka', 'Towa', 'Tuma', 'Tume', 'Wa', 'Wan', 'Wi', 'Wicha'];
  const nm8 = ['bai', 'bo', 'bura', 'ca', 'daal', 'dai', 'dia', 'die', 'garuma', 'gek', 'haica', 'ka', 'kaima', 'kaka', 'kama', 'kari', 'kouria', 'ku', 'kuni', 'kusa', 'kwani', 'la', 'lena', 'loku', 'ma', 'madai', 'mia', 'mita', 'more', 'mu', 'na', 'nai', 'nan', 'neru', 'ni', 'no', 'nora', 'pukari', 'ra', 'rama', 'rang', 're', 'reng', 'retik', 'ri', 'ria', 'riabo', 'rika', 'ro', 'roro', 'ru', 'ruca', 'ruma', 'sa', 'sano', 'sie', 'signan', 'ta', 'taro', 'teri', 'tik', 'ton', 'tuni', 'wa', 'weigek', 'whanna'];
  /* Suriname */
  const nm9 = ['Abe', 'Abena', 'Abenas', 'Aca', 'Acari', 'Al', 'Albi', 'Ana', 'Ape', 'Apoe', 'Au', 'Auro', 'Ba', 'Bata', 'Ben', 'Bi', 'Bita', 'Bo', 'Boto', 'Bro', 'Broko', 'Co', 'Cor', 'Corne', 'Cot', 'Dju', 'Go', 'Ka', 'Kaja', 'Kwa', 'Kwakoe', 'Kwama', 'Le', 'Lebi', 'Lely', 'Moe', 'Moen', 'Pa', 'Para', 'Pe', 'Pele', 'Po', 'Poki', 'Pon', 'To', 'Tot', 'Wa', 'Wage', 'Wan', 'Wanha', 'Washo'];
  const nm10 = ['bo', 'ca', 'da', 'do', 'doti', 'dre', 'gen', 'go', 'gron', 'hatti', 'jana', 'ke', 'koegron', 'lelu', 'lu', 'mu', 'mutu', 'na', 'nam', 'naston', 'ness', 'ny', 'paike', 'pasi', 'pondo', 'pu', 'ra', 'ranam', 'ribo', 'rie', 'rora', 'samutu', 'shoda', 'si', 'tavia', 'ti', 'tica', 'tina', 'toe', 'toetoe', 'ton', 'tu', 'via'];
  /* Venezuela */
  const nm11 = ['Aca', 'Acari', 'Alta', 'Ana', 'Arau', 'Bar', 'Barce', 'Bari', 'Barqui', 'Baru', 'Ca', 'Cabi', 'Cala', 'Can', 'Cantau', 'Carú', 'Cara', 'Caraba', 'Caro', 'Carri', 'Cau', 'Cauca', 'Cha', 'Chara', 'Chi', 'Chichi', 'Ciu', 'Civa', 'Co', 'Cuma', 'Eji', 'El Ca', 'El Dia', 'El Ha', 'El Lim', 'El Ti', 'El To', 'El Tocu', 'El Vi', 'Güi', 'Gua', 'Guaca', 'Guana', 'Guare', 'Guas', 'Guati', 'Lagu', 'Mé', 'Méri', 'Mai', 'Maique', 'Mara', 'Maria', 'Matu', 'Mo', 'Mucu', 'Mucum', 'Ni', 'Ocu', 'Peta', 'Por', 'Porla', 'Quí', 'Ru', 'Tá', 'Tári', 'Ta', 'Taca', 'Tacari', 'Ti', 'Tina', 'Tuca', 'Tucu', 'Tur', 'Upa', 'Vale', 'Valen', 'Yari', 'Zara'];
  const nm12 = ['bio', 'bor', 'bozo', 'caibo', 'cao', 'cara', 'cas', 'cay', 'che', 'cia', 'co', 'coa', 'cuyo', 'do', 'güe', 'güito', 'gua', 'guita', 'jillo', 'lamar', 'lava', 'leda', 'lera', 'lito', 'lo', 'lona', 'maná', 'mare', 'mas', 'mero', 'meto', 'na', 'naco', 'nare', 'nas', 'nitas', 'pano', 'pita', 'piz', 'ques', 'quillo', 'rín', 'rón', 'ra', 'racas', 'racay', 'raure', 'raza', 're', 'renas', 'ria', 'riara', 'riba', 'rida', 'rigua', 'rinas', 'rio', 'rita', 'rizal', 'rojos', 'ruta', 'simeto', 'ta', 'tagua', 'tal', 'tare', 'tas', 'taura', 'tia', 'tillo', 'tire', 'toria', 'var', 'viche', 'yana', 'za'];
  const i = Math.floor(Math.random() * 12);
  {
    if (i < 2) {
      names = sample(nm1) + sample(nm2);
    } else if (i < 4) {
      names = sample(nm3) + sample(nm4);
    } else if (i < 6) {
      names = sample(nm5) + sample(nm6);
    } else if (i < 8) {
      names = sample(nm7) + sample(nm8);
    } else if (i < 10) {
      names = sample(nm9) + sample(nm10);
    } else {
      names = sample(nm11) + sample(nm12);
    }
    return names;
  }
}

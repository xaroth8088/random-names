export default function southEuropeanTowns() {
  let names;
  let rnd;
  let rnd2;
  const nm1 = ['Acha', 'Agia', 'Agio', 'Agri', 'Alexa', 'Ali', 'Alika', 'Ama',
    'Ampe', 'Ampelo', 'Ana', 'Araio', 'Argy', 'Arte', 'Aspro', 'Cha', 'Chai',
    'Chala', 'Chio', 'Cho', 'Chola', 'Co', 'Da', 'Dimi', 'Dra', 'Drape',
    'Ede', 'Efka', 'Ega', 'Ele', 'Elefthe', 'Eleu', 'Elli', 'Ermou', 'Ery',
    'Evo', 'Fa', 'Fali', 'Fila', 'Flo', 'Ga', 'Gala', 'Gera', 'Gia', 'Gianni',
    'Gly', 'Gre', 'Hera', 'Ialy', 'Iera', 'Iliou', 'Ira', 'Ka', 'Kaisa',
    'Kala', 'Kalli', 'Kaly', 'Kama', 'Kardi', 'Kasto', 'Kate', 'Kava', 'Kera',
    'Ki', 'Kifi', 'Ko', 'Komo', 'Koro', 'Kory', 'Koza', 'La', 'Lio', 'Liva',
    'Lou', 'Ma', 'Me', 'Mega', 'Meli', 'Mene', 'Meta', 'Misso', 'Mo', 'Myti',
    'Na', 'Nafpa', 'Naou', 'Nea', 'Ni', 'Ore', 'Pa', 'Paia', 'Palli', 'Pano',
    'Papa', 'Para', 'Pe', 'Pera', 'Petrou', 'Poli', 'Pre', 'Preve', 'Psy',
    'Ptole', 'Py', 'Rafi', 'Rethy', 'Rho', 'Sa', 'Sala', 'Se', 'Smy', 'Spa',
    'Sta', 'Stavrou', 'Sy', 'Ta', 'The', 'Thessa', 'Tri', 'Tyrna', 'Ve', 'Vo',
    'Vou', 'Vrili', 'VyVyro', 'Xa', 'Ymi', 'Zogra'];
  const nm2 = ['bes', 'chiko', 'chni', 'dallos', 'dari', 'deia', 'des', 'dri',
    'droupoli', 'fada', 'fina', 'fka', 'fki', 'fni', 'fou', 'fplio',
    'ftherio', 'gara', 'gio', 'gou', 'gyroi', 'ka', 'kaia', 'kala', 'kas',
    'kastro', 'kies', 'kipoi', 'kleio', 'klion', 'kri', 'ktos', 'la', 'laia',
    'lamis', 'laos', 'largos', 'lcis', 'lene', 'lfeia', 'liada', 'lio',
    'lion', 'liro', 'lkis', 'llini', 'longhi', 'loniki', 'los', 'ma', 'maida',
    'maria', 'mata', 'meni', 'mia', 'mis', 'mno', 'mnos', 'mos', 'nas',
    'ndra', 'ndreia', 'ndri', 'nghi', 'nia', 'niki', 'nikon', 'nina', 'nio',
    'nnis', 'ns', 'nthi', 'ntis', 'pagou', 'petra', 'poi', 'poli', 'pyrgos',
    'raeus', 'rafou', 'raia', 'rama', 'rdelio', 'rekas', 'rfosi', 'rfu',
    'rgos', 'rgyroi', 'ri', 'ria', 'riani', 'rina', 'rini', 'rint', 'rio',
    'rissa', 'rmi', 'rnes', 'rni', 'ropi', 'roupoli', 'rousi', 'rpia', 'rres',
    'rta', 'rvara', 'sa', 'schato', 'sia', 'sina', 'skevi', 'smos', 'sos',
    'ssa', 'ssia', 'ssos', 'steri', 'stiada', 'tero', 'thea', 'thraia',
    'tini', 'traki', 'tras', 'trios', 'tsa', 'tsi', 'tsini', 'tsona', 'ttos',
    'vala', 'vena', 'veza', 'via', 'vos', 'vros', 'zani', 'zi'];
  /* Italy */
  const nm3 = ['Ace', 'Aci', 'Afra', 'Agri', 'Ale', 'Alta', 'Anco', 'Apri',
    'Are', 'Asco', 'Ave', 'Ba', 'Baghe', 'Barle', 'Batti', 'Be', 'Bene',
    'Berga', 'Bi', 'Bisce', 'Bito', 'Bo', 'Bolo', 'Bolza', 'Bre', 'Bri', 'Bu',
    'Ca', 'Caglia', 'Calta', 'Caltani', 'Campo', 'Carra', 'Casa', 'Case',
    'Caso', 'Castella', 'Cata', 'Ceri', 'Cese', 'Chie', 'Chio', 'Cini',
    'Civi', 'Civita', 'Co', 'Colle', 'Cose', 'Cre', 'Cremo', 'Cro', 'Croto',
    'Cu', 'Erco', 'Fa', 'Fae', 'Ferra', 'Fiu', 'Fiumi', 'Flo', 'Fo', 'Foli',
    'Ga', 'Galla', 'Ge', 'Giu', 'Giuglia', 'Gro', 'Gui', 'Guido', 'Imo', 'La',
    'Lame', 'Le', 'Legna', 'Li', 'Livo', 'Lu', 'Ma', 'Mara', 'Marsa', 'Mate',
    'Maza', 'Messi', 'Mi', 'Mo', 'Mode', 'Modi', 'Molfe', 'Monca', 'Monte',
    'Na', 'No', 'Nova', 'Pa', 'Pale', 'Pe', 'Peru', 'Pesa', 'Pesca', 'Pi',
    'Pia', 'Pice', 'Pome', 'Porde', 'Porti', 'Pote', 'Pra', 'Qua', 'Ra',
    'Ragu', 'Rave', 'Re', 'Rho', 'Ri', 'Rimi', 'Ro', 'Rovi', 'Sa', 'Sale',
    'Sanre', 'Sassa', 'Savo', 'Sca', 'Scafa', 'Se', 'Sie', 'Syra', 'Ta',
    'Tara', 'Te', 'Tera', 'Ti', 'Tivo', 'Tra', 'Trapa', 'Tre', 'Trevi',
    'Trie', 'Tu', 'Udi', 'Va', 'Vare', 'Ve', 'Velle', 'Veni', 'Vero', 'Versi',
    'Via', 'Vice', 'Vige', 'Vite', 'Vitto'];
  const nm4 = ['basso', 'bia', 'bria', 'cca', 'cce', 'cchia', 'celio', 'ceno',
    'cenza', 'ci', 'cino', 'cuse', 'dena', 'dica', 'dine', 'donia', 'dua',
    'fati', 'gento', 'ggia', 'ggio', 'gliano', 'gliari', 'glie', 'gna',
    'gnano', 'gno', 'gnola', 'gola', 'gusa', 'la', 'lan', 'lano', 'lbia',
    'le', 'lermo', 'lerno', 'lfetta', 'li', 'lia', 'liari', 'lieri', 'ligno',
    'llegno', 'llino', 'llo', 'logna', 'lsamo', 'lvano', 'lzano', 'me',
    'mezia', 'mini', 'mmare', 'mo', 'mola', 'mona', 'mura', 'na', 'ncona',
    'ndicci', 'ndisi', 'ndria', 'ne', 'neo', 'nevento', 'ni', 'nia', 'nice',
    'no', 'noa', 'none', 'nremo', 'nto', 'nuovo', 'nza', 'nzaro', 'nzio',
    'paglia', 'pani', 'ples', 'poli', 'ra', 'raele', 'ramo', 'rano', 'ranto',
    'rate', 'rbo', 'rdenone', 'reggio', 'rence', 'rese', 'rgamo', 'ri', 'ria',
    'rin', 'rletta', 'rli', 'rma', 'rme', 'rni', 'rno', 'rona', 'rpi', 'rra',
    'rrara', 'rre', 'rreni', 'rsa', 'rsala', 'rta', 'rtici', 'rtu', 'rugia',
    'sa', 'saro', 'scara', 'scia', 'sello', 'sena', 'senza', 'serta', 'si',
    'soria', 'ssa', 'ssari', 'sseto', 'ssetta', 'ssina', 'sso', 'ste', 'sti',
    'sto', 'stoia', 'tania', 'tera', 'ti', 'tina', 'to', 'tone', 'tonto',
    'tri', 'vano', 'vara', 'vecchia', 'venna', 'vento', 'vero', 'via', 'vigo',
    'viso', 'voli', 'vona', 'vorno', 'zara', 'zia', 'zio', 'zzo'];
  /* Portugal */
  const nm5 = ['Abra', 'Agua', 'Ague', 'Albu', 'Alca', 'Alco', 'Alma', 'Almei',
    'Alve', 'Ama', 'Amara', 'Amo', 'Ana', 'Avei', 'Ba', 'Balei', 'Barce',
    'Barrei', 'Be', 'Bra', 'Braga', 'Ca', 'Cama', 'Cani', 'Canta', 'Capa',
    'Carta', 'Cha', 'Coi', 'Covi', 'Elva', 'Entro', 'Erme', 'Esmo', 'Espi',
    'Espo', 'Esta', 'Estre', 'Evo', 'Fa', 'Fati', 'Felguei', 'Fi', 'Figuei',
    'Frea', 'Fu', 'Ga', 'Gafa', 'Gando', 'Gou', 'Gua', 'Gui', 'Guima', 'Ho',
    'Ilha', 'La', 'Lame', 'Lei', 'Li', 'Lou', 'Louro', 'Ma', 'Mace', 'Mangua',
    'Mari', 'Mato', 'Mea', 'Mealha', 'Monte', 'Mou', 'Odi', 'Odive', 'Oli',
    'Ova', 'Pa', 'Pare', 'Pe', 'Pena', 'Peni', 'Po', 'Porta', 'Porti', 'Qua',
    'Quartei', 'Que', 'Re', 'Rebo', 'Regue', 'Ri', 'Ribei', 'Sa', 'Sabu',
    'Saca', 'Santa', 'Santia', 'Se', 'Sei', 'Setu', 'Si', 'Ta', 'Tarou',
    'Tavi', 'To', 'Tonde', 'Tra', 'Tro', 'Va', 'Valo', 'Valpa', 'Ve', 'Vi',
    'Via', 'Vize'];
  const nm6 = ['baca', 'bal', 'beira', 'bos', 'bugal', 'ca', 'cedo', 'cem',
    'cer', 'che', 'co', 'cos', 'da', 'des', 'dia', 'dora', 'dras', 'fa',
    'fanha', 'fe', 'feira', 'fiel', 'ga', 'gal', 'ganca', 'gas', 'go', 'goa',
    'gre', 'gualde', 'gueiras', 'ja', 'jo', 'la', 'lbom', 'ldas', 'le',
    'legre', 'lha', 'lhada', 'longo', 'los', 'luz', 'lva', 'lves', 'mao',
    'mar', 'mara', 'maraes', 'mbal', 'mbra', 'mego', 'mento', 'mor', 'moz',
    'munde', 'na', 'ncamento', 'nchal', 'nco', 'ncoso', 'nda', 'ndao', 'nde',
    'ndela', 'ndomar', 'ndra', 'nes', 'ngo', 'ngos', 'nha', 'nhede', 'nhel',
    'nho', 'nhos', 'niche', 'nico', 'ntes', 'ntijo', 'ra', 'raes', 'rante',
    'ras', 'rca', 'rda', 'rdosa', 'redes', 'rem', 'res', 'ria', 'rica', 'rim',
    'riz', 'ro', 'rosa', 'rouca', 'rpa', 'rreja', 'rres', 'rro', 'rta',
    'rtaxo', 'rteira', 'sbon', 'sende', 'seu', 'sinde', 'sinhos', 'smo', 'so',
    'tejo', 'tima', 'tubal', 'vas', 'veia', 'veira', 'velas', 'vem', 'ves',
    'veses', 'vira', 'vo', 'voa', 'xa', 'xal', 'zela'];
  /* Spain */
  const nm7 = ['Alba', 'Alca', 'Alco', 'Alge', 'Ali', 'Alme', 'Alzi', 'Artei',
    'Ba', 'Bada', 'Barce', 'Be', 'Beni', 'Bi', 'Bla', 'Bu', 'Ca', 'Co',
    'Colo', 'Cordo', 'Coru', 'Fe', 'Fro', 'Fue', 'Fuenla', 'Ga', 'Ge', 'Geta',
    'Gi', 'Giro', 'Gra', 'Grama', 'Grana', 'Gua', 'Guada', 'Guadala', 'Hospi',
    'Hue', 'La', 'Lagu', 'Le', 'Lega', 'Lgro', 'Llei', 'Lo', 'Lu', 'Ma',
    'Madri', 'Mala', 'Manre', 'Marbe', 'Mo', 'Mosto', 'Mu', 'Olei', 'Ou',
    'Oure', 'Ovie', 'Pa', 'Pale', 'Ponte', 'Sa', 'Saba', 'Sala', 'Santa',
    'Santia', 'Se', 'Seba', 'Sevi', 'Ta', 'Tarra', 'Tene', 'To', 'Tole',
    'Torre', 'Va', 'Vale', 'Valla', 'Vi', 'Vito', 'Za', 'Zara'];
  const nm8 = ['ba', 'brada', 'bregat', 'cante', 'cete', 'ciras', 'da', 'de',
    'dell', 'diz', 'do', 'dolid', 'dorm', 'dra', 'drid', 'fe', 'ga', 'ganes',
    'gat', 'gena', 'go', 'gona', 'goza', 'grono', 'guna', 'jara', 'jon',
    'joz', 'labrada', 'lade', 'laga', 'lajara', 'lavega', 'lbao', 'lche',
    'ledo', 'les', 'lla', 'llon', 'lma', 'lmas', 'loma', 'lona', 'lt', 'lva',
    'manca', 'manet', 'na', 'nada', 'nares', 'naria', 'nca', 'ncia', 'nder',
    'ndia', 'nea', 'nes', 'net', 'no', 'nresa', 'nse', 'ntera', 'ra',
    'rbella', 'rca', 'rcia', 'rcon', 'rdoba', 'res', 'rgos', 'ria', 'rife',
    'rin', 'rm', 'ron', 'rona', 'ros', 'rotira', 'rrasa', 'rrol', 'rtos',
    'runa', 'sa', 'stela', 'stian', 'stoles', 'tafe', 'tava', 'te', 'tiva',
    'va', 'vega', 'vera', 'villa', 'ville', 'xo', 'za', 'zde'];
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
export default function eths() {
  let names1;
  let names2;
  const type = Math.random() > 0.5 ? 0 : 1;
  if (type === 1) {
    names1 = ['Aah', 'Ah', 'Amen', 'Amun', 'Ankh', 'Bek', 'Bith', 'Ebon', 'Hal', 'Hab', 'Hem', 'Hon', 'Is', 'Kam', 'Kar', 'Kan', 'Khep', 'Khuns', 'Mak', 'Mad', 'Manet', 'Meh', 'Mer', 'Mukan', 'Mum', 'Naham', 'Nan', 'Nef', 'Nen', 'Nes', 'Nofr', 'Nub', 'Olab', 'Pen', 'Ran', 'Raz', 'Sam', 'San', 'Sen', 'Shen', 'Shan', 'Tam', 'Ten', 'Tet', 'Therm'];
    names2 = ['agara', 'anath', 'ankhnas', 'arama', 'arta', 'astis', 'atra', 'ekhu', 'ela', 'emi', 'enen', 'enet', 'ense', 'epet', 'erit', 'es', 'ese', 'iah', 'ibah', 'ibeu', 'ika', 'ila', 'ilah', 'ima', 'ina', 'inah', 'inoe', 'ira', 'irye', 'isi', 'isis', 'itis', 'iya', 'iza', 'onee', 'orisis', 'otep', 'ukura', 'unta', 'ura', 'utaraa', 'utis'];
  } else {
    names1 = ['Aah', 'Aakh', 'Abaal', 'Abay', 'Abdil', 'Abdam', 'Abub', 'Abus', 'Abuskh', 'Achen', 'Acher', 'Amen', 'Ankh', 'Apron', 'Baken', 'Bakar', 'Chat', 'Dar', 'Fen', 'Fun', 'Hak', 'Ham', 'Han', 'Har', 'Hek', 'Hor', 'Im', 'Jab', 'Jaf', 'Kam', 'Kak', 'Kef', 'Khab', 'Khaf', 'Khons', 'Man', 'Makal', 'Mem', 'Menk', 'Ment', 'Nar', 'Neb', 'Nekht', 'Osir', 'Osor', 'Pad', 'Phan', 'Phrah', 'Psam', 'Sem', 'Seph', 'Ser', 'Sok', 'Smen', 'Tab', 'Tah', 'Tat', 'Thoth', 'Thutm', 'Tosor'];
    names2 = ['aesis', 'ahersef', 'aka', 'akar', 'akaruti', 'aken', 'akhsas', 'amelek', 'amen', 'aphos', 'aphres', 'aphris', 'apis', 'asenb', 'astes', 'auhor', 'ehemto', 'ekhet', 'ekhtou', 'emheb', 'emhebi', 'emhet', 'emhotep', 'enaten', 'ennifi', 'entu', 'ephers', 'epthah', 'epthes', 'eramen', 'erermes', 'eres', 'eri', 'erres', 'ertum', 'eru', 'erumes', 'esseker', 'ihiti', 'iris', 'is', 'isaba', 'otep', 'oteph', 'oubis', 'ouris', 'ubis', 'umah', 'urmes'];
  }
  const rnd = Math.floor(Math.random() * names1.length);
  const rnd2 = Math.floor(Math.random() * names2.length);
  return names1[rnd] + names2[rnd2];
}

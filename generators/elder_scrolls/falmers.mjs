export default function falmers() {
  let names1;
  let names2;
  const type = Math.random() > 0.5 ? 0 : 1;
  const names3 = ['An', 'Ag', 'Agar', 'Bin', 'Berel', 'Cryn', 'Caer', 'Den',
    'Dane', 'Ere', 'Eme', 'Fin', 'For', 'Gran', 'Gan', 'Hene', 'Har', 'Irel',
    'Ise', 'Kran', 'Kor', 'Lene', 'Lore', 'Mas', 'Mine', 'Nor', 'Nara', 'Or',
    'Ore', 'Pan', 'Pris', 'Ran', 'Rone', 'Shan', 'Sin', 'Tor', 'Tin', 'Ure',
    'Unar', 'Vran', 'Vor', 'Wan', 'Was', 'Yre', 'Yren', 'Zon', 'Zar'];
  const names4 = ['bath', 'borin', 'dwen', 'dras', 'faroth', 'ferys', 'garwen',
    'goth', 'horith', 'han', 'krath', 'kelor', 'len', 'loth', 'meloth', 'myn',
    'naris', 'noth', 'paris', 'parwen', 'rawyn', 'renoth', 'saroth', 'saris',
    'taroth', 'tan', 'vryn', 'varys', 'wenoth', 'wen', 'yloth', 'yrwen',
    'zras', 'zoth'];
  if (type === 1) {
    names1 = ['Ari', 'Aith', 'Bel', 'Bire', 'Cele', 'Cen', 'El', 'Elle', 'En',
      'Fae', 'Fai', 'Gis', 'Gwen', 'Haer', 'Hele', 'Inhe', 'Ime', 'Je', 'Jes',
      'Kir', 'Kine', 'Les', 'Lyn', 'Mel', 'Min', 'Nira', 'Nythe', 'Pes',
      'Prys', 'Rine', 'Ryn', 'Shi', 'Sina', 'Tera', 'Ter', 'Unhel', 'Uve',
      'Ven', 'Vyr', 'Wae', 'Wina', 'Ynhe', 'Ys', 'Zhar', 'Zida'];
    names2 = ['bora', 'bysh', 'dhora', 'denyse', 'fani', 'feah', 'geth',
      'greah', 'her', 'hish', 'kharise', 'kyre', 'lenor', 'lori', 'mhes',
      'meril', 'neris', 'nyish', 'pireth', 'path', 'rae', 'rish', 'reno',
      'ren', 'shan', 'selin', 'thune', 'tys', 'vhis', 'vena', 'wihn', 'wen',
      'yane', 'yis', 'zhina', 'zis'];
  } else {
    names1 = ['Are', 'Ath', 'Bal', 'Bir', 'Cele', 'Cen', 'Ed', 'Edhel', 'En',
      'Fa', 'Fai', 'Gir', 'Glen', 'Har', 'Here', 'Idhe', 'Ire', 'Ja', 'Jed',
      'Kar', 'Kida', 'Lat', 'Lyr', 'Men', 'Mir', 'Niri', 'Nyr', 'Pare',
      'Pryn', 'Red', 'Ryn', 'Si', 'Sida', 'Tere', 'Tor', 'Udhel', 'Ure',
      'Var', 'Vyr', 'Wai', 'Wiri', 'Ydhe', 'Yr', 'Zar', 'Zida'];
    names2 = ['bor', 'bys', 'dhor', 'danyis', 'faris', 'fiath', 'groth',
      'griath', 'hur', 'his', 'karis', 'kir', 'lebor', 'lor', 'mhor', 'mitil',
      'naris', 'nyis', 'prith', 'piroth', 're', 'riath', 'rilor', 'ring',
      'sur', 'sebir', 'thur', 'til', 'vhur', 'vus', 'with', 'we', 'yaris',
      'yor', 'zhor', 'zius'];
  }
  const rnd0 = Math.floor(Math.random() * names1.length);
  const rnd1 = Math.floor(Math.random() * names2.length);
  const rnd2 = Math.floor(Math.random() * names3.length);
  const rnd3 = Math.floor(Math.random() * names4.length);
  return `${names1[rnd0] + names2[rnd1]} ${names3[rnd2]}${names4[rnd3]}`;
}

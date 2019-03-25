export default function falmers() {
  let names;
  let names1;
  let names2;
  let rnd2;
  let rnd3;
  let rnd0;
  let rnd1;
  let rnd2;
  let
    rnd3;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const names3 = ['An', 'Ag', 'Agar', 'Bin', 'Berel', 'Cryn', 'Caer', 'Den', 'Dane', 'Ere', 'Eme', 'Fin', 'For', 'Gran', 'Gan', 'Hene', 'Har', 'Irel', 'Ise', 'Kran', 'Kor', 'Lene', 'Lore', 'Mas', 'Mine', 'Nor', 'Nara', 'Or', 'Ore', 'Pan', 'Pris', 'Ran', 'Rone', 'Shan', 'Sin', 'Tor', 'Tin', 'Ure', 'Unar', 'Vran', 'Vor', 'Wan', 'Was', 'Yre', 'Yren', 'Zon', 'Zar'];
  const names4 = ['bath', 'borin', 'dwen', 'dras', 'faroth', 'ferys', 'garwen', 'goth', 'horith', 'han', 'krath', 'kelor', 'len', 'loth', 'meloth', 'myn', 'naris', 'noth', 'paris', 'parwen', 'rawyn', 'renoth', 'saroth', 'saris', 'taroth', 'tan', 'vryn', 'varys', 'wenoth', 'wen', 'yloth', 'yrwen', 'zras', 'zoth'];
  if (type === 1) {} else {} {
    rnd0 = Math.floor(Math.random() * names1.length);
    rnd1 = Math.floor(Math.random() * names2.length);
    rnd2 = Math.floor(Math.random() * names3.length);
    rnd3 = Math.floor(Math.random() * names4.length);
    names = `${names1[rnd0] + names2[rnd1]} ${names3[rnd2]}${names4[rnd3]}`;
    return names;
  }
}

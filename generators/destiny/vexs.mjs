export default function vexs() {
  let rnd;

  let rnd2;
  let rnd3;
  let rnd4;
  let
    rnd5;


  let names;

  const nm1 = ['', '', '', '', 'c', 'g', 'h', 'k', 'n', 's', 't', 'th', 'z'];
  const nm2 = ['a', 'e', 'a', 'e', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'eo', 'io', 'y', 'y', 'ia', 'ea'];
  const nm3 = ['d', 'dh', 'dr', 'g', 'gg', 'gh', 'gr', 'k', 'kh', 'kk', 'kr', 'lg', 'lk', 'nk', 'nr', 'rg', 'rk', 'sk', 'th', 'tr'];
  const nm4 = ['m', 'n', 's', 't', 'x'];


  {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    rnd3 = Math.floor(Math.random() * nm3.length);
    rnd4 = Math.floor(Math.random() * nm2.length);
    rnd5 = Math.floor(Math.random() * nm4.length);
    names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
    return names;
  }
}

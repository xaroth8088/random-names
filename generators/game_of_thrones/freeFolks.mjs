export default function freeFolks() {
  let names;
  let rnd;
  let rnd2;
  let rnd;
  let rnd2;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const names1 = ['An', 'Ar', 'As', 'Ber', 'Bir', 'Dal', 'Dis', 'Dor', 'El', 'Fer', 'Fjor', 'Fren', 'Gil', 'Gren', 'Grin', 'Har', 'Her', 'Hil', 'Hol', 'Ig', 'Jen', 'Jor', 'Kar', 'Len', 'Mun', 'Myr', 'Nel', 'Row', 'Svan', 'Val', 'Vel', 'Vig', 'Yg', 'Yn', 'Yr'];
  const names2 = ['da', 'dis', 'ga', 'gin', 'la', 'lie', 'lif', 'lin', 'lina', 'lis', 'ly', 'ma', 'milla', 'na', 'ne', 'nel', 'ness', 'nora', 'ny', 'ra', 'rey', 'rima', 'rin', 'rine', 'rit', 'ritte', 'ry', 'sten', 'thine', 'trud', 'vil', 'vild', 'wen', 'wyn', 'ya'];
  const names3 = ['Ama', 'Ane', 'Arne', 'Bre', 'Bri', 'Cami', 'Da', 'Eli', 'Fa', 'Fra', 'Fre', 'Ge', 'Gei', 'Gja', 'Gra', 'Gre', 'Ha', 'Hi', 'Hre', 'Ine', 'Ingi', 'Ka', 'Kri', 'Ma', 'Mi', 'Ne', 'No', 'Oli', 'Sra', 'Sre', 'Stei', 'Sva', 'Tho', 'Ule', 'Vre'];
  const names4 = ['borg', 'dis', 'finna', 'hild', 'lda', 'ldis', 'lena', 'lene', 'lga', 'lla', 'lly', 'lsa', 'nda', 'nhild', 'nna', 'nya', 'ra', 'ren', 'rie', 'rine', 'rit', 'ritte', 'rma', 'rna', 'rny', 'rthe', 'sa', 'sha', 'stin', 'the', 'thera', 'vild', 'wa', 'ya', 'yah'];
  const names5 = ['Ar', 'Bal', 'Bar', 'Bior', 'Bjor', 'Bol', 'Bran', 'Dar', 'Dor', 'Dryn', 'Fjar', 'Geir', 'Gen', 'Gor', 'Gorn', 'Grun', 'Gun', 'Har', 'Hran', 'Is', 'Jar', 'Jor', 'Lok', 'Mar', 'Mor', 'Nar', 'Nor', 'Or', 'Orn', 'Rag', 'Rog', 'Styr', 'Sur', 'Thor', 'Tor', 'Val', 'Var', 'Varn', 'Vig', 'Vor'];
  const names6 = ['ald', 'alder', 'amun', 'amyr', 'and', 'arr', 'arun', 'dar', 'del', 'egg', 'eigr', 'ell', 'grim', 'igar', 'ik', 'kar', 'laf', 'leck', 'mir', 'modr', 'mund', 'myr', 'nor', 'odarr', 'odr', 'old', 'olf', 'oll', 'or', 'orn', 'rad', 'ran', 'rand', 'rik', 'ryn', 'ulas', 'und', 'vir', 'wynd', 'yger'];
  const names7 = ['Ara', 'Bae', 'Bia', 'Bja', 'Bora', 'Bra', 'Dara', 'Do', 'Dra', 'Dry', 'Go', 'Gra', 'Gre', 'Gro', 'Hara', 'Hro', 'Jara', 'Jora', 'Olmo', 'Ore', 'Orno', 'Rau', 'Ska', 'Sra', 'Stei', 'Sty', 'Sve', 'Tho', 'Tore', 'Vara'];
  const names8 = ['dill', 'dir', 'dol', 'gard', 'geir', 'gir', 'gni', 'gr', 'grim', 'gvar', 'kmar', 'kul', 'laf', 'lner', 'mir', 'mun', 'mund', 'myr', 'narr', 'nir', 'rald', 'rand', 'regg', 'rigg', 'rik', 'rne', 'rnir', 'rolf', 'rrand', 'val'];
  const i = Math.floor(Math.random() * 10); {
    if (i < 5) {
      if (type === 1) {
        rnd = Math.floor(Math.random() * names1.length);
        rnd2 = Math.floor(Math.random() * names2.length);
        names = names1[rnd] + names2[rnd2];
      } else {
        rnd = Math.floor(Math.random() * names5.length);
        rnd2 = Math.floor(Math.random() * names6.length);
        names = names5[rnd] + names6[rnd2];
      }
    } else if (type === 1) {
      rnd = Math.floor(Math.random() * names3.length);
      rnd2 = Math.floor(Math.random() * names4.length);
      names = names3[rnd] + names4[rnd2];
    } else {
      rnd = Math.floor(Math.random() * names7.length);
      rnd2 = Math.floor(Math.random() * names8.length);
      names = names7[rnd] + names8[rnd2];
    }
    return names;
  }
}

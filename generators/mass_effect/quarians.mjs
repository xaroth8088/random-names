export default function quarians() {
  let names1;
  let names4;
  let names3;
  const type = Math.random() > 0.5 ? 0 : 1;
  const names2 = ['a', 'e', 'i', 'o', 'u', 'aa', 'ee', 'ae'];
  const names5 = ['C', 'F', 'H', 'G', 'J', 'L', 'M', 'N', 'R', 'S', 'Sh', 'V', 'T', 'W', 'X', 'Y', 'Z'];
  const names6 = ['dal', 'dda', 'dor', 'fal', 'fin', 'for', 'gar', 'l', 'la', 'lan', 'las', 'lin', 'll', 'llo', 'lon', 'lun', 'm', 'ma', 'man', 'mas', 'me', 'min', 'mis', 'mm', 'mma', 'mor', 'mos', 'mun', 'n', 'nar', 'nis', 'nn', 'nna', 'r', 'ra', 'rah', 'ram', 'ras', 'ris', 'rol', 'rrel', 'rul', 's', 'sa', 'sal', 'sar', 'ss', 'sul', 'zh', 'zu'];
  const names7 = ['nar', 'vas'];
  const names8 = ['bra', 'ca', 'chol', 'darum', 'din', 'dir', 'dolor', 'dor', 'doruk', 'firn', 'fis', 'gro', 'hala', 'hok', 'ji', 'jol', 'ko', 'kor', 'kra', 'larm', 'lazi', 'leya', 'ma', 'morn', 'nbay', 'nil', 'nna', 'pal', 'pan', 'ra', 'rah', 'raka', 'ram', 'rark', 'reh', 'ron', 'sost', 'talir', 'vo', 'vum', 'wa', 'wal', 'wan', 'wib', 'worp', 'yya', 'zal', 'zay', 'zorn', 'zzor'];
  if (type === 1) {
    names3 = ['f', 'h', 'l', 'm', 'n', 'r', 's', 'l', 'n', 'nn', 'mm', 'tor', 'to', 'sin', 'lo'];
  } else {
    names3 = ['f', 'h', 'l', 'm', 'n', 'r', 's', 'l', 'n', 'nn', 'mm'];
  }
  if (type === 1) {
    names1 = ['K', 'G', 'C', 'F', 'H', 'J', 'L', 'M', 'N', 'R', 'S', 'V', 'W', 'Y', 'Z', 'C', 'F', 'H', 'J', 'L', 'M', 'N', 'R', 'S', 'V', 'W', 'Y', 'Z'];
    names3 = ['f', 'h', 'l', 'm', 'n', 'r', 's', 'l', 'n', 'nn', 'mm', 'tor', 'to', 'sin', 'lo'];
    names4 = [''];
  } else {
    names1 = ['C', 'F', 'H', 'J', 'L', 'M', 'N', 'R', 'S', 'Sh', 'W', 'Y', 'Z'];
    names3 = ['f', 'h', 'l', 'm', 'n', 'r', 's', 'l', 'n', 'nn', 'mm'];
    names4 = ['a', 'e', 'u', 'i', 'o', 'a'];
  }
  const rnd0 = Math.floor(Math.random() * names1.length);
  const rnd1 = Math.floor(Math.random() * names2.length);
  const rnd2 = Math.floor(Math.random() * names3.length);
  const rnd3 = Math.floor(Math.random() * names4.length);
  const rnd4 = Math.floor(Math.random() * names5.length);
  const rnd5 = Math.floor(Math.random() * names2.length);
  const rnd6 = Math.floor(Math.random() * names6.length);
  const rnd7 = Math.floor(Math.random() * names7.length);
  const rnd8 = Math.floor(Math.random() * names5.length);
  const rnd9 = Math.floor(Math.random() * names2.length);
  const rnd10 = Math.floor(Math.random() * names8.length);
  return `${names1[rnd0] + names2[rnd1] + names3[rnd2] + names4[rnd3]}'${names5[rnd4]}${names2[rnd5]}${names6[rnd6]} ${names7[rnd7]} ${names5[rnd8]}${names2[rnd9]}${names8[rnd10]}`;
}

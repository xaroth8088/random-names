export default function krogans() {
  let names4;
  const type = Math.random() > 0.5 ? 0 : 1;
  const names1 = ['B', 'Br', 'C', 'Cr', 'Ch', 'D', 'Dr', 'F', 'G', 'Gr', 'H', 'J', 'K', 'Kh', 'Kr', 'M', 'N', 'P', 'Pr', 'Q', 'Qr', 'R', 'S', 'Sr', 'Str', 'T', 'Tr', 'V', 'Vr', 'W', 'Wr', 'Zr'];
  const names2 = ['a', 'e', 'u', 'i', 'o', 'a', 'u'];
  const names3 = ['rr', 'x', 'nd', 'nk', 'yas', 'rm', 'rn', 'rk', 'tack', 'rg', 'g', 'gg', 'sk', 'zk', 'nd', 'd', 'rd', 'xx', 'yak', 'yax', 'rak', 'nak', 'kar', 'kor', 'lak', 'gor', 'gar', 'gas', 'r'];
  const names5 = ['ash', 'bakur', 'brakir', 'dark', 'drak', 'drax', 'dtar', 'k', 'kador', 'karor', 'kirum', 'kmar', 'kmor', 'krax', 'ksan', 'ksar', 'kson', 'ksor', 'l', 'lot', 'mar', 'nar', 'ndok', 'ntor', 'rax', 'rbok', 'rbon', 'rdak', 'rdan', 'rdok', 'rdon', 'rgal', 'rgon', 'rkan', 'rloc', 'rlok', 'rsan', 'rtak', 'tarog', 'tarok', 'tarum', 'tarun', 'tatog', 'tilak', 'vanor', 'varog', 'vrak', 'x', 'yrdok', 'yrloc'];
  if (type === 1) {
    names4 = [''];
  } else {
    names4 = ['a', 'e', 'u', 'i', 'o', 'a'];
  }
  const rnd0 = Math.floor(Math.random() * names1.length);
  const rnd1 = Math.floor(Math.random() * names2.length);
  const rnd2 = Math.floor(Math.random() * names3.length);
  const rnd3 = Math.floor(Math.random() * names4.length);
  const rnd4 = Math.floor(Math.random() * names1.length);
  const rnd5 = Math.floor(Math.random() * names2.length);
  const rnd6 = Math.floor(Math.random() * names5.length);
  return `${names1[rnd4] + names2[rnd5] + names5[rnd6]} ${names1[rnd0]}${names2[rnd1]}${names3[rnd2]}${names4[rnd3]}`;
}

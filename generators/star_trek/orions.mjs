export default function orions() {
  let rnd;

  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let
    rnd7;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['D', 'G', 'H', 'J', 'L', 'M', 'N', 'Ng', 'R', 'T', 'Th', 'V'];
  const nm2 = ['a', 'i', 'e', 'o', 'a', 'ai', 'ou', 'aa', 'a', 'e', 'i', 'o'];
  const nm3 = ['g', 'gg', 'k', 'kk', 'l', 'll', 'm', 'mm', 'r', 'rr', 'sr', 'ss', 't', 'tt', 'yc', 'z', 'zz'];
  const nm4 = ['a', 'e', 'i', 'o', 'u'];
  const nm5 = ['d', 'h', 'k', 'l', 'm', 'n', 'r', 'rc', 'v', 'z', ''];

  const nm6 = ['D', 'G', 'H', 'J', 'L', 'M', 'N', 'S', 'Sh', 'T', 'Th', 'V', 'Zh'];
  const nm7 = ['a', 'e', 'i', 'ee', 'ai', 'ay', 'a', 'e', 'i', 'a', 'e', 'i'];
  const nm8 = ['d', 'dd', 'g', 'gg', 'hn', 'l', 'll', 'n', 'nn', 'r', 'rr', 'rt', 's', 'ss', 'sh', 'shk', 'v', 'vn', 'vv'];
  const nm9 = ['a', 'e', 'i', 'o', 'u', 'aa', 'ou'];
  const nm10 = ['r', 's', 'sh', 'ss', '', '', '', '', '', '', '', '', '', '', ''];
  const nm11 = ['hn', 'l', 'll', 'n', 'nn', 's', 'ss', 'sh', 'v'];


  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        rnd = Math.floor(Math.random() * nm6.length);
        rnd2 = Math.floor(Math.random() * nm7.length);
        rnd3 = Math.floor(Math.random() * nm8.length);
        rnd4 = Math.floor(Math.random() * nm9.length);
        rnd5 = Math.floor(Math.random() * nm10.length);
        names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5];
      } else {
        rnd = Math.floor(Math.random() * nm6.length);
        rnd2 = Math.floor(Math.random() * nm7.length);
        rnd3 = Math.floor(Math.random() * nm8.length);
        rnd4 = Math.floor(Math.random() * nm9.length);
        rnd5 = Math.floor(Math.random() * nm11.length);
        rnd6 = Math.floor(Math.random() * nm9.length);
        rnd7 = Math.floor(Math.random() * nm10.length);
        names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm11[rnd5] + nm9[rnd6] + nm10[rnd7];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      rnd5 = Math.floor(Math.random() * nm5.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
    }
    return names;
  }
}

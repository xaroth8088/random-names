export default function rigelians() {
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
  const nm1 = ['B', 'C', 'Ch', 'D', 'G', 'Gr', 'K', 'Kr', 'M', 'Pr', 'R', 'Sr', 'Sch', 'T', 'V', 'Vr', 'W', 'Z'];
  const nm2 = ['a', 'ae', 'ei', 'i', 'o', 'ou', 'u', 'a', 'u', 'a', 'u', 'o', 'ii', 'ea', 'oo', 'aa', 'a', 'u'];
  const nm3 = ['b', 'b', 'ch', 'd', 'g', 'd', 'g', 'gr', 'k', 'l', 'm', 'n', 't', 'v', 'w', 'k', 'l', 'm', 'n', 't', 'v', 'w', 'xt', 'y', 'z', 'y', 'z', 'zy'];
  const nm4 = ['d', 'k', 'l', 'lr', 'n', 'p', 'r', 't', 'v', '', ''];

  const nm5 = ['B', 'C', 'H', 'J', 'K', 'Kh', 'R', 'S', 'Sh', 'X', 'Y', 'Z', 'Zh'];
  const nm6 = ['a', 'ae', 'ei', 'i', 'o', 'ou', 'u', 'a', 'u', 'a', 'u', 'o', 'ii', 'ea', 'oo', 'aa', 'oi', 'ee'];
  const nm7 = ['c', 'ch', 'gg', 'gr', 'l', 'll', 'ln', 'ngy', 'ng', 'n', 'm', 's', 'st', 'sh', 'shw', 'v', 'ys', 'w', 'wr', 'c', 'g', 'l', 's', 'v', 'w', 'c', 'g', 'l', 's', 'v', 'w', 'n', 'n', 'm', 'm'];
  const nm8 = ['d', 'l', 'n', 'm', 's', 'x', '', '', '', '', '', ''];


  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        rnd = Math.floor(Math.random() * nm5.length);
        rnd2 = Math.floor(Math.random() * nm6.length);
        rnd3 = Math.floor(Math.random() * nm7.length);
        rnd4 = Math.floor(Math.random() * nm6.length);
        rnd5 = Math.floor(Math.random() * nm8.length);
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
      } else {
        rnd = Math.floor(Math.random() * nm5.length);
        rnd2 = Math.floor(Math.random() * nm6.length);
        rnd3 = Math.floor(Math.random() * nm7.length);
        rnd4 = Math.floor(Math.random() * nm6.length);
        rnd5 = Math.floor(Math.random() * nm7.length);
        rnd6 = Math.floor(Math.random() * nm6.length);
        rnd7 = Math.floor(Math.random() * nm8.length);
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd5] + nm6[rnd6] + nm8[rnd7];
      }
    } else if (i < 5) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm3.length);
      rnd6 = Math.floor(Math.random() * nm2.length);
      rnd7 = Math.floor(Math.random() * nm4.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd5] + nm2[rnd6] + nm4[rnd7];
    }
    return names;
  }
}

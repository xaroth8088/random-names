export default function undines() {
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
  const nm1 = ['', '', '', '', '', 'bh', 'd', 'dh', 'g', 'gh', 'j', 'kh', 'm', 'n', 'r', 'rh', 'sh', 'v', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'aa', 'oo'];
  const nm3 = ['b', 'bd', 'c', 'cd', 'd', 'dd', 'db', 'g', 'gd', 'gv', 'gn', 'gm', 'j', 'k', 'kb', 'kd', 'kn', 'km', 'kv', 'm', 'md', 'mm', 'mb', 'n', 'nn', 'nb', 'nd', 'r', 'rd', 'rg', 'rv', 'rz', 'v', 'b', 'c', 'd', 'g', 'j', 'k', 'm', 'n', 'r', 'v'];
  const nm4 = ['d', 'hz', 'j', 'k', 'm', 'n', 'r', 'sh', 'v'];
  const nm5 = ['', '', '', 'b', 'c', 'd', 'f', 'h', 'l', 'm', 'n', 'p', 'r', 's', 'w', 'z'];
  const nm6 = ['a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'y', 'y', 'y', 'ya', 'aa'];
  const nm7 = ['b', 'bh', 'd', 'dz', 'dh', 'fd', 'fn', 'ff', 'f', 'fz', 'hn', 'hl', 'hr', 'hm', 'h', 'hh', 'l', 'lg', 'ld', 'lb', 'lf', 'ln', 'm', 'mm', 'mn', 'mr', 'mf', 'n', 'nn', 'nr', 'nd', 'nf', 'nh', 'r', 'rh', 'rb', 'rv', 'rd', 'rz', 'v', 'vr', 'b', 'd', 'f', 'h', 'l', 'n', 'm', 'r', 'v', 'b', 'd', 'f', 'h', 'l', 'n', 'm', 'r', 'v'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', 'h', 'n'];


  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 5) {
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm6.length);
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 3) {
        while (rnd < 5) {
          rnd = Math.floor(Math.random() * nm1.length);
        }
        names = nm1[rnd] + nm2[rnd2] + nm4[rnd5];
      } else if (i < 7) {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5];
      }
    }
    return names;
  }
}

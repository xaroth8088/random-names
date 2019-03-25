export default function kobolds() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
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
  const nm1 = ['', '', '', '', '', 'br', 'cr', 'dr', 'd', 'dh', 'g', 'gh', 'gr', 'j', 'k', 'm', 'n', 'q', 'qr', 'r', 'rh', 'v', 'vr', 'vh', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'i', 'o', 'a', 'i', 'o', 'aa', 'ea', 'oo', 'ee'];
  const nm3 = ['d', 'dd', 'dr', 'dz', 'dh', 'gn', 'gm', 'gr', 'gz', 'gh', 'k', 'kk', 'kn', 'kz', 'km', 'kr', 'l', 'lz', 'll', 'lr', 'ld', 'ln', 'm', 'mk', 'mz', 'n', 'nz', 'nr', 'pm', 'pz', 'pr', 'r', 'rl', 'rn', 'rm', 'rg', 'rk', 'rd', 'rz', 'rr', 't', 'tr', 'tz', 'x', 'zh', 'z', 'zz', 'zr', 'zk'];
  const nm4 = ['', '', '', '', '', 'b', 'd', 'g', 'k', 'l', 'ld', 'lk', 'lp', 'n', 'nk', 'p', 'rk', 's', 'sk', 'x'];
  const nm5 = ['', '', '', '', 'd', 'f', 'g', 'h', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z'];
  const nm7 = ['d', 'dk', 'dr', 'gr', 'gl', 'g', 'h', 'hr', 'k', 'kr', 'kkr', 'ks', 'l', 'lr', 'lk', 'ls', 'r', 'rk', 'rs', 'rg', 'rl', 's', 'ss', 'sr', 'sk', 'sg', 'sgr', 'skr', 'ssr', 'tr', 'th', 'thr', 'z', 'zr', 'zk', 'zn', 'zl'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'h', 'k', 'l', 'n', 'm', 'r', 's'];
  const i = Math.floor(Math.random() * 10); {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 8) {
        names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm8[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm7[rnd6] + nm2[rnd7] + nm8[rnd5];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 3) {
        while (rnd < 5) {
          rnd = Math.floor(Math.random() * nm1.length);
        }
        while (rnd5 < 5) {
          rnd5 = Math.floor(Math.random() * nm4.length);
        }
        names = nm1[rnd] + nm2[rnd2] + nm4[rnd5];
      } else if (i < 7) {
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5];
      }
    }
    return names;
  }
}

export default function ishi_tibs() {
  let rnd;

  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let rnd8;
  let
    rnd9;
  let rnd10;
  let
    rnd11;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', 'c', 'g', 'gr', 'h', 'j', 'k', 'm', 'n', 'q', 'r', 's', 'sh', 't', 'th', 'v', 'w', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'uu', 'ue', 'ia', 'ie', 'ui', 'ua', 'aa', 'ee'];
  const nm3 = ['br', 'bl', 'b', 'g', 'gg', 'gr', 'ht', 'hk', 'hr', 'hz', 'k', 'kz', 'kr', 'kl', 'km', 'kn', 'l', 'll', 'lz', 'lr', 'lb', 'lg', 'lt', 'm', 'mb', 'ml', 'mk', 'mr', 'mz', 'n', 'nn', 'ng', 'nr', 'nk', 'nl', 'nt', 'nz', 'pl', 'pr', 'pz', 'r', 'rl', 'rg', 'rk', 'rm', 'rn', 'rt', 'rz', 't', 'tch', 'tl', 'zk', 'zl', 'zr'];
  const nm4 = ['', '', '', '', 'bb', 'c', 'ch', 'g', 'k', 'ks', 'l', 'lk', 'm', 'n', 'nd', 'rc', 'rt', 's', 't'];
  const nm5 = ['', '', '', 'c', 'f', 'gh', 'h', 'l', 'm', 'n', 'ph', 's', 'sh', 't', 'th', 'v', 'w', 'z'];
  const nm6 = ['a', 'e', 'i', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'ya', 'ye', 'ie', 'ia', 'ea', 'eo'];
  const nm7 = ['bl', 'ff', 'gn', 'gl', 'gm', 'gh', 'hr', 'hn', 'hm', 'hl', 'k', 'kh', 'kl', 'l', 'll', 'lr', 'ln', 'lm', 'lg', 'lt', 'ls', 'lz', 'm', 'mm', 'mr', 'mz', 'mn', 'mh', 'mf', 'n', 'nn', 'ng', 'nr', 'nl', 'nt', 'nz', 'ns', 'nf', 'nh', 'ph', 'pl', 'pr', 'ps', 'r', 'rr', 'rl', 'rs', 'tz', 'rth', 's', 'sp', 'sh', 'sn', 'sm', 'th', 't'];
  const nm8 = ['', '', '', '', 'f', 'h', 'l', 'm', 'n', 'r', 's', 'th'];
  const nm9 = ['', '', '', 'b', 'br', 'c', 'dr', 'f', 'gr', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'sl', 'sh', 't', 'tr', 'th', 'v', 'z'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'aa', 'ie', 'oo', 'ay'];
  const nm11 = ['br', 'b', 'd', 'dr', 'g', 'gg', 'gr', 'hr', 'ht', 'k', 'kz', 'kr', 'kl', 'km', 'l', 'll', 'lr', 'lz', 'lg', 'ld', 'lb', 'ls', 'ln', 'm', 'mb', 'mz', 'mr', 'mk', 'mm', 'n', 'nn', 'nr', 'nd', 'ng', 'r', 'rd', 'rg', 'rk', 'rm', 'rl', 'ssh', 'sh', 't', 'tl', 'th', 'zk', 'zl', 'z'];
  const nm12 = ['', '', '', 'c', 'ff', 'l', 'm', 'n', 'ng', 'rr', 'tz', 'w'];


  const i = Math.floor(Math.random() * 10);
  {
    rnd7 = Math.floor(Math.random() * nm9.length);
    rnd8 = Math.floor(Math.random() * nm10.length);
    rnd10 = Math.floor(Math.random() * nm12.length);
    if (i % 2 === 0) {
      while (rnd7 < 3) {
        rnd7 = Math.floor(Math.random() * nm9.length);
      }
      while (rnd10 < 4) {
        rnd10 = Math.floor(Math.random() * nm12.length);
      }
      namelast = nm9[rnd7] + nm10[rnd8] + nm12[rnd10];
    } else {
      rnd9 = Math.floor(Math.random() * nm10.length);
      rnd11 = Math.floor(Math.random() * nm11.length);
      namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm12[rnd10];
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 6) {
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5]}  ${namelast}`;
      } else {
        rnd5b = Math.floor(Math.random() * nm7.length);
        rnd6 = Math.floor(Math.random() * nm6.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd5b] + nm6[rnd6] + nm8[rnd5]}  ${namelast}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 4) {
        while (rnd < 3) {
          rnd = Math.floor(Math.random() * nm1.length);
        }
        while (rnd5 < 4) {
          rnd5 = Math.floor(Math.random() * nm4.length);
        }
        names = `${nm1[rnd] + nm2[rnd2] + nm4[rnd5]}  ${namelast}`;
      } else if (i < 7) {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]}  ${namelast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        rnd5b = Math.floor(Math.random() * nm3.length);
        rnd6 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd5b] + nm2[rnd6] + nm4[rnd5]}  ${namelast}`;
      }
    }
    return names;
  }
}

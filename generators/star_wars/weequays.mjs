export default function weequays() {
  let namelast;
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let rnd8;
  let rnd9;
  let rnd10;
  let rnd11;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'br', 'c', 'ch', 'd', 'f', 'g', 'gr',
    'gw', 'h', 'j', 'k', 'kr', 'l', 'm', 'n', 'p', 'pl', 'pr', 'q', 's', 'sh',
    't', 'tr', 'v', 'w', 'y'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'a', 'o', 'u', 'a', 'e',
    'i', 'o', 'u', 'a', 'o', 'u', 'a', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a',
    'o', 'u', 'a', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'a', 'o',
    'u', 'a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'a', 'o', 'u', 'ia', 'ie',
    'ea', 'ei', 'ee', 'aa', 'ai'];
  const nm3 = ['-m', '-n', '-h', '-l', '-v', 'b', 'b-r', 'bl', 'b-d', 'b-z',
    'd', 'd-r', 'd-z', 'dl', 'ds', 'dd', 'g', 'g-r', 'gg', 'gr', 'gd', 'gl',
    'h', 'j', 'k-b', 'k-r', 'kd', 'k-z', 'kn', 'kr', 'kb', 'km', 'l', 'll',
    'ln', 'm', 'mb', 'nm-b', 'mr', 'n-d', 'nd', 'nl', 'nn', 'ns', 'r', 'r-z',
    'r-b', 'r-g', 'r-d', 'rg', 'rr', 'rs', 'rt', 's-d', 's-b', 's-l', 's-g',
    't', 'tt', 'v', 'z'];
  const nm4 = ['', '', '', '', 'bl', 'c', 'g', 'h', 'k', 'kk', 'l', 'm', 'mbl',
    'mm', 'n', 'nn', 'r', 'rb', 'rg', 'rk', 'rm', 'rs', 'rt', 's', 'sk', 't',
    'ts', 'v', 'wn', 'y', 'z'];
  const nm5 = ['b', 'c', 'f', 'g', 'h', 'k', 'p', 'q', 'r', 's', 't', 'v', 'x',
    'z'];
  const nm6 = ['a', 'a', 'e', 'o', 'i', 'u', 'o', 'a', 'a', 'e', 'o', 'i', 'u',
    'o', 'a', 'a', 'e', 'o', 'i', 'u', 'o', 'a', 'a', 'e', 'o', 'i', 'u', 'o',
    'a', 'a', 'e', 'o', 'i', 'u', 'o', 'a', 'e', 'o', 'i', 'u', 'o', 'a',
    'ie', 'ii', 'ee', 'ei'];
  const nm7 = ['c', 'cr', 'cn', 'cm', 'g', 'gg', 'gm', 'gr', 'gs', 'h', 'hm',
    'hn', 'hr', 'hs', 'km', 'kn', 'kr', 'kl', 'ks', 'l', 'll', 'lm', 'lk',
    'lc', 'lr', 'ls', 'mk', 'mr', 'n', 'mm', 'm', 'nn', 'nd', 'nk', 'r', 'rk',
    'rm', 'rr', 's', 'ss', 'sk', 'sm'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', 'c', 'g', 'h', 'k', 'l',
    'm', 'n', 'r', 's', 't', 'x', 'z'];
  const nm9 = ['', '', '', '', '', '', 'b', 'bl', 'br', 'd', 'dr', 'dl', 'f',
    'fr', 'fl', 'g', 'gr', 'gl', 'gh', 'k', 'kr', 'kl', 'kh', 'l', 'm', 'n',
    'r', 's', 'sh', 'st', 'sv', 'sw', 'sl', 't', 'th', 'tr', 'tl', 'v', 'vr',
    'vl'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i',
    'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i',
    'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'au', 'ee',
    'ie', 'ei', 'oo'];
  const nm11 = ['bk', 'b', 'bb', 'bg', 'br', 'd', 'dd', 'dk', 'dr', 'ff', 'f',
    'fk', 'g', 'gr', 'gg', 'gl', 'hn', 'hm', 'hk', 'hl', 'k', 'kk', 'kr',
    'kl', 'kd', 'kb', 'l', 'ls', 'lm', 'ld', 'lg', 'm', 'mk', 'mt', 'mm',
    'nk', 'nd', 'ng', 'nn', 'nt', 'r', 'rk', 'rs', 'rt', 'rtr', 's', 'sk',
    'sr', 'st', 'str', 't', 'tr'];
  const nm12 = ['', '', '', '', '', '', '', '', 'c', 'd', 'g', 'k', 'lq', 'lk',
    'lc', 'mk', 'm', 'mz', 'n', 'nk', 'nd', 'nc', 'nz', 'q', 'r', 'rd', 's',
    'sh', 'sk', 'x', 'y'];
  const i = Math.floor(Math.random() * 10); {
    rnd7 = Math.floor(Math.random() * nm9.length);
    rnd8 = Math.floor(Math.random() * nm10.length);
    rnd10 = Math.floor(Math.random() * nm12.length);
    if (i % 2 !== 0) {
      if (rnd7 < 6) {
        while (rnd10 < 8) {
          rnd10 = Math.floor(Math.random() * nm12.length);
        }
      }
      namelast = nm9[rnd7] + nm10[rnd8] + nm12[rnd10];
    } else {
      rnd9 = Math.floor(Math.random() * nm10.length);
      rnd11 = Math.floor(Math.random() * nm11.length);
      namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm12[
        rnd10];
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 5) {
        while (rnd5 < 10) {
          rnd5 = Math.floor(Math.random() * nm8.length);
        }
        names = `${nm5[rnd] + nm6[rnd2] + nm8[rnd5]}  ${namelast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm6.length);
        rnd4 = Math.floor(Math.random() * nm7.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd4] + nm6[rnd3] + nm8[rnd5]}  ${namelast}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 4) {
        if (rnd < 5) {
          while (rnd5 < 4) {
            rnd5 = Math.floor(Math.random() * nm4.length);
          }
        }
        names = `${nm1[rnd] + nm2[rnd2] + nm4[rnd5]}  ${namelast}`;
      } else if (i < 7) {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]}  ${namelast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        rnd5 = Math.floor(Math.random() * nm3.length);
        rnd6 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd5] + nm2[rnd6]}  ${namelast}`;
      }
    }
    return names;
  }
}

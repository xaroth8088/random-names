export default function darths() {
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
  const nm1 = ['', '', '', '', '', '', '', '', '', '', 'b', 'br', 'c', 'ch', 'chr', 'cr', 'd', 'dr', 'f', 'g', 'gl', 'gr', 'h', 'j', 'k', 'kr', 'kh', 'l', 'm', 'mh', 'n', 'pl', 'pr', 'q', 'r', 's', 'sc', 'sk', 'st', 'str', 'sr', 't', 'th', 'tr', 'v', 'w', 'wr', 'x', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y', 'y', 'y', 'ou', 'ae', 'ea', 'ui', 'ia', 'ue', 'ei', 'uy'];
  const nm3 = ['ct', 'cn', 'cm', 'gr', 'kk', 'kr', 'kt', 'll', 'lf', 'lg', 'lr', 'ld', 'nn', 'nt', 'nr', 'mr', 'mm', 'md', 'rr', 'rk', 'rt', 'st', 'sn', 'sm', 'th', 'sh', 'tt', 'tr', 'zz'];
  const nm4 = ['', '', '', '', '', '', '', 'c', 'ch', 'd', 'dd', 'ft', 'hl', 'k', 'l', 'm', 'n', 'ph', 'r', 'rd', 'rn', 'rr', 's', 't', 'th', 'wn', 'x'];
  const nm5 = ['', '', '', '', '', '', '', '', '', '', '', '', '', 'bh', 'c', 'ch', 'f', 'fr', 'g', 'gh', 'h', 'j', 'k', 'kh', 'l', 'm', 'n', 'ph', 'phr', 'phl', 'q', 'r', 'rh', 's', 'sh', 'st', 't', 'tr', 'th', 'thr', 'v', 'w', 'wh', 'x', 'xh', 'z', 'zh'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ea', 'ae', 'ia', 'ie', 'ei', 'ui'];
  const nm7 = ['b', 'ch', 'chr', 'cr', 'd', 'dh', 'dr', 'g', 'gr', 'gn', 'gm', 'gl', 'k', 'kn', 'km', 'kh', 'kk', 'l', 'll', 'lm', 'lr', 'ld', 'lm', 'm', 'mn', 'mr', 'mm', 'n', 'nn', 'nr', 'ns', 'nz', 'nl', 'r', 'rm', 'rl', 'rz', 'rg', 'rr', 'tr', 'ttr', 'th', 'thr', 'thn', 'thm', 'y'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', 'd', 'f', 'h', 'l', 'n', 'ph', 'r', 's', 'sh', 'ss', 'th', 'w', 'x'];


  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 5) {
        while (rnd < 13) {
          rnd = Math.floor(Math.random() * nm5.length);
        }
        while (rnd5 < 10) {
          rnd5 = Math.floor(Math.random() * nm8.length);
        }
        names = `Darth ${nm5[rnd]}${nm6[rnd2]}${nm8[rnd5]}`;
      } else if (i < 8) {
        rnd3 = Math.floor(Math.random() * nm7.length);
        rnd4 = Math.floor(Math.random() * nm6.length);
        names = `Darth ${nm5[rnd]}${nm6[rnd2]}${nm7[rnd3]}${nm6[rnd4]}${nm8[rnd5]}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm7.length);
        rnd4 = Math.floor(Math.random() * nm6.length);
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm6.length);
        names = `Darth ${nm5[rnd]}${nm6[rnd2]}${nm7[rnd3]}${nm6[rnd4]}${nm7[rnd6]}${nm6[rnd7]}${nm8[rnd5]}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 5) {
        while (rnd < 10) {
          rnd = Math.floor(Math.random() * nm1.length);
        }
        while (rnd5 < 7) {
          rnd5 = Math.floor(Math.random() * nm4.length);
        }
        names = `Darth ${nm1[rnd]}${nm2[rnd2]}${nm4[rnd5]}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `Darth ${nm1[rnd]}${nm2[rnd2]}${nm3[rnd3]}${nm2[rnd4]}${nm4[rnd5]}`;
      }
    }
    return names;
  }
}
export default function demons() {
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
  const nm1 = ['', '', '', '', '', 'b', 'bl', 'br', 'c', 'cr', 'ch', 'd', 'dr', 'g', 'gr', 'gh', 'h', 'j', 'k', 'kh', 'kr', 'l', 'm', 'n', 'p', 'pr', 'r', 's', 'sl', 'str', 'sthr', 'sth', 'sr', 't', 'th', 'tr', 'thr', 'v', 'vr', 'wr', 'x', 'y', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'io', 'oi', 'aa', 'iu', 'ia', 'ou', 'ea', 'uu', 'au', 'ao'];
  const nm3 = ['b', 'bl', 'br', 'c', 'd', 'dd', 'dr', 'g', 'gg', 'gh', 'gn', 'gr', 'h', 'j', 'k', 'kh', 'kr', 'kk', 'kn', 'lf', 'lth', 'lt', 'lm', 'lr', 'ld', 'm', 'mm', 'n', 'ng', 'nth', 'nd', 'nr', 'nt', 'ph', 'phr', 'r', 'rch', 'rp', 'rr', 'rt', 'rzh', 'rs', 'rz', 'rd', 'rk', 's', 'sh', 'ss', 'sz', 'str', 't', 'th', 'tr', 'thr', 'x', 'xtr', 'xx', 'z', 'zz'];
  const nm4 = ['', '', '', '', 'c', 'hr', 'k', 'l', 'n', 'r', 'rm', 'rr', 'rth', 's', 'ss', 'th', 'tt', 'w', 'x', 'z'];
  const nm5 = ['', '', '', '', '', 'b', 'bh', 'bl', 'c', 'ch', 'd', 'dh', 'dr', 'g', 'gl', 'gr', 'gh', 'fr', 'h', 'j', 'k', 'kh', 'l', 'll', 'm', 'n', 'p', 'ph', 'pr', 'phr', 'pl', 'r', 's', 'sh', 'shr', 'st', 'sth', 'sthr', 'sl', 't', 'th', 'thr', 'v', 'w', 'wr', 'x', 'y', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'io', 'oi', 'aa', 'iu', 'ia', 'ou', 'ea', 'uu', 'au', 'ao'];
  const nm7 = ['b', 'bb', 'br', 'bh', 'c', 'ch', 'd', 'dh', 'dd', 'dr', 'g', 'gn', 'gr', 'h', 'hr', 'hl', 'k', 'kh', 'kr', 'l', 'lf', 'lph', 'lth', 'lm', 'ln', 'ld', 'll', 'lr', 'm', 'mm', 'ml', 'mf', 'n', 'nn', 'ng', 'nth', 'ns', 'nt', 'ndr', 'ph', 'phr', 'r', 'rr', 'rph', 'rl', 'rs', 'rn', 's', 'sh', 'ss', 'sz', 'sth', 'str', 't', 'th', 'tr', 'tt', 'thr', 'x', 'xx', 'xh', 'z', 'zz'];
  const nm8 = ['', '', '', '', 'h', 'l', 'n', 's', 'th', 'z'];
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
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 5) {
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

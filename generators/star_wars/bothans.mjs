import { sample } from 'lodash-es';

export default function bothans() {
  let namelast;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', 'b', 'c', 'd', 'g', 'gr', 'h', 'k', 'n', 'r', 'tr', 'v', 'y', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'aa', 'ee', 'ai', 'ia'];
  const nm3 = ['b', 'br', 'c', 'ct', 'd', 'dr', 'g', 'h', 'kr', 'k', 'm', 'nt', 'r', 'ry', 'tr', 'v'];
  const nm4 = ['c', 'g', 'gt', 'k', 'm', 'n', 'r', 'rc', 'rd', 'rsk', 'sc', 'sk', 'st', 'th'];
  const nm5 = ['', '', '', 'c', 'dh', 'g', 'gn', 'gl', 'h', 'k', 'kn', 'l', 'm', 'n', 's', 'th', 'v', 'y'];
  const nm6 = ['c', 'g', 'h', 'kh', 'l', 'm', 'n', 'nt', 'nd', 'q', 'qh', 'r', 'rr', 's', 't', 'th', 'tr', 'v'];
  const nm7 = ['h', 'l', 'm', 'n', 'nn', 'r', 's', 't', 'th'];
  const nm8 = ['bw', 'd', 'f', 'g', 'gr', 'h', 'k', 'kr', 'l', 'm', 'n', 's', 'tr', 'v'];
  const nm9 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'aa', 'ee', 'ai', 'ia', 'ua', 'ea'];
  const nm10 = ['d', 'd\'h', 'f\'l', '\'f', 'h\'r', 'h', '\'h', 'k', '\'k', 'l', '\'l', 'n', 'n\'d', 'nr', 'n\'q', 'nd', 'n\'n', 'q', 'r', 'rr', '\'r', 's', 's\'', '\'t', 't', 'th', 'v\'', 'y\'l'];
  const nm11 = ['h', 'l', 'm', 'n', 'r', 's', 't', 'v'];
  const nm12 = ['', '', '', '', '', 'a', 'e', 'i', 'o', 'u'];
  const i = Math.floor(Math.random() * 10);
  {
    namelast = sample(nm8) + sample(nm9) + sample(nm10) + sample(nm9) + sample(nm11) + sample(nm12);
    if (type === 1) {
      if (i < 7) {
        names = `${sample(nm5) + sample(nm2) + sample(nm7)}  ${namelast}`;
      } else {
        names = `${sample(nm5) + sample(nm2) + sample(nm6) + sample(nm2) + sample(nm7)}  ${namelast}`;
      }
    } else if (i < 7) {
      names = `${sample(nm1) + sample(nm2) + sample(nm4)}  ${namelast}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)}  ${namelast}`;
    }
    return names;
  }
}

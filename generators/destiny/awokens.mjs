import { sample } from 'lodash-es';

export default function awokens() {
  let names;
  let nmLast;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'c', 'g', 'j', 'k', 'q', 'r', 'v', 'x', 'z'];
  const nm2 = ['a', 'a', 'u', 'u', 'e', 'i', 'a', 'a', 'u', 'u', 'e', 'i', 'a', 'a', 'u', 'u', 'e', 'i', 'oo', 'ou', 'uu', 'aa'];
  const nm3 = ['d', 'dr', 'g', 'gd', 'gr', 'h', 'j', 'ldr', 'lgr', 'ndr', 'ngr', 'q', 'r', 'rg', 'rj', 'sg', 'v', 'vg', 'x', 'z', 'zg'];
  const nm4 = ['c', 'ch', 'g', 'l', 'n', 'x', 'z'];
  const nm5 = ['f', 'l', 'm', 'n', 'p', 'ph', 's', 't', 'th', 'v', 'z'];
  const nm6 = ['e', 'e', 'a', 'a', 'i', 'o', 'e', 'e', 'a', 'a', 'i', 'o', 'e', 'e', 'a', 'a', 'i', 'o', 'ia', 'ua', 'ea', 'aa'];
  const nm7 = ['l', 'lm', 'ln', 'lr', 'm', 'mm', 'mn', 'n', 'nn', 'r', 'rh', 'rl', 'rm', 'rn', 'rr', 'rt', 'sr', 'ss', 'tr', 'x', 'y', 'z'];
  const nm8 = ['f', 'n', 'nn', 'ph', 's', 'ss', 'sh', 'x'];
  const nm9 = ['c', 'g', 'j', 'm', 'q', 's', 'th', 'v', 'x', 'z'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'aa'];
  const nm11 = ['d', 'f', 'h', 'j', 'k', 'l', 'm', 'n', 'q', 'r', 'sh', 'v', 'z'];
  const nm12 = ['hl', 'hn', 'j', 'l', 'm', 'n', 'nj', 's', 'sh', 'v'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i % 2 === 0) {
      nmLast = sample(nm9) + sample(nm10) + sample(nm12);
    } else {
      nmLast = sample(nm9) + sample(nm10) + sample(nm11) + sample(nm10) + sample(nm12);
    }
    if (type === 1) {
      if (i < 5) {
        names = `${sample(nm5) + sample(nm6) + sample(nm8)} ${nmLast}`;
      } else {
        names = `${sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6)} ${nmLast}`;
      }
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)} ${nmLast}`;
    }
    return names;
  }
}

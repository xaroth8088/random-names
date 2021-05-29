import { sample } from 'lodash-es';

export default function orions() {
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
        names = sample(nm6) + sample(nm7) + sample(nm8) + sample(nm9) + sample(nm10);
      } else {
        names = sample(nm6) + sample(nm7) + sample(nm8) + sample(nm9) + sample(nm11) + sample(nm9) + sample(nm10);
      }
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5);
    }
    return names;
  }
}

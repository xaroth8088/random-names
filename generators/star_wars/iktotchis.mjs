import { sample } from 'lodash-es';

export default function iktotchis() {
  let namelast;
  let names;
  const nm1 = ['', '', '', 'c', 'd', 'f', 'h', 'k', 'm', 'n', 'r', 's', 't', 'v', 'w', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ee', 'ae', 'ie', 'ye', 'yi', 'ei'];
  const nm3 = ['d', 'dh', 'f', 'fl', 'fn', 'l', 'll', 'ld', 'ln', 'lm', 'lr', 'lv', 'm', 'mm', 'md', 'mr', 'mn', 'mk', 'n', 'nn', 'nh', 'nk', 'ng', 'nv', 'nl', 'r', 'rr', 'rn', 'rl', 'rk', 'rd', 's', 'sl', 'sh', 'shk'];
  const nm4 = ['', '', '', '', 'j', 'l', 'm', 'n', 'r', 's', 'th'];
  const nm5 = ['ch', 'd', 'h', 'j', 'k', 'm', 'n', 't', 'v', 'z'];
  const nm6 = ['a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'aa', 'ii'];
  const nm7 = ['d', 'f', 'h', 'j', 'l', 'm', 'n', 'r', 's', 'v', 'w', 'z'];
  const nm8 = ['', '', 'l', 'mm', 'n', 'r', 's'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i % 2 === 0) {
      namelast = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
    } else {
      namelast = sample(nm5) + sample(nm6) + sample(nm8);
    }
    names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)}  ${namelast}`;
    return names;
  }
}

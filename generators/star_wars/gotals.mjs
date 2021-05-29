import { sample } from 'lodash-es';

export default function gotals() {
  let namelast;
  let names;
  const nm1 = ['f', 'gl', 'h', 'j', 'k', 'l', 'm', 'n', 's', 't', 'th', 'v', 'vl', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'au', 'aa', 'uu', 'ee'];
  const nm3 = ['\'h', 'hs', 'h\'sh', 'h\'l', 'hx', 'hk', 'hk\'kh', '\'k', 'k', 'kh', '\'kh', '\'l', 'lt', 'p', 'ph', 'r\'ph', 'r', '\'r', 'r\'l', 'rl', 'sk', 's\'kh', 's\'m', 'sl', 'shn', 'sh\'n', 'sh\'m', 'sz', 'shm', 't', 't\'m', 'tm', 'tn', 'tl', 't\'n', 'xs', 'xz'];
  const nm4 = ['c', 'k', 'l', 'm', 'n', 's', 'sh', 'r', 'rn', 'tt', 'th', 'x'];
  const nm5 = ['g', 'gr', 'j', 'k', 'kr', 'kl', 'm', 'n', 'r', 's', 'tr', 'v', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u'];
  const nm7 = ['hs', 'hx', 'k', 'kh', 'l', 'll', 'r', 'rr', 'rl', 'rs', 's', 'ss', 'sl', 'sk', 'sh', 'sm', 'st', 't', 'th', 'tl', 'v', 'x', 'z'];
  const nm8 = ['c', 'gg', 'gh', 'l', 'm', 'n', 'nth', 'r', 'rn', 'rk', 'ss', 't', 'th', 'x'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i % 2 === 0) {
      namelast = sample(nm5) + sample(nm6) + sample(nm8);
    } else {
      namelast = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
    }
    if (i < 5) {
      names = `${sample(nm1) + sample(nm2) + sample(nm4)}  ${namelast}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)}  ${namelast}`;
    }
    return names;
  }
}

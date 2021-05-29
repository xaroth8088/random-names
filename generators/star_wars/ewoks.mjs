import { sample } from 'lodash-es';

export default function ewoks() {
  let namelast;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', 'b', 'ch', 'c', 'd', 'gr', 'g', 'k', 'kr', 'l', 'm', 'n', 'p', 'r', 't', 'tr', 'w'];
  const nm2 = ['a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'ee', 'oo', 'aa', 'y'];
  const nm3 = ['b', 'ck', 'd', 'dr', 'gr', 'gl', 'g', 'k', 'kk', 'l', 'll', 'm', 'n', 'pl', 'rf', 'rp', 'rph', 'rr', 'st', 'str'];
  const nm4 = ['', '', '', '', '', '', 'c', 'ck', 'k', 'l', 'm', 'n', 'ng', 't'];
  const nm5 = ['', '', 'b', 'ch', 'd', 'f', 'g', 'gl', 'gn', 'k', 'kn', 'l', 'm', 'n', 'p', 'r', 't', 'tr'];
  const nm6 = ['ck', 'd', 'gr', 'gl', 'gn', 'k', 'l', 'll', 'm', 'n', 'p', 'pr', 'r', 'rph', 'rp', 'rr', 's', 'sh', 'st', 't', 'zz'];
  const nm7 = ['b', 'd', 'f', 'g', 'gr', 'gl', 'j', 'k', 'kr', 'l', 'm', 'n', 'r', 't', 'tr', 'w', 'z'];
  const nm8 = ['dr', 'dd', 'gr', 'k', 'kk', 'l', 'll', 'lr', 'm', 'mr', 'mn', 'n', 'nr', 'nl', 'nt', 'r', 'rr', 'rl', 'st', 'str'];
  const nm9 = ['c', 'ck', 'k', 'l', 'm', 'n', 'ng', 't'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i % 2 === 0) {
      namelast = sample(nm7) + sample(nm2) + sample(nm8) + sample(nm2) + sample(nm9);
    } else {
      namelast = sample(nm7) + sample(nm2) + sample(nm8) + sample(nm2) + sample(nm8) + sample(nm2);
    }
    if (type === 1) {
      if (i < 6) {
        names = `${sample(nm5) + sample(nm2) + sample(nm6) + sample(nm2)}  ${namelast}`;
      } else {
        names = `${sample(nm5) + sample(nm2) + sample(nm6) + sample(nm2) + sample(nm6) + sample(nm2)}  ${namelast}`;
      }
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)}  ${namelast}`;
    }
    return names;
  }
}

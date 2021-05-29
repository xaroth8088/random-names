import { sample } from 'lodash-es';

export default function rattatakis() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['a', 'e', 'i', 'o', 'u', 'ai', 'au', 'ei', 'ou', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['b', 'br', 'bz', 'bj', 'c', 'cz', 'ch', 'd', 'dj', 'dz', 'g', 'gr', 'h', 'j', 'k', 'kz', 'kr', 'p', 'pr', 'pj', 'pz', 'q', 'r', 'sj', 'st', 'sr', 't', 'ts', 'tr', 'v', 'wr', 'x', 'xj', 'xr', 'yj', 'yr', 'ys', 'yz', 'z', 'zr'];
  const nm3 = ['i', 'a', 'o', 'e', 'u'];
  const nm4 = ['c', 'ch', 'dj', 'g', 'gr', 'h', 'k', 'm', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  const nm5 = ['c', 'ch', 'dj', 'g', 'gr', 'h', 'k', 'm', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'i', 'o', 'u', '', '', '', '', '', '', '', ''];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'ai', 'au', 'ei', 'ou', 'ay', 'ey', 'oy', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm7 = ['b', 'br', 'bj', 'c', 'cz', 'ch', 'd', 'dj', 'dz', 'g', 'h', 'j', 'k', 'kz', 'l', 'm', 'n', 'p', 'pr', 'pj', 'q', 'r', 's', 'sj', 'st', 'sr', 't', 'ts', 'tr', 'v', 'w', 'wr', 'x', 'xj', 'xr', 'y', 'yj', 'yr', 'ys', 'yz', 'z', 'zr'];
  const nm8 = ['i', 'a', 'o', 'e', 'u', 'ie', 'ai', 'ey', 'ay'];
  {
    if (type === 1) {
      names = sample(nm6) + sample(nm7) + sample(nm8) + sample(nm4) + sample(nm3) + sample(nm5);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm3) + sample(nm5);
    }
    return names;
  }
}

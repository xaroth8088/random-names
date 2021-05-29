import { sample } from 'lodash-es';

export default function urgals() {
  let names;
  const nm1 = ['', '', 'b', 'd', 'g', 'kh', 'k', 'r', 'sk', 'skg', 't', 'y', 'v', 'z'];
  const nm2 = ['a', 'e', 'o', 'u'];
  const nm3 = ['b', 'br', 'bv', 'bgr', 'bdr', 'd', 'dv', 'dz', 'dzgr', 'dgr', 'gr', 'gn', 'gz', 'hgr', 'hr', 'lk', 'lv', 'r', 'rg', 'rd', 'rb', 'rv', 'rtv', 'rzhv', 'tv', 'tr', 'thb', 'tz', 'zg', 'zb', 'zr', 'ztr', 'zhgr'];
  const nm4 = ['c', 'g', 'k', 'sz', 'shz', 'zh', 'z'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 3) {
      names = sample(nm1) + sample(nm2) + sample(nm4);
    } else if (i < 7) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}

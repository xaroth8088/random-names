import { sample } from 'lodash-es';

export default function orcs() {
  let names;
  const nm1 = ['b', 'br', 'c', 'cr', 'd', 'dr', 'g', 'gh', 'gr', 'k', 'kr', 'l', 'm', 'r', 's', 'sh', 'sr'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'au'];
  const nm3 = ['cb', 'cd', 'cr', 'db', 'dd', 'fd', 'fth', 'g', 'gb', 'gd', 'gg', 'gl', 'gr', 'gz', 'h', 'lcm', 'ld', 'lf', 'lg', 'rb', 'rc', 'rd', 'rg', 'rz', 'shn', 'thr', 'z', 'zb', 'zg', 'zr', 'zz'];
  const nm4 = ['c', 'd', 'dh', 'f', 'g', 'gh', 'kh', 'l', 'r', 'rg', 'sh', 't', 'th', '', '', ''];
  const nm5 = ['a', 'o', 'u', 'au'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm5) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}

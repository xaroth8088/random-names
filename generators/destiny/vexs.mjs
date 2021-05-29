import { sample } from 'lodash-es';

export default function vexs() {
  let names;
  const nm1 = ['', '', '', '', 'c', 'g', 'h', 'k', 'n', 's', 't', 'th', 'z'];
  const nm2 = ['a', 'e', 'a', 'e', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'eo', 'io', 'y', 'y', 'ia', 'ea'];
  const nm3 = ['d', 'dh', 'dr', 'g', 'gg', 'gh', 'gr', 'k', 'kh', 'kk', 'kr', 'lg', 'lk', 'nk', 'nr', 'rg', 'rk', 'sk', 'th', 'tr'];
  const nm4 = ['m', 'n', 's', 't', 'x'];
  {
    names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    return names;
  }
}

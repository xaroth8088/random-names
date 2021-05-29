import { sample } from 'lodash-es';

export default function khazras() {
  let names;
  const nm1 = ['', '', '', '', 'b', 'bl', 'br', 'ch', 'cr', 'd', 'dr', 'gh', 'gr', 'h', 'hr', 'k', 'kr', 'l', 'm', 'mw', 'n', 'r', 'sh', 'sk', 'sn', 't', 'th', 'tr'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'oa', 'ao', 'au'];
  const nm3 = ['br', 'd', 'dr', 'g', 'gr', 'ggr', 'gl', 'hg', 'hl', 'hgr', 'lg', 'lgh', 'ld', 'lz', 'lb', 'lghb', 'll', 'lm', 'ndr', 'nd', 'nz', 'nr', 'r', 'rb', 'rg', 'rd', 'rgr', 'rt', 'rth', 'rz', 't', 'wd'];
  const nm4 = ['', '', '', 'ch', 'd', 'g', 'gg', 'k', 'l', 'lm', 'm', 'n', 'nn', 'r', 'rg', 's', 'sh', 't', 'tch', 'th', 'wl'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}

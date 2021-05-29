import { sample } from 'lodash-es';

export default function mgalekgolos() {
  let names;
  const nm1 = ['b', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'x', 'y', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['a', 'e', 'u', 'i', 'o'];
  const nm3 = ['b', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'x', 'y'];
  const nm4 = ['b', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'x', 'y', 'b', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'x', 'y', 'bn', 'dn', 'fn', 'gn', 'kn', 'pn', 'sn', 'tn', 'bm', 'dm', 'fm', 'gm', 'km', 'pm', 'sm', 'tm', 'bk', 'dk', 'lk', 'mk', 'nk', 'pk', 'sk', 'tk', 'bl', 'fl', 'gl', 'pl', 'tl', 'xl', 'sl', 'bd', 'gd', 'fd', 'ld', 'pd', 'sd', 'xd', 'bb', 'dd', 'ff', 'gg', 'kk', 'll', 'mm', 'nn', 'pp', 'rr', 'ss', 'tt', 'ww', 'br', 'dr', 'gr', 'fr', 'kr', 'pr', 'tr', 'xr'];
  {
    names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2)} ${sample(nm3)}${sample(nm2)}${sample(nm3)}${sample(nm2)} ${sample(nm3)}${sample(nm2)}${sample(nm4)}${sample(nm2)}`;
    return names;
  }
}

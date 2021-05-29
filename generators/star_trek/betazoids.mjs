import { sample } from 'lodash-es';

export default function betazoids() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['a', 'e', 'i', 'o', 'u', '', '', '', '', '', ''];
  const nm2 = ['b', 'c', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't'];
  const nm3 = ['a', 'e', 'i', 'o', 'u', 'ei', 'aa', 'oa'];
  const nm4 = ['b', 'c', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't', 'b', 'c', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't', 'br', 'cr', 'dr', 'gr', 'kr', 'mr', 'nr', 'tr', 'sb', 'sd', 'sl', 'sm', 'sn', 'sr', 'str', 'ndr', 'nd', 'ng', 'nk', 'nl', 'nt', 'tt', 'rr', 'bb', 'dd', 'gg'];
  const nm5 = ['a', 'e', 'i', 'o', 'u'];
  const nm6 = ['m', 'n', 's', 'd', 'h', 'l'];
  const nm7 = ['d', 'h', 'j', 'k', 'l', 'lw', 'm', 'n', 'st', 't', 'r', 'rw', 'v'];
  const nm8 = ['a', 'e', 'i', 'o', 'u', 'ea', 'ee', 'ia'];
  const nm9 = ['d', 'h', 'l', 'll', 'nn', 'mm', 'n', 'm', 'rr', 'r', 's', 'ss', 'str', 'v', 'vr', 'x', 'y'];
  const nm10 = ['a', 'e', 'i', 'o'];
  const nm11 = ['d', 'h', 'l', 'n', 'm', 'r', 's', 'v', 'x', 'y'];
  const nm12 = ['t', 'h', 'w', 'n', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm13 = ['a', 'e', 'i', 'o', 'u', '', '', '', '', '', ''];
  const nm14 = ['b', 'd', 'g', 'h', 'k', 'm', 'n', 'r', 's', 't', 'v', 'z', 'gr', 'dr', 'tr', 'br', 'ch'];
  const nm15 = ['a', 'e', 'i', 'o', 'u', 'oi', 'aa', 'ea', 'ai', 'ei'];
  const nm16 = ['b', 'c', 'd', 'g', 'k', 'l', 'lbr', 'm', 'n', 'r', 's', 'str', 't', 'v', 'x', 'z'];
  const nm17 = ['x', 'n', 'r', 'l', 'm', 'k', 'd', 't', '', '', '', '', '', ''];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = `${sample(nm7) + sample(nm8) + sample(nm9) + sample(nm10) + sample(nm12)} ${sample(nm13)}${sample(nm14)}${sample(nm15)}${sample(nm16)}${sample(nm5)}${sample(nm17)}`;
      } else {
        names = `${sample(nm7) + sample(nm8) + sample(nm9) + sample(nm10) + sample(nm11) + sample(nm10) + sample(nm12)} ${sample(nm13)}${sample(nm14)}${sample(nm15)}${sample(nm17)}`;
      }
    } else if (i < 5) {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5) + sample(nm6)} ${sample(nm13)}${sample(nm14)}${sample(nm15)}${sample(nm17)}`;
    } else {
      names = `${sample(nm3) + sample(nm4) + sample(nm5) + sample(nm6)} ${sample(nm13)}${sample(nm14)}${sample(nm15)}${sample(nm16)}${sample(nm5)}${sample(nm17)}`;
    }
    return names;
  }
}

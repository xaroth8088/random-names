import { sample } from 'lodash-es';

export default function siths() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['a', 'i', 'o', 'u', 'â', 'û', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['ch', 'd', 'dz', 'h', 'j', 'k', 'kr', 'kh', 'm', 'n', 'l', 'q', 'r', 'rh', 's', 'sh', 'sr', 't', 'ts', 'w', 'wr', 'wh', 'y', 'z', 'zh', 'zr', 'ch', 'd', 'h', 'j', 'k', 'm', 'n', 'l', 'q', 'r', 's', 't', 'w', 'y', 'z'];
  const nm3 = ['a', 'i', 'o', 'u', 'ai', 'oi', 'a', 'i', 'o', 'u', 'a', 'i', 'o', 'u', 'â', 'û'];
  const nm4 = ['d', 'h', 'j', 'k', 'l', 'm', 'n', 'sh', 'q', 'r', 's', 't', 'ts', 'w', 'y', 'z'];
  const nm5 = ['d', 'h', 'j', 'k', 'l', 'm', 'n', 'sh', 'q', 'r', 's', 't', 'ts', 'w', 'y', 'z', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['a', 'û', 'â', 'i', 'o', 'u', 'ai', 'oi'];
  const nm7 = ['r', 't', 's', 'sh', 'z', 'n', 'm', 'ts', 'l', 'w', '', '', '', ''];
  const nm8 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm9 = ['b', 'bh', 'br', 'c', 'ch', 'cl', 'd', 'dr', 'dh', 'g', 'gr', 'gh', 'j', 'k', 'kh', 'm', 'n', 'p', 'pl', 'q', 'r', 'rh', 's', 'sl', 'sh', 't', 'tr', 'v', 'vl', 'vr', 'w', 'wr', 'wh', 'x', 'y', 'z', 'zh', 'zr', 'b', 'c', 'd', 'g', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'ae', 'ea', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u'];
  const nm11 = ['d', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x'];
  const nm12 = ['b', 'c', 'd', 'g', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'z', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm13 = ['a', 'e', 'i', 'o', 'u', 'iu', 'ae', 'ia', 'ua', 'uo', 'ea', 'iu', 'ae', 'ia', 'ua'];
  const nm14 = ['th', 's', 'sh', 'n', 'm', 'x', 'l', 'wr', 'sy', 'ty', 'tiur', 'tiuth', 'siuth', 'ny', 'nyr', 'lyr', 'rius', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  {
    if (type === 1) {
      names = sample(nm8) + sample(nm9) + sample(nm10) + sample(nm11) + sample(nm12) + sample(nm13) + sample(nm14);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5) + sample(nm6) + sample(nm7);
    }
    return names;
  }
}

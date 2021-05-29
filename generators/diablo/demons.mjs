import { sample } from 'lodash-es';

export default function demons() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'bl', 'br', 'c', 'cr', 'ch', 'd', 'dr', 'g', 'gr', 'gh', 'h', 'j', 'k', 'kh', 'kr', 'l', 'm', 'n', 'p', 'pr', 'r', 's', 'sl', 'str', 'sthr', 'sth', 'sr', 't', 'th', 'tr', 'thr', 'v', 'vr', 'wr', 'x', 'y', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'io', 'oi', 'aa', 'iu', 'ia', 'ou', 'ea', 'uu', 'au', 'ao'];
  const nm3 = ['b', 'bl', 'br', 'c', 'd', 'dd', 'dr', 'g', 'gg', 'gh', 'gn', 'gr', 'h', 'j', 'k', 'kh', 'kr', 'kk', 'kn', 'lf', 'lth', 'lt', 'lm', 'lr', 'ld', 'm', 'mm', 'n', 'ng', 'nth', 'nd', 'nr', 'nt', 'ph', 'phr', 'r', 'rch', 'rp', 'rr', 'rt', 'rzh', 'rs', 'rz', 'rd', 'rk', 's', 'sh', 'ss', 'sz', 'str', 't', 'th', 'tr', 'thr', 'x', 'xtr', 'xx', 'z', 'zz'];
  const nm4 = ['', '', '', '', 'c', 'hr', 'k', 'l', 'n', 'r', 'rm', 'rr', 'rth', 's', 'ss', 'th', 'tt', 'w', 'x', 'z'];
  const nm5 = ['', '', '', '', '', 'b', 'bh', 'bl', 'c', 'ch', 'd', 'dh', 'dr', 'g', 'gl', 'gr', 'gh', 'fr', 'h', 'j', 'k', 'kh', 'l', 'll', 'm', 'n', 'p', 'ph', 'pr', 'phr', 'pl', 'r', 's', 'sh', 'shr', 'st', 'sth', 'sthr', 'sl', 't', 'th', 'thr', 'v', 'w', 'wr', 'x', 'y', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'io', 'oi', 'aa', 'iu', 'ia', 'ou', 'ea', 'uu', 'au', 'ao'];
  const nm7 = ['b', 'bb', 'br', 'bh', 'c', 'ch', 'd', 'dh', 'dd', 'dr', 'g', 'gn', 'gr', 'h', 'hr', 'hl', 'k', 'kh', 'kr', 'l', 'lf', 'lph', 'lth', 'lm', 'ln', 'ld', 'll', 'lr', 'm', 'mm', 'ml', 'mf', 'n', 'nn', 'ng', 'nth', 'ns', 'nt', 'ndr', 'ph', 'phr', 'r', 'rr', 'rph', 'rl', 'rs', 'rn', 's', 'sh', 'ss', 'sz', 'sth', 'str', 't', 'th', 'tr', 'tt', 'thr', 'x', 'xx', 'xh', 'z', 'zz'];
  const nm8 = ['', '', '', '', 'h', 'l', 'n', 's', 'th', 'z'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      } else {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      }
    } else if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}

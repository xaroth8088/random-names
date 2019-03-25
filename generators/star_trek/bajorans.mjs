import sample from 'lodash/sample';

export default function bajorans() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z', 'ch', 'sh', 'br', 'pr', 'tr', 'dr', 'kr', 'vr', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'aa', 'ee'];
  const nm3 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z', 'nj', 'mj', 'nt', 'mt', 'ct', 'kt', 'ny', 'cy', 'gy', 'ky', 'my', 'py', 'sy', 'ty', 'ry', 'rm', 'rb', 'rc', 'rd', 'rj', 'rk', 'rm', 'rn', 'rp', 'rs', 'rt', 'rv', 'rw', 'rz', 'sh', 'ch', 'th', 'll', 'dd', 'gg', 'kk', 'rr', 'zk', 'sk', 'lk', 'tk', 'tr', 'dr'];
  const nm4 = ['a', 'e', 'i', 'o', 'u'];
  const nm5 = ['n', 'ld', 'k', 's', 'r', 'sh', 't', 'm', 'lb', 'hl', 'l', 'd', 'ld', 'g', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['b', 'ch', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z', 'kr', 'tr', 'rh', 'sh', '', '', '', ''];
  const nm7 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ai', 'aie', 'ue', 'oa', 'aa', 'ee'];
  const nm8 = ['b', 'c', 'd', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z', 'b', 'c', 'd', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z', 'ln', 'lb', 'lz', 'lg', 'lk', 'ltr', 'zk', 'zd', 'rk', 'rd', 'rg', 'rn', 'rt', 'yr', 'yd', 'mm', 'rr', 'ss', 'nn', 'tt', 'br', 'kr', 'gd', 'nd', 'nt'];
  const nm9 = ['m', 's', 'r', 'n', 'g', 'l', 'th', 'rn', 'c'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', '', '', '', '', '', '', ''];
  const nm11 = ['b', 'bl', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'x', 'y', 'z', 'gr', 'gl', 'sh', '', '', '', '', '', '', '', '', ''];
  const nm12 = ['a', 'e', 'i', 'a', 'e', 'i', 'o', 'o', 'u', 'ee', 'ai', 'oa'];
  const nm13 = ['b', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'x', 'y', 'z', 'sh', 'pr', 'rd', 'lr', 'gh', 'rj', 'lk'];
  const nm14 = ['a', 'e', 'i', 'o', 'a', 'e', 'u', 'a', 'e', 'i', 'o', 'ia', 'ea'];
  const nm15 = ['h', 'l', 'm', 'n', 'r', 's', 't', 'w', 'y', 'z'];
  const nm16 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'ia', 'ea', '', '', '', '', '', ''];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5)} ${sample(nm11)}${sample(nm12)}${sample(nm13)}${sample(nm14)}`;
      } else {
        names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5)} ${sample(nm11)}${sample(nm12)}${sample(nm13)}${sample(nm14)}${sample(nm15)}${sample(nm16)}`;
      }
    } else if (i < 5) {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5)} ${sample(nm6)}${sample(nm7)}${sample(nm8)}${sample(nm10)}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5)} ${sample(nm6)}${sample(nm7)}${sample(nm8)}${sample(nm4)}${sample(nm9)}${sample(nm10)}`;
    }
    return names;
  }
}

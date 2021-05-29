import { sample } from 'lodash-es';

export default function anzatis() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', 'b', 'd', 'g', 'h', 'k', 'm', 'n', 'r', 's', 'v', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u'];
  const nm3 = ['ct', 'cn', 'cm', 'gr', 'kk', 'kr', 'kt', 'll', 'lf', 'lg', 'lr', 'ld', 'nn', 'nt', 'nr', 'mr', 'mm', 'md', 'rr', 'rk', 'rt', 'st', 'sn', 'sm', 'th', 'sh', 'tt', 'tr', 'zz'];
  const nm4 = ['', '', '', 'c', 'h', 'k', 'l', 'n', 'nt', 'r', 's', 'th'];
  const nm5 = ['b', 'c', 'd', 'f', 'h', 'k', 'l', 'm', 'n', 'r', 's'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ea', 'ia'];
  const nm7 = ['d', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'r', 'sh', 'th', 'mm', 'nn', 'll', 'dh', 'mh', 'nh', 'kr', 'dr', 'gr', 'ml', 'kl'];
  const nm8 = ['b', 'd', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'y', 'z'];
  const nm9 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ou', 'ei', 'ea', 'ia'];
  const nm10 = ['ct', 'cn', 'cm', 'gr', 'kk', 'kr', 'kt', 'll', 'lg', 'lf', 'ld', 'lr', 'lkk', 'k', 'mm', 'mr', 'md', 'nn', 'nr', 'nd', 'nt', 'nn', 'r', 'rr', 'rt', 'rkk', 'sh', 'st', 'sn', 'sm', 'th', 'sh', 'tt', 'tr', 'zz'];
  {
    if (type === 1) {
      names = `${sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6)}  ${sample(nm8)}${sample(nm9)}${sample(nm10)}${sample(nm9)}${sample(nm4)}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)}  ${sample(nm8)}${sample(nm9)}${sample(nm10)}${sample(nm9)}${sample(nm4)}`;
    }
    return names;
  }
}

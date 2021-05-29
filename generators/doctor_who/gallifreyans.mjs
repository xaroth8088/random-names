import { sample } from 'lodash-es';

export default function gallifreyans() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'c', 'ch', 'd', 'dr', 'f', 'g', 'gl', 'gr', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'pr', 'q', 'r', 's', 'st', 't', 'th', 'tr', 'v', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ia'];
  const nm3 = ['bl', 'br', 'bj', 'd', 'ff', 'g', 'gn', 'gr', 'kk', 'kl', 'kr', 'lj', 'l', 'lg', 'll', 'lr', 'lm', 'ly', 'lp', 'm', 'mr', 'md', 'mt', 'nd', 'ndr', 'nc', 'ng', 'nn', 'ns', 'nt', 'nz', 'p', 'pp', 'r', 'rn', 'rb', 'rt', 'rl', 'rkh', 'rv', 'sb', 'sm', 'sp', 'ss', 'sk', 't', 'th', 'tth', 'v', 'vl', 'vr', 'w', 'wtr', 'x', 'xr', 'xt', 'zm'];
  const nm4 = ['c', 'd', 'f', 'k', 'l', 'ld', 'll', 'n', 'nd', 'r', 'rg', 's', 'sh', 'th', 't', 'w', 'x'];
  const nm5 = ['br', 'dr', 'g', 'gr', 'gl', 'k', 'kl', 'kr', 'm', 'n', 'p', 'r', 's', 't', 'tr', 'v', 'z'];
  const nm6 = ['br', 'cr', 'ctr', 'dr', 'dd', 'd', 'gr', 'gl', 'gg', 'g', 'l', 'll', 'lgr', 'lsr', 'lbr', 'lk', 'ldr', 'm', 'mr', 'ms', 'n', 'ng', 'ngr', 'nt', 'ntr', 'ndr', 'p', 'pr', 'phr', 'r', 'rd', 'rth', 's', 'sk', 'str', 'sr', 'v', 'vr'];
  const nm7 = ['', '', '', '', 'd', 'l', 'll', 'm', 'm', 'n', 'nn', 's', 'ss', 'st', 'th', 'tkh'];
  const nm8 = ['', '', '', '', '', '', '', '', 'c', 'ch', 'cl', 'd', 'dh', 'dr', 'f', 'gl', 'h', 'j', 'kh', 'kr', 'l', 'm', 'n', 'p', 'ph', 'pr', 'q', 'r', 's', 'sh', 'sc', 't', 'th', 'v', 'z'];
  const nm9 = ['br', 'd', 'ff', 'gn', 'gl', 'hr', 'hn', 'k', 'kr', 'l', 'll', 'ly', 'lm', 'ln', 'lph', 'lt', 'lr', 'm', 'mn', 'mm', 'n', 'nn', 'nd', 'ns', 'nt', 'nz', 'ndr', 'nt', 'p', 'pp', 'pr', 'r', 'rr', 'ry', 'rl', 'rs', 'rk', 'sf', 'sm', 'sn', 'sh', 'sp', 'st', 'tth', 'th', 'v', 'vy', 'vr', 'y'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'ia', 'oie', 'ea'];
  const nm11 = ['br', 'bl', 'dv', 'dh', 'dr', 'f', 'ff', 'gl', 'gr', 'h', 'l', 'lm', 'ln', 'm', 'n', 'pr', 'ph', 'q', 'r', 'rr', 'rl', 's', 'st', 'sr', 'sh', 'th', 'tr', 'x'];
  const nm12 = ['bv', 'ch', 'c', 'dr', 'd', 'dd', 'dv', 'gr', 'gl', 'gg', 'g', 'nm', 'hn', 'h', 'l', 'll', 'lm', 'lt', 'ls', 'lz', 'm', 'mm', 'mr', 'nd', 'ng', 'nt', 'ns', 'nl', 'nph', 'p', 'pp', 'ph', 'phr', 'q', 'r', 'rh', 'rl', 'rm', 'st', 'sv', 'str', 'tr', 'th', 'v'];
  const nm13 = ['', '', '', '', '', 'd', 'l', 'll', 'm', 'm', 'n', 'nn', 'r', 's', 'ss', 'sh', 'th'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 4) {
        names = sample(nm8) + sample(nm2) + sample(nm9) + sample(nm10) + sample(nm11) + sample(nm2) + sample(nm12) + sample(nm2) + sample(nm12) + sample(nm2) + sample(nm13);
      } else if (i < 7) {
        names = sample(nm8) + sample(nm2) + sample(nm9) + sample(nm10) + sample(nm11) + sample(nm2) + sample(nm12) + sample(nm2) + sample(nm12) + sample(nm2) + sample(nm12) + sample(nm2) + sample(nm13);
      } else {
        names = sample(nm8) + sample(nm2) + sample(nm9) + sample(nm10) + sample(nm11) + sample(nm2) + sample(nm12) + sample(nm2) + sample(nm12) + sample(nm2) + sample(nm12) + sample(nm2) + sample(nm12) + sample(nm2) + sample(nm13);
      }
    } else if (i < 4) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4) + sample(nm2) + sample(nm5) + sample(nm2) + sample(nm6) + sample(nm2) + sample(nm7);
    } else if (i < 7) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4) + sample(nm2) + sample(nm5) + sample(nm2) + sample(nm6) + sample(nm2) + sample(nm6) + sample(nm2) + sample(nm7);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4) + sample(nm2) + sample(nm5) + sample(nm2) + sample(nm6) + sample(nm2) + sample(nm6) + sample(nm2) + sample(nm6) + sample(nm2) + sample(nm7);
    }
    return names;
  }
}

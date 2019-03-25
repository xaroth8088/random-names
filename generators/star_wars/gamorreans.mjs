import sample from 'lodash/sample';

export default function gamorreans() {
  let namelast;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'bl', 'bn', 'br', 'c', 'd', 'dr', 'g', 'gh', 'gl', 'gr', 'grr', 'grt', 'h', 'j', 'k', 'kl', 'kr', 'l', 'm', 'n', 'p', 'r', 'sc', 'sh', 'sl', 'sn', 'sq', 'st', 't', 'th', 'tr', 'v', 'vr', 'w', 'x', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ea', 'eu', 'au', 'ee', 'oo', 'uu', 'ou', 'ua'];
  const nm3 = ['b', 'bn', 'br', 'd', 'dbr', 'fn', 'g', 'gb', 'ggt', 'gh', 'gl', 'gn', 'gr', 'gt', 'gz', 'kt', 'l', 'lg', 'll', 'lr', 'm', 'mb', 'mm', 'mr', 'n', 'nf', 'ngf', 'nt', 'nth', 'r', 'rg', 'rk', 'rl', 'rm', 'rn', 'rt', 'sh', 'ss', 't', 'th', 'thm', 'v', 'zz'];
  const nm4 = ['b', 'c', 'ck', 'ckt', 'f', 'ff', 'g', 'gg', 'gh', 'k', 'kk', 'l', 'lk', 'm', 'n', 'ng', 'nn', 'nt', 'r', 'rc', 'rg', 'rk', 'rn', 'rp', 'rrp', 'rrt', 'rt', 'rth', 's', 'ss', 't', 'th', 'tt', 'z'];
  const nm5 = ['', '', '', '', '', '', '', '', 'b', 'bl', 'bn', 'br', 'c', 'd', 'dr', 'g', 'gh', 'gl', 'gr', 'grr', 'grt', 'h', 'j', 'k', 'kl', 'kr', 'l', 'm', 'n', 'p', 'r', 'sc', 'sh', 'sl', 'sn', 'sq', 'st', 't', 'th', 'tr', 'v', 'vr', 'w', 'x', 'z'];
  const nm6 = ['b', 'bn', 'br', 'd', 'dv', 'fbr', 'fn', 'g', 'gb', 'gg', 'gh', 'gl', 'gm', 'gn', 'gr', 'gsh', 'gv', 'km', 'l', 'll', 'lly', 'ln', 'lr', 'm', 'mm', 'mr', 'mv', 'n', 'ndr', 'nf', 'ng', 'nr', 'nth', 'r', 'rg', 'rk', 'rl', 'rm', 'rn', 'rr', 'shr', 'sn', 'sr', 't', 'th', 'thn', 'tr', 'vn', 'zs'];
  const nm7 = ['', '', '', '', 'b', 'c', 'cz', 'cs', 'f', 'ff', 'g', 'gg', 'gh', 'k', 'ks', 'l', 'ms', 'm', 'n', 'ns', 'nn', 'ng', 'r', 'rc', 'rf', 'rn', 'rq', 'rs', 'rr', 'rm', 'rth', 's', 'ss', 't', 'th', 'sh', 'sz', 'z'];
  const nm8 = ['b', 'bn', 'br', 'd', 'dbr', 'dv', 'fbr', 'fn', 'g', 'gb', 'gg', 'ggt', 'gh', 'gl', 'gm', 'gn', 'gr', 'gsh', 'gt', 'gv', 'gz', 'km', 'kt', 'l', 'lg', 'll', 'lly', 'ln', 'lr', 'm', 'mb', 'mm', 'mr', 'mv', 'n', 'ndr', 'nf', 'ng', 'ngf', 'nr', 'nt', 'nth', 'r', 'rg', 'rk', 'rl', 'rm', 'rn', 'rr', 'rt', 'sh', 'shr', 'sn', 'sr', 'ss', 't', 'th', 'thm', 'thn', 'tr', 'v', 'vn', 'zs', 'zz'];
  const nm9 = ['b', 'c', 'ck', 'ckt', 'cs', 'cz', 'f', 'ff', 'g', 'gg', 'gh', 'k', 'kk', 'ks', 'l', 'lk', 'm', 'ms', 'n', 'ng', 'nn', 'ns', 'nt', 'r', 'rc', 'rf', 'rg', 'rk', 'rm', 'rn', 'rp', 'rq', 'rr', 'rrp', 'rrt', 'rs', 'rt', 'rth', 's', 'sh', 'ss', 'sz', 't', 'th', 'tt', 'z'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i % 2 === 0) {
      namelast = sample(nm1) + sample(nm2) + sample(nm9);
    } else {
      namelast = sample(nm1) + sample(nm2) + sample(nm8) + sample(nm2) + sample(nm9);
    }
    if (type === 1) {
      names = `${sample(nm5) + sample(nm2) + sample(nm6) + sample(nm2) + sample(nm7)}  ${namelast}`;
    } else if (i < 5) {
      names = `${sample(nm1) + sample(nm2) + sample(nm4)}  ${namelast}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)}  ${namelast}`;
    }
    return names;
  }
}

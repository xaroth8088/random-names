import sample from 'lodash/sample';

export default function tieflings() {
  let lastName;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'cr', 'd', 'g', 'h', 'k', 'kr', 'm', 'r', 's', 'sh', 't', 'v', 'y', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y', 'ia', 'io'];
  const nm3 = ['c', 'cr', 'cn', 'd', 'dr', 'g', 'gr', 'gg', 'k', 'kr', 'l', 'ldr', 'lv', 'll', 'm', 'nst', 'nv', 'nr', 'r', 'rn', 'rd', 'rk', 'rrd', 'rt', 'rv', 's', 'sr', 'sk', 't', 'tr', 'v', 'c', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v'];
  const nm4 = ['', '', '', 'c', 'k', 'n', 'r', 's', 't', 'th'];
  const nm5 = ['d', 'f', 'h', 'k', 'kh', 'l', 'm', 'n', 'r', 's', 'sh', 'str', 't', 'th', 'v', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'a', 'a', 'e', 'a', 'e', 'i', 'o', 'a', 'a', 'e', 'a', 'o', 'e', 'a', 'o', 'e', 'i', 'i', 'ei', 'ia', 'ea', 'ai'];
  const nm7 = ['d', 'dr', 'f', 'fr', 'ff', 'l', 'll', 'ld', 'ldr', 'lr', 'ln', 'ls', 'm', 'mr', 'mdr', 'ms', 'nd', 'ndr', 'nn', 'n', 'nz', 'r', 'rdr', 'rr', 'rs', 'rz', 's', 'sh', 'sz', 'sr', 't', 'tr', 'v', 'vr', 'y', 'zs', 'd', 'f', 'l', 'm', 'n', 'r', 's', 't', 'v', 'y'];
  const nm8 = ['h', 'l', 'n', 's', 'th'];
  const nm9 = ['', '', '', '', 'b', 'br', 'd', 'dr', 'f', 'g', 'h', 'l', 'm', 'n', 'p', 'r', 's', 'sh', 't', 'v', 'z'];
  const nm10 = ['a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'a', 'e', 'e', 'i', 'aa', 'ae', 'ia', 'ea'];
  const nm11 = ['b', 'br', 'c', 'd', 'dr', 'fr', 'g', 'gg', 'gr', 'gv', 'k', 'l', 'll', 'lr', 'lv', 'ldr', 'm', 'mm', 'mr', 'mdr', 'n', 'nd', 'ng', 'ndr', 'nst', 'nv', 'nr', 'r', 'rh', 'rv', 'rr', 'rz', 'rd', 'rdr', 's', 'ss', 'sr', 'sh', 'st', 't', 'tr', 'v', 'vr', 'b', 'c', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v'];
  const nm12 = ['', '', '', '', '', '', '', '', '', '', 'd', 'ld', 'lt', 'm', 'n', 'nd', 'r', 'rd', 's', 't', 'th'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i % 2 === 0) {
      lastName = sample(nm9) + sample(nm10) + sample(nm11) + sample(nm10) + sample(nm12);
    } else {
      lastName = sample(nm9) + sample(nm10) + sample(nm11) + sample(nm10) + sample(nm11) + sample(nm10) + sample(nm12);
    }
    if (type === 1) {
      if (i < 5) {
        names = `${sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8)} ${lastName}`;
      } else {
        names = `${sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8)} ${lastName}`;
      }
    } else if (i < 5) {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)} ${lastName}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)} ${lastName}`;
    }
    return names;
  }
}

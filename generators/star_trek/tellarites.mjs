import { sample } from 'lodash-es';

export default function tellarites() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['B', 'Br', 'Ch', 'C', 'Cr', 'D', 'Dv', 'Fr', 'F', 'G', 'Gl', 'Gr', 'H', 'J', 'K', 'Kh', 'L', 'M', 'N', 'Pr', 'R', 'Sh', 'Sk', 'T', 'Th', 'Tr', 'V', 'W', 'X', 'Z', 'Zh'];
  const nm2 = ['aa', 'ao', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'o'];
  const nm3 = ['bl', 'fr', 'g', 'gr', 'hr', 'l', 'll', 'nn', 'nk', 'r', 'rgg', 'rk', 's', 'shl', 'shn', 'vr', 'rt'];
  const nm4 = ['ch', 'g', 'gm', 'k', 'llv', 'm', 'n', 'nn', 'nch', 'nd', 'r', 'rsh', 'rc', 'rg', 'rv', 'th', 's', 'sh', 'ss', 'v'];
  const nm5 = ['', '', '', '', '', '', '', '', ' bav', ' bim', ' blasch', ' chim', ' glasch', ' glov', ' lorin', ' jav'];
  const nm6 = ['B', 'Bl', 'Ch', 'C', 'Cl', 'D', 'Fr', 'Fr', 'F', 'G', 'Gl', 'Gh', 'H', 'J', 'K', 'Kh', 'L', 'M', 'N', 'P', 'R', 'Sh', 'Sk', 'T', 'Th', 'Tl', 'V', 'W', 'Z', 'Zh'];
  const nm8 = ['bl', 'f', 'ff', 'g', 'gg', 'gr', 'hr', 'hl', 'l', 'll', 'nn', 'nk', 'r', 'rk', 's', 'ss', 'shl', 'shn', 'v', 'rth', 'th', 't', 'tt'];
  const nm9 = ['', '', '', '', '', '', 'ch', 'f', 'g', 'gh', 'hg', 'hk', 'l', 'll', 'm', 'n', 'nn', 'nsh', 'nd', 'p', 'r', 'rr', 'rs', 'rg', 'rn', 'th', 's', 'sh', 'ss', 'v', 'w'];
  const nm10 = ['ch', 'f', 'g', 'gh', 'hg', 'hk', 'l', 'll', 'm', 'n', 'nn', 'nsh', 'nd', 'p', 'r', 'rr', 'rs', 'rg', 'rn', 'th', 's', 'sh', 'ss', 'v', 'w'];
  const nm11 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', 'aa', 'ao', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'o'];
  const nm12 = ['B', 'Bl', 'Br', 'C', 'Ch', 'Cl', 'Cr', 'D', 'Dv', 'F', 'Fr', 'G', 'Gh', 'Gl', 'Gr', 'H', 'J', 'K', 'Kh', 'L', 'M', 'N', 'P', 'Pr', 'R', 'Sh', 'Sk', 'T', 'Th', 'Tl', 'Tr', 'V', 'W', 'X', 'Z', 'Zh'];
  const nm13 = ['bl', 'f', 'ff', 'fr', 'g', 'gg', 'gr', 'hl', 'hr', 'l', 'll', 'nk', 'nn', 'r', 'rgg', 'rk', 'rth', 's', 'shl', 'shn', 'ss', 't', 'th', 'tt', 'v', 'vr'];
  const nm14 = ['ch', 'f', 'g', 'gh', 'gm', 'hg', 'hk', 'k', 'l', 'll', 'llv', 'm', 'n', 'nch', 'nd', 'nn', 'nsh', 'p', 'r', 'rc', 'rg', 'rn', 'rr', 'rs', 'rsh', 'rv', 's', 'sh', 'ss', 'th', 'v', 'w'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = `${sample(nm6) + sample(nm2) + sample(nm8) + sample(nm2) + sample(nm9) + sample(nm5)} ${sample(nm12)}${sample(nm2)}${sample(nm14)}`;
      } else {
        names = `${sample(nm6) + sample(nm2) + sample(nm10) + sample(nm11) + sample(nm5)} ${sample(nm12)}${sample(nm2)}${sample(nm13)}${sample(nm2)}${sample(nm14)}`;
      }
    } else if (i < 5) {
      names = `${sample(nm1) + sample(nm2) + sample(nm4) + sample(nm5)} ${sample(nm12)}${sample(nm2)}${sample(nm13)}${sample(nm2)}${sample(nm14)}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4) + sample(nm5)} ${sample(nm12)}${sample(nm2)}${sample(nm14)}`;
    }
    return names;
  }
}

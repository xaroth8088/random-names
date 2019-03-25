import sample from 'lodash/sample';

export default function tuskenRaiders() {
  let namelast;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['A\'', 'Ch\'', 'Gr\'', 'H\'', 'K\'', 'Q\'', 'R\'', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['B', 'C', 'Ch', 'D', 'G', 'K', 'Q', 'R', 'S', 'Sh', 'Sl', 'T', 'Th', 'Y', 'V', 'Z'];
  const nm3 = ['a', 'a', 'e', 'i', 'o', 'u', 'a', 'a', 'o', 'u', 'e', 'i', 'o', 'u', 'a', 'a', 'o', 'aa', 'ai', 'ee'];
  const nm4 = ['c', 'cr', 'g', 'gg', 'gd', 'gr', 'hr', 'hv', 'hm', 'k', 'kh', 'kd', 'kr', 'kv', 'km', 'kn', 'lm', 'lr', 'lh', 'lg', 'm', 'mr', 'mn', 'mg', 'md', 'mv', 'n', 'nn', 'nr', 'nv', 'q', 'qq', 'qh', 'r', 'rr', 'rt', 'rd', 't', 'v', 'z', 'zh', 'zr', 'zd'];
  const nm5 = ['', '', '', 'c', 'd', 'g', 'gg', 'k', 'n', 'q', 'r', 'r', 'rk'];
  const nm6 = ['Gk', 'Gr', 'Gu', 'Gg', 'Kr', 'Kk', 'Ku', 'Kg', 'Or', 'Ok', 'Og', 'Rr', 'Rg', 'Rk', 'Ro', 'Ru', 'Ur', 'Ur', 'Ur'];
  const nm7 = ['k', 'h', 'r', 'g', 'rh', 'ur', 'or', 'orur', 'rrur', 'rror', 'rurr', 'orr', 'urr', 'rorr', 'rurr', 'orrur', 'ror', 'rur', 'urur'];
  const nm8 = ['or', 'ok', 'ro', 'ot', 'uk', 'rk', 'kr', 'kk', 'oa', 'ur', 'r', 'tl', 'ru'];
  const nm9 = ['r', 'rs', 'ruur', 'ur', 'rur', 'urr', 'rr', 'rt', 'urs', 'rurs', 'ruk'];
  const nm10 = ['ak', 'ar', 'rr', 'r', 'kt', 'rt', 'ku', 'ra', 'ro', 'ru'];
  const nm11 = ['k', 'r', 'hr', 'ur', 't', 'ht', 'or', 'ar', 'ut', 'uk'];
  const nm12 = ['Ch', 'G', 'H', 'Kh', 'L', 'Q', 'R', 'Rh', 'Sh', 'T', 'Th', 'V', 'Y', 'Z'];
  const nm13 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'a', 'a', 'e', 'e', 'e', 'ee', 'aa', 'ie', 'ei'];
  const nm14 = ['d', 'g', 'k', 'kk', 'kh', 'kt', 'kz', 'q', 'qt', 'qr', 'qz', 'rt', 'r', 'rr', 'rh', 'rt', 'x', 'xt', 'xr', 'z', 'zt', 'zr'];
  const nm15 = ['c', 'g', 'gh', 'k', 'n', 'm', 'rn', 'rm', 'rr', 'rg', 'rc', 'rh', 'rk'];
  const nm16 = ['cr', 'br', 'b', 'g', 'gr', 'h', 'k', 'kr', 'l', 'q', 'qr', 'r', 'rh', 's', 'sr', 'sh', 't', 'tr', 'th', 'y', 'v', 'z', 'zr'];
  const nm17 = ['a', 'e', 'i', 'o', 'u', 'a', 'o'];
  const nm18 = ['c', 'cr', 'g', 'gg', 'gd', 'gr', 'k', 'kh', 'kd', 'kr', 'kv', 'km', 'kn', 'n', 'nn', 'nr', 'nv', 'q', 'qq', 'qh', 'r', 'rr', 'rt', 'rd', 't', 'v', 'z', 'zh', 'zr', 'zd'];
  const nm19 = ['c', 'ct', 'g', 'gg', 'k', 'kt', 'n', 'q', 'qt', 'r', 'rr', 'rk', 'rc', 'rg', 'rq', 'rt', 'rd', 'tt', 't'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i % 2 !== 0) {
      namelast = sample(nm16) + sample(nm17) + sample(nm19);
    } else {
      namelast = sample(nm16) + sample(nm17) + sample(nm18) + sample(nm17) + sample(nm19);
    }
    if (type === 1) {
      if (i < 5) {
        names = `${sample(nm1) + sample(nm12) + sample(nm13) + sample(nm15)} ${namelast}`;
      } else {
        names = `${sample(nm12) + sample(nm13) + sample(nm14) + sample(nm13)} ${namelast}`;
      }
    } else if (i < 5) {
      if (i < 3) {
        names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm5)}  ${namelast}`;
      } else {
        names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm3) + sample(nm5)}  ${namelast}`;
      }
    } else if (i < 8) {
      names = `${sample(nm6) + sample(nm7)}'${sample(nm8)}${sample(nm9)}`;
    } else {
      names = `${sample(nm6) + sample(nm7)}'${sample(nm8)}${sample(nm9)}'${sample(nm10)}${sample(nm11)}`;
    }
    return names;
  }
}

import sample from 'lodash/sample';

export default function benzites() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['b', 'c', 'd', 'g', 'j', 'k', 'm', 'p', 'q', 'r', 't', 'v', 'z'];
  const nm2 = ['a', 'e', 'u', 'i', 'o'];
  const nm3 = ['b', 'd', 'r', 'rr', 'dd', 'zz', 'rb', 'rd', 'rg', 'rj', 'rk', 'rq', 'rt', 'rh', 'rl', 'rs', 'rv', 'nd', 'ng', 'nd', 'nr', 'nt', 'nv', 'dg', 'zd', 'zg', 'zr'];
  const nm4 = ['ck', 'n', 'k', 'd', 'r', 'z', 't', 'g'];
  const nm5 = ['ar', 'or', 'ur', 'an', 'on', 'un', 'at', 'ot', 'ut', 'az', 'oz', 'uz', 'ab', 'ob', 'ub', 'ad', 'od', 'ud', 'ak', 'ok', 'uk', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['b', 'c', 'd', 'g', 'j', 'k', 'm', 'p', 'q', 'r', 't', 'v', 'z'];
  const nm7 = ['b', 'c', 'd', 'g', 'h', 'j', 'k', 'l', 'p', 'q', 'r', 't', 'v', 'x', 'y', 'z', 'cc', 'dd', 'gg', 'kk', 'pp', 'qq', 'rr', 'tt', 'vv', 'xx', 'zz'];
  const nm8 = ['n', 'x', 'q', 's', 'th', 'g', '', '', '', '', '', '', ''];
  const nm9 = ['in', 'en', 'iq', 'eq', 'ix', 'ex', 'eth', 'ith', 'ez', 'iz', 'ey', 'iy'];
  const nm10 = ['a', 'e', 'o', 'u', '', '', '', ''];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = sample(nm6) + sample(nm2) + sample(nm7) + sample(nm2) + sample(nm8);
      } else {
        names = sample(nm6) + sample(nm2) + sample(nm7) + sample(nm9) + sample(nm10);
      }
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4) + sample(nm5);
    }
    return names;
  }
}

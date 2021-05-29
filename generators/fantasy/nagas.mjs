import { sample } from 'lodash-es';

export default function nagas() {
  let names;
  const nm1 = ['', '', '', '', '', '', 'ch', 'd', 'dh', 'dhr', 'h', 'hr', 'j', 'jy', 'k', 'kh', 'kr', 'ksh', 'l', 'm', 'n', 'p', 'pr', 's', 'sr', 't', 'v', 'vr'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'a', 'a', 'a', 'a', 'a', 'i', 'i'];
  const nm3 = ['bh', 'd', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'y', 'bh', 'd', 'dg', 'dh', 'dhy', 'dm', 'dr', 'g', 'h', 'hl', 'hy', 'j', 'k', 'kh', 'ksh', 'ky', 'l', 'lm', 'lw', 'm', 'mkh', 'mv', 'mvr', 'n', 'nd', 'ndh', 'ng', 'nj', 'nkh', 'nm', 'nshtr', 'nt', 'nth', 'p', 'pt', 'r', 'rd', 'rk', 'rm', 'rn', 'rt', 'ry', 's', 'sh', 'shk', 'shm', 'shn', 'shp', 'shth', 'shtr', 'sr', 'st', 'sth', 'sw', 't', 'th', 'tr', 'tt', 'ttr', 'ty', 'v', 'vy', 'y', 'yl'];
  const nm4 = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'i', 'u', 'as', 'at'];
  const nm5 = ['', '', '', '', '', '', '', '', '', '', 'c', 'cr', 'ch', 'd', 'h', 'k', 'kr', 'kh', 'l', 'r', 's', 's', 's', 'sh', 'sz', 'sc', 'sy', 'sz', 'sh', 't', 'th', 'x', 'y', 'z', 'zs', 'zh'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'aa', 'ai', 'ee', 'ei', 'ie'];
  const nm7 = ['c', 'd', 'dh', 'k', 'kh', 'l', 'r', 's', 'sh', 't', 'th', 'x', 'xh', 'z', 'zh', 'c', 'd', 'k', 'l', 'r', 's', 't', 'x', 'z', 'c', 'd', 'k', 'l', 'r', 's', 't', 'x', 'z', 's', 's', 'sh', 'sh', 'cc', 'ch', 'ck', 'cs', 'csh', 'cz', 'dh', 'dj', 'kk', 'kh', 'ks', 'ksh', 'kz', 'll', 'lh', 'lz', 'ls', 'rr', 'rc', 'rg', 'rh', 'rj', 'rs', 'rsh', 'rz', 'rsz', 'rt', 'rth', 'rc', 'rk', 'ss', 'sc', 'sh', 'sk', 'sz', 'sy', 'th', 'tr', 'ts', 'tz', 'tsh', 'xh', 'xs', 'xz', 'zh', 'zs', 'zz', 'zs'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', '', 'kh', 'l', 'r', 's', 'sj', 'ss', 'sh', 'sz', 't', 'th', 'x', 'z', 'zs'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      if (i < 2) {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      } else if (i < 4) {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      } else {
        names = sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6);
      }
    } else if (i < 7) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4);
    } else if (i < 9) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm4);
    }
    return names;
  }
}

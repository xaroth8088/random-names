import { sample } from 'lodash-es';

export default function catfolks() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['br', 'c', 'cr', 'dr', 'f', 'g', 'gr', 'j', 'k', 'kr', 'm', 'n', 'p', 'pr', 'q', 'qr', 'r', 't', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y', 'y', 'ou', 'au', 'ei'];
  const nm3 = ['c', 'cc', 'cd', 'cb', 'g', 'gg', 'gt', 'gb', 'gd', 'k', 'kk', 'kh', 'kt', 'mb', 'mk', 'mq', 'nq', 'nk', 'ng', 'q', 'qh', 'r', 'rr', 'rq', 'rk', 'th', 'w'];
  const nm4 = ['', 'm', 'n', 'r', 's', 'th'];
  const nm5 = ['', '', '', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u'];
  const nm7 = ['f', 'ff', 'l', 'ly', 'lh', 'ls', 'lr', 'lm', 'ln', 'm', 'my', 'mh', 'n', 'ny', 'nh', 'ph', 'phr', 'r', 'rr', 'ry', 'rh', 'sy', 'sh', 'sr', 'sl', 'th', 'ty', 'y'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', 'h', 's'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 6) {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      } else {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      }
    } else if (i < 7) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}

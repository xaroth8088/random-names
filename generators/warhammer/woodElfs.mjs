import sample from 'lodash/sample';

export default function woodElfs() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', 'c', 'd', 'dh', 'g', 'k', 'kh', 'sc', 'str', 't', 'th', 'tr', 'v', 'z'];
  const nm2 = ['a', 'i', 'o', 'u', 'a', 'i', 'o', 'u', 'a', 'i', 'o', 'u', 'a', 'a', 'o', 'o', 'a', 'o', 'o', 'a', 'io', 'aa', 'ae', 'ia'];
  const nm3 = ['c', 'd', 'k', 'l', 'r', 'c', 'd', 'k', 'l', 'r', 'c', 'cc', 'cr', 'dr', 'd', 'k', 'kk', 'lc', 'lg', 'lk', 'll', 'lt', 'lv', 'l', 'r', 'rl', 'rt', 'rc', 'rg', 'rn', 'sc', 'sr', 'st', 'sl', 'th', 'tr', 'tt', 'zc', 'zk', 'zl'];
  const nm4 = ['', '', '', 'c', 'n', 's', 't', 'th'];
  const nm5 = ['', '', '', '', '', 'd', 'dh', 'dr', 'f', 'h', 'l', 'm', 'n', 'ph', 'q', 's', 'th', 'v', 'y'];
  const nm6 = ['a', 'e', 'i', 'y', 'a', 'e', 'i', 'y', 'a', 'e', 'i', 'y', 'a', 'e', 'a', 'a', 'e', 'e', 'ie', 'ae'];
  const nm7 = ['c', 'cc', 'ch', 'd', 'dd', 'dr', 'h', 'hh', 'lc', 'll', 'lv', 'ls', 'lt', 'lth', 'ln', 'lm', 'l', 'n', 'nn', 'nr', 'nv', 'nd', 'ph', 'r', 'rl', 'rr', 'rv', 'rl', 's', 'ss', 'sh', 'st', 'str', 'sv', 't', 'th', 'tr', 'v'];
  const nm8 = ['', '', '', '', 'f', 'h', 'l', 'n', 's', 'th'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      } else {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      }
    } else if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}

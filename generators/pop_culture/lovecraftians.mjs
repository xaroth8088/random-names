import sample from 'lodash/sample';

export default function lovecraftians() {
  let names;
  const nm1 = ['a', 'e', 'i', 'u', 'o', 'a', 'ai', 'aiu', 'aiue', 'e', 'i', 'ia', 'iau', 'iu', 'o', 'u', 'y', 'ya', 'yi', 'yo'];
  const nm2 = ['bh', 'br', 'c\'th', 'cn', 'ct', 'cth', 'cx', 'd', 'd\'', 'g', 'gh', 'ghr', 'gr', 'h', 'k', 'kh', 'kth', 'mh', 'mh\'', 'ml', 'n', 'ng', 'sh', 't', 'th', 'tr', 'v', 'v\'', 'vh', 'vh\'', 'vr', 'x', 'z', 'z\'', 'zh'];
  const nm3 = ['a', 'e', 'i', 'u', 'o', 'a', 'e', 'i', 'u', 'o', 'ao', 'aio', 'ui', 'aa', 'io', 'ou', 'y'];
  const nm4 = ['bb', 'bh', 'br', 'cn', 'ct', 'dh', 'dhr', 'dr', 'drr', 'g', 'gd', 'gg', 'ggd', 'gh', 'gn', 'gnn', 'gr', 'jh', 'kl', 'l', 'ld', 'lk', 'll', 'lp', 'lth', 'mbr', 'nd', 'p', 'r', 'rr', 'rv', 'th', 'thl', 'thr', 'thrh', 'tl', 'vh', 'x', 'xh', 'z', 'zh', 'zt'];
  const nm5 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '\'dhr', '\'dr', '\'end', '\'gn', '\'ith', '\'itr', '\'k', '\'kr', '\'l', '\'m', '\'r', '\'th', '\'vh', '\'x', '\'zh'];
  const nm6 = ['a', 'e', 'i', 'u', 'o'];
  const nm7 = ['', '', '', '', '', '', '', '', '', '', 'd', 'g', 'h', 'l', 'lb', 'lbh', 'n', 'r', 'rc', 'rh', 's', 'sh', 'ss', 'st', 'sz', 'th', 'tl', 'x', 'xr', 'xz'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5) + sample(nm6) + sample(nm7);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5) + sample(nm6) + sample(nm7);
    }
    return names;
  }
}

import sample from 'lodash/sample';

export default function oreads() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', 'b', 'd', 'g', 'j', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'y'];
  const nm3 = ['d', 'dd', 'f', 'fd', 'ft', 'hd', 'hn', 'hv', 'l', 'll', 'ln', 'lm', 'ld', 'lv', 'lt', 'lth', 'lm', 'm', 'md', 'mt', 'mh', 'mv', 'n', 'nd', 'nt', 'nv', 'nh', 'nn', 'nm', 'nh', 'nr', 'r', 'rt', 'rh', 'rn', 'rm', 'rl', 'rv', 'rr', 'rd', 'th', 'tr', 'thr', 'v', 'vh', 'vr'];
  const nm4 = ['', 'm', 'n', 'r', 's', 't'];
  const nm5 = ['', '', '', 'b', 'bh', 'd', 'dh', 'gh', 'h', 'l', 'm', 'n', 'p', 'r', 'rh', 's', 'sh', 't', 'th', 'v', 'w'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'i', 'e'];
  const nm7 = ['c', 'ch', 'd', 'dh', 'f', 'ff', 'fh', 'fth', 'h', 'hn', 'hv', 'hl', 'hs', 'l', 'lh', 'ln', 'lm', 'ls', 'lsh', 'm', 'mn', 'mm', 'mh', 'my', 'n', 'nn', 'nh', 'ny', 'ns', 'nth', 'nf', 'r', 'ry', 'rh', 'rs', 'rsh', 'rth', 's', 'sh', 'sth', 'sht', 'sn', 'sm', 'sy', 'sl', 't', 'th', 'ty', 'thy', 'y'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6);
      } else {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6);
      }
    } else if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}

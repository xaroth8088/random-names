export default function oreads() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', 'b', 'd', 'g', 'j', 'l', 'm', 'n', 'p', 'r', 's',
    't', 'v'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'y'];
  const nm3 = ['d', 'dd', 'f', 'fd', 'ft', 'hd', 'hn', 'hv', 'l', 'll', 'ln',
    'lm', 'ld', 'lv', 'lt', 'lth', 'lm', 'm', 'md', 'mt', 'mh', 'mv', 'n',
    'nd', 'nt', 'nv', 'nh', 'nn', 'nm', 'nh', 'nr', 'r', 'rt', 'rh', 'rn',
    'rm', 'rl', 'rv', 'rr', 'rd', 'th', 'tr', 'thr', 'v', 'vh', 'vr'];
  const nm4 = ['', 'm', 'n', 'r', 's', 't'];
  const nm5 = ['', '', '', 'b', 'bh', 'd', 'dh', 'gh', 'h', 'l', 'm', 'n', 'p',
    'r', 'rh', 's', 'sh', 't', 'th', 'v', 'w'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'i', 'e'];
  const nm7 = ['c', 'ch', 'd', 'dh', 'f', 'ff', 'fh', 'fth', 'h', 'hn', 'hv',
    'hl', 'hs', 'l', 'lh', 'ln', 'lm', 'ls', 'lsh', 'm', 'mn', 'mm', 'mh',
    'my', 'n', 'nn', 'nh', 'ny', 'ns', 'nth', 'nf', 'r', 'ry', 'rh', 'rs',
    'rsh', 'rth', 's', 'sh', 'sth', 'sht', 'sn', 'sm', 'sy', 'sl', 't', 'th',
    'ty', 'thy', 'y'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      if (i < 5) {
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4];
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm6.length);
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 5) {
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5];
      }
    }
    return names;
  }
}

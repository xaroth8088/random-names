import sample from 'lodash/sample';

export default function fairys() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['B', 'C', 'D', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'Z'];
  const nm2 = ['ea', 'ae', 'ai', 'ao', 'aa', 'au', 'ei', 'ee', 'ia', 'ie', 'io', 'oo', 'oa'];
  const nm3 = ['f', 'k', 'l', 'm', 'n', 'r', 's'];
  const nm4 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ie', 'ia', 'ea', 'ae', 'io', 'eo', 'ai'];
  const nm5 = ['w', 'r', 't', 'l', 'k', 'h', 'g', 'f', 'd', 's', 'm', 'n', 'v', 'c'];
  const nm6 = ['a', 'e', 'i', 'o', 'u'];
  const nm7 = ['', '', '', '', '', '', 't', 'h', 's', 'l', 'n', 'm'];
  {
    if (type === 1) {
      names = sample(nm1) + sample(nm4) + sample(nm5) + sample(nm6) + sample(nm7);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3);
    }
    return names;
  }
}

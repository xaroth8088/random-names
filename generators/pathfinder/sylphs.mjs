import { sample } from 'lodash-es';

export default function sylphs() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 's', 'v', 'w', 'z'];
  const nm2 = ['a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'aa', 'uu', 'ii'];
  const nm3 = ['d', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 's', 'v', 'w', 'z'];
  const nm4 = ['d', 'l', 'm', 'n', 'sh'];
  const nm5 = ['', '', '', '', '', 'd', 'f', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'w', 'z'];
  const nm6 = ['a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'a', 'a', 'ee', 'aa'];
  const nm7 = ['d', 'f', 'ff', 'h', 'l', 'll', 'm', 'mm', 'n', 'nn', 's', 'ss', 'v', 'y', 'w'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'h', 'm', 'n', 'sh'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      } else {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6);
      }
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}

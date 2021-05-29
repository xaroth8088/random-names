import { sample } from 'lodash-es';

export default function miralukas() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['A', 'B', 'Ch', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '', '', ''];
  const nm2 = ['i', 'a', 'o', 'e', 'u'];
  const nm3 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z'];
  const nm4 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm5 = ['i', 'a', 'o', 'e', 'u', '', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['c', 'd', 'f', 'h', 'hr', 'hk', 'hl', 'k', 'l', 'm', 'n', 'p', 'r', 'rr', 'rth', 's', 't', 'th', 'y'];
  const nm7 = ['A', 'B', 'Ch', 'D', 'E', 'F', 'Fl', 'G', 'Gl', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Sh', 'Sl', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const nm8 = ['i', 'a', 'o', 'e', 'u', '', '', ''];
  {
    if (type === 1) {
      names = sample(nm7) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm2) + sample(nm8) + sample(nm6);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm2) + sample(nm5) + sample(nm6);
    }
    return names;
  }
}

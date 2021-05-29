import { sample } from 'lodash-es';

export default function cathars() {
  let names;
  let lName;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', 'a', 'u', 'y', 'i'];
  const nm2 = ['c', 'cr', 'h', 'kh', 'm', 'n', 'r', 's', 't', 'x'];
  const nm3 = ['a', 'i', 'o', 'y', 'u'];
  const nm4 = ['c', 'd', 'k', 'm', 'n', 'nd', 'r', 'rb', 's'];
  const nm5 = ['', '', '', '', '', 'c', 'h', 'hr', 'k', 'm', 'n', 'rr', 'x'];
  const nm6 = ['c', 'ch', 'd', 'j', 'm', 'n', 'r', 's', 'th', 'x'];
  const nm7 = ['h', 'l', 'lv', 'm', 'n', 'r', 's', 'th', 'v', 'sh', 'w'];
  const nm8 = ['r', 'h', 's', 'n', 'hr', 'x', 'sh', 'z'];
  const nm9 = ['', '', '', 'a', 'i', 'y'];
  const nm10 = ['j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't'];
  const nm11 = ['i', 'o', 'a', 'u'];
  const nm12 = ['d', 'l', 'm', 'n', 's', 'sh', 'rg', 'z'];
  const nm13 = ['', '', '', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't'];
  const nm14 = ['', '', '', 'h'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      lName = sample(nm10) + sample(nm14) + sample(nm11) + sample(nm12) + sample(nm11) + sample(nm13);
    } else {
      lName = sample(nm10) + sample(nm14) + sample(nm11) + sample(nm13);
    }
    if (type === 1) {
      names = `${sample(nm6) + sample(nm3) + sample(nm7) + sample(nm3) + sample(nm8) + sample(nm9)} ${lName}`;
    } else if (i < 5) {
      names = `${sample(nm2) + sample(nm3) + sample(nm4) + sample(nm3) + sample(nm5)} ${lName}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm5)} ${lName}`;
    }
    return names;
  }
}

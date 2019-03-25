import sample from 'lodash/sample';

export default function togrutas() {
  let names;
  let lName;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm0 = ['', '', '', '', '', '', '', '', '', 'a', 'o', 'u'];
  const nm1 = ['b', 'c', 'd', 'h', 'k', 'm', 'r', 's', 't', 'v', 'z'];
  const nm2 = ['a', 'o', 'u'];
  const nm3 = ['b', 'br', 'd', 'k', 'kr', 'ky', 'l', 'n', 'nz', 'r', 'rh', 's', 'sht', 't', 'vr', 'z'];
  const nm4 = ['a', 'aa', 'ee', 'i', 'o', 'y'];
  const nm5 = ['', '', '', '', '', '', '', 'hd', 'k', 'n', 'm', 'r', 's', 'sh'];
  const nm6 = ['', '', '', '', 'a', 'a', 'o', 'a'];
  const nm7 = ['b', 'c', 'd', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'sh', 'z'];
  const nm8 = ['a', 'aa', 'e', 'o'];
  const nm9 = ['d', 'hn', 'hl', 'hs', 'k', 'l', 'm', 'mn', 'n', 'r', 'rl', 'rsh', 'rn', 's', 'ss', 'sh', 'shl', 't', 'th', 'tt'];
  const nm10 = ['a', 'aa', 'a', 'a', 'o'];
  const nm11 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', 'n', 'm', 'h', 's', 'sh'];
  const nm12 = ['b', 'd', 'h', 'k', 'l', 'm', 'n', 'ph', 'r', 's', 't', 'v', 'z'];
  const nm13 = ['a', 'y', 'aa', 'i', 'e'];
  const nm14 = ['br', 'd', 'k', 'kr', 'l', 'm', 'n', 'r', 'rn', 'rl', 's', 'ss', 'sh', 'shr', 'vr', 'w', 'z'];
  const nm15 = ['a', 'aa', 'e', 'u', 'y', 'a', 'e', 'u', 'i', 'o', 'o', 'ii', 'ua', 'ee'];
  const nm16 = ['', '', '', '', 'ks', 'l', 'n', 'm', 'r', 's', 'sh'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      lName = sample(nm12) + sample(nm13) + sample(nm14) + sample(nm15) + sample(nm16);
    } else {
      lName = sample(nm12) + sample(nm13) + sample(nm16);
    }
    if (type === 1) {
      names = `${sample(nm6) + sample(nm7) + sample(nm8) + sample(nm9) + sample(nm10) + sample(nm11)} ${lName}`;
    } else {
      names = `${sample(nm0) + sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5)} ${lName}`;
    }
    return names;
  }
}

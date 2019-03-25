import sample from 'lodash/sample';

export default function mirialans() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['i', 'a', 'o', 'e', 'u', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['b', 'c', 'ch', 'd', 'f', 'fl', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 'sh', 't', 'v', 'v', 'w', 'y', 'z', 'z'];
  const nm3 = ['i', 'a', 'o', 'e', 'u'];
  const nm4 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'v', 'w', 'y', 'z', 'z'];
  const nm5 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'v', 'w', 'y', 'z', 'z', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['i', 'a', 'o', 'e', 'u', '', '', '', '', '', '', '', '', '', ''];
  const nm7 = ['b', 'c', 'ch', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 'sh', 't', 'v', 'v', 'w', 'y', 'z', 'z', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm8 = ['b', 'c', 'ch', 'd', 'f', 'fl', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 'sh', 't', 'v', 'w', 'y', 'z'];
  const nm9 = ['b', 'c', 'ch', 'd', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 'sh', 't', 'v', 'v', 'w', 'y', 'z', 'z', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm10 = ['i', 'a', 'o', 'e', 'u', '', ''];
  {
    if (type === 1) {
      names = sample(nm1) + sample(nm8) + sample(nm3) + sample(nm4) + sample(nm5) + sample(nm6) + sample(nm9) + sample(nm10);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6);
    }
    return names;
  }
}

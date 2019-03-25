import sample from 'lodash/sample';

export default function kigYars() {
  let names;
  const nm1 = ['a', 'e', 'i', 'o', 'u'];
  const nm2 = ['b', 'c', 'd', 'g', 'j', 'n', 'k', 'm', 'r', 't', 'th', 'y', 'z', 'zh'];
  const nm3 = ['b', 'c', 'd', 'g', 'k', 'm', 'n', 'p', 'q', 'r', 'th', 'x', 'z'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm2) + sample(nm1) + sample(nm3);
    } else {
      names = `${sample(nm2) + sample(nm1) + sample(nm3)} ${sample(nm2)}${sample(nm1)}${sample(nm3)}`;
    }
    return names;
  }
}

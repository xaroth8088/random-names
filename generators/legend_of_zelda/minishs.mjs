import sample from 'lodash/sample';

export default function minishs() {
  let names;
  const nm1 = ['B', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'T'];
  const nm2 = ['e', 'i', 'o', 'e', 'i', 'o', 'a', 'u'];
  const nm3 = ['b', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't'];
  const nm4 = ['ari', 'tari', 'rari'];
  {
    names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4);
    return names;
  }
}

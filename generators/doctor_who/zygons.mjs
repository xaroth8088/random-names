import sample from 'lodash/sample';

export default function zygons() {
  let names;
  const nm1 = ['B', 'Br', 'Cr', 'D', 'Dr', 'G', 'Gr', 'K', 'Kr', 'R', 'S', 'Sr', 'Str', 'St', 'T', 'Tr', 'V', 'Vr'];
  const nm2 = ['e', 'a', 'o'];
  const nm3 = ['d', 'g', 'k', 'l', 'm', 'n', 's', 't', 'v', 'w', 'z'];
  const nm4 = ['l', 'm', 'n', 'r', 'rm', 'rn', 's', 'st'];
  {
    names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    return names;
  }
}

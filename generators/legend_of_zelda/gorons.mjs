import sample from 'lodash/sample';

export default function gorons() {
  let names;
  const nm1 = ['B', 'D', 'G', 'K', 'M', 'N', 'R', 'T'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'o'];
  const nm3 = ['b', 'br', 'bl', 'd', 'dr', 'dl', 'g', 'gr', 'gl', 'gg', 'g', 'gr', 'gl', 'gg', 'g', 'gr', 'gl', 'gg', 'g', 'gr', 'gl', 'gg', 'l', 'lg', 'lb', 'ld', 'm', 'mr', 'md', 'mb', 'n', 'nd', 'nl', 'nb', 'ng', 'r', 'rb', 'rg', 'rd', 'rk', 'rm', 'rtr', 't', 'z', 'kb', 'kl', 'km', 'kn', 'kd', 'b', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 't', 'z', 'b', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 't', 'z', 'b', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 't', 'z', 'b', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 't', 'z', 'b', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 't', 'z'];
  const nm4 = ['', '', '', '', '', '', '', '', '', '', '', '', 'k', 'g', 'ck', 'gs', 'm', 'n', 's'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 4) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
      if (i > 7) {
        names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
      }
    }
    return names;
  }
}

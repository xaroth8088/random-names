import sample from 'lodash/sample';

export default function dugs() {
  let namelast;
  let names;
  const nm1 = ['b', 'd', 'g', 'gr', 'j', 'k', 'n', 'p', 'pr', 'r', 's', 't', 'tr', 'v'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ei', 'ou', 'aa', 'ai'];
  const nm3 = ['b', 'br', 'bh', 'd', 'dd', 'dw', 'g', 'gn', 'gr', 'gw', 'gg', 'k', 'kw', 'kh', 'ln', 'lw', 'lg', 'lb', 'lt', 'nr', 'nb', 'nd', 'ng', 'ns', 'rd', 'r', 'rg', 'rn', 's', 'sw', 'ss', 'w'];
  const nm4 = ['', '', '', 'd', 'hx', 'n', 's', 'x'];
  const nm6 = ['', '', 'a', 'e', 'i', 'o', 'u'];
  const nm7 = ['d', 'n', 'r', 's'];
  const i = Math.floor(Math.random() * 10);
  {
    namelast = sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm7) + sample(nm6);
    if (i < 5) {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)} ${namelast}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2)} ${namelast}`;
    }
    return names;
  }
}

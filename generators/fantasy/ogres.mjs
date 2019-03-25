import sample from 'lodash/sample';

export default function ogres() {
  let names;
  const nm1 = ['B', 'Bl', 'Br', 'D', 'Dr', 'G', 'Gl', 'Gr', 'K', 'Kl', 'Kr', 'M', 'N', 'T', 'Tr', 'V', 'Vr', 'W', 'X', 'Y', 'Z', '', '', '', ''];
  const nm2 = ['e', 'i', 'u', 'o', 'a'];
  const nm3 = ['b', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't', 'w', 'x', 'z', '', '', '', '', '', '', '', '', ''];
  const nm4 = ['g', 'k', 'rug', 'rog', 'rag', 'ruk', 'rok', 'kag', 'rth', 'rub', 'rob', 'rig', 'kohr', 'kuhr', 'kor', 'kur', 'ret', 'rut', 'rot', 'kug', 'kog', 'kig', 'keg', 'reg', 'rek', 'rg', 'rk', 'zar', 'zug', 'zor', 'zag', 'zig', 'zir', 'zur', 'nk', 'gut', 'grut', 'grot', 'gruk', 'grok', 'rok', 'ruk', 'rag', 'gark', 'gork', 'gurk', 'kur', 'kurk', 'kurg', 'kor', 'kork', 'korg', 'zog', 'zug', 'zig', 'zrog', 'zrug'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}

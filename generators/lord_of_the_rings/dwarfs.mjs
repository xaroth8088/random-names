import sample from 'lodash/sample';

export default function dwarfs() {
  let names;
  const nm1 = ['b', 'br', 'd', 'dr', 'dw', 'f', 'fl', 'fr', 'g', 'gl', 'gr', 'k', 'kh', 'kr', 'l', 'm', 'mh', 'n', 't', 'th', 'thr'];
  const nm2 = ['a', 'e', 'i', 'o', 'u'];
  const nm3 = ['b', 'f', 'fr', 'l', 'lb', 'lr', 'lv', 'm', 'mb', 'ml', 'mr', 'n', 'nd', 'nr', 'r', 'rb', 'rl', 'rv', 's', 'sr'];
  const nm4 = ['k', 'm', 'n', 'r'];
  const nm5 = ['a', 'ai', 'e', 'i', 'o', 'oi', 'u'];
  const nm6 = ['b', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 't'];
  const nm7 = ['a', 'e', 'i', 'o', 'u', '', '', '', ''];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm5) + sample(nm6) + sample(nm7);
    }
    return names;
  }
}

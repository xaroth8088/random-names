import { sample } from 'lodash-es';

export default function korokKokiris() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'b', 'd', 'br', 'dr', 'gr', 'g', 'h', 'k', 'l', 'm', 'r', 'tr', 't'];
  const nm2 = ['a', 'e', 'i', 'o', 'u'];
  const nm3 = ['c', 'g', 'gn', 'gm', 'k', 'kl', 'l', 'v', 'ld', 'lm', 'll', 'm', 'md', 'n', 'nd', 'r', 'rn', 's', 'sn', 'sm', 'sr'];
  const nm4 = ['', '', '', '', '', '', '', '', 'h', 'l', 'm', 's', 'r', 'n', 'wn', 'w'];
  const nm5 = ['b', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'z'];
  const nm6 = ['b', 'd', 'f', 'g', 'h', 'l', 'k', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'z'];
  const nm7 = ['c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'ph', 'r', 's', 't', 'th', 'w', 'z'];
  const nm8 = ['a', 'e', 'i', 'o', 'u', 'ai', 'ae', 'ea', 'ei', 'eo', 'ia', 'io', 'iu', 'ie', 'oa', 'oe', 'oi', 'ou', 'ua', 'ue', 'uo', 'ui'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      names = sample(nm6) + sample(nm2) + sample(nm7) + sample(nm8);
    } else if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm5) + sample(nm2) + sample(nm7) + sample(nm2);
    }
    return names;
  }
}
